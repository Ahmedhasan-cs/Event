import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '@features/EventCategory/ui/styles/categoryScreen.scss';
import {Category} from '@features/Home/data/Category';

interface HomeCellProps {
  category: Category;
  onPress: (category: Category) => void;
  isSelected: boolean;
}

const ADD_ICON = require('@icons/add.png');
const ADDED_ICON = require('@icons//added.png');

const CategoryItem = (props: HomeCellProps): JSX.Element => {
  const {category, onPress, isSelected} = props;

  const module: JSX.Element = (
    <TouchableOpacity
      style={styles.cellContainer}
      onPress={(): void => onPress(category)}>
      <Image style={styles.imageThumbnail} source={{uri: category.image}} />
      <Image
        style={styles.checkmarkIcon}
        source={isSelected ? ADDED_ICON : ADD_ICON}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{category.title}</Text>
        <Text
          style={
            styles.subtitle
          }>{`$${category.minBudget}-${category.maxBudget}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return module;
};

CategoryItem.displayName = 'CategoryItem';

export default CategoryItem;
