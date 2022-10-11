import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
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

        <div className="flex flex-col bg-light-secondary dark:bg-dark-secondary p-10 shadow-md text-black dark:text-white">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
