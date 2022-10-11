import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { Currency } from "react-currency-formatter";
function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPlus,
}) {
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
      </div>
    </div>
  );
}

export default CheckoutProduct;
