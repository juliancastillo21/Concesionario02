import React from 'react'
import Seemore from './Seemore';
import { StyleSheet, View,Image,Text } from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';

const Vehicle = ({urlImagen,description,price,name,onShowMore}) => {
  const navigation = useNavigation(); 

  function buyCar (urlImagen,description,price,name) {
    navigation.navigate('Buy',  {
      urlImagen,
      description,
      price,
      name
    });
    console.log(firebase)
  }

  return (
    <View style={styles.container}>
        <Image
            source={{uri:urlImagen,}}
            style={styles.img}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{description}</Text>
          <Text style={styles.price}>$ {price}</Text>

          <Seemore onPress={onShowMore} />
          <Button onPress={() => buyCar(urlImagen,description,price,name)}>Comprar</Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff', 
      borderRadius: 5, 
      shadowColor: '#000',
    },
    img: {
      width: 250,
      height: 200,
      marginBottom: 10, 
      borderWidth: 2, 
      borderColor: 'black', 
    },
    infoContainer: {
      alignItems: 'center', 
    },
    title: {
      fontSize: 20,
      color: '#333', 
      marginBottom: 5, 
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold', 
      color: '#4CAF50',
    },
  });

export default Vehicle