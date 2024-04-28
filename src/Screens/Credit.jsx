import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text,Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Credit = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crédito para tu carro</Text>
      <Text style={styles.label}>Monto deseado ($)</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
      />
      <Text style={styles.info}>
        Ingresa el monto de credito que deseas solicitar.
        La solicitud de credito se enviara automaticamente al ingresar el monto.
      </Text>
      {navigation && (
        <Button icon="" mode="contained" onPress={() => navigation.navigate('Sure')}>
          Ir a la Siguiente Pantalla
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  info: {
    fontSize: 16,
  },
});

export default Credit;

