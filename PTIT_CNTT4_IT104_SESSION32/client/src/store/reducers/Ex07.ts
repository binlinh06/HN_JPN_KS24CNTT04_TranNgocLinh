const initialAuthState = {
  registeredUser: null,
  currentPage: "register", 
};

export const authReducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        registeredUser: action.payload,
        currentPage: "login",
      };
    case "GO_TO_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

