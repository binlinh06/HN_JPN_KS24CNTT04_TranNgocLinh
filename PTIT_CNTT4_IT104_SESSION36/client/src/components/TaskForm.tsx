import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

interface Task {
  id: number;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

interface TaskFormProps {
  tasks: Task[];
  onAdd: (title: string, priority: "low" | "medium" | "high") => void;
  onUpdate: (
    id: number,
    title: string,
    priority: "low" | "medium" | "high"
  ) => void;
  editingTask: Task | null;
  onCancelEdit: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  tasks,
  onAdd,
  onUpdate,
  editingTask,
  onCancelEdit,
}) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"" | "low" | "medium" | "high">("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Khi có task được chọn để sửa -> fill dữ liệu vào form
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.taskName);
      setPriority(editingTask.priority);
    } else {
      setTitle("");
      setPriority("");
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }

    const isDuplicate = tasks.some(
      (task) =>
        task.taskName.toLowerCase() === title.trim().toLowerCase() &&
        task.id !== editingTask?.id
    );
    if (isDuplicate) {
      setError("Tên công việc đã tồn tại");
      return;
    }

    if (!priority) {
      setError("Vui lòng chọn độ ưu tiên");
      return;
    }

    setError("");

    if (editingTask) {
      onUpdate(editingTask.id, title.trim(), priority);
    } else {
      onAdd(title.trim(), priority);
    }

    setTitle("");
    setPriority("");
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        inputRef={inputRef}
        label={error || (editingTask ? "Sửa công việc" : "Công việc mới")}
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
        error={!!error}
        InputLabelProps={{
          style: error ? { color: "red" } : {},
        }}
      />

      <FormControl
        size="small"
        className="w-36"
        error={!!error && error.includes("ưu tiên")}
      >
        <InputLabel style={error.includes("ưu tiên") ? { color: "red" } : {}}>
          {error.includes("ưu tiên") ? error : "Ưu tiên"}
        </InputLabel>
        <Select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "medium" | "high")
          }
          label={error.includes("ưu tiên") ? error : "Ưu tiên"}
        >
          <MenuItem value="low">LOW</MenuItem>
          <MenuItem value="medium">MEDIUM</MenuItem>
          <MenuItem value="high">HIGH</MenuItem>
        </Select>
      </FormControl>

      {editingTask ? (
        <>
          <Button type="submit" variant="contained" color="success">
            Cập nhật
          </Button>
          <Button onClick={onCancelEdit} variant="outlined" color="inherit">
            Hủy
          </Button>
        </>
      ) : (
        <Button type="submit" variant="contained" color="primary">
          Thêm
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
