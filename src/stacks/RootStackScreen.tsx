import React from 'react';

import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CalculatorScreen from '../screens/CalculatorScreen';

export enum Routes {
  Categories = 'Categories',
  Calculator = 'Calculator',
}

export type RootStackParamsList = {
  [Routes.Categories]: undefined;
  [Routes.Calculator]: { categoryType: string };
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
        headerShown: false,
      }}
    >
      <RootStack.Screen name={Routes.Categories} component={CategoriesScreen} />
      <RootStack.Screen name={Routes.Calculator} component={CalculatorScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
