import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from '../assets/logo.png';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId, isHome) => {
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

  return (
    <footer className="text-black py-8 border-t border-gray-200 mt-15 mb-5">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo & Tagline */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <img src={Logo} alt="Logo" className="h-15 mx-auto md:mx-0" />
          <p className="mt-2 text-sm">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-[#85B415] hover:text-green-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#85B415] hover:text-green-800">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#85B415] hover:text-green-800">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#85B415] hover:text-green-800">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg">Main Menu</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" onClick={(e) => { e.preventDefault(); handleNavClick("", true); }} className="hover:text-[#76A10E]">
                Home
              </Link>
            </li>
            <li>
              <Link to="#single" onClick={(e) => { e.preventDefault(); handleNavClick("single", false); }} className="hover:text-[#76A10E]">
                Single
              </Link>
            </li>
            <li>
              <Link to="#cake" onClick={(e) => { e.preventDefault(); handleNavClick("cake", false); }} className="hover:text-[#76A10E]">
                Cakes
              </Link>
            </li>
            <li>
              <Link to="#packages" onClick={(e) => { e.preventDefault(); handleNavClick("packages", false); }} className="hover:text-[#76A10E]">
                Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="mt-2">
            <a href="mailto:kevinlbyess@gmail.com" className="hover:text-[#76A10E]">
              kevinlbyess@gmail.com
            </a>
          </p>
          <p className="mt-1">+61 452 843 953</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
