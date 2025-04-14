import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const updated = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask += 1;
      }
      return elem;
    });

    setUserData(updated);

    // Clear inputs
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  };

  return (
    <div className="bg-[#0f1117]/80 backdrop-blur-xl border border-[#1e293b] shadow-[0_15px_60px_rgba(0,0,0,0.35)] p-10 rounded-3xl mt-10 max-w-5xl mx-auto transition-all duration-700 animate-slideIn3D">
      <h2 className="text-white text-3xl font-semibold mb-8 pb-3 border-b border-[#2c2f36] tracking-tight">
        ✨ Create a New Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row gap-8"
      >
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <FormField
            label="Task Title"
            value={taskTitle}
            onChange={setTaskTitle}
            placeholder="Ex: Landing Page Revamp"
          />
          <FormField
            label="Date"
            type="date"
            value={taskDate}
            onChange={setTaskDate}
          />
          <FormField
            label="Assign To"
            value={asignTo}
            onChange={setAsignTo}
            placeholder="Ex: Lena"
          />
          <FormField
            label="Category"
            value={category}
            onChange={setCategory}
            placeholder="UI, Dev, Testing..."
          />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          <div className="space-y-1 h-full flex flex-col">
            <label className="text-sm text-gray-300 font-medium">
              Task Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Brief task details..."
              className="bg-[#1b1e29] text-white border border-[#334155] focus:ring-2 focus:ring-[#8b5cf6] rounded-lg px-4 py-3 resize-none shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] transition-all duration-300 flex-grow min-h-[170px]"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-tr from-[#10b981] to-[#059669] hover:brightness-110 text-white font-bold py-3 rounded-xl shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            🚀 Create Task
          </button>
        </div>
      </form>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideIn3D {
          0% {
            opacity: 0;
            transform: perspective(800px) rotateX(8deg) translateY(40px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: perspective(800px) rotateX(0deg) translateY(0) scale(1);
          }
        }
        .animate-slideIn3D {
          animation: slideIn3D 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// 🔁 Reusable Input Component
const FormField = ({ label, type = "text", value, onChange, placeholder }) => (
  <div className="space-y-1">
    <label className="text-sm text-gray-300 font-medium">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="bg-[#1b1e29] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] rounded-lg px-4 py-2 w-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] transition-all duration-300"
    />
  </div>
);

export default CreateTask;
