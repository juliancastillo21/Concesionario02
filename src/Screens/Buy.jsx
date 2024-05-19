import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, Title, Paragraph, Button,Text } from "react-native-paper";
import CatalogueContext from "../../context/catalogue/catalogueContext";
import { View, StyleSheet, Image } from "react-native";

const Buy = () => {
  const navigation = useNavigation();
  const { NuestroCatalogue } = useContext(CatalogueContext);

  // Verificar si hay datos en NuestroCatalogue
  if (!NuestroCatalogue) {
    return (
      <View style={styles.container}>
        <Paragraph style={styles.noDataText}>No hay datos disponibles</Paragraph>
      </View>
    );
  }

  const { description, id, name, price, urlImagen,cylinder,MaximumPower,Torque, TankCapacity} = NuestroCatalogue;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image source={{ uri: urlImagen }} style={styles.image} />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{name}</Title>
          <Paragraph style={styles.description}>{description}</Paragraph>
          <Paragraph style={styles.price}>${price}</Paragraph>
        </Card.Content>
      </Card>
      <Card style={[styles.specCard, { backgroundColor: "black" }]}>
        <Card.Content style={styles.specCardContent}>
          <Text style={styles.titleEs}>Especificaciones</Text>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Cilindrada:</Text>
            <Text style={styles.specValue}>{cylinder}</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Potencia Máxima:</Text>
            <Text style={styles.specValue}>{MaximumPower}</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Torque:</Text>
            <Text style={styles.specValue}>{Torque}</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Capacidad Tanque:</Text>
            <Text style={styles.specValue}>{TankCapacity}</Text>
          </View>
        </Card.Content>
      </Card>
      <Card.Actions style={styles.cardActions}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Offer", { itemId: id })}
          style={styles.button}
        >
          Ir a la Siguiente Pantalla
        </Button>
      </Card.Actions>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "90%",
    marginVertical: 10,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00913f',
  },
  specCard: {
    width: "90%",
    marginVertical: 10,
    elevation: 5,
  },
  specCardContent: {
    padding: 16,
  },
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  specLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  specValue: {
    color: "white",
    fontSize: 16,
  },
  cardActions: {
    justifyContent: "center",
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#2196f3",
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#808080",
  },
  titleEs: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
    textTransform: 'uppercase',
  },
});

export default Buy;