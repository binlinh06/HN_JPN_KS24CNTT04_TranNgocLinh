const initialState = {
  darkMode: false, 
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        darkMode: action.payload, 
      };
    default:
      return state;
  }
};
