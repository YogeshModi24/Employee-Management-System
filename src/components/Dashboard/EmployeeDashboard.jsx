import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#2D2D2D] h-screen relative overflow-hidden animate-fade-in">
      {/* Professional Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50] to-[#34495e] opacity-80 z-0 transform scale-105 animate-background-3d"></div>

      <div className="relative z-10">
        {/* Header */}
        <Header changeUser={props.changeUser} data={props.data} />

        {/* Increased gap between Header and Task List */}
        <div className="mt-12">
          {/* Task Numbers Section */}
          <TaskListNumbers data={props.data} />

          {/* Task List Section */}
          <div className="mt-12">
            <TaskList data={props.data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
