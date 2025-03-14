import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <h1 className="mb-4 font-bold text-2xl">Login</h1>
      <form className="bg-white shadow-md p-6 rounded w-80">
        <div className="mb-4">
          <label className="block font-medium text-gray-700 text-sm" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="block mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 text-sm" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="block mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded w-full text-white"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
      </p>
    </div>
  );
};

export default Login;