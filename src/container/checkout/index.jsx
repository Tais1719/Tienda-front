import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from '../../config/stripeConfig';

import {  CheckoutForm  }from "../../components";



// Renomeie de ChecKout para Checkout
export function Checkout() {
  const { state: { clientSecret } } = useLocation();

  if (!clientSecret) {
    return <div>Error, volte e tente novamente</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
