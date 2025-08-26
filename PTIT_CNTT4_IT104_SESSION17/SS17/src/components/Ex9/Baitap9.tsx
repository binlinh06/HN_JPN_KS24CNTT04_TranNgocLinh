import React, { useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Baitap9: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  // Load dữ liệu từ localStorage khi mở trang
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  // Lưu dữ liệu mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Thêm công việc
  const handleAdd = () => {
    if (!input.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }
    if (todos.some((t) => t.text.toLowerCase() === input.trim().toLowerCase())) {
      setError("Tên công việc không được trùng");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
    setError("");
  };

  // Xóa công việc
  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
      setTodos(todos.filter((t) => t.id !== id));
    }
  };

  // Toggle hoàn thành
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Danh sách công việc</h2>

      <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tên công việc"
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleAdd} style={{ padding: "8px 16px" }}>
          Thêm
        </button>
      </div>

      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              justifyContent: "space-between",
            }}
          >
            <label style={{ flex: 1 }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                style={{ marginRight: "8px" }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "#f5f5f5",
          borderRadius: "6px",
        }}
      >
        Công việc đã hoàn thành:{" "}
        <b>
          {todos.filter((t) => t.completed).length} / {todos.length}
        </b>
      </div>
    </div>
  );
};

export default Baitap9;
