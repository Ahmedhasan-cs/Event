import { CategoriesActions, CategoriesState, categoryTypes } from "../types";


const initialState: CategoriesState = {
  pending: false,
  categories: [],
  error: null
};

export default (state = initialState, action: CategoriesActions) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        pending: true,
        categories: []
      };
    case categoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload.categories,
        error: null
      };
    case categoryTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        pending: false,
        categories: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
