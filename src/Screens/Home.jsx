import React, { Fragment, useContext, useEffect } from 'react';
import { View, StyleSheet,ScrollView,Image } from 'react-native';
import { Text, TextInput, Button, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Catalogue from './Catalogue';
import FirebaseContext from '../../context/firebase/firebaseContext';




const Home = () => {
  const navigation = useNavigation();
  const { Catalogues, obtenercatalogue } = useContext(FirebaseContext)

  useEffect(() => {
    obtenercatalogue();
  },[]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Nuestro Catálogo</Text>
      <TextInput
        label="Buscar..."
        style={styles.entradaBusqueda}
      />
      <ScrollView>
      <View>
        {Catalogues.map((NuestroCatalogue,i) => {
          const { description, id, name, price, urlImagen } = NuestroCatalogue
          return (
            <Fragment key={id}>
                <Text>{name}</Text>
                <Text>{description}</Text>
                <Text>{price}</Text>
                <Image source={{uri:urlImagen}} />
                
            </Fragment>
          )
        }
        )}
      </View>
      </ScrollView>
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