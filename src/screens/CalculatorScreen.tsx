import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CalculatorScreen: React.FC = () => {
  return (
    <View style={styles.view}>
      <Text>calculator</Text>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({ view: { top: 20 } });
