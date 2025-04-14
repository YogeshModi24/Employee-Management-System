const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
      {/* New Task */}
      <div className="rounded-xl p-6 bg-gradient-to-r from-[#2196f3] to-[#1976d2] hover:scale-105 hover:shadow-xl transition-all duration-300">
        <h2 className="text-4xl font-semibold text-white">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-semibold text-white">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="rounded-xl p-6 bg-gradient-to-r from-[#4caf50] to-[#388e3c] hover:scale-105 hover:shadow-xl transition-all duration-300">
        <h2 className="text-4xl font-semibold text-white">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-semibold text-white">Completed Task</h3>
      </div>

      {/* Active Task */}
      <div className="rounded-xl p-6 bg-gradient-to-r from-[#ff9800] to-[#fb8c00] hover:scale-105 hover:shadow-xl transition-all duration-300">
        <h2 className="text-4xl font-semibold text-white">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-semibold text-white">Active Task</h3>
      </div>

      {/* Failed Task */}
      <div className="rounded-xl p-6 bg-gradient-to-r from-[#f44336] to-[#d32f2f] hover:scale-105 hover:shadow-xl transition-all duration-300">
        <h2 className="text-4xl font-semibold text-white">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-semibold text-white">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
