import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "./Data";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((item) => item.id === Number(id));

  if (!task) {
    return (
      <h2 className="text-center text-red-500">Không tìm thấy công việc!</h2>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{task.title}</h3>
      <p className="text-gray-600 mb-6">{task.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Quay lại
      </button>
    </div>
  );
}
