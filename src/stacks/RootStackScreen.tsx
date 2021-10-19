import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CalculatorScreen from '../screens/CalculatorScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name='Categories' component={CategoriesScreen} />
      <RootStack.Screen name='Calculator' component={CalculatorScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
