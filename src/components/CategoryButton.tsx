import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CategoryButton = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log('Pressed')}
    >
      <Image
        style={styles.buttonIcon}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <Text style={styles.buttonText}>CATEGORY</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 4,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
  },

  buttonIcon: { width: 96, height: 96 },
  buttonText: { fontSize: 20, fontWeight: 'bold', color: 'purple' },
});
