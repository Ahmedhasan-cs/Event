import { Category } from "@features/Home/data/Category";

export interface CategoriesState {
  pending: boolean;
  categories: Category[];
  error: string | null;
}

////////// Get main categories
export interface FetchCategoriesRequest {
  type: typeof categoryTypes.FETCH_CATEGORIES_REQUEST;
}

export interface FetchCategoriesSuccessPayload {
  categories: Category[];
}

export interface FetchCategoriesFailurePayload {
  error: string;
}

export type  FetchCategoriesSuccess = {
  type: typeof categoryTypes.FETCH_CATEGORIES_SUCCESS;
  payload: FetchCategoriesSuccessPayload;
};

export type FetchCategoriesFailure = {
  type: typeof categoryTypes.FETCH_CATEGORIES_FAILURE;
  payload: FetchCategoriesFailurePayload;
};
//////////////////////////////////////////////////////////
///// Fetch sub category details ////////////////////////

export interface FetchSubCategoryRequest {
  type: typeof categoryTypes.FETCH_SUBCATEGORY_REQUEST;
  id: number;
}

export interface FetchSubCategorySuccessPayload {
  subcategory: Category[];
}

export interface FetchSubCategoryFailurePayload {
  error: string;
}

export type FetchSubCategorySuccess = {
  type: typeof categoryTypes.FETCH_SUBCATEGORY_SUCCESS;
  payload: FetchSubCategorySuccessPayload;
};

export type FetchSubCategoryFailure = {
  type: typeof categoryTypes.FETCH_SUBCATEGORY_FAILURE;
  payload: FetchSubCategoryFailurePayload;
};

//////////////// Managing categories selection /////////////
export interface SelectedCategoriesState {
  categories: Category[];
}

export interface SelectedCategoriesSuccessPayload {
  categories?: Category[];
}
export interface UpdateSelectedCategoriesRequest {
  type: typeof categoryTypes.UPDATE_SELECTED_CATEGORIES_REQUEST;
  category: Category;
}

export interface FetchSelectedCategoriesRequest {
  type: typeof categoryTypes.FETCH_SELECTED_CATEGORIES_REQUEST;
}

export type FetchSelectedCategoriesSuccess = {
  type: typeof categoryTypes.FETCH_SELECTED_CATEGORIES_SUCCESS;
  payload: SelectedCategoriesSuccessPayload;
};

export type CategoriesActions =
  | FetchCategoriesRequest
  | FetchCategoriesSuccess
  | FetchCategoriesFailure
  | FetchSubCategoryRequest
  | FetchSubCategorySuccess
  | FetchSubCategoryFailure
  | UpdateSelectedCategoriesRequest
  | FetchSelectedCategoriesRequest
  | FetchSelectedCategoriesSuccess

export enum categoryTypes {
    FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST",
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE",
    FETCH_SUBCATEGORY_REQUEST = "FETCH_SUBCATEGORY_REQUEST",
    FETCH_SUBCATEGORY_SUCCESS  = "FETCH_SUBCATEGORY_SUCCESS",
    FETCH_SUBCATEGORY_FAILURE  = "FETCH_SUBCATEGORY_FAILURE",
    UPDATE_SELECTED_CATEGORIES_REQUEST = "UPDATE_SELECTED_CATEGORIES_REQUEST",
    FETCH_SELECTED_CATEGORIES_REQUEST = "FETCH_SELECTED_CATEGORIES_REQUEST",
    FETCH_SELECTED_CATEGORIES_SUCCESS = "FETCH_SELECTED_CATEGORIES_SUCCESS",
}