
import { Category } from "@features/Home/data/Category";
import { FetchCategoriesSuccessPayload, FetchCategoriesSuccess, FetchCategoriesRequest, FetchCategoriesFailurePayload, FetchCategoriesFailure, categoryTypes, FetchSubCategorySuccessPayload, FetchSubCategoryFailurePayload, FetchSubCategorySuccess, FetchSubCategoryFailure, FetchSubCategoryRequest, UpdateSelectedCategoriesRequest, SelectedCategoriesSuccessPayload, FetchSelectedCategoriesRequest, FetchSelectedCategoriesSuccess } from "../types";


export const fetchCategoriesRequest = (): FetchCategoriesRequest => ({
  type: categoryTypes.FETCH_CATEGORIES_REQUEST
});

export const fetchCategoriesSuccess = (
  payload: FetchCategoriesSuccessPayload
): FetchCategoriesSuccess => ({
  type: categoryTypes.FETCH_CATEGORIES_SUCCESS,
  payload
});

export const fetchCategoriesFailure = (
  payload: FetchCategoriesFailurePayload
): FetchCategoriesFailure => ({
  type: categoryTypes.FETCH_CATEGORIES_FAILURE,
  payload
});

export const fetchSubCategoryRequest = (id: number): FetchSubCategoryRequest => ({
  type: categoryTypes.FETCH_SUBCATEGORY_REQUEST,
  id
});

export const fetchSubCategorySuccess = (
  payload: FetchSubCategorySuccessPayload
): FetchSubCategorySuccess => ({
  type: categoryTypes.FETCH_SUBCATEGORY_SUCCESS,
  payload
});

export const fetchSubCategoryFailure = (
  payload: FetchSubCategoryFailurePayload
): FetchSubCategoryFailure => ({
  type: categoryTypes.FETCH_SUBCATEGORY_FAILURE,
  payload
});

export const updateSelectedCategories = (category: Category): UpdateSelectedCategoriesRequest => ({
  type: categoryTypes.UPDATE_SELECTED_CATEGORIES_REQUEST,
  category: category,
});

export const fetchSelectedCategories = (): FetchSelectedCategoriesRequest => ({
  type: categoryTypes.FETCH_SELECTED_CATEGORIES_REQUEST,
});

export const fetchSelectedCategoriesSuccess = (
  payload: SelectedCategoriesSuccessPayload
): FetchSelectedCategoriesSuccess => ({
  type: categoryTypes.FETCH_SELECTED_CATEGORIES_SUCCESS,
  payload
});



