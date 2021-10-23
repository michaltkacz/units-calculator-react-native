import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Title } from 'react-native-paper';

import { RootStackCategoriesProps, Routes } from '../stacks/RootStackScreen';
import Grid from '../components/Grid';
import CategoryButton from './../components/CategoryButton';

const CategoriesScreen: React.FC<RootStackCategoriesProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.view}>
      <Title style={styles.title}>Units</Title>
      <Title style={styles.title}>Calculator</Title>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <CategoryButton
              title='length'
              icon='straighten'
              onPress={() =>
                navigation.navigate(Routes.Calculator, {
                  categoryType: 'length',
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
                  categoryType: 'area',
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
                  categoryType: 'volume',
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
                  categoryType: 'mass',
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
                  categoryType: 'time',
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
                  categoryType: 'speed',
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
