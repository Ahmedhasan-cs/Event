import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from '@features/Home/ui/styles/homeScreen.scss';
import {Category} from '@features/Home/data/Category';

interface HomeCellProps {
  category: Category;
  onPress: (category: Category) => void;
}

const NEXT_ICON = require('@icons/back.png');

const HomeCell = (props: HomeCellProps): JSX.Element => {
  const {category, onPress} = props;

  const handleContainerClick = (): void => {
    onPress(category);
  };

  const module: JSX.Element = (
    <TouchableOpacity
      style={styles.cellContainer}
      onPress={handleContainerClick}>
      <Image style={styles.imageThumbnail} source={{uri: category.image}} />
      <View style={styles.footer}>
        <Text style={styles.title}>{category.title}</Text>
        <Image source={NEXT_ICON} />
      </View>
    </TouchableOpacity>
  );

  return module;
};

HomeCell.displayName = 'HomeCell';

export default HomeCell;
