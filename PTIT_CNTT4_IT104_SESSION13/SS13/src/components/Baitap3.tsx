import React, { Component } from "react";
type User = {
  id: number;
  name: string;
  age: number;
};
type State = {
  users: User[];
};
export default class Baitap3 extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Mary", age: 25 },
        { id: 3, name: "Jane", age: 20 },
      ],
    };
  }
  render() {
    return (
    <div>
      <h3>Danh sách Users</h3>
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  }
}
