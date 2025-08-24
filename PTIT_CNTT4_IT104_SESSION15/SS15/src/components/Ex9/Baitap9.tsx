import React from "react";

interface Task {
  id: number;
  taskName: string;
  completed: boolean;
}

interface State {
  tasks: Task[];
  taskName: string;
  editId: number | null;
}

class Baitap9 extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [],
      taskName: "",
      editId: null,
    };
  }

  componentDidMount() {
    const data = localStorage.getItem("tasks");
    if (data) {
      this.setState({ tasks: JSON.parse(data) });
    }
  }

  // Cập nhật localStorage
  updateLocalStorage = (tasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Xử lý thay đổi input
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ taskName: e.target.value });
  };

  // Thêm hoặc Sửa
  handleSubmit = () => {
    const { taskName, tasks, editId } = this.state;
    if (!taskName.trim()) {
      alert("Tên công việc không được để trống!");
      return;
    }

    if (editId) {
      // Đang sửa
      const updatedTasks = tasks.map((t) =>
        t.id === editId ? { ...t, taskName } : t
      );
      this.setState({ tasks: updatedTasks, taskName: "", editId: null });
      this.updateLocalStorage(updatedTasks);
    } else {
      // Thêm mới
      const newTask: Task = {
        id: Date.now(),
        taskName,
        completed: false,
      };
      const updatedTasks = [...tasks, newTask];
      this.setState({ tasks: updatedTasks, taskName: "" });
      this.updateLocalStorage(updatedTasks);
    }
  };

  // Xóa công việc
  handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa công việc này không?")) {
      const updatedTasks = this.state.tasks.filter((t) => t.id !== id);
      this.setState({ tasks: updatedTasks });
      this.updateLocalStorage(updatedTasks);
    }
  };

  // Chọn để sửa
  handleEdit = (task: Task) => {
    this.setState({ taskName: task.taskName, editId: task.id });
  };

  render() {
    const { tasks, taskName, editId } = this.state;

    return (
      <div style={{ margin: "20px" }}>
        <h2>Danh sách công việc</h2>
        <input
          type="text"
          value={taskName}
          onChange={this.handleChange}
          placeholder="Nhập tên công việc..."
        />
        <button onClick={this.handleSubmit}>
          {editId ? "Sửa" : "Lưu"}
        </button>

        <ul>
          {tasks.map((item) => (
            <li key={item.id}>
              {item.taskName}{" "}
              <button onClick={() => this.handleEdit(item)}>Sửa</button>
              <button onClick={() => this.handleDelete(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Baitap9;
