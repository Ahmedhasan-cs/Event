import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchCategoriesFailure, fetchCategoriesSuccess, fetchSelectedCategories, fetchSelectedCategoriesSuccess, fetchSubCategoryFailure, fetchSubCategorySuccess, updateSelectedCategories } from "./Action/APIActions";
import { categoryTypes } from "./types";
import { Category } from "@features/Home/data/Category";


const getCategories = () =>
  axios.get<Category[]>("https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com/categories.json");

function* fetchCategoriesSaga() {
  try {
    const response = yield call(getCategories);
    yield put(
      fetchCategoriesSuccess({
        categories: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchCategoriesFailure({
        error: e.message
      })
    );
  }
}


const getSubCategory = (id: number) =>
  axios.get<Category[]>(`https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com/categories/${id}.json`);

function* fetchSubCategorySaga(action: any) {
  try {
    const response = yield call(getSubCategory, action.id);
    yield put(
      fetchSubCategorySuccess({
        subcategory: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchSubCategoryFailure({
        error: e.message
      })
    );
  }
}

function* updateSelectedCategoriesSaga(action: any) {
  yield put(
    fetchSelectedCategoriesSuccess({categories: action.category})
  );
}

function* fetchSelectedCategoriesSaga() {
  yield put(
    fetchSelectedCategoriesSuccess({})
  );
} 

function* categoriesSaga() {
  yield all([takeLatest(categoryTypes.FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga)]);
  yield all([takeLatest(categoryTypes.FETCH_SUBCATEGORY_REQUEST, fetchSubCategorySaga)]);
  yield all([takeLatest(categoryTypes.UPDATE_SELECTED_CATEGORIES_REQUEST, updateSelectedCategoriesSaga)]);
  yield all([takeLatest(categoryTypes.FETCH_SELECTED_CATEGORIES_REQUEST, fetchSelectedCategoriesSaga)]);
}

export default categoriesSaga;
