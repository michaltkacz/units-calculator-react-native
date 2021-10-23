import React from 'react';
import { StyleSheet, View } from 'react-native';

const Grid: React.FC & {
  Row: React.FunctionComponent;
  Col: React.FunctionComponent;
} = ({ children }) => {
  return <View style={styles.grid}>{children}</View>;
};

const GridRow: React.FC = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

const GridCol: React.FC = ({ children }) => {
  return <View style={styles.col}>{children}</View>;
};

Grid.Row = GridRow;
Grid.Col = GridCol;

export default Grid;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 4,
  },

  col: {
    flex: 1,
  },
});
