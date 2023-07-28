import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
// import { useNavigation } from "react-day-picker";
// import Loading from "../../Shared/Loading/Loading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  // const navigation = useNavigation();
  const { appointmentDate, price, treatment, slot } = booking;
  // if (navigation.state === "loading") {
  //   return <Loading></Loading>;
  // }
  return (
    <div>
      <p className="text-3xl">Payment for {treatment}</p>
      <p className="">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
