import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

function checkout() {
  const items = useSelector(selectItems);
  const session = useSession();
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
        <div className="">
          <h2 className="whitespace-nowrap">
            Total ({items.length} items):
            <span className="font-bold">
              {/* <Currency quantity={price} currency="USD" /> */}
            </span>
          </h2>
          <button className="button">
            {!session ? "Sign in to Continue" : "Proceed to Checkout"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default checkout;
