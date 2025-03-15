import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { RiPhoneLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <footer className="relative">
      {/* Wave SVG Background */}
      <div className="top-0 left-0 absolute w-full overflow-hidden leading-0 rotate-180 transform">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block relative w-full h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white/5"></path>
        </svg>
      </div>

      <div className="z-10 relative bg-gradient-to-b from-gray-900 to-indigo-950 pt-28 pb-12 overflow-hidden text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <div className="-top-10 -left-10 absolute bg-blue-500/30 blur-3xl rounded-full w-64 h-64"></div>
          <div className="top-40 right-0 absolute bg-purple-500/20 blur-3xl rounded-full w-80 h-80"></div>
          <div className="bottom-0 left-1/4 absolute bg-pink-500/20 blur-3xl rounded-full w-72 h-72"></div>
        </div>
        
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] container">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Company Info and Logo */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Link to="/" className="group flex items-center space-x-4">
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
                  <div className="bg-gray-900 p-1 rounded-full">
                    <motion.img
                      src={logo}
                      alt="OpenExchange Logo"
                      className="rounded-full w-12 h-12 object-cover group-hover:scale-105 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    />
                  </div>
                </motion.div>
                <div>
                  <h3 className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold text-transparent text-xl tracking-wide">
                    OpenExchange
                  </h3>
                  <p className="text-gray-400 text-xs tracking-wider">Exchange & Connect</p>
                </div>
              </Link>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                OpenExchange provides a seamless platform for students to exchange items, 
                find accommodation, and build meaningful connections within their campus community.
              </p>
              
              <div className="flex space-x-4">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm p-2.5 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="inline-block relative font-semibold text-white text-lg">
                Quick Links
                <span className="-bottom-1 left-0 absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded w-12 h-1"></span>
              </h3>
              
              <div className="gap-3 grid grid-cols-1">
                {[
                  { label: "About Us", to: "/about" },
                  { label: "Hostels", to: "/hostel-selection" },
                  { label: "Item Marketplace", to: "/item-listings" },
                  { label: "Community", to: "/community" },
                  { label: "Become a Seller", to: "/seller" },
                  { label: "Terms of Service", to: "/terms" },
                  { label: "Privacy Policy", to: "/privacy" }
                ].map((link, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to={link.to}
                      className="group flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="group-hover:bg-blue-500/20 bg-blue-500/0 mr-2 rounded-full w-1.5 h-1.5 transition-colors"></span>
                      {link.label}
                      <span className="block bg-gradient-to-r from-blue-400 to-purple-400 ml-1 max-w-0 group-hover:max-w-full h-0.5 transition-all duration-300"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="inline-block relative font-semibold text-white text-lg">
                Contact Us
                <span className="-bottom-1 left-0 absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded w-12 h-1"></span>
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: MdOutlineLocationOn, text: "123 Campus Drive, University District, CA 90210" },
                  { icon: RiPhoneLine, text: "+1 (555) 123-4567" },
                  { icon: HiOutlineMail, text: "support@openexchange.edu" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 text-gray-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm p-2 border border-gray-700/50 rounded-lg">
                      <item.icon className="text-blue-400 text-lg" />
                    </div>
                    <span className="mt-1 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="inline-block relative font-semibold text-white text-lg">
                Stay Updated
                <span className="-bottom-1 left-0 absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded w-12 h-1"></span>
              </h3>
              
              <p className="text-gray-300 text-sm">
                Subscribe to receive updates on new features, items, and campus events.
              </p>
              
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-gray-800/30 backdrop-blur-sm px-4 py-3 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white placeholder-gray-400"
                  required
                />
                <motion.button
                  type="submit"
                  className="top-2 right-2 absolute bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 px-4 py-1 rounded-md font-medium text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={subscribed}
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </motion.button>
              </form>
              
              {/* Current Students Badge */}
              <div className="space-y-2 bg-gray-800/30 backdrop-blur-sm p-4 border border-gray-700/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-200 text-sm">Active Students</h4>
                  <span className="bg-blue-500/20 px-2 py-1 rounded-full text-blue-300 text-xs">Live</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative flex -space-x-2">
                    {Array(4).fill(null).map((_, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-full w-6 h-6"
                      >
                        <div className="bg-gray-800 rounded-full w-full h-full"></div>
                      </div>
                    ))}
                  </div>
                  <span className="text-blue-300 text-sm">+2,458 registered users</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Divider */}
          <div className="my-10 border-gray-800 border-t"></div>
          
          {/* Bottom Section */}
          <motion.div 
            className="flex sm:flex-row flex-col justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="mb-4 sm:mb-0 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} OpenExchange. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              {["Help Center", "Careers", "Blog", "Resources"].map((item, index) => (
                <Link 
                  key={index}
                  to="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating "Back to Top" Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="right-6 bottom-6 z-50 fixed bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/20 shadow-lg p-3 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;