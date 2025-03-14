import React from 'react';

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <h1 className="mb-4 font-bold text-3xl">Sign Up</h1>
      <form className="bg-white shadow-md p-6 rounded w-80">
        <div className="mb-4">
          <label className="block font-medium text-gray-700 text-sm" htmlFor="username">Username</label>
          <input className="block mt-1 p-2 border border-gray-300 rounded-md w-full" type="text" id="username" required />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 text-sm" htmlFor="email">Email</label>
          <input className="block mt-1 p-2 border border-gray-300 rounded-md w-full" type="email" id="email" required />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 text-sm" htmlFor="password">Password</label>
          <input className="block mt-1 p-2 border border-gray-300 rounded-md w-full" type="password" id="password" required />
        </div>
        <button className="bg-blue-500 py-2 rounded w-full font-bold text-white" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;