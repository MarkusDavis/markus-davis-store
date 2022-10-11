import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

function checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex flex-col p-5 space-y-10">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0 ? "Your cart is empty" : "Your Shopping Cart"}
          </h1>
          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPlus={item.hasPlus}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default checkout;
