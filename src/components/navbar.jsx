import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Phone, Menu, X } from "lucide-react";
import Logo from '../assets/logo.png';
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for detecting outside clicks

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
        localStorage.removeItem("scrollToSection");
      }, 100);
    }
  }, [location.pathname]);

  const handleNavClick = (sectionId, isHome) => {
    setMenuOpen(false); // Close menu on click

    if (location.pathname === "/" && isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      localStorage.setItem("scrollToSection", sectionId || "top");
      navigate("/");
    }
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { name: "Home", path: "/", sectionId: "", isHome: true },
    { name: "Single", path: "#single", sectionId: "single" },
    { name: "Cake", path: "#cake", sectionId: "cake" },
    { name: "Packages", path: "#packages", sectionId: "packages" },
    { name: "Cart", path: "/cart", icon: <ShoppingCart size={22} />, isCart: true },
    { name: "Contact", path: "/contactus", icon: <Phone size={20} />, isContact: true },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav id="navbar" className="bg-[#FCFCFC] sticky top-0 z-50 my-2 ">
      <div className="container mx-auto flex justify-between items-center px-6 py-3 relative">
        {/* Logo on the left */}
        <Link to="/" className="w-30"><img src={Logo} alt="Logo" className="h-10" /></Link>

        {/* Hamburger menu on the right */}
        <button 
          className="lg:hidden text-gray-700"
          onClick={(e) => {
            e.stopPropagation(); // Prevent immediate closing
            setMenuOpen((prev) => !prev);
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path || activeSection === item.sectionId;

            return (
              <Link
                key={index}
                to={item.path}
                onClick={(e) => {
                  if (item.isHome || item.sectionId) {
                    e.preventDefault();
                    handleNavClick(item.sectionId, item.isHome);
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

        {/* Mobile menu */}
        <div 
          ref={menuRef}
          className={`lg:hidden absolute top-full left-0 w-full bg-[#FCFCFC] shadow-md rounded-b-2xl transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100 py-5" : "max-h-0 opacity-0 py-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path || activeSection === item.sectionId;

              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.sectionId, item.isHome);
                    if (!item.sectionId) navigate(item.path);
                  }}
                  className={`relative flex items-center justify-center w-40 text-center py-3 text-gray-700 hover:text-[#85B415] transition ${
                    isActive ? "text-[#85B415]" : ""
                  } ${item.isContact ? "bg-[#85B415] text-white w-24 rounded-xl py-2" : ""}`}
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
      </div>
    </nav>
  );
};

export default Navbar;
