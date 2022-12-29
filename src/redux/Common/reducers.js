const initialState = {
  userInfo: null,
};
import actions from "./actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER_INFO: {
      return {...state, userInfo: action.payload};
    }
    default:
      return state;
  }
};

export default reducer;
