import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CategoryButtonProps {
  title: string;
  icon: string;
  onPress?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={icon} size={96} color='#000' />
      <Text style={styles.buttonText}>{title}</Text>
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
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    textTransform: 'uppercase',
  },
});
