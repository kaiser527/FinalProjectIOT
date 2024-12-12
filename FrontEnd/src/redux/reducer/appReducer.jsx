import { CHANGE_LANGUAGE } from "../action/types";

const INITIAL_STATE = {
  language: "en",
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        language: action.language,
      };
    default:
      return state;
  }
};

export default appReducer;
