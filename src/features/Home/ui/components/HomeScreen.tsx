import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import styles from '@features/Home/ui/styles/homeScreen.scss';
import HomeCell from './HomeCell';
import CustomButton from '@util/components/CustomButton';
import {
  HomeNavigationProps,
  RouteNames,
} from 'src/Navigator/AppNavigationProps';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from '@util/APIRedux/Reducers/rootReducer';
import {
  fetchCategoriesRequest,
  fetchSelectedCategories,
} from '@util/APIRedux/Action/APIActions';
import {Category} from '@features/Home/data/Category';

const HomeScreen = ({route, navigation}: HomeNavigationProps): JSX.Element => {
  const dispatch = useDispatch();
  const {pending, categories, error} = useSelector(
    (state: RootState) => state.categories,
  );
  const {categories: selectedCategories} = useSelector(
    (state: RootState) => state.selectedCategories,
  );

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
    dispatch(fetchSelectedCategories());
  }, []);

  const onCTAPress = (): void => {
    navigation.navigate(RouteNames.EventSaved);
  };

  const onCategoryPress = (category: Category): void => {
    navigation.navigate(RouteNames.Category, {
      category,
    });
  };

  const getScore = (): string => {
    if (selectedCategories) {
      if (selectedCategories.length == 0) {
        return '-';
      }
      const cost = selectedCategories.reduce((accumulator, object) => {
        return accumulator + (object.avgBudget ?? 0);
      }, 0);

      return `$${cost}`;
    }
    return '-';
  };

  const renderCategoryItem = (category: Category): JSX.Element => {
    return <HomeCell category={category} onPress={onCategoryPress} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Event Builder</Text>
      <Text style={styles.headerSubTitle}>
        Add to your event to view our  cost estimate.
      </Text>
      <Text style={styles.score}>{getScore()}</Text>
      {categories && (
        <FlatList
          data={categories}
          style={styles.list}
          renderItem={({item}): JSX.Element => renderCategoryItem(item)}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      )}
      <CustomButton onPress={onCTAPress} title="Save" />
    </SafeAreaView>
  );
};

HomeScreen.displayName = 'HomeScreen';

export default HomeScreen;
