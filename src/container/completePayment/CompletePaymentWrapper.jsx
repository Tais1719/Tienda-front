// src/container/CompletePaymentWrapper.jsx
import { CompletePayment } from ".";
import stripePromise from "../../config/stripeConfig";
import { Elements } from "@stripe/react-stripe-js";

export function CompletePaymentWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CompletePayment />
    </Elements>
  );
}




