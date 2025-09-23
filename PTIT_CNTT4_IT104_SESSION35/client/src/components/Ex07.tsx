// src/components/FavoriteList.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../stores/slices/Ex07";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function Ex07() {
  const users = useSelector((state: any) => state.favorites.users);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h3 style={{ fontWeight: "bold" }}>List Favorites User</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "10px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <p>
            <b>UserName:</b> {user.name}
          </p>
          <p>
            Favorites:{" "}
            {user.isFavorite ? (
              <HeartFilled
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => dispatch(toggleFavorite(user.id))}
              />
            ) : (
              <HeartOutlined
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => dispatch(toggleFavorite(user.id))}
              />
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
