import React, { Component } from "react";

type Student = {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "blocked";
};

const PAGE_SIZE = 5;

export default class Baitap10 extends Component<
  {},
  {
    students: Student[];
    showForm: boolean;
    formData: { id: string; name: string; dob: string; email: string };
    page: number;
  }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      students: [],
      showForm: false,
      formData: { id: "", name: "", dob: "", email: "" },
      page: 1,
    };
  }

  componentDidMount() {
    const data = localStorage.getItem("students");
    if (data) {
      this.setState({ students: JSON.parse(data) });
    }
  }

  componentDidUpdate(prevProps: {}, prevState: any) {
    if (prevState.students !== this.state.students) {
      localStorage.setItem("students", JSON.stringify(this.state.students));
    }
  }

  validate = (): string | null => {
    const { formData, students } = this.state;
    if (!formData.id || !formData.name || !formData.email)
      return "Không được để trống!";
    if (students.some((s) => s.id === formData.id))
      return "Mã sinh viên đã tồn tại!";
    if (students.some((s) => s.email === formData.email))
      return "Email đã tồn tại!";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Email không hợp lệ!";
    return null;
  };

  handleAdd = () => {
    const err = this.validate();
    if (err) {
      alert(err);
      return;
    }
    const newStudent: Student = {
      id: this.state.formData.id,
      name: this.state.formData.name,
      dob: this.state.formData.dob,
      email: this.state.formData.email,
      status: "active",
    };
    this.setState((prev) => ({
      students: [...prev.students, newStudent],
      formData: { id: "", name: "", dob: "", email: "" },
      showForm: false,
    }));
    alert("Thêm sinh viên thành công!");
  };

  handleBlock = (id: string) => {
    if (window.confirm("Bạn có chắc muốn chặn sinh viên này?")) {
      this.setState((prev) => ({
        students: prev.students.map((s) =>
          s.id === id
            ? { ...s, status: s.status === "active" ? "blocked" : "active" }
            : s
        ),
      }));
    }
  };

  handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa sinh viên này?")) {
      this.setState((prev) => ({
        students: prev.students.filter((s) => s.id !== id),
      }));
    }
  };

  render() {
    const { students, showForm, formData, page } = this.state;
    const totalPages = Math.ceil(students.length / PAGE_SIZE);
    const pageData = students.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
      <div>
        <h2>Quản lý sinh viên</h2>
        <button onClick={() => this.setState({ showForm: true })}>
          Thêm mới sinh viên
        </button>

        {/* Form thêm mới */}
        {showForm && (
          <div className="modal">
            <h3>Thêm mới sinh viên</h3>
            <input
              placeholder="Mã sinh viên"
              value={formData.id}
              onChange={(e) =>
                this.setState({
                  formData: { ...formData, id: e.target.value },
                })
              }
            />
            <input
              placeholder="Tên sinh viên"
              value={formData.name}
              onChange={(e) =>
                this.setState({
                  formData: { ...formData, name: e.target.value },
                })
              }
            />
            <input
              type="date"
              value={formData.dob}
              onChange={(e) =>
                this.setState({
                  formData: { ...formData, dob: e.target.value },
                })
              }
            />
            <input
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                this.setState({
                  formData: { ...formData, email: e.target.value },
                })
              }
            />
            <button onClick={this.handleAdd}>Thêm mới</button>
            <button onClick={() => this.setState({ showForm: false })}>
              Hủy
            </button>
          </div>
        )}

        {/* Danh sách sinh viên */}
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã SV</th>
              <th>Tên SV</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((s, index) => (
              <tr key={s.id}>
                <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{new Date(s.dob).toLocaleDateString("vi-VN")}</td>
                <td>{s.email}</td>
                <td>
                  {s.status === "active" ? (
                    <span style={{ color: "green" }}>Đang hoạt động</span>
                  ) : (
                    <span style={{ color: "red" }}>Ngừng hoạt động</span>
                  )}
                </td>
                <td>
                  <button onClick={() => this.handleBlock(s.id)}>
                    {s.status === "active" ? "Chặn" : "Bỏ chặn"}
                  </button>
                  <button onClick={() => this.handleDelete(s.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Phân trang */}
        <div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => this.setState({ page: i + 1 })}
              disabled={page === i + 1}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
