import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

// Heroicons (outline)
import {
  UserIcon,
  DocumentPlusIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-[#0f1115] backdrop-blur-2xl p-10 rounded-3xl mt-12 border border-[#2c2f36] shadow-[0_8px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Header */}
      <div className="bg-[#1a1c21]/80 text-[#f4f4f5] mb-10 py-5 px-8 rounded-2xl flex justify-between items-center shadow-[inset_0_0_12px_rgba(255,255,255,0.03)] border border-[#2c2f36]">
        <div className="w-1/5 flex flex-col items-center justify-center">
          <UserIcon className="h-5 w-5 text-[#f4f4f5] mb-1" />
          <span className="text-sm font-medium">Employee</span>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center">
          <DocumentPlusIcon className="h-5 w-5 text-blue-400 mb-1" />
          <span className="text-sm font-medium text-blue-400">New</span>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center">
          <ClockIcon className="h-5 w-5 text-yellow-400 mb-1" />
          <span className="text-sm font-medium text-yellow-400">Active</span>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center">
          <CheckCircleIcon className="h-5 w-5 text-green-400 mb-1" />
          <span className="text-sm font-medium text-green-400">Done</span>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center">
          <XCircleIcon className="h-5 w-5 text-red-400 mb-1" />
          <span className="text-sm font-medium text-red-400">Failed</span>
        </div>
      </div>

      {/* Data Rows */}
      <div className="space-y-6">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-[#1c1e24]/90 border border-[#2c2f36] text-white shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 hover:scale-[1.015] hover:-translate-y-1 animate-fadeInSmooth"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Profile Pic or Initials */}
            <div className="w-1/5 flex items-center justify-start gap-3">
              {elem?.avatarUrl ? (
                <img
                  src={elem.avatarUrl}
                  alt={elem.firstName}
                  className="h-10 w-10 rounded-full object-cover border border-[#2c2f36]"
                />
              ) : (
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#2c2f36] text-[#f4f4f5] font-semibold text-sm uppercase">
                  {elem.firstName?.charAt(0)}
                </div>
              )}
              <span className="font-medium text-md text-[#f4f4f5]">{elem.firstName}</span>
            </div>

            <h3 className="w-1/5 text-center text-blue-400 font-semibold text-[17px]">{elem.taskCounts.newTask}</h3>
            <h5 className="w-1/5 text-center text-yellow-400 font-semibold text-[17px]">{elem.taskCounts.active}</h5>
            <h5 className="w-1/5 text-center text-green-400 font-semibold text-[17px]">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-center text-red-400 font-semibold text-[17px]">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>

      {/* Smooth Animation */}
      <style>
        {`
          @keyframes fadeInSmooth {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-fadeInSmooth {
            animation: fadeInSmooth 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AllTask;
