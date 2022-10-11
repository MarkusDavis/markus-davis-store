import Head from "next/head";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Product from "../components/Product";

export default function Home({ products }) {

  return (
    <div>
      <Head>
        <title>MD Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header  />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps({ context }) {
  const products = await fetch(`https://fakestoreapi.com/products`).then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
