import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import CatalogueContext from '../../context/catalogue/catalogueContext';

const Summary = () => {
  const { NuestroCatalogue,mostrarResumen } = useContext(CatalogueContext);

  // Verificar si hay datos en NuestroCatalogue
  if (!NuestroCatalogue) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No hay datos disponibles</Text>
      </View>
    );
  }

  const { description, id, name, price, urlImagen } = NuestroCatalogue;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>Resumen de la compra</Text>
        <Image source={{ uri: urlImagen }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>ID: {id}</Text>
          <Text style={styles.text}>Nombre: {name}</Text>
          <Text style={styles.text}>Price: ${price}</Text>
          <Text style={styles.text}>Descripción: {description}</Text>
          <Text style={styles.text}>Cantidad: 1</Text>
          <Text style={styles.text}>Total: ${price}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 8,
  },
});

export default Summary;