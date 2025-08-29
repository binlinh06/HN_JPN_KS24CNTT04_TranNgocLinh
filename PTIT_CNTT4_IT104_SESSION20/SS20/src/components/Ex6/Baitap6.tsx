import React, { useState, useRef, useEffect } from "react";

export default function Baitap6() {
  const [click, setClick] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if(click && inputRef.current){
        inputRef.current.focus();
    }
  }, [click]);
  
  const handleOpen = () => {
    setClick(true);
  };

  const handleClose = () => {
    setClick(false);
  };
  return (
    <div>
      <h2>Ung dung React voi Modal va Focus Input</h2>
      <button onClick={handleOpen}>Mo Modal</button>
      {click && (
        <div>
          <h3>Dang nhap</h3>
          <input type="text" ref={inputRef} /> <br />
          <button  type="submit" onClick={handleClose}>Dong</button>
        </div>
      )}
    </div>
  );
}
