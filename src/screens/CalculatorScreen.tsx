import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { RootStackCalculatorProps } from '../stacks/RootStackScreen';

import unitsSchema, {
  Unit,
  UnitsCategories,
  UnitsCollection,
} from '../data/unitsSchema';

const CalculatorScreen: React.FC<RootStackCalculatorProps> = ({ route }) => {
  const unitsCategory = route.params.unitsCategory as UnitsCategories;
  const unitsCollection = unitsSchema[unitsCategory] as UnitsCollection;

  const [currentUnitName, setCurrentUnitName] = useState<string>(
    unitsCollection[0].name
  );
  const [currentUnitValue, setCurrentUnitValue] = useState<string>(
    unitsCollection[0].value.toString()
  );

  const calculateValue = (fromUnitName: string, toUnitName: string): string => {
    if (fromUnitName === toUnitName) {
      return currentUnitValue;
    }

    if (currentUnitValue === '') {
      return '';
    }

    const fromUnitFactor = unitsCollection.filter(
      (unit) => unit.name === fromUnitName
    )[0].value;

    const toUnitFactor = unitsCollection.filter(
      (unit) => unit.name === toUnitName
    )[0].value;

    const currentUnitValueFloat = parseFloat(currentUnitValue);
    const returnUnitValueFloat =
      (currentUnitValueFloat * fromUnitFactor) / toUnitFactor;
    return returnUnitValueFloat.toString();
  };

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.title}>{unitsCategory}</Text>
      <KeyboardAwareScrollView>
        <View>
          {unitsCollection.map((unit: Unit, index) => (
            <View style={styles.unitContainer} key={`unit-row-${index}`}>
              <TextInput
                value={calculateValue(currentUnitName, unit.name)}
                style={styles.unitInput}
                keyboardType='numeric'
                onChangeText={(text) => {
                  if (text === '') {
                    setCurrentUnitValue('');
                    setCurrentUnitName(unit.name);
                    return;
                  }

                  // if is float number
                  if (/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/.test(text)) {
                    setCurrentUnitValue(text);
                    setCurrentUnitName(unit.name);
                  }
                }}
              />
              <Text style={styles.unitName}>{unit.name}</Text>
            </View>
          ))}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  view: { flex: 1, padding: 4 },
  title: { fontSize: 60, textTransform: 'capitalize' },
  unitContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  unitInput: {
    flex: 0.8,
    textAlign: 'right',
  },
  unitName: {
    flex: 0.2,
    fontSize: 20,
    color: 'gray',
    padding: 4,
  },
});
