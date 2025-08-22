import React, { Component } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  task: string;
  error: string;
  showModal: boolean;
  todoToDelete: Todo | null;
};

export default class Baitap9 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [],
      task: "",
      error: "",
      showModal: false,
      todoToDelete: null,
    };
  }

  componentDidMount() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      this.setState({ todos: JSON.parse(saved) });
    }
  }

  saveToLocalStorage = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ task: e.target.value });
  };

  handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { task, todos } = this.state;
    if (!task.trim()) {
      this.setState({ error: "Tên công việc không được để trống" });
      return;
    }
    if (todos.some((t) => t.title.toLowerCase() === task.trim().toLowerCase())) {
      this.setState({ error: "Tên công việc đã tồn tại" });
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      title: task.trim(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    this.setState({ todos: newTodos, task: "", error: "" });
    this.saveToLocalStorage(newTodos);
  };

  toggleComplete = (id: number) => {
    const newTodos = this.state.todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.setState({ todos: newTodos });
    this.saveToLocalStorage(newTodos);
  };

  confirmDelete = (todo: Todo) => {
    this.setState({ showModal: true, todoToDelete: todo });
  };

  deleteTodo = () => {
    const { todoToDelete, todos } = this.state;
    if (todoToDelete) {
      const newTodos = todos.filter((t) => t.id !== todoToDelete.id);
      this.setState({ todos: newTodos, showModal: false, todoToDelete: null });
      this.saveToLocalStorage(newTodos);
    }
  };

  render() {
    const { todos, task, error, showModal, todoToDelete } = this.state;
    const completedCount = todos.filter((t) => t.completed).length;

    return (
      <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h3 style={{ textAlign: "center" }}>Danh sách công việc</h3>
        <form onSubmit={this.handleAdd} style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
          <input
            type="text"
            value={task}
            onChange={this.handleChange}
            placeholder="Nhập tên công việc"
            style={{ flex: 1, padding: "5px" }}
          />
          <button type="submit">Thêm</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li key={todo.id} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.toggleComplete(todo.id)}
              />
              <span style={{ flex: 1, marginLeft: "8px" }}>{todo.title}</span>
              <button style={{ marginRight: "5px" }}>✏</button>
              <button style={{ color: "red" }} onClick={() => this.confirmDelete(todo)}>
                🗑
              </button>
            </li>
          ))}
        </ul>
        <p>
          Công việc đã hoàn thành: <b>{completedCount} / {todos.length}</b>
        </p>

        {/* Modal xác nhận */}
        {showModal && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "8px", width: "300px" }}>
              <h4>Xác nhận</h4>
              <p>
                Bạn có xác nhận xóa công việc <b>{todoToDelete?.title}</b> không?
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button onClick={() => this.setState({ showModal: false, todoToDelete: null })}>Hủy</button>
                <button onClick={this.deleteTodo} style={{ background: "blue", color: "white" }}>Đồng ý</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
