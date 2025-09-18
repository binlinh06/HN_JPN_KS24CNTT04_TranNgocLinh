const initialState = {
  student: [
    {
      id: 1,
      userName: "Nguyễn Văn Nam",
      gender: "Nam",
      dateBirth: "20/03/2023",
      address: "Thanh Xuân, Hà Nội",
    },
  ],
};
export const Ex01 = (state = initialState, action: any) => {
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
