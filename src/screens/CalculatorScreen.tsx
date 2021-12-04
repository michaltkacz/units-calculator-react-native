import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, TextInput } from 'react-native-paper';

import DropDown from 'react-native-paper-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { RootStackCalculatorProps } from '../stacks/RootStackScreen';

import unitsSchema, {
  TemperatureConversions,
  temperatureFunctions,
  Unit,
  UnitsCategories,
  UnitsCollection,
} from '../data/unitsSchema';

const CalculatorScreen: React.FC<RootStackCalculatorProps> = ({ route }) => {
  const unitsCategory = route.params.unitsCategory as UnitsCategories;
  const unitsCollection = unitsSchema[unitsCategory] as UnitsCollection;

  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const [baseUnitName, setBaseUnitName] = useState<string>(
    unitsCollection[0].name
  );
  const [baseUnitValue, setBaseUnitValue] = useState<string>('0');

  const calculateValue = (
    fromUnitName: string,
    toUnitName: string
  ): string | null => {
    if (fromUnitName === toUnitName) {
      return null;
    }

    if (baseUnitValue === '') {
      return '';
    }

    const currentUnitValueFloat = parseFloat(baseUnitValue);

    if (unitsCategory === UnitsCategories.Temperature) {
      const keyString = fromUnitName + toUnitName;
      const keyEnum = keyString as keyof typeof TemperatureConversions;

      return temperatureFunctions[keyEnum](currentUnitValueFloat).toFixed(9);
    }

    const fromUnitFactor = unitsCollection.filter(
      (unit) => unit.name === fromUnitName
    )[0].value;

    const toUnitFactor = unitsCollection.filter(
      (unit) => unit.name === toUnitName
    )[0].value;

    const returnUnitValueFloat =
      (currentUnitValueFloat * fromUnitFactor) / toUnitFactor;
    return returnUnitValueFloat.toFixed(9);
  };

  return (
    <View>
      <KeyboardAwareScrollView>
        <View style={styles.inputView}>
          <TextInput
            style={styles.unitValueInput}
            mode='flat'
            keyboardType='numeric'
            defaultValue={baseUnitValue}
            onChangeText={(text) => {
              if (text === '') {
                setBaseUnitValue('');
                return;
              }
              // if is a float number
              if (/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/.test(text)) {
                setBaseUnitValue(text);
              }
            }}
          />
          <View style={styles.unitDropDown}>
            <DropDown
              mode='flat'
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={baseUnitName}
              setValue={setBaseUnitName}
              list={Object.values(unitsCollection).map((unit) => {
                return { label: unit.name, value: unit.name };
              })}
            />
          </View>
        </View>

        <List.Section>
          {unitsCollection.map((unit: Unit, index) => {
            if (baseUnitName === unit.name) {
              return null;
            }
            return (
              <List.Item
                key={`unit-row-${index}`}
                title={calculateValue(baseUnitName, unit.name)}
                titleStyle={styles.listItemValue}
                right={() => (
                  <Text style={styles.listItemUnit}>{unit.name}</Text>
                )}
              />
            );
          })}
        </List.Section>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  inputView: { flexDirection: 'row' },

  unitValueInput: {
    flex: 7,
    textAlign: 'right',
    color: '#000000',
  },
  unitDropDown: {
    flex: 3,
    color: '#000000',
  },
  listItemValue: {
    textAlign: 'right',
    marginTop: -12,
    marginBottom: -12,
    fontSize: 20,
  },
  listItemUnit: {
    fontSize: 20,
    minWidth: 105,
    textAlignVertical: 'center',
    paddingLeft: 16,
    color: '#616161',
  },
});
