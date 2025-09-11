import React, { useState } from "react";
import { tasks } from "./Data";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const [task] = useState(tasks);
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Danh sách công việc
      </h1>

      <div className="space-y-4">
        {task.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-5 shadow-sm bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-3">{item.description}</p>
            <button
              onClick={() => navigate(`/task/${item.id}`)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
