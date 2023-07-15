import { CategoriesActions, CategoriesState, SelectedCategoriesState, categoryTypes } from "../types";


const initialState: SelectedCategoriesState = {
  categories: [],
};

export default (state = initialState, action: CategoriesActions) => {
  switch (action.type) {
    case categoryTypes.UPDATE_SELECTED_CATEGORIES_REQUEST:
      return {
          ...state,
        };
    case categoryTypes.FETCH_SELECTED_CATEGORIES_REQUEST:
        return {
          ...state,
        };
    case categoryTypes.FETCH_SELECTED_CATEGORIES_SUCCESS:
      let allObjects = state.categories ?? []
      const category = action.payload.categories;
      if (category !== undefined) {
        const categoryIndex = allObjects.findIndex(
          b => b.id === category.id,
        );

        if (categoryIndex !== -1) {
          allObjects.splice(categoryIndex, 1);
        } else {
          allObjects.push(category);
        }
      }
      
        return {
          ...state,
          categories: allObjects,
        };
    default:
      return {
        ...state
      };
  }
};