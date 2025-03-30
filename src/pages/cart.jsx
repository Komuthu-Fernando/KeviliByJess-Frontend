import React, { useEffect } from "react";
import CartItem from "../components/cartitem";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warn("Add items to cart to proceed!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 mt-6 sm:mt-10">
      {cart.length === 0 ? (
        <div className="text-center text-gray-600 mt-20">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="text-sm mt-2">Add items to your cart to proceed with checkout.</p>
        </div>
      ) : (
        <>
          <h2 className="md:hidden text-xl text-[#767676] text-center mb-6">My Cart</h2>
       
          <div className="hidden md:grid grid-cols-5 border-b pb-5 font-semibold text-gray-600 place-items-center">
            <span className="col-span-2">PRODUCT</span>
            <span>UNIT PRICE</span>
            <span>QTY</span>
            <span>PRICE</span>
          </div>

          {/* Render Cart Items */}
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}

          {/* Summary Section */}
          <div className="mt-6 sm:mt-10 text-right space-y-2">
            <div className="flex justify-between font-bold text-base sm:text-lg">
              <span>TOTAL</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button 
            onClick={handleCheckout} 
            className="w-full bg-[#85B415] text-white py-2 sm:py-3 mt-6 sm:mt-10 rounded-md hover:bg-[#76A10E] transition cursor-pointer text-base sm:text-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;