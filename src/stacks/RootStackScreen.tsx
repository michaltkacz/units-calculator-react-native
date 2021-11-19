import React from 'react';

import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CalculatorScreen from '../screens/CalculatorScreen';

import { UnitsCategories } from '../data/unitsSchema';

export enum Routes {
  Categories = 'Categories',
  Calculator = 'Calculator',
}

export type RootStackParamsList = {
  [Routes.Categories]: undefined;
  [Routes.Calculator]: { unitsCategory: UnitsCategories };
};

export type RootStackCategoriesProps = StackScreenProps<
  RootStackParamsList,
  Routes.Categories
>;
export type RootStackCalculatorProps = StackScreenProps<
  RootStackParamsList,
  Routes.Calculator
>;

const RootStack = createStackNavigator<RootStackParamsList>();

const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName={Routes.Categories}
      screenOptions={{
        title: 'Units Calculator',
      }}
    >
      <RootStack.Screen name={Routes.Categories} component={CategoriesScreen} />
      <RootStack.Screen
        name={Routes.Calculator}
        options={({ route }) => ({ title: route.params.unitsCategory })}
        component={CalculatorScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
