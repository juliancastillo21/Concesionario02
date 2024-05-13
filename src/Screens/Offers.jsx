import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Offers = () => {
  const offers = [
    { idOffers: 1, titleOffers: 'Oferta 1', 
      descriptionOffers: 'Encuentra tu compañero de viaje perfecto en este auto usado que combina calidad y precio',
      priceOffers: '$10000000',
      imageOffers: require('../../img/img1.jpg') },
    
    { idOffers: 2, titleOffers: 'Oferta 2',
      descriptionOffers: 'La oportunidad de tener un auto confiable a tu alcance está aquí con este auto usado en excelentes condiciones', 
      priceOffers: '$1200', 
      imageOffers: require('../../img/img2.jpg') },

    { idOffers: 3, titleOffers: 'Oferta 3', 
      descriptionOffers: 'Este auto usado te brinda la oportunidad de disfrutar la libertad y comodidad de un vehículo propio',
      priceOffers: '$800', 
      imageOffers: require('../../img/img3.jpg') },
  ];

  const navigation = useNavigation();

  const renderOffers = ({ item }) => (
    < View style={styles.offersContainer}>
      <Image source={item.imageOffers} style={styles.imageOffers} />
      <Text style={styles.titleOffers}>{item.titleOffers}</Text>
      <Text style={styles.descriptionOffers}>{item.descriptionOffers}</Text>
      <Text style={styles.priceOffers}>{item.priceOffers}</Text>
      <Button  mode="contained" onPress={() => navigation.navigate('Buy')} >
      Comprar
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Las Mejores Ofertas Para Ti</Text>
      <FlatList
       data={offers}
        renderItem={renderOffers}
        keyExtractor={(item, index) => index.toString()}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  offersContainer: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4, 
  },
  imageOffers: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  titleOffers: {
    marginTop: 10,
    fontSize: 20,
    color: '#000',
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  descriptionOffers: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    lineHeight: 24, // Aumenta el espacio entre líneas
  },
  priceOffers: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00913f',
  },
});

export default Offers;