import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
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

  const { description, id, name, price, urlImagen } = NuestroCatalogue;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image source={{ uri: urlImagen }} style={styles.image} />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{name}</Title>
          <Paragraph style={styles.description}>{description}</Paragraph>
          <Paragraph style={styles.price}>${price}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Offer", { itemId: id })}
            style={styles.button}
          >
            Ir a la Siguiente Pantalla
          </Button>
        </Card.Actions>
      </Card>
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
    marginVertical: 20,
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
  },
  price: {
    fontWeight: "bold",
  },
  cardActions: {
    justifyContent: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2196f3",
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#808080",
  },
});

export default Buy;