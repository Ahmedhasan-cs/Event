import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackNavigatorParamList, RouteNames} from './AppNavigationProps';
import HomeScreen from '@features/Home/ui/components/HomeScreen';
import CategoryScreen from '@features/EventCategory/ui/components/CategoryScreen';
import EventSaved from '@features/EventSaved/ui/components/EventSaved';

const Stack = createStackNavigator<AppStackNavigatorParamList>();

const AppNavigator = (): JSX.Element => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={RouteNames.Home} component={HomeScreen} />
    <Stack.Screen name={RouteNames.Category} component={CategoryScreen} />
    <Stack.Screen name={RouteNames.EventSaved} component={EventSaved} />
  </Stack.Navigator>
);

AppNavigator.displayName = 'AppNavigator';
export default AppNavigator;
