import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Phone } from "lucide-react";
import Logo from '../assets/logo.png';
import { useCart } from "../context/CartContext"; // Import the useCart hook

const Navbar = () => {
  const { cart } = useCart(); // Get the cart state from CartContext
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    const sectionToScroll = localStorage.getItem("scrollToSection");
  
    if (sectionToScroll) {
      setTimeout(() => {
        if (sectionToScroll === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const section = document.getElementById(sectionToScroll);
          section?.scrollIntoView({ behavior: "smooth" });
        }
        localStorage.removeItem("scrollToSection"); // Clear storage after scroll
      }, 100); // Slight delay to ensure page has rendered
    }
  }, [location.pathname]);
  

  const handleNavClick = (sectionId, isHome) => {
    if (location.pathname === "/" && isHome) {
      // Force scroll to top when Home is clicked
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/") {
      // Scroll to section if already on Home
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home and store the section to scroll to
      localStorage.setItem("scrollToSection", sectionId || "top");
      navigate("/");
    }
  };
  
  // Get the number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { name: "Home", path: "/", sectionId: "", isHome: true },
    { name: "Single", path: "#single", sectionId: "single" },
    { name: "Cake", path: "#cake", sectionId: "cake" },
    { name: "Packages", path: "#packages", sectionId: "packages" },
    { name: "Cart", path: "/cart", icon: <ShoppingCart size={22} />, isCart: true },
    { name: "Contact", path: "/contactus", icon: <Phone size={20} />, isContact: true },
  ];

  return (
    <nav className="bg-[#FCFCFC] sticky top-0 z-50 my-2">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="w-30"><img src={Logo} alt="Logo" /></Link>

        <div className="flex space-x-6 items-center">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path || activeSection === item.sectionId;

            return (
              <Link
                key={index}
                to={item.path}
                onClick={(e) => {
                  if (item.isHome) {
                    e.preventDefault(); // Prevent React Router navigation for Home
                    handleNavClick("", true);
                  } else if (item.sectionId) {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleNavClick(item.sectionId, false);
                  }
                }}
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
