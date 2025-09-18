const initialState = {
  numbers: [] as number[],
};

export const Ex04 = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_RANDOM":
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    default:
      return state;
  }
};
