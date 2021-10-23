import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Grid from '../components/Grid';
import CategoryButton from './../components/CategoryButton';

const CategoriesScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Title style={styles.title}>Units</Title>
      <Title style={styles.title}>Calculator</Title>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <CategoryButton />
          </Grid.Col>
          <Grid.Col>
            <CategoryButton />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <CategoryButton />
          </Grid.Col>
          <Grid.Col>
            <CategoryButton />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <CategoryButton />
          </Grid.Col>
          <Grid.Col>
            <CategoryButton />
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
