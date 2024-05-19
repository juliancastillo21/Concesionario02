import React, { Fragment, useContext, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../../context/firebase/firebaseContext';
import CatalogueContext from '../../context/catalogue/catalogueContext';

const Home = () => {
  const navigation = useNavigation();
  const { Catalogues, obtenercatalogue } = useContext(FirebaseContext);

  const { seleccionarProducto } = useContext(CatalogueContext);

  useEffect(() => {
    obtenercatalogue();
  }, []);

  const handleSelectProduct = (product) => { 
    console.log('product: ', product);
    seleccionarProducto(product);
    navigation.navigate('Buy');
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Nuestro Catálogo</Title>
      <TextInput
        style={styles.searchInput}
        label="Buscar..."
        mode="outlined"
        underlineColor="transparent"
      />
      {Catalogues.map((NuestroCatalogue, i) => {
        const { description, id, name, price, urlImagen } = NuestroCatalogue;
        return (
          <Card key={id} style={styles.productCard} elevation={2}>
            <Card.Cover source={{ uri: urlImagen }} style={styles.productImage} />
            <Card.Content>
              <Title style={styles.productName}>{name}</Title>
              <Paragraph style={styles.productDescription} numberOfLines={2}>{description}</Paragraph>
              <Paragraph style={styles.productPrice}>${price}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => handleSelectProduct(NuestroCatalogue) }>
                Detalle
              </Button>
            </Card.Actions>
          </Card>
        );
      })}
      {navigation && (
        <Button
          mode="contained"
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Offer')}
        >
          Ir a la Siguiente Pantalla
        </Button>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    marginBottom: 16,
  },
  productCard: {
    marginBottom: 16,
  },
  productImage: {
    width: '100%', 
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00913f',
  },
  navigationButton:{
    marginTop: 5,
    marginBottom: 25
  }
});
export default Home;