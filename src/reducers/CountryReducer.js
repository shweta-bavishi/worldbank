import {
  GET_LIST,
  GET_LIST_FAILURE,
  WINNER_LIST,
  WINNER_LIST_FAILURE,
  FILTER_LIST_REGION_SUCCESS,
  FILTER_LIST_REGION_FAILURE,
  FILTER_LIST_LENDINGTYPE_SUCCESS,
  FILTER_LIST_INCOMELEVEL_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  champ: [{ season: 0, url: "" }],
  races: [{}],
  region: [{}],
  lendingType: [{}],
  incomelevel: [{}]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return { ...state, champ: action.payload };
    case GET_LIST_FAILURE:
      return { ...state, champ: action.payload };
    case WINNER_LIST:
      return { ...state, races: action.payload };
    case WINNER_LIST_FAILURE:
      return { ...state, races: action.payload };
    case FILTER_LIST_REGION_SUCCESS:
      return { ...state, region: action.payload };
    case FILTER_LIST_REGION_FAILURE:
      return { ...state, region: action.payload };
    case FILTER_LIST_LENDINGTYPE_SUCCESS:
      return { ...state, lendingType: action.payload };
    case FILTER_LIST_INCOMELEVEL_SUCCESS:
      return { ...state, incomelevel: action.payload };
    default:
      return state;
  }
};
