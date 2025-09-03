import React from "react";

export default function Baitap5() {
  return (
    <div className="bg-sky-100 size-[250px] p-4 rounded-xl shadow-md">
      <div className="relative size-[200px] bg-sky-200 p-4 ">
        <p className="text-sky-800 font-medium">Relative parent</p>
        <div className="absolute bottom-0 left-0 bg-sky-500 text-white font-bold px-4 py-2 rounded-lg shadow">
          Absolute child
        </div>
      </div>
    </div>
  )
}
