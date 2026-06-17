import StripeProvider from "@/Providers/StripeProvider";
import CheckoutForm from "../CheckoutForm";

export default function CheckoutPage() {
  return (
    <StripeProvider>
      <CheckoutForm />
    </StripeProvider>
  );
}