import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "./Data";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [keyword, setKeyword] = useState(query);
  useEffect(() => {
    setKeyword(query);
  }, [query]);

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      setSearchParams({ search: keyword });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-500">{item.price.toLocaleString()} VND</p>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
