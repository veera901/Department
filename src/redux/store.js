import { combineReducers } from "redux";
import { createStore } from "redux";

import { DepartmentReducer } from "./DepartmentReducer";

const rootReducer = combineReducers({
  department: DepartmentReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

const store = createStore(rootReducer);
export { store };