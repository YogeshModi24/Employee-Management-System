import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-r from-[#2196f3] to-[#1976d2] rounded-xl transform transition-all duration-300 hover:scale-[1.05] hover:shadow-lg">
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

      {/* Accept Task Button */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 rounded font-medium py-1 px-2 text-xs text-white hover:bg-blue-700 transition-all duration-200">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
