import { CategoriesActions, CategoriesState, categoryTypes } from "../types";


const initialState: CategoriesState = {
  pending: false,
  categories: [],
  error: null
};

export default (state = initialState, action: CategoriesActions) => {
  switch (action.type) {
    case categoryTypes.FETCH_SUBCATEGORY_REQUEST:
        return {
          ...state,
          pending: true,
          categories: [],
        };
    case categoryTypes.FETCH_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload.subcategory,
        error: null
      };
    case categoryTypes.FETCH_SUBCATEGORY_FAILURE:
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
