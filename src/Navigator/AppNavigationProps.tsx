import {Category} from '@features/Home/data/Category';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type AppStackNavigatorParamList = {
  Home: undefined;
  Category: {
    category: Category;
  };
  EventSaved: undefined;
};

export enum RouteNames {
  Home = 'Home',
  Category = 'Category',
  EventSaved = 'EventSaved',
}

export type HomeNavigationProps = StackNavigationProp<
  AppStackNavigatorParamList,
  RouteNames.Home
>;
export type CategoryNavigationProps = StackScreenProps<
  AppStackNavigatorParamList,
  RouteNames.Category
>;

export type EventSavedNavigationProps = StackScreenProps<
  AppStackNavigatorParamList,
  RouteNames.EventSaved
>;
