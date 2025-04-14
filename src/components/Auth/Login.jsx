import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Left Panel - Illustration */}
      <div className="hidden lg:flex w-1/2 items-center justify-center px-10">
        <div className="text-center space-y-6 animate-fade-in">
          {/* <img
            src="https://thumbs.dreamstime.com/b/leadership-business-management-teamwork-motivation-skills-concept-leadership-business-management-teamwork-motivation-skills-100454299.jpg"
            alt="Login Visual"
            className="w-[80%] mx-auto drop-shadow-[0_0_30px_rgba(0,255,200,0.3)]"
          /> */}
          <h2 className="text-4xl font-bold">Welcome, Rockstar!</h2>
          <p className="text-lg text-gray-300">Login to manage your workforce like a pro 🚀</p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md p-10 rounded-3xl shadow-2xl border border-emerald-500 bg-white/5 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-400 tracking-wide">Employee Login</h2>
          <form onSubmit={submitHandler} className="flex flex-col gap-5">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border border-emerald-500 text-white text-lg py-3 px-5 rounded-full placeholder-gray-400 focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
              type="email"
              placeholder="Enter Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent border border-emerald-500 text-white text-lg py-3 px-5 rounded-full placeholder-gray-400 focus:ring-2 focus:ring-emerald-400 outline-none transition-all"
              type="password"
              placeholder="Enter Password"
            />
            <button
              type="submit"
              className="w-full mt-3 bg-emerald-500 hover:bg-emerald-400 text-white text-lg py-3 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.6)]"
            >
              Log In
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-gray-400">
            © 2025 Powered by Yogesh.in • All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
