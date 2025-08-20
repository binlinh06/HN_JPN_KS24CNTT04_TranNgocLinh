import React, { Component } from "react";

type Props = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export default class DetailPost extends Component<Props> {
  render() {
    const { id, title, content, author } = this.props;
    return (
      <div>
        <p><b>Id:</b> {id}</p>
        <p><b>Title:</b> {title}</p>
        <p><b>Content:</b> {content}</p>
        <p><b>Author:</b> {author}</p>
        <hr />
      </div>
    );
  }
}
