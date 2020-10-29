import reducer from "./reducer";
import state from "./state";

const store = {
  reducer,
  initialState: state,
};

export default store;
