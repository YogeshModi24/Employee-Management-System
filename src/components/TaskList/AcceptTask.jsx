import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-gradient-to-br from-[#ff9800] to-[#fb8c00] transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-sm px-3 py-1 bg-[#e63946] text-white rounded-full shadow-md">
          {data.category}
        </h3>
        <h4 className="text-sm text-white opacity-80">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white drop-shadow-lg">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white opacity-90">{data.taskDescription}</p>
      <div className="flex justify-between mt-6 space-x-2">
        <button className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-white font-medium py-1 px-2 text-xs rounded-md shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
          Mark as Completed
        </button>
        <button className="bg-gradient-to-r from-[#facc15] to-[#eab308] text-white font-medium py-1 px-2 text-xs rounded-md shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
