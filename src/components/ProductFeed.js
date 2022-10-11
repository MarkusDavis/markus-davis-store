import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(({ id, title, price, description, category, image }) => (
        <div>
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        </div>
      ))}
      <div className="md:col-span-2">
        {products.map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      </div>
      <img src="https://links.papareact.com/dy2" alt="" />
    </div>
  );
}

export default ProductFeed;
