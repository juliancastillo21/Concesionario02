import React, {useState} from 'react'
import {View, Modal,ScrollView} from 'react-native';
import { StyleSheet,Image,Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Buy = ({route}) => {
  const navigation = useNavigation(); 
  if (!route || !route.params) {
    return <Text>Error: Parámetros de ruta no encontrados.</Text>;
  }

  const [modalVisible, setModalVisible] = useState(0);

  const Modalhome = () => {
    setModalVisible(true);
  };

  const Modalclose = () => {
    setModalVisible(false);
  };

  const navigateToInsurance = () => {
    Modalclose()
    navigation.navigate('Sure');
  };

  
  const {  urlImagen,
    description,
    price,
    name } = route?.params;
  return (
    <ScrollView>
    <View>
    <View style={styles.container}>
        <Text>
           Carro a comprar
        </Text>
        <View>
          <Image
              source={{uri:urlImagen,}}
              style={styles.img}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{description}</Text>
            <Text style={styles.price}>$ {price}</Text>
          </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.title}>Datos de envio</Text>
      <TextInput
        label="Nombre"
        style={styles.input}
      />
      <TextInput
        label="Pais"
        style={styles.input}
      />
      <TextInput
        label="Direccion"
        style={styles.input}
      /> 
      <Button icon="" mode="contained" onPress={() =>Modalhome()}>Comprar    </Button>
      </View>
         
    </View>
    <Modal
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Felicidades carro comprado</Text>
          <View style={styles.buttonStyle}>
          <Button mode="contained" onPress={() =>navigateToInsurance()} >
          Muestrame los seguros
          </Button>

          </View>
          <Button mode="contained" onPress={() => Modalclose()}  style={styles.button}>
           No, no quiero seguro. Terminar compra.
          </Button>
        </View>
      </Modal>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff', 
    borderRadius: 5, 
    shadowColor: '#000',
    height: "100%"
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
  modalTitle: {
    fontSize: 20,
    color: '#333', 
    marginBottom: 5,
    marginLeft: "20%"
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#4CAF50',
  },
 input: {
    width: 250,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  modalContainer: {
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    height: "100%",
    width: "100%",
    padding: "5rem"
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10
  }
});
export default Buy
