import React, { useReducer } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
};

const data: Product[] = [
  { id: 1, name: "Apple iPhone 13", description: "Smartphone mới nhất của Apple" },
  { id: 2, name: "Samsung Galaxy S21", description: "Smartphone flagship của Samsung" },
  { id: 3, name: "OnePlus 9 Pro", description: "Smartphone hiệu suất cao từ OnePlus" },
  { id: 4, name: "Google Pixel 6", description: "Điện thoại thông minh của Google" },
  { id: 5, name: "Xiaomi Mi 11", description: "Điện thoại thông minh giá rẻ" },
];


type State = {
  keyword: string;
  results: Product[];
};

type Action =
  | { type: "SET_KEYWORD"; payload: string }
  | { type: "SEARCH" };

const initialState: State = {
  keyword: "",
  results: data,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_KEYWORD":
      return { ...state, keyword: action.payload };
    case "SEARCH":
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(state.keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(state.keyword.toLowerCase())
      );
      return { ...state, results: filtered };
    default:
      return state;
  }
};

export default function Baitap9() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_KEYWORD", payload: e.target.value });
    dispatch({ type: "SEARCH" });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Tìm kiếm sản phẩm</h2>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={state.keyword}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />

      {state.keyword && (
        <p>
          {state.results.length} kết quả tìm thấy cho "{state.keyword}"
        </p>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
        {state.results.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
