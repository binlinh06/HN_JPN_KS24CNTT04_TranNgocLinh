const initialState = {
  count: 0,
  status: true,
};
export const reducerCounter: any = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      state.count = state.count + 1;
      return {...state};
    case "DISCREMENT":
        state.count = state.count - 1;
        return{...state}
    default:
      return state;
  }
};
