import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { BiMessageSquareDots } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiStore2Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { to: "/hostel-selection", label: "Hostels" },
    { to: "/item-listings", label: "Items" },
    { to: "/community", label: "Community" },
    { 
      to: "/seller", 
      label: "Seller", 
      icon: <RiStore2Line className="inline-block mr-1 text-xl" />
    },
    { 
      to: "/chat", 
      label: "Chat", 
      icon: <BiMessageSquareDots className="inline-block mr-1 text-xl" />
    },
    { 
      to: "/favorites", 
      label: "Favorites", 
      icon: <AiOutlineHeart className="inline-block mr-1 text-xl" />
    }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`top-0 z-50 fixed w-full ${
        scrolled 
          ? "bg-white/90 shadow-lg backdrop-blur-md h-20" 
          : "bg-gradient-to-r from-sky-50/80 via-rose-50/80 to-amber-50/80 shadow-sm backdrop-blur-md border-white/40 border-b h-28"
      } transition-all duration-500`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] h-full">
        <div className="flex justify-between items-center h-full">
          {/* Enhanced Logo Section with Animation */}
          <motion.div 
            className="flex items-center pl-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="group flex items-center space-x-6">
              <div className="relative flex justify-center items-center">
                {/* Dynamic glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 blur-md rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.6, 0.8, 0.6] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                ></motion.div>
                
                {/* Logo container with interactive border */}
                <div className={`relative bg-white/10 backdrop-blur-sm p-1.5 border-2 border-white/30 rounded-full overflow-hidden transition-all duration-300 ${
                  scrolled ? "scale-75" : ""
                }`}>
                  <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-1 rounded-full">
                    <motion.img
                      src={logo}
                      alt="OpenExchange Logo"
                      className="rounded-full object-cover"
                      style={{ width: scrolled ? "3rem" : "6rem", height: scrolled ? "3rem" : "6rem" }}
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 font-bold text-transparent tracking-wide"
                  style={{ 
                    fontSize: scrolled ? "1.75rem" : "2.25rem",
                  }}
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  OpenExchange
                </motion.span>
                <motion.span 
                  className="ml-1 text-gray-600 tracking-wider"
                  style={{ 
                    fontSize: scrolled ? "0.7rem" : "0.875rem"
                  }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Exchange & Connect
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links with Active State and Hover Effects */}
          <div className="hidden md:flex flex-1 justify-center items-center px-8">
            <motion.div 
              className="flex justify-between space-x-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                
                return (
                  <motion.div
                    key={link.to}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.to}
                      className={`group relative flex items-center font-medium transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                      }`}
                      style={{ fontSize: scrolled ? "0.875rem" : "1rem" }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {link.icon}
                      </motion.span>
                      
                      {link.label}
                      
                      {/* Animated underline */}
                      <motion.span 
                        className="-bottom-2 absolute inset-x-0 bg-gradient-to-r from-blue-600 to-purple-600 h-0.5"
                        initial={{ scaleX: isActive ? 1 : 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      ></motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Enhanced Profile Section with Interactive Dropdown */}
          <div className="flex justify-end">
            <div className="z-10 relative">
              <motion.button 
                className="flex items-center space-x-3 bg-white/30 backdrop-blur-sm px-4 py-2 border border-white/40 rounded-full"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(147, 51, 234, 0.05)"
                }}
                onClick={() => setProfileOpen(!profileOpen)}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex flex-col items-end">
                  <motion.span 
                    className="font-semibold text-gray-800"
                    style={{ fontSize: scrolled ? "0.75rem" : "0.875rem" }}
                  >
                    John Doe
                  </motion.span>
                  <motion.span 
                    className="text-gray-600"
                    style={{ fontSize: scrolled ? "0.65rem" : "0.75rem" }}
                  >
                    Student
                  </motion.span>
                </div>
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-full"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.img
                    src={logo}
                    alt="Profile"
                    className="border-2 border-white rounded-full object-cover"
                    style={{ 
                      width: scrolled ? "2rem" : "2.5rem", 
                      height: scrolled ? "2rem" : "2.5rem" 
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
              </motion.button>

              {/* Animated Dropdown Menu */}
              <AnimatePresence>
                {profileOpen && (
                  <motion.div 
                    className="right-0 absolute bg-white/90 shadow-xl backdrop-blur-md mt-3 border border-white/40 rounded-xl w-56"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <div className="space-y-1 p-2">
                      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link 
                          to="/profile" 
                          className="flex items-center space-x-3 hover:bg-blue-50 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                          onClick={() => setProfileOpen(false)}
                        >
                          <span className="font-medium text-sm">My Profile</span>
                        </Link>
                      </motion.div>
                      
                      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link 
                          to="/settings" 
                          className="flex items-center space-x-3 hover:bg-blue-50 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                          onClick={() => setProfileOpen(false)}
                        >
                          <span className="font-medium text-sm">Settings</span>
                        </Link>
                      </motion.div>
                      
                      <hr className="my-1 border-gray-200" />
                      
                      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <button 
                          className="flex items-center space-x-3 hover:bg-red-50 px-4 py-2 rounded-lg w-full text-red-600 text-left transition-colors"
                          onClick={() => setProfileOpen(false)}
                        >
                          <span className="font-medium text-sm">Sign Out</span>
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Mobile Menu Button - Only shown on small screens */}
          <div className="md:hidden flex items-center">
            <motion.button 
              className="bg-white/20 backdrop-blur-sm p-2 border border-white/30 rounded-full"
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex flex-col space-y-1.5 w-6">
                <motion.span 
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-full h-0.5"
                ></motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-3/4 h-0.5"
                ></motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-full h-0.5"
                ></motion.span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;