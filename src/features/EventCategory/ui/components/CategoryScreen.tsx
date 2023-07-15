import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '@features/EventCategory/ui/styles/categoryScreen.scss';
import {Category} from '@features/Home/data/Category';
import CategoryItem from '@features/EventCategory/ui/components/CategoryItem';
import {CategoryNavigationProps} from 'src/Navigator/AppNavigationProps';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from '@util/APIRedux/Reducers/rootReducer';
import {
  fetchSelectedCategories,
  fetchSubCategoryRequest,
  updateSelectedCategories,
} from '@util/APIRedux/Action/APIActions';

const BACK_ARROW = require('@icons/backArrow.png');

const CategoryScreen = ({
  route,
  navigation,
}: CategoryNavigationProps): JSX.Element => {
  const {category} = route.params;

  const dispatch = useDispatch();
  const {categories} = useSelector((state: RootState) => state.subCategories);
  const {categories: selectedCategories} = useSelector(
    (state: RootState) => state.selectedCategories,
  );

  useEffect(() => {
    dispatch(fetchSubCategoryRequest(category.id));
    dispatch(fetchSelectedCategories());
  }, []);

  const onSelectCategory = (item: Category): void => {
    let cat = item;
    cat.parentID = category.id;
    dispatch(updateSelectedCategories(item));
  };

  const getScore = (): string => {
    if (selectedCategories) {
      const selectedCatgoriesByParentID = selectedCategories.filter(
        item => item.parentID == category.id,
      );
      if (selectedCatgoriesByParentID.length == 0) {
        return '-';
      }
      const cost = selectedCatgoriesByParentID.reduce((accumulator, object) => {
        return accumulator + (object.avgBudget ?? 0);
      }, 0);
      return `$${cost}`;
    }
    return '-';
  };

  const renderCategoryItem = (item: Category): JSX.Element => {
    const isSelected = selectedCategories.findIndex(b => b.id === item.id) >= 0;

    return (
      <CategoryItem
        category={item}
        onPress={onSelectCategory}
        isSelected={isSelected}
      />
    );
  };

  const backView = (): void => {
    navigation.pop();
  };

  const backButton = (): JSX.Element => {
    return (
      <TouchableOpacity onPress={backView} style={styles.backButton}>
        <Image source={BACK_ARROW} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {backButton()}
      <Text style={styles.headerTitle}>{category.title}</Text>
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
    </SafeAreaView>
  );
};

CategoryScreen.displayName = 'CategoryScreen';

export default CategoryScreen;
