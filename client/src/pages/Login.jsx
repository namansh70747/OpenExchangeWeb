import React, { useState } from "react";
import Pic from '../../assets/Pic.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserLogin = async(e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    }
    try {
      const response = await axios.post('http://localhost:8080/login', data);
      console.log("Login successful");
      setEmail('');
      setPassword('');
      // Navigate to hostel page after successful login
      navigate('/hostel-selection');
    } catch(error) {
      console.error("Login failed:", error);
      // You might want to add error handling here
    }
  }

  return (
    <div className="relative bg-gradient-to-br from-sky-50 via-rose-50 to-amber-50 min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 opacity-40 pointer-events-none [mask-image:linear-gradient(0deg,white,transparent)]"></div>
      <div className="top-20 right-20 absolute bg-pink-200 opacity-40 blur-3xl rounded-full w-96 h-96 animate-blob mix-blend-multiply filter"></div>
      <div className="top-40 -left-20 absolute bg-sky-200 opacity-40 blur-3xl rounded-full w-96 h-96 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
      <div className="right-32 -bottom-20 absolute bg-yellow-200 opacity-40 blur-3xl rounded-full w-96 h-96 animate-blob animation-delay-4000 mix-blend-multiply filter"></div>

      <div className="relative flex justify-center items-center px-4 min-h-screen">
        <div className="flex bg-white/20 shadow-2xl backdrop-blur-md border border-white/30 rounded-3xl w-full max-w-6xl overflow-hidden">
          <div className="flex justify-center items-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 w-1/2">
            <img 
              src={Pic}
              alt="Login Illustration" 
              className="rounded-2xl max-h-[500px] object-contain" 
            />
          </div>
          <div className="p-12 w-1/2">
            <h2 className="bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-8 font-bold text-transparent text-3xl">
              Welcome Back
            </h2>
            <form onSubmit={handleUserLogin} className="space-y-6">
              <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-white/50 backdrop-blur-sm p-4 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-white/50 backdrop-blur-sm p-4 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
              />
              <div className="flex justify-between items-center">
                <label className="flex items-center text-gray-700">
                  <input type="checkbox" className="mr-2 rounded" />
                  Remember me
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Forgot password?</a>
              </div>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg py-4 rounded-xl w-full text-white hover:scale-[1.02] transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 text-gray-700 text-center">
              Don't have an account? <Link to="/Signup" className="text-blue-600 hover:text-blue-700 transition-colors">Register here</Link>
            </div>

            <div className="flex before:flex-1 after:flex-1 items-center gap-4 my-6 before:border-gray-300 after:border-gray-300 before:border-t after:border-t text-gray-500">
              OR
            </div>

            <div className="space-y-4">
              <button className="flex justify-center items-center gap-3 bg-white/50 hover:bg-white/60 backdrop-blur-sm py-4 border border-white/30 rounded-xl w-full transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google Logo" className="w-5 h-5" />
                <span className="text-gray-700">Continue with Google</span>
              </button>
              <button className="flex justify-center items-center gap-3 bg-white/50 hover:bg-white/60 backdrop-blur-sm py-4 border border-white/30 rounded-xl w-full transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="w-5 h-5" />
                <span className="text-gray-700">Continue with Facebook</span>
              </button>
            </div>

            <div className="mt-6 text-center">
              <Link to="/admin" className="text-blue-600 hover:text-blue-700 transition-colors">
                Sign up as Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
