import React from 'react'

const Header = ({ changeUser, userData }) => {
  const userName = userData?.firstName || 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className="flex justify-between items-center bg-[#0f1117]/70 backdrop-blur-md px-8 py-5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-[#1f2937] animate-slideDown">
      {/* Greeting */}
      <div>
        <h1 className="text-white text-xl sm:text-2xl font-medium leading-snug">
          Welcome back,
          <br />
          <span className="text-2xl sm:text-3xl font-semibold text-[#38bdf8]">
            userName 👋🏻
          </span>
        </h1>
      </div>

      {/* Logout */}
      <button
        onClick={logOutUser}
        className="bg-gradient-to-r from-red-500 to-red-700 hover:brightness-110 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:scale-[1.05] transition-all duration-300"
      >
        Log Out
      </button>

      {/* Animation */}
      <style>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Header
