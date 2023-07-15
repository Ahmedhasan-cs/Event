import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from '@features/EventSaved/ui/styles/eventSaved.scss';

import {HomeNavigationProps} from 'src/Navigator/AppNavigationProps';
import {useSelector} from 'react-redux';
import {RootState} from '@util/APIRedux/Reducers/rootReducer';
import {useDispatch} from 'react-redux';
import {fetchSelectedCategories} from '@util/APIRedux/Action/APIActions';

const ELLIPSE_ICON = require('@icons/ellipse.png');
const STAR_ICON = require('@icons/star.png');

const EventSaved = ({route, navigation}: HomeNavigationProps): JSX.Element => {
  const dispatch = useDispatch();
  const {categories: selectedCategories} = useSelector(
    (state: RootState) => state.selectedCategories,
  );

  useEffect(() => {
    dispatch(fetchSelectedCategories());
  }, []);

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

  return (
    <SafeAreaView style={styles.container}>
      <Image source={ELLIPSE_ICON} style={styles.ellipseIcon} />
      <Text style={styles.title}>Event Saved!</Text>
      <Text style={styles.score}>{getScore()}</Text>
      <Image source={STAR_ICON} style={styles.starIcon} />
    </SafeAreaView>
  );
};

EventSaved.displayName = 'EventSaved';

export default EventSaved;
