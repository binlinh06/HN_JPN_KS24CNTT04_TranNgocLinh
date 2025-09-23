import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import students from "./slices/studentSlice";
import randomReducer from "./slices/Ex02";
import themeReducer from "./slices/Ex03";
import viewModeReducer from "./slices/Ex04";
import menuReducer from "./slices/Ex05";
import languageReducer from "./slices/Ex06";
import favorites from "./slices/Ex07";
import auth from "./slices/Ex08";

export const store = configureStore({
  reducer: {auth,favorites,language: languageReducer, counter, students, random: randomReducer,theme: themeReducer,viewMode: viewModeReducer,menu: menuReducer },
});
