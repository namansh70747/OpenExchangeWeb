import React, { useState } from "react";
import Pic from '../../assets/Pic.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

 function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const  handleUserLogin = async(e)=>{
  e.preventDefault();
  let data = {
    email : email,
    password : password,
  }
  try{
    const response = await axios.post('http://localhost:8080/login', data);
    console.log("success");
    setEmail('');
    setPassword('');
    navigate('/Home');
  }
  catch(e){
    console.log(e);
  }

}

  return (
    <div 
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMTgtbXludC0wNS1qb2I1OTguanBn.jpg)` }}
    >
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-gray-200 flex justify-center items-center">
          <img 
            src={Pic}
            alt="Login Illustration" 
            className="h-full" 
          />
        </div>
        <div className="w-1/2 p-10">
        <form onSubmit={handleUserLogin}>
          <input 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={e=> setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e=> setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition mb-4">SIGN IN</button>
          </form>
          <div className="text-center text-sm">
            Don't have an account? <Link to={'/Signup'} className="text-blue-500 hover:underline">Register here</Link>
          </div>
          <div className="my-4 text-center text-gray-500">OR</div>
          <button className="w-full flex items-center justify-center gap-2 bg-blue-400 text-white py-3 rounded-md hover:bg-blue-500 transition mb-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google Logo" className="w-5 h-5" />
            CONTINUE WITH GOOGLE
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="w-5 h-5" />
            CONTINUE WITH FACEBOOK
          </button>
          <div className="text-center text-sm">
            <Link to={'/admin'} className="text-blue-500 hover:underline">Sign up as ADMIN</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
