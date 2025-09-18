const initialState = {
  users: [
    {
      id: 1,
      name: "DUY",
    },
    {
      id: 2,
      name: "LINH",
    },
    {
      id: 3,
      name: "LOC",
    },
  ],
};
export const reducerStudents = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "EDIT":
      return state;
    case "DELETE":
      return state;
    default:
      return state;
  }
};
