import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { Currency } from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPlus,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image, hasPlus };
    dispatch(addItemToBasket(product));
  };

  return (
    <div className="grid grid-cols">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p className="">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-primary" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />

        {hasPlus && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt=""
              className="w-12"
            />
            <p className="">Free Next Day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} 
        className="button">
          Add to Cart
        </button>
        <button onClick={removeFromBasket} 
        className="button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
