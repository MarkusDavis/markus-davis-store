import Image from "next/image";
import React from "react";
import Header from "../components/Header";

function checkout() {
  return (
    <div className="">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex flex-col p-5 space-y-10">
          <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
        </div>
      </main>
    </div>
  );
}

export default checkout;
