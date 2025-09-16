import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Baitap.css";
export default function BaiTap() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteTask, setDeleteTask] = useState<any | null>(null);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [editTask, setEditTask] = useState<any | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editError, setEditError] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
  const [showDeleteCompletedModal, setShowDeleteCompletedModal] =
    useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const api = "http://localhost:8080/tasks";
  const confirmDeleteCompleted = async () => {
    try {
      const completed = tasks
        .filter((t) => t.completed)
        .map((t) => axios.delete(`${api}/${t.id}`));
      await Promise.all(completed);
      setTasks((prev) => prev.filter((t) => !t.completed));
      setShowDeleteCompletedModal(false); // đóng modal
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true; // all
  });

  const getTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(api);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    const name = title.trim();
    if (!name) {
      setError("Tên công việc không được để trống");
      return;
    }
    if (tasks.some((t) => t.title.toLowerCase() === name.toLowerCase())) {
      setError("Tên công việc đã tồn tại");
      return;
    }

    const newTask = { title: name, completed: false };
    try {
      const res = await axios.post(api, newTask);
      setTasks((prev) => [res.data, ...prev]);
      setTitle("");
      setError("");
      // focus lại input
      inputRef.current?.focus();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (task: any) => {
    try {
      const updated = { ...task, completed: !task.completed };
      await axios.put(`${api}/${task.id}`, updated);
      setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)));
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTask) return;
    try {
      await axios.delete(`${api}/${deleteTask.id}`);
      setTasks((prev) => prev.filter((t) => t.id !== deleteTask.id));
      setDeleteTask(null);
    } catch (err) {
      console.error(err);
    }
  };
  const confirmUpdate = async () => {
    const name = editTitle.trim();
    if (!name) {
      setEditError("Tên công việc không được để trống");
      return;
    }
    if (
      tasks.some(
        (t) =>
          t.title.toLowerCase() === name.toLowerCase() && t.id !== editTask.id
      )
    ) {
      setEditError("Tên công việc đã tồn tại");
      return;
    }

    try {
      const updated = { ...editTask, title: name };
      await axios.put(`${api}/${editTask.id}`, updated);
      setTasks((prev) => prev.map((t) => (t.id === editTask.id ? updated : t)));
      setEditTask(null); // đóng modal
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);
  useEffect(() => {
    if (tasks.length > 0 && tasks.every((t) => t.completed)) {
      setShowCompleteModal(true);
    }
  }, [tasks]);
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Quản lý công việc
        </h1>

        {/* Form thêm */}
        <div className="bg-white p-4 rounded-md shadow-sm mb-4">
          <input
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tên công việc"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            onClick={addTask}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
          >
            Thêm công việc
          </button>
        </div>

        {/* Filter */}
        <div className="bg-white p-4 rounded-md shadow-sm mb-4 flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md ${
              filter === "all" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-md ${
              filter === "completed" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Hoàn thành
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-md ${
              filter === "active" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Đang thực hiện
          </button>
        </div>

        {/* Danh sách */}
        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {loading && (
            <div className="flex justify-center py-6">
              <div className="circle"></div>{" "}
            </div>
          )}
          {!loading && tasks.length === 0 && (
            <div className="text-center text-gray-500">Chưa có công việc</div>
          )}
          {!loading &&
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between bg-white border rounded-md p-3 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={!!task.completed}
                    onChange={() => toggleComplete(task)}
                    className="w-5 h-5"
                  />
                  <span
                    className={
                      task.completed ? "line-through text-gray-500" : ""
                    }
                  >
                    {task.title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setEditTask(task);
                      setEditTitle(task.title);
                      setEditError("");
                    }}
                    className="text-yellow-500"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => setDeleteTask(task)}
                    className="text-red-500"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Xoá hoàn thành + Xoá tất cả */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={async () => {
              setShowDeleteCompletedModal(true);
              try {
                const completed = tasks
                  .filter((t) => t.completed)
                  .map((t) => axios.delete(`${api}/${t.id}`));
                await Promise.all(completed);
                setTasks((prev) => prev.filter((t) => !t.completed));
              } catch (err) {
                console.error(err);
              }
            }}
            className="flex-1 bg-red-400 text-white py-3 rounded-md hover:bg-red-500"
          >
            Xóa công việc hoàn thành
          </button>
          <button
            onClick={async () => {
              try {
                const allDeletes = tasks.map((t) =>
                  axios.delete(`${api}/${t.id}`)
                );
                await Promise.all(allDeletes);
                setTasks([]);
              } catch (err) {
                console.error(err);
              }
            }}
            className="flex-1 bg-red-400 text-white py-3 rounded-md hover:bg-red-500"
          >
            Xóa tất cả công việc
          </button>
        </div>
      </div>

      {/* Modal xác nhận */}
      {deleteTask && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-3">Xác nhận</h2>
            <p className="mb-4">
              Bạn có chắc chắn muốn xóa công việc <b>{deleteTask.title}</b>{" "}
              không?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded border"
                onClick={() => setDeleteTask(null)}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 rounded bg-red-500 text-white"
                onClick={confirmDelete}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
      {showCompleteModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[400px] text-center">
            <h2 className="text-lg font-semibold mb-3">
              🎉 Hoàn thành công việc 🎉
            </h2>
            <p className="mb-4">Tất cả công việc đã được hoàn thành!</p>
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white"
              onClick={() => setShowCompleteModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
      {editTask && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-3">Cập nhật công việc</h2>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {editError && (
              <p className="text-red-500 text-sm mt-2">{editError}</p>
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 rounded border"
                onClick={() => setEditTask(null)}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white"
                onClick={confirmUpdate}
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      )}
      {showDeleteCompletedModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-3">Xác nhận</h2>
            <p className="mb-4">
              Bạn có chắc chắn muốn xóa <b>tất cả công việc đã hoàn thành</b>{" "}
              không?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded border"
                onClick={() => setShowDeleteCompletedModal(false)}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 rounded bg-red-500 text-white"
                onClick={confirmDeleteCompleted}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
