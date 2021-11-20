import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import RootStackScreen from './src/stacks/RootStackScreen';

const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    card: NavigationDefaultTheme.colors.primary,
  },
};

export default function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <RootStackScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
