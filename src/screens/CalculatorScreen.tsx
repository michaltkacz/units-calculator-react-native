import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackCalculatorProps } from '../stacks/RootStackScreen';

const CalculatorScreen: React.FC<RootStackCalculatorProps> = () => {
  return (
    <View style={styles.view}>
      <Text>calculator</Text>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({ view: { top: 20 } });
