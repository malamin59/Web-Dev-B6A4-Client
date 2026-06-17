"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "@/app/service/axios";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useUserRole } from "@/hooks/userRole";
import toast from "react-hot-toast";

export default function CheckoutForm() {
  const params = useParams();
  const user = useUserRole();
  const studentId = user.id;
  const tutorId = params.tutorId as string;

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const createPaymentIntent = async () => {
      if (!studentId) return;

      try {
        const res = await axiosInstance.post(
          "/payments/create-payment-intent",
          {
            tutorId,
            studentId,
          },
        );

        setClientSecret(res.data.data.clientSecret);
      } catch (error) {
        console.error(error);
        setErrorMessage(
          "Failed to initialize payment. Please refresh and try again.",
        );
      }
    };

    if (tutorId && studentId) {
      createPaymentIntent();
    }
  }, [tutorId, studentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setIsProcessing(true);
    setErrorMessage("");

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
        },
      });

      if (result.error) {
        setErrorMessage(
          result.error.message ?? "Payment failed. Please try again.",
        );
        setIsProcessing(false);
        return;
      }

      if (result.paymentIntent?.status === "succeeded") {
        try {
          await axiosInstance.post("/payments/confirm", {
            studentId,
            tutorId,
            date: new Date(),
            transactionId: result.paymentIntent.id,
          });

          toast.success("Payment & Booking Successful 🎉");
          router.push("/dashboard/bookings");
        } catch (confirmError) {
          console.error(confirmError);
          setErrorMessage(
            "Payment succeeded but booking confirmation failed. Please contact support.",
          );
        }
      } else {
        setErrorMessage("Payment was not completed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while processing your payment.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-xl shadow-md space-y-5 bg-white"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Complete Payment
      </h2>

      <div className="border border-gray-300 rounded-lg p-4 focus-within:ring-2 focus-within:ring-black transition">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#1f2937",
                fontFamily: "Arial, sans-serif",
                "::placeholder": {
                  color: "#9ca3af",
                },
              },
              invalid: {
                color: "#ef4444",
              },
            },
          }}
        />
      </div>

      {errorMessage && (
        <p className="text-sm text-red-500 -mt-2">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || !clientSecret || isProcessing}
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          "Pay Now"
        )}
      </button>
    </form>
  );
}
