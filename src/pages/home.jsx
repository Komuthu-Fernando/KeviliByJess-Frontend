import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import HeroSection from "../components/herosection";
import ProductCard from "../components/productcard";
import Cake from '../assets/cake.png';
import Single from '../assets/single.png';


const Home = () => {

  const { addToCart } = useCart(); // Use the cart context

  const products = [
    { id: "Konda Kavum", name: "Konda Kavum", price: 2.5, image: Single },
    { id: "Mung Kavum", name: "Mung Kavum", price: 3.25, image: Single },
    { id: "Naran Kavum", name: "Naran Kavum", price: 2.0, image: Single },
    { id: "Pani Walalu", name: "Pani Walalu", price: 3.0, image: Single },
    { id: "Aluwa", name: "Aluwa", price: 1.5, image: Single },
    { id: "Kokis", name: "Kokis", price: 1.0, image: Single },
  ];

  const cakeProducts = [
    { id: "Butter Cake", name: "Butter Cake", weight: "1 KG", price: 25.0, image: Cake },
    { id: "Pol Cake", name: "Pol Cake", weight: "1 KG", price: 30.0, image: Cake },
    { id: "Love Cake", name: "Love Cake", weight: "1 KG", price: 50.0, image: Cake },
    { id: "Chocolate Cake", name: "Chocolate Cake", weight: "1 KG", price: 45.0, image: Cake },
  ];

  const familyPacks = [
    {
      id: "Sigithi",
      name: "SIGITHI",
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
      id: "Maddhu",
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
      id: "Jumbo",
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
      id: "Value Pack 01",
      name: "VALUE PACK 01",
      price: 20.0,
      items: [
        { name: "Konda Kavum", quantity: 4 },
        { name: "Mung Kavum", quantity: 6 },
        { name: "Kokis", quantity: 4 },
      ],
    },
    {
      id: "Value Pack 02",
      name: "VALUE PACK 02",
      price: 30.0,
      items: [
        { name: "Konda Kavum", quantity: 6 },
        { name: "Mung Kavum", quantity: 8 },
        { name: "Kokis", quantity: 6 },
      ],
    },
    {
      id: "Value Pack 03",
      name: "VALUE PACK 03",
      price: 50.0,
      items: [
        { name: "Konda Kavum", quantity: 8 },
        { name: "Mung Kavum", quantity: 10 },
        { name: "Kokis", quantity: 8 },
      ],
    },
  ];

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      {/* Single Items */}
      <section id="single" className="text-center py-12">
        <h4 className="text-red-500 font-medium uppercase tracking-widest">Customer Favorites</h4>
        <h2 className="text-3xl font-bold mt-2">Single Items</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 place-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Cake Categories */}
      <section id="cake" className="text-center py-12">
        <h4 className="text-red-500 font-medium uppercase tracking-widest">Customer Favorites</h4>
        <h2 className="text-3xl font-bold mt-2">Cake Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 place-items-center">
          {cakeProducts.map((product) => (
            <ProductCard key={product.id} {...product} largeImage addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Family Packs */}
      <section id="packages" className="text-center py-12">
        <h4 className="text-red-500 font-medium uppercase tracking-widest">Customer Favorites</h4>
        <h2 className="text-3xl font-bold mt-2">Family Packs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 place-items-center">
          {familyPacks.map((pack) => (
            <ProductCard key={pack.id} {...pack} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;