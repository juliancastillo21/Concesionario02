import React,{useState} from 'react';
import {View, Modal, StyleSheet,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text,Button } from 'react-native-paper';
import Sure from './Sure';

const SafeList = () => {
  const navigation = useNavigation(); 
  const [modalVisible, setModal] = useState(false);
  const [selectedSure, setSelectedSure] = useState(null);

  const ModalHome = () => {
    setModal(true);
  };

  const Modalclose = () => {
    setSelectedSure(null)
    setModal(false);
  };

  const [insurance] = useState([
    {
      name: "Seguro Básico",
      description: "Cubre daños a terceros y robo del vehículo.",
      worth: 1000000
    },
    {
      name: "Seguro Amplio",
      description: "Cubre daños a terceros, robo y daños propios del vehículo.",
      worth: 2000000
    },
    {
      name: "Seguro Premium",
      description: "Cubre daños a terceros, robo, daños propios y asistencia en carretera.",
      worth: 3000000
    }
  ]);
  
  return (
    <View>
      <ScrollView>
      <Text>
        comprar tu seguro para carros
      </Text>
      {insurance.map((sure) => (
        <Sure name={sure.name} description={sure.description} worth={sure.worth} setSelectedSure={setSelectedSure} openModal={ModalHome}/>
      ))}
       <Modal
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Seguro escogido:</Text>
          <View style={styles.container}>
          <Text style={styles.text}>{selectedSure?.name}</Text>
          <Text style={styles.text}>{selectedSure?.description}</Text>
          <Text style={styles.text}>{selectedSure?.worth}</Text>
          </View>
          <Button mode="contained" onPress={() => Modalclose()}  style={styles.button}>
           Gracias, cerrar.
          </Button>
        </View>
      </Modal>
      </ScrollView>
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
    height: "50%",
    width: "100%",
    padding: "5rem"
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10
  }
});
export default SafeList
