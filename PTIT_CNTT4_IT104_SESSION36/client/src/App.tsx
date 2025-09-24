import FilterControls from "./components/FilterControls";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface Task {
  id: number;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleUpdate = async (
    id: number,
    taskName: string,
    priority: "low" | "medium" | "high"
  ) => {
    const oldTask = tasks.find((t) => t.id === id);
    if (!oldTask) return;
    const updated: Task = { ...oldTask, taskName, priority };
    await axios.put(`http://localhost:3000/tasks/${id}`, updated);
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    setEditingTask(null);
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // state cho modal xoá
  const [openDelete, setOpenDelete] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  // Load tasks từ server
  useEffect(() => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      axios
        .get<Task[]>("http://localhost:3000/tasks")
        .then((res) => setTasks(res.data))
        .catch(() => setError("❌ Không thể tải dữ liệu từ server!"))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  const handleAdd = async (
    taskName: string,
    priority: "low" | "medium" | "high"
  ) => {
    const newTask: Omit<Task, "id"> = { taskName, priority, completed: false };
    const res = await axios.post<Task>("http://localhost:3000/tasks", newTask);
    setTasks([...tasks, res.data]);
  };

  const handleToggle = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const updated = { ...task, completed: !task.completed };
    await axios.put(`http://localhost:3000/tasks/${id}`, updated);
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  const handleDeleteConfirm = async () => {
    if (!taskToDelete) return;
    await axios.delete(`http://localhost:3000/tasks/${taskToDelete.id}`);
    setTasks(tasks.filter((t) => t.id !== taskToDelete.id));
    setOpenDelete(false);
    setTaskToDelete(null);
  };

  const filteredTasks = tasks.filter((t) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && t.completed) ||
      (filters.status === "active" && !t.completed);

    const matchPriority =
      filters.priority === "all" || t.priority === filters.priority;
    const matchSearch = t.taskName
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      <TaskForm
        tasks={tasks}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingTask={editingTask}
        onCancelEdit={() => setEditingTask(null)}
      />

      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <CircularProgress />
        </div>
      )}

      {/* Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Task List */}
      {!loading && !error && (
        <div>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id.toString()}
              title={task.taskName}
              completed={task.completed}
              priority={task.priority}
              onToggle={() => handleToggle(task.id)}
              onDelete={() => {
                setTaskToDelete(task);
                setOpenDelete(true);
              }}
              onEdit={() => setEditingTask(task)}
            />
          ))}
        </div>
      )}

      {/* Modal xác nhận xoá */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Xác nhận xoá</DialogTitle>
        <DialogContent>
          Bạn có chắc muốn xoá công việc{" "}
          <span className="font-semibold text-red-500">
            {taskToDelete?.taskName}
          </span>{" "}
          không?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)} color="primary">
            Hủy
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
