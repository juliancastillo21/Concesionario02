import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Catalogue from './Catalogue';


const Home = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Nuestro Catálogo</Text>
      <TextInput
        label="Buscar..."
        style={styles.entradaBusqueda}
      />
      <Catalogue/>
      {navigation && (
        <Button mode="contained" onPress={() => navigation.navigate('Offer')}>
          Ir a la Siguiente Pantalla
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entradaBusqueda: {
    marginBottom: 20,
  },
});

export default Home;