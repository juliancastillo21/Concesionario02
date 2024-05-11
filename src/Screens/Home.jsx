import React, { Fragment, useContext, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Catalogue from './Catalogue';
import FirebaseContext from '../../context/firebase/firebaseContext';

const Home = () => {
  const navigation = useNavigation();
  const { Catalogues, obtenercatalogue } = useContext(FirebaseContext)

  useEffect(() => {
    obtenercatalogue();
  }, []);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Nuestro Catálogo</Text>
      <TextInput
        label="Buscar..."
        style={styles.entradaBusqueda}
      />
      
        <View>
          {Catalogues.map((NuestroCatalogue, i) => {
            const { description, id, name, price, urlImagen } = NuestroCatalogue
            return (
              
              <Fragment key={id}>
                <Card>
                  <Card.Cover source={{ uri:urlImagen }} />
                </Card>
                <Text>{name}</Text>
                <Text>{description}</Text>
                <Text>{price}</Text>
              </Fragment>
            )
          }
          )}
        </View>
      
      {navigation && (
        <Button mode="contained" onPress={() => navigation.navigate('Offer')}>
          Ir a la Siguiente Pantalla
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    padding: 20, 
    backgroundColor: '#f5f5f5', 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginBottom: 10, 
  },
  entradaBusqueda: {
    marginBottom: 10, 
  },
  productImage: {
    width: '100%', 
    aspectRatio: 1, 
    marginBottom: 10, 
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'center', 
  },

  productDescription: {
    fontSize: 16, 
    marginBottom: 5, 
  },
  productPrice: {
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#00913f', 
    textAlign: 'center', 
  buttonContainer: { 
    marginTop: 20, 
  },
  navigationButton: { 
    backgroundColor: '#4CAF50', 
  }},
});


export default Home;