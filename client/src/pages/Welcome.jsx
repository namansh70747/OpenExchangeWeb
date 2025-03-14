import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
      <h1 className="mb-4 font-bold text-4xl">Welcome to Our Application</h1>
      <p className="mb-8 text-lg">Your journey starts here. Please log in or sign up to continue.</p>
      <div>
        <Link to="/login" className="bg-blue-500 mr-2 px-4 py-2 rounded text-white">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 px-4 py-2 rounded text-white">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Welcome;