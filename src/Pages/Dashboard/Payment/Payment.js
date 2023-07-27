import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  const { appointmentDate, price, treatment, slot} = booking;
  console.log(booking);
  return (
    <div>
      <p className="text-3xl">Payment for {treatment}</p>
      <p className="">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
    </div>
  );
};

export default Payment;
