import React,{useState} from 'react';
import { StyleSheet, View, Modal  } from 'react-native';
import { Text,Button } from 'react-native-paper';

const Seemore = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const Modalinicio = () => {
    setModalVisible(true);
  };

  const Modalcerado = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button  mode="contained" onPress={Modalinicio} >
        Ver Mas Aqui
      </Button>
      <Modal
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalles Del Carro</Text>
          <Button mode="contained" onPress={Modalcerado} >
            Cerar Ventana 
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  modalContainer: {
  },
  modalTitle: {
  }
});

export default Seemore;
