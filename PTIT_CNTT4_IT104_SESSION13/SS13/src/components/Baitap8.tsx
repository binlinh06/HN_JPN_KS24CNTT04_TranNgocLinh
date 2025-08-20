import React, { Component } from "react";

type Task = {
  id: number;
  name: string;
  assign: string;
  status: boolean; // true: Hoàn thành, false: Chưa hoàn thành
  created_at: Date;
};

type State = {
  tasks: Task[];
};

export default class Todolist extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Thiết kế giao diện Header",
          assign: "Nguyễn Văn A",
          status: false,
          created_at: new Date("2024-03-21T13:12:12"),
        },
        {
          id: 2,
          name: "Thiết kế giao diện Footer",
          assign: "Nguyễn Văn B",
          status: true,
          created_at: new Date("2024-03-21T15:10:50"),
        },
      ],
    };
  }

  // Format ngày giờ về dạng dd/mm/yyyy hh:mm:ss
  formatDate = (date: Date): string => {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    const h = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const s = date.getSeconds().toString().padStart(2, "0");
    return `${d}/${m}/${y} ${h}:${min}:${s}`;
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h3>Danh sách công việc</h3>
        <table border={1} cellPadding={10} cellSpacing={0} width="100%">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.assign}</td>
                <td>
                  {task.status ? (
                    <span
                      style={{
                        background: "#d4f5d4",
                        color: "green",
                        padding: "3px 6px",
                        borderRadius: "5px",
                      }}
                    >
                      Hoàn thành
                    </span>
                  ) : (
                    <span
                      style={{
                        background: "#f8d7da",
                        color: "red",
                        padding: "3px 6px",
                        borderRadius: "5px",
                      }}
                    >
                      Chưa hoàn thành
                    </span>
                  )}
                </td>
                <td>{this.formatDate(task.created_at)}</td>
                <td>
                  <button
                    style={{
                      background: "orange",
                      border: "none",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      marginRight: "5px",
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    style={{
                      background: "red",
                      border: "none",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
