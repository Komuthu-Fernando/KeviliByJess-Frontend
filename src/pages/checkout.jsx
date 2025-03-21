import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isSameDay } from "date-fns";
import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import styles for react-toastify

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [customer, setCustomer] = useState({
    firstName: "",
    email: "",
    address: "",
    phone: "",
    deliveryDate: null,
  });
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const highlightToday = (date) => {
    const today = new Date();
    return isSameDay(date, today) ? "bg-[#DBECB0] rounded-full" : "";
  };

  // Form validation
  const isFormValid = () => {
    return (
      customer.firstName &&
      customer.email &&
      customer.address &&
      customer.phone &&
      customer.deliveryDate
    );
  };

  const handlePlaceOrder = async () => {
    if (!isFormValid()) {
      toast.error("Please fill all the fields.");
      return;
    }

    const orderData = {
      customer,
      cart,
      totalPrice,
    };

    try {
      // Send data to the backend
      const response = await fetch("/api/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        toast.success("Order placed successfully!");
        clearCart(); // Clear cart after successful order
        // navigate("/order-success"); // Redirect to a success page
      } else {
        toast.error("There was an issue placing your order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing your order. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-5">
      {/* Customer Form */}
      <h2 className="text-lg text-center mb-6">Customer Details Form</h2>
      <div className="space-y-3 mb-10">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={customer.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={customer.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
        />
        <input
          type="text"
          name="address"
          placeholder="Address for Delivery"
          value={customer.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile Phone"
          value={customer.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
        />

        {/* Date Picker */}
        <DatePicker
          selected={customer.deliveryDate}
          onChange={(date) => setCustomer({ ...customer, deliveryDate: date })}
          minDate={addDays(new Date(), 4)} // Disable dates before 4 days
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholderText="Select Delivery Date"
          dayClassName={highlightToday}
        />
      </div>

      {/* Order Summary */}
      <h2 className="text-lg text-center mt-8 mb-6">Order Summary</h2>
      <div className="space-y-3">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-5 mt-10 mb-5">
            <span className="flex items-center">
              <span className="bg-[#85B415] text-white w-6 h-6 flex items-center justify-center rounded-sm text-sm font-bold mr-2">
                {item.quantity}
              </span>
              {item.name}
            </span>
            <span>${item.price}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-3">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button onClick={handlePlaceOrder} className="w-full bg-[#85B415] text-white py-3 mt-5 rounded-md">
        Place Order
      </button>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Checkout;
