import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { IoBagOutline } from "react-icons/io5";
import { FaUser, FaBars } from "react-icons/fa6";
import { FaTimes, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { CartSidebar } from "../pages/Cart";
import { useCart } from "../contexts/CartContext";

// Magnetic hover wrapper
const MagneticLink = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

// Dropdown content component
const Dropdown = ({ items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 mt-2 w-44 bg-white/95 shadow-lg rounded-lg py-2 z-50 border border-blue-600/50"
    >
      {items.map((item, i) => (
        <Link
          to={item.link}
          key={i}
          className="block px-4 py-2 text-gray-700 hover:bg-blue-200 transition-all duration-200"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
};

// User dropdown component
const UserDropdown = ({ isSignedIn, user, signOut, onClose }) => {
  const handleSignOut = () => {
    signOut();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 mt-2 w-48 bg-white/95 shadow-lg rounded-lg py-2 z-50 border border-blue-600/50"
    >
      {isSignedIn ? (
        <>
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-900">
              {user?.firstName || user?.emailAddresses[0]?.emailAddress}
            </p>
            <p className="text-xs text-gray-500">
              {user?.emailAddresses[0]?.emailAddress}
            </p>
          </div>
          <Link
            to="/profile"
            onClick={onClose}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-200 transition-all duration-200"
          >
            <FaUserCircle className="mr-2" />
            Profile
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-blue-200 transition-all duration-200"
          >
            <FaSignOutAlt className="mr-2" />
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link
            to="/sign-in"
            onClick={onClose}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-200 transition-all duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            onClick={onClose}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-200 transition-all duration-200"
          >
            Sign Up
          </Link>
        </>
      )}
    </motion.div>
  );
};

const NavBar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Show by default
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const { toggleCart, getTotalItems } = useCart();

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Simple logic:
      // - Show navbar when scrolling UP or at the top
      // - Hide navbar when scrolling DOWN (after some threshold)

      if (currentScrollY < 50) {
        // Always show at the very top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN and past threshold - hide navbar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [lastScrollY]);

  // Close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showUserDropdown &&
        !event.target.closest(".user-dropdown-container")
      ) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showUserDropdown]);

  const navItems = [
    { name: "Anarc", dropdown: null, link: "/anarc" },
    {
      name: "Skins",
      dropdown: [
        { label: "Mobile Skins", link: "/skins/mobile" },
        { label: "Ipad Skins", link: "/skins/ipad" },
        { label: "Laptop Skins", link: "/skins/laptop" },
        { label: "Anarc Skins", link: "/skins/anarc" },
      ],
    },
    {
      name: "Accessories",
      dropdown: null,
      link: "/accessories",
    },
    { name: "Our-Story", dropdown: null, link: "/our-story" },
  ];

  return (
    <div className="w-full">
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-white/35 backdrop-blur-lg border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] rounded-b-xl"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-nowrap items-center justify-between px-4 py-2">
          {/* Left Logo */}
          <Link
            to="/"
            className="flex items-center space-x-1.5 bg-white rtl:space-x-reverse rounded-2xl hover:underline underline-offset-2 shadow scale-75 sm:scale-90 lg:scale-100 overflow-hidden -translate-x-6 sm:-translate-x-4 lg:translate-x-0"
          >
            <video
              src="./Layers - Thought Over Design White.webm"
              autoPlay
              muted
              loop
              playsInline
              className="h-14 rounded-lg aspect-square object-cover"
            />
            <span className="-translate-x-4 self-center text-4xl whitespace-nowrap dark:text-black tracking-[.5rem] rounded-xl font-[Aeonic]   font-bold">
              ayers
            </span>
          </Link>

          {/* Right Icons */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex w-25 bg-white/95 md:w-30 justify-evenly items-center border-2 rounded-xl border-blue-600/40 py-1">
              <MagneticLink>
                <div className="relative">
                  <IoBagOutline
                    onClick={toggleCart}
                    className="hover:bg-gray-300 rounded-2xl cursor-pointer text-4xl ease duration-200 p-1"
                  />
                  {/* Cart item count badge */}
                  {(() => {
                    try {
                      const totalItems = getTotalItems();
                      return totalItems > 0 ? (
                        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {totalItems}
                        </span>
                      ) : null;
                    } catch {
                      return null;
                    }
                  })()}
                </div>
              </MagneticLink>

              {/* Desktop: User Icon, Tablet/Mobile: Hamburger Menu */}
              <MagneticLink>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden cursor-pointer  hover:text-blue-600 hover:bg-gray-300 mt-1 rounded-2xl text-2xl ease duration-200 p-1"
                >
                  {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className="hidden lg:block relative user-dropdown-container">
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="hover:text-blue-600 hover:bg-gray-300 rounded-2xl text-2xl ease duration-200 p-1 flex items-center"
                  >
                    {isSignedIn && user?.imageUrl ? (
                      <img
                        src={user.imageUrl}
                        alt="Profile"
                        className="w-7 h-7  rounded-full object-cover"
                      />
                    ) : (
                      <FaUser />
                    )}
                  </button>

                  {/* Desktop User Dropdown */}
                  <AnimatePresence>
                    {showUserDropdown && (
                      <UserDropdown
                        isSignedIn={isSignedIn}
                        user={user}
                        signOut={signOut}
                        onClose={() => setShowUserDropdown(false)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </MagneticLink>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="relative flex flex-col lg:flex-row lg:space-x-6 xl:space-x-8 font-semibold text-gray-500 text-sm lg:text-base xl:text-lg p-4 lg:p-0 mt-4 lg:mt-0 border border-white/20 rounded-xl lg:border-0 bg-white/20 lg:bg-transparent dark:bg-white/50 dark:lg:bg-white/80 backdrop-blur-md transition-all">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <MagneticLink>
                    <NavLink
                      to={item.link || "#"}
                      className="block py-2 px-4 rounded-md hover:bg-white/90 dark:hover:bg-white/50 hover:border transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#2a56db]"
                    >
                      {item.name}
                    </NavLink>
                  </MagneticLink>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {hoveredMenu === item.name && item.dropdown && (
                      <Dropdown items={item.dropdown} />
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-white/90 backdrop-blur-lg shadow-2xl z-50 lg:hidden rounded-l-2xl"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 font-[Aeonic]">
                  Menu
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaTimes className="text-xl text-gray-600" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-6">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <li key={index} className="border-b border-gray-100 pb-4">
                      <NavLink
                        to={item.link || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block text-lg font-semibold transition-colors duration-200 ${
                            isActive
                              ? "text-blue-600"
                              : "text-gray-700 hover:text-blue-600"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>

                      {/* Mobile Dropdown Items */}
                      {item.dropdown && (
                        <ul className="mt-3 ml-4 space-y-2">
                          {item.dropdown.map((dropdownItem, i) => (
                            <li key={i}>
                              <Link
                                to={dropdownItem.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200 py-1"
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Mobile User Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  {isSignedIn ? (
                    <>
                      <div className="flex items-center space-x-3 mb-4">
                        {user?.imageUrl ? (
                          <img
                            src={user.imageUrl}
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <FaUser className="text-2xl text-gray-600" />
                        )}
                        <div>
                          <p className="text-lg font-medium text-gray-700">
                            {user?.firstName || "User"}
                          </p>
                          <p className="text-sm text-gray-500">
                            {user?.emailAddresses[0]?.emailAddress}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Link
                          to="/profile"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                        >
                          <FaUserCircle className="text-xl" />
                          <span>Profile</span>
                        </Link>

                        <button
                          onClick={() => {
                            signOut();
                            setIsMobileMenuOpen(false);
                          }}
                          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 w-full text-left"
                        >
                          <FaSignOutAlt className="text-xl" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center space-x-3 mb-4">
                        <FaUser className="text-2xl text-gray-600" />
                        <span className="text-lg font-medium text-gray-700">
                          Account
                        </span>
                      </div>

                      <div className="space-y-2">
                        <Link
                          to="/sign-in"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                        >
                          Sign In
                        </Link>

                        <Link
                          to="/sign-up"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  );
};

export default NavBar;
