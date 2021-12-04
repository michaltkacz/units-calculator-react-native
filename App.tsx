import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import RootStackScreen from './src/stacks/RootStackScreen';

// const CombinedDefaultTheme = {
//   ...NavigationDefaultTheme,
//   colors: {
//     ...NavigationDefaultTheme.colors,
//     ...PaperDefaultTheme.colors,
//     card: NavigationDefaultTheme.colors.primary,
//   },
// };

const PaperTheme = {
	...PaperDefaultTheme,
	colors: {
		...PaperDefaultTheme.colors,
		text: '#616161'
	}
};

const NavigationTheme = {
	...NavigationDefaultTheme,
	colors: {
		...NavigationDefaultTheme.colors,
		card: '#7920a0',
		text: '#ffffff',
		background: '#ffffff'
	}
};

export default function App() {
	return (
		<PaperProvider theme={PaperTheme}>
			<SafeAreaProvider>
				<NavigationContainer theme={NavigationTheme}>
					<RootStackScreen />
				</NavigationContainer>
			</SafeAreaProvider>
		</PaperProvider>
	);
}
