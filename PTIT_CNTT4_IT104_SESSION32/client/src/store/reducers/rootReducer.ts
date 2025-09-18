import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCounter";
import { reducerStudents } from "./ReducerStudent";
import { Ex01 } from "./Ex01";
import { Ex02 } from "./Ex02";
import { Ex04 } from "./Ex04";
import { companyReducer } from "./Ex05";
import { themeReducer } from "./Ex06";
import { authReducer } from "./Ex07";
import { adminReducer } from "./Ex08";
export const rootReducer = combineReducers({
  counter: reducerCounter,
  students: reducerStudents,
  users: Ex01,
  ex02: Ex02,
  random: Ex04,
  company: companyReducer,
  theme: themeReducer,
  auth: authReducer,
  admin: adminReducer,
});
