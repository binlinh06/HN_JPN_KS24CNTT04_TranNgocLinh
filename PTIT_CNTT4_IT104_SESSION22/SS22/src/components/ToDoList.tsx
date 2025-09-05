import { Button, Input } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { v7 as uuid } from "uuid";

interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

export default function TodoList() {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>(() => {
    const taskLocals = localStorage.getItem("tasks");
    return taskLocals ? JSON.parse(taskLocals) : [];
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState<string>("");

  // Nhập nội dung công việc
  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTask(value);

    if (!value.trim()) {
      setError("Tên công việc không được để trống");
    } else {
      setError("");
    }
  };

  // Submit thêm mới
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!task.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }

    const newTask: Task = {
      id: uuid(),
      name: task.trim(),
      isCompleted: false,
    };

    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setTask("");
  };

  // Đánh dấu hoàn thành
  const handleChangeStatus = (id: string) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  // Xóa công việc
  const handleDelete = (id: string) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  // Bật chế độ edit
  const handleEdit = (id: string, currentName: string) => {
    setEditingId(id);
    setEditingName(currentName);
  };

  // Lưu edit
  const handleSaveEdit = () => {
    const updated = tasks.map((t) =>
      t.id === editingId ? { ...t, name: editingName } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setEditingId(null);
    setEditingName("");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[1000px] border border-[#dadada] p-6 rounded-lg shadow-sm">
        <h3 className="text-center text-[24px] font-semibold mb-6">
          Danh sách công việc
        </h3>

        {/* Form thêm công việc */}
        <form onSubmit={handleSubmit} className="flex gap-5 mb-3">
          <Input
            value={task}
            onChange={handleChangeTask}
            placeholder="Nhập tên công việc"
          />
          <Button htmlType="submit" type="primary">
            Thêm
          </Button>
        </form>

        {/* Hiển thị lỗi */}
        {error && (
          <p className="mb-6 text-red-600 text-[14px]">{error}</p>
        )}

        {/* Danh sách công việc */}
        <ul className="mb-6">
          {tasks.map((t) => (
            <li key={t.id} className="flex justify-between items-center py-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={t.isCompleted}
                  onChange={() => handleChangeStatus(t.id)}
                />

                {editingId === t.id ? (
                  <Input
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    onPressEnter={handleSaveEdit}
                    onBlur={handleSaveEdit}
                    size="small"
                  />
                ) : t.isCompleted ? (
                  <s>{t.name}</s>
                ) : (
                  <span>{t.name}</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Pencil
                  onClick={() => handleEdit(t.id, t.name)}
                  size={18}
                  className="text-orange-400 hover:text-orange-600 cursor-pointer"
                />
                <Trash2
                  onClick={() => handleDelete(t.id)}
                  size={18}
                  className="text-red-400 hover:text-red-600 cursor-pointer"
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Thống kê */}
        <div>
          <span>Công việc đã hoàn thành: </span>
          <span>{tasks.filter((t) => t.isCompleted).length}</span>
          {" / "}
          <span>{tasks.length}</span>
        </div>
      </div>
    </div>
  );
}
