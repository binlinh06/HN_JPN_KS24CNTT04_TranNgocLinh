const initialState = {
  student: [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      dateBirth: "20/11/2023",
      address: "Thanh Xuân, Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Thị B",
      gender: "Nữ",
      dateBirth: "20/11/2023",
      address: "Cầu Giấy, Hà Nội",
    },
  ],
};
export const Ex02 = (state = initialState, action: any) => {
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
