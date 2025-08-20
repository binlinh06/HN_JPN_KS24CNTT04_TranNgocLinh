import React, { Component } from "react";
import Baitap6_children from "./Baitap6_children";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type State = {
  posts: Post[];
};

export default class ListPost extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS để đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content: "Props giúp truyền dữ liệu từ component cha xuống component con",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content: "State giúp trữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
          <Baitap6_children
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))}
      </div>
    );
  }
}
