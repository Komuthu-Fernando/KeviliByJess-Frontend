import React from "react";
import HeroSection from "../components/herosection";
import ProductCard from "../components/productcard";

const Home = () => {
  const products = [
    { name: "Konda Kavum", price: 2.5, image: "/images/konda-kavum.png" },
    { name: "Mung Kavum", price: 3.25, image: "/images/mung-kavum.png" },
    { name: "Naran Kavum", price: 2.0, image: "/images/naran-kavum.png" },
    { name: "Pani Walalu", price: 3.0, image: "/images/pani-walalu.png" },
    { name: "Aluwa", price: 1.5, image: "/images/aluwa.png" },
    { name: "Kokis", price: 1.0, image: "/images/kokis.png" },
  ];

  const cakeProducts = [
    { name: "Butter Cake", weight: "1 KG", price: 25.0, image: "/images/butter-cake.png" },
    { name: "Pol Cake", weight: "1 KG", price: 30.0, image: "/images/pol-cake.png" },
    { name: "Love Cake", weight: "1 KG", price: 50.0, image: "/images/love-cake.png" },
    { name: "Chocolate Cake", weight: "1 KG", price: 45.0, image: "/images/chocolate-cake.png" },
  ];

  const familyPacks = [
    {
      name: "SINOTHI",
      price: 40.0,
      items: [
        { name: "Konda Kavum", quantity: 4 },
        { name: "Mung Kavum", quantity: 6 },
        { name: "Naran Kavum", quantity: 4 },
        { name: "Pani Walalu", quantity: 4 },
        { name: "Aluwa", quantity: 4 },
        { name: "Kokis", quantity: 4 },
      ],
    },
    {
      name: "MADDHU",
      price: 60.0,
      items: [
        { name: "Konda Kavum", quantity: 6 },
        { name: "Mung Kavum", quantity: 8 },
        { name: "Naran Kavum", quantity: 6 },
        { name: "Pani Walalu", quantity: 6 },
        { name: "Aluwa", quantity: 6 },
        { name: "Kokis", quantity: 6 },
      ],
    },
    {
      name: "JUMBO",
      price: 100.0,
      items: [
        { name: "Konda Kavum", quantity: 10 },
        { name: "Mung Kavum", quantity: 10 },
        { name: "Naran Kavum", quantity: 10 },
        { name: "Pani Walalu", quantity: 10 },
        { name: "Aluwa", quantity: 10 },
        { name: "Kokis", quantity: 15 },
      ],
    },
    {
      name: "VALUE PACK 01",
      price: 20.0,
      items: [
        { name: "Konda Kavum", quantity: 4 },
        { name: "Mung Kavum", quantity: 6 },
        { name: "Kokis", quantity: 4 },
      ],
    },
    {
      name: "VALUE PACK 02",
      price: 30.0,
      items: [
        { name: "Konda Kavum", quantity: 6 },
        { name: "Mung Kavum", quantity: 8 },
        { name: "Kokis", quantity: 6 },
      ],
    },
    {
      name: "VALUE PACK 03",
      price: 50.0,
      items: [
        { name: "Konda Kavum", quantity: 8 },
        { name: "Mung Kavum", quantity: 10 },
        { name: "Kokis", quantity: 8 },
      ],
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Single Items */}
      <section className="text-center py-12">
        <h4 className="text-red-500 font-medium uppercase tracking-widest">
          Customer Favorites
        </h4>
        <h2 className="text-3xl font-bold mt-2">Single Items</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 place-items-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Cake Categories */}
      <section className="text-center py-12">
        <h4 className="text-red-500 font-medium uppercase tracking-widest">
          Customer Favorites
        </h4>
        <h2 className="text-3xl font-bold mt-2">Cake Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-20 gap-x-40 mt-8 place-self-center">
          {cakeProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Family Packs */}
      <section className="text-center py-12">
        <h4 className="text-red-500 font-medium uppercase tracking-widest">
          Customer Favorites
        </h4>
        <h2 className="text-3xl font-bold mt-2">Family Packs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 place-items-center">
          {familyPacks.map((pack, index) => (
            <ProductCard key={index} {...pack} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
