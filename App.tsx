import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/stacks/RootStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
