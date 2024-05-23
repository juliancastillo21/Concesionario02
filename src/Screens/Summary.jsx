import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import CatalogueContext from '../../context/catalogue/catalogueContext';

const Summary = () => {
  const { NuestroCatalogue, total, cantidad } = useContext(CatalogueContext);

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
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Resumen de la compra</Text>
          <Image source={{ uri: urlImagen }} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>
              <Text style={styles.detailLabel}>ID:</Text> {id}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.detailLabel}>Nombre:</Text> {name}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.detailLabel}>Precio Del Carro Seleccionado:</Text> ${price}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.detailLabel}>Descripción:</Text> {description}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.detailLabel}>Cantidad:</Text> {cantidad}
            </Text>
            <Text style={styles.totalText}>
              <Text style={styles.detailLabel}>Total De La Compra:</Text> ${total}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    fontFamily: 'Arial', // Puedes cambiar la fuente según tus preferencias
    textAlign: 'center',
  },
  detailsContainer: {
    marginVertical: 16,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 8,
    color: '#555',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginVertical: 16,
  },
});

export default Summary;