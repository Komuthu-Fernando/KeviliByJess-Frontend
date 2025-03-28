import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isSameDay, format } from "date-fns";
import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import styles for react-toastify
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [customer, setCustomer] = useState({
    firstName: "",
    email: "",
    address: "",
    phone: "",
    deliveryDate: null,
    deliveryType: "Pickup",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

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

    setIsModalOpen(true);
    setIsLoading(true);

    const orderData = {
      customer,
      cart,
      totalPrice,
    };

    try {
      // Send data to the backend
      const response = await fetch("http://localhost:5001/api/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      setIsLoading(false);
      if (response.ok) {
        toast.success(data.message || "Order placed successfully!");
        setOrderStatus("success");
        clearCart();
      } else {
        toast.error(data.error || "There was an issue placing your order.");
        setOrderStatus("error");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing your order. Please try again.");
      setIsLoading(false);
      setOrderStatus("error");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (date) => {
    return format(date, 'MM/dd/yyyy');
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
        <select name="deliveryType" value={customer.deliveryType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2D55E]">
          <option value="Pickup">Pickup</option>
          <option value="Delivery">Delivery</option>
        </select>

        {customer.deliveryType === "Delivery" && (
          <div className="mt-2 ml-4 text-gray-700">
            <p>Within Berwick suburb, delivery free</p>
            <p>Within 25km, $20</p>
            <p>50km, $30</p>
            <p>Within 100km, $60</p>
            <p className="text-sm text-[#FF6868]">*Delivery charge will be added to the total amount</p>
          </div>
        )}

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
          onChange={(date) => setCustomer({ ...customer, deliveryDate: formatDate(date) })}
          minDate={addDays(new Date(), 4)} // Disable dates before 4 days
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B2D55E]"
          placeholderText="Select Delivery Date"
          dayClassName={highlightToday}
        />
        <p className="text-sm text-gray-600 mt-1">
          *Delivery date should be selected at least 4 days in advance.
        </p>
      </div>

      {/* Order Summary */}
      <h2 className="text-lg text-center mt-8 mb-6">Order Summary</h2>
      <div className="space-y-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-5 mt-10 mb-5"
          >
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
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-[#85B415] text-white py-3 mt-5 rounded-md hover:bg-[#76A10E] transition cursor-pointer"
      >
        Place Order
      </button>

      {/* Toast Container */}
      <ToastContainer />
      {/* Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClose={() => {
          setIsModalOpen(false);
        }}
        >
          {/* Glassmorphism Background Overlay */}
          <div className="fixed inset-0 bg-white/30 backdrop-blur-md"></div>

          <div className="relative bg-white bg-opacity-30 backdrop-blur-xl shadow-xl rounded-lg p-6 w-96 border border-white/20">
            {isLoading ? (
              <div className="text-center">
                <p className="text-lg font-bold mb-4">Processing Order...</p>
                <div className="loader border-4 border-gray-300 border-t-green-600 w-12 h-12 rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              <div className="text-center">
                {orderStatus === "success" ? (
                  <>
                    <p className="text-lg font-bold text-[#85B415]">
                      Order Placed Successfully!
                    </p>
                    <p className="mt-5">
                      An email with your order summary has been sent. Thank you!
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-bold text-red-600">
                      Order Failed
                    </p>
                    <p className="mt-5">
                      There was an issue placing your order. Please try again.
                    </p>
                  </>
                )}
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    if (orderStatus === "success") {
                      navigate("/"); // Redirect to homepage if order is successful
                    }
                  }}
                  className="mt-5 px-4 py-2 bg-[#85B415] text-white rounded-md"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Checkout;
