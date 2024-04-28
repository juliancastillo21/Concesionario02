import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Text,Button } from 'react-native-paper';

const Sure = ({ name, description, worth, setSelectedSure, openModal }) => {
  const handleSeguroClick = ({name, description, worth}) => { 
    setSelectedSure({name, description, worth});
    openModal();
  }

  return (
    <View style={styles.seguroContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.worth}>Valor: $ {worth}</Text>
      <Button onPress={() => handleSeguroClick({name, description, worth})}>Seleccionar</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  seguroContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  worth: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Sure;
