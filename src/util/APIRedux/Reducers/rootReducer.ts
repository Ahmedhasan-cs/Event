import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import subcategoryReducer from "./subcategoryReducer";
import updatedSelectedCategoriesReducer from "./updatedSelectedCategoriesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  subCategories: subcategoryReducer,
  selectedCategories: updatedSelectedCategoriesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
