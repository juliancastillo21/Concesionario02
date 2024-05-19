import React, { useContext, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Button, TextInput, Paragraph, Card, CardActions} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CatalogueContext from '../../context/catalogue/catalogueContext';

const Credit = () => {
  const { NuestroCatalogue, guardarCompra } = useContext(CatalogueContext);
  const { price = 0 } = NuestroCatalogue ?? {};
  const navigation = useNavigation();

  const [cantidad, setCantidad] = useState(1);

  // Verificar si hay datos en NuestroCatalogue
  if (!price) {
    return (
      <View>
        <Paragraph>No hay datos disponibles</Paragraph>
      </View>
    );
  }

  const total = price * cantidad;

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const confirmarCompra = () => {
    Alert.alert(
      '¿Desea confirmar la compra',
      'Recuerde, después de confirmada la compra no se puede modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            // Almacenar la compra, a la compra principal
            const compra = { ...NuestroCatalogue, cantidad, total };
            guardarCompra(compra);
            // Navegar hacia resumen
            navigation.navigate('ResumenCompra');
          },
        },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cantidad</Text>
      <View style={styles.quantityContainer}>
        <Button mode="contained" onPress={decrementar}>
          -
        </Button>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          value={cantidad.toString()}
          onChangeText={(value) => setCantidad(parseInt(value, 10))}
        />
        <Button mode="contained" onPress={incrementar}>
          +
        </Button>
      </View>
      <Text style={styles.totalText}>Total: ${total}</Text>
      <Button mode="contained" onPress={confirmarCompra}>
        Confirmar compra
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityInput: {
    flex: 1,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Credit;