import React, { useReducer, useEffect } from "react";

type Job = {
  id: number;
  title: string;
  completes: boolean;
};

type State = {
  jobs: Job[];
  new_title: string;
};

type Action =
  | { type: "SET_TITLE"; payload: string }
  | { type: "ADD" }
  | { type: "DELETE"; payload: number }
  | { type: "SET_JOBS"; payload: Job[] };

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, new_title: action.payload };

    case "ADD":
      if (!state.new_title.trim()) return state; // tránh thêm rỗng
      const newTodo: Job = {
        id: Date.now(),
        title: state.new_title,
        completes: false,
      };
      return {
        ...state,
        jobs: [...state.jobs, newTodo],
        new_title: "",
      };

    case "DELETE":
      return {
        ...state,
        jobs: state.jobs.filter((item) => item.id !== action.payload),
      };

    case "SET_JOBS":
      return { ...state, jobs: action.payload };

    default:
      return state;
  }
};

export default function Baitap7_8() {
  const initial: State = {
    jobs: [
      { id: 1, title: "Quét nhà", completes: true },
      { id: 2, title: "Giặt quần áo", completes: true },
      { id: 3, title: "Code", completes: true },
    ],
    new_title: "",
  };

  const [state, dispatch] = useReducer(todoReducer, initial);

  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      dispatch({ type: "SET_JOBS", payload: JSON.parse(savedJobs) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(state.jobs));
  }, [state.jobs]);

  return (
    <div>
      <h2> Danh sách công việc</h2>
      <input
        placeholder="Nhập tên công việc"
        value={state.new_title}
        onChange={(e) =>
          dispatch({ type: "SET_TITLE", payload: e.target.value })
        }
        type="text"
      />
      <button onClick={() => dispatch({ type: "ADD" })}>Thêm công việc</button>

      <ul>
        {state.jobs.map((item) => (
          <li key={item.id}>
            {item.title}
            <button
              onClick={() => dispatch({ type: "DELETE", payload: item.id })}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
