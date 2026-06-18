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
   <div className="min-h-screen flex justify-center items-center  ">
     <form
      onSubmit={handleSubmit}
      className="max-w-md  mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6"
    >
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-gray-900">Complete Payment</h2>
        <p className="text-sm text-gray-500 mt-2">
          Secure payment powered by Stripe
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Card Details
        </label>

        <div className="border border-gray-300 rounded-xl p-4 bg-gray-50 focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 transition-all">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#111827",
                  fontFamily: "Inter, sans-serif",
                  "::placeholder": {
                    color: "#9CA3AF",
                  },
                },
                invalid: {
                  color: "#EF4444",
                },
              },
            }}
          />
        </div>
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || !clientSecret || isProcessing}
        className="w-full h-12 bg-black text-white rounded-xl font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Processing Payment...
          </>
        ) : (
          "Pay Securely"
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        Your payment information is encrypted and secure.
      </p>
    </form>
   </div>
  );
}
