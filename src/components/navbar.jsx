// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Phone } from "lucide-react";
import Logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["single", "cake", "packages"];
      let foundSection = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            foundSection = id;
          }
        }
      });

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartItemCount = 3; // Replace with actual cart state

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Single", path: "/#single", sectionId: "single" },
    { name: "Cake", path: "/#cake", sectionId: "cake" },
    { name: "Packages", path: "/#packages", sectionId: "packages" },
    { name: "Cart", path: "/cart", icon: <ShoppingCart size={22} />, isCart: true },
    { name: "Contact", path: "/contact", icon: <Phone size={20} />, isContact: true },
  ];

  return (
    <nav className="bg-[#FCFCFC] sticky top-0 z-50 my-2">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="w-30"><img src={Logo}/></Link>

        {/* Navigation Items */}
        <div className="flex space-x-6 items-center">
          {navItems.map((item, index) => {
            const isActive =
              location.pathname === item.path || activeSection === item.sectionId;

            return (
              <Link
                key={index}
                to={item.path}
                className={`relative flex items-center justify-center px-4 py-2 rounded-lg text-gray-700 hover:text-[#85B415] transition ${
                  isActive ? "text-[#85B415]" : ""
                } ${item.isContact ? "bg-[#B2D55E] text-white rounded-xl px-4 py-2 ms-6" : ""}`}
              >
                {item.isCart ? (
                  <div className="relative flex items-center justify-center">
                    {item.icon}
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#B2D55E] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {cartItemCount}
                      </span>
                    )}
                  </div>
                ) : (
                  <>
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    <span>{item.name}</span>
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
