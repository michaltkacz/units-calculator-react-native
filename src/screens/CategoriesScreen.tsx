import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { RootStackCategoriesProps, Routes } from '../stacks/RootStackScreen';
import { UnitsCategories } from '../data/unitsSchema';

const CategoriesScreen: React.FC<RootStackCategoriesProps> = ({
  navigation,
}) => {
  return (
    <View>
      <List.Section>
        <List.Item
          titleStyle={styles.listItemTitle}
          title={UnitsCategories.Length}
          left={() => (
            <Icon name='straighten' color='#000' style={styles.listItemIcon} />
          )}
          onPress={() =>
            navigation.navigate(Routes.Calculator, {
              unitsCategory: UnitsCategories.Length,
            })
          }
        />
        <List.Item
          titleStyle={styles.listItemTitle}
          title={UnitsCategories.Area}
          left={() => (
            <Icon name='square-foot' color='#000' style={styles.listItemIcon} />
          )}
          onPress={() =>
            navigation.navigate(Routes.Calculator, {
              unitsCategory: UnitsCategories.Area,
            })
          }
        />
        <List.Item
          titleStyle={styles.listItemTitle}
          title={UnitsCategories.Volume}
          left={() => (
            <Icon name='opacity' color='#000' style={styles.listItemIcon} />
          )}
          onPress={() =>
            navigation.navigate(Routes.Calculator, {
              unitsCategory: UnitsCategories.Volume,
            })
          }
        />
        <List.Item
          titleStyle={styles.listItemTitle}
          title={UnitsCategories.Mass}
          left={() => (
            <Icon
              name='fitness-center'
              color='#000'
              style={styles.listItemIcon}
            />
          )}
          onPress={() =>
            navigation.navigate(Routes.Calculator, {
              unitsCategory: UnitsCategories.Mass,
            })
          }
        />
        <List.Item
          titleStyle={styles.listItemTitle}
          title={UnitsCategories.Time}
          left={() => (
            <Icon name='timer' color='#000' style={styles.listItemIcon} />
          )}
          onPress={() =>
            navigation.navigate(Routes.Calculator, {
              unitsCategory: UnitsCategories.Time,
            })
          }
        />
        <List.Item
          titleStyle={styles.listItemTitle}
          title={UnitsCategories.Speed}
          left={() => (
            <Icon name='speed' color='#000' style={styles.listItemIcon} />
          )}
          onPress={() =>
            navigation.navigate(Routes.Calculator, {
              unitsCategory: UnitsCategories.Speed,
            })
          }
        />
        <List.Item
          titleStyle={styles.listItemTitle}
          title={UnitsCategories.Temperature}
          left={() => (
            <Icon
              name='device-thermostat'
              color='#000'
              style={styles.listItemIcon}
            />
          )}
          onPress={() =>
            navigation.navigate(Routes.Calculator, {
              unitsCategory: UnitsCategories.Temperature,
            })
          }
        />
      </List.Section>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  listItemTitle: {
    textTransform: 'capitalize',
  },
  listItemIcon: { fontSize: 32, paddingLeft: 12 },
});
