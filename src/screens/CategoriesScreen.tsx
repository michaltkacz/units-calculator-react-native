import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Title } from 'react-native-paper';

import { RootStackCategoriesProps, Routes } from '../stacks/RootStackScreen';
import Grid from '../components/Grid';
import CategoryButton from './../components/CategoryButton';
import { UnitsCategories } from '../data/unitsSchema';

const CategoriesScreen: React.FC<RootStackCategoriesProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.view}>
      <Title style={styles.title}>Units Calculator</Title>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <CategoryButton
              title='length'
              icon='straighten'
              onPress={() =>
                navigation.navigate(Routes.Calculator, {
                  unitsCategory: UnitsCategories.Length,
                })
              }
            />
          </Grid.Col>
          <Grid.Col>
            <CategoryButton
              title='area'
              icon='square-foot'
              onPress={() =>
                navigation.navigate(Routes.Calculator, {
                  unitsCategory: UnitsCategories.Area,
                })
              }
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <CategoryButton
              title='volume'
              icon='opacity'
              onPress={() =>
                navigation.navigate(Routes.Calculator, {
                  unitsCategory: UnitsCategories.Volume,
                })
              }
            />
          </Grid.Col>
          <Grid.Col>
            <CategoryButton
              title='mass'
              icon='fitness-center'
              onPress={() =>
                navigation.navigate(Routes.Calculator, {
                  unitsCategory: UnitsCategories.Mass,
                })
              }
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <CategoryButton
              title='time'
              icon='timer'
              onPress={() =>
                navigation.navigate(Routes.Calculator, {
                  unitsCategory: UnitsCategories.Time,
                })
              }
            />
          </Grid.Col>
          <Grid.Col>
            <CategoryButton
              title='speed'
              icon='speed'
              onPress={() =>
                navigation.navigate(Routes.Calculator, {
                  unitsCategory: UnitsCategories.Speed,
                })
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  view: { flex: 1, padding: 4 },
  title: { fontSize: 60, paddingTop: 30 },
});
