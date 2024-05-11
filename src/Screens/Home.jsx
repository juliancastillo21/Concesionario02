import React, { Fragment, useContext, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, TextInput, Button, List, Avatar, Card } from 'react-native-paper';
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
    <ScrollView>
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
                  <Card.Cover source={{ uri: urlImagen }} />
                  <Text>{name}</Text>
                  <Text>{description}</Text>
                  <Text>{price}</Text>
                  <Button mode="contained" onPress={() => navigation.navigate('Buy')}>
                   Detalle
                  </Button>
                </Card>
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
    </ScrollView>
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