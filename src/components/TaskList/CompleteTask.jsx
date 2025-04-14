import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-r from-[#4caf50] to-[#388e3c] rounded-xl transform transition-all duration-300 hover:scale-[1.05] hover:shadow-lg">
      {/* Task Header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm text-white opacity-80">{data.taskDate}</h4>
      </div>

      {/* Task Title */}
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>

      {/* Task Description */}
      <p className="text-sm mt-2 text-white opacity-90">
        {data.taskDescription}
      </p>

      {/* Complete Button */}
      <div className="mt-6">
        <button className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs text-white hover:bg-green-700 transition-all duration-200">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
