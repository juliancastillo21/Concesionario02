import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';

const AboutUs = ({ navigation }) => {
  const GoBack = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre Nosotros</Text>
      
      <Button  mode="contained" onPress={GoBack}>
        <Text style={styles.backButtonText}>Ir Al Inicio</Text>
      </Button>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Misión:</Text>
        <Text style={styles.content}>Nuestra misión es brindar a nuestros clientes la mejor experiencia en la compra de vehículos,
        ofreciendo productos y servicios de alta calidad y manteniendo los más altos estándares de satisfacción del cliente.</Text>
        <Image source={require('../../img/img4.png')} style={styles.image} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visión:</Text>
        <Text style={styles.content}>Nuestra visión es ser reconocidos como el concesionario líder en la región, 
        conocido por nuestra integridad, excelencia en el servicio al cliente y compromiso con la comunidad.</Text>
        <Image source={require('../../img/img5.jpg')} style={styles.image} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Valores:</Text>
        <Text style={styles.content}>- Excelencia: Nos esforzamos por alcanzar la excelencia en todo lo que hacemos,
        desde el servicio al cliente hasta la calidad de nuestros productos y servicios.</Text>
        <Text style={styles.content}>- Integridad: Actuamos con honestidad, transparencia y ética en todas nuestras relaciones y transacciones.</Text>
        <Text style={styles.content}>- Compromiso: Estamos comprometidos con la satisfacción del cliente,
        el desarrollo profesional de nuestros empleados y el crecimiento sostenible de nuestro negocio.</Text>
        <Image source={require('../../img/img6.jpg')} style={styles.image} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objectives:</Text>
        <Text style={styles.content}>- Proporcionar un servicio al cliente excepcional en cada interacción.</Text>
        <Text style={styles.content}>- Ampliar nuestra gama de productos y servicios para satisfacer las necesidades cambiantes de nuestros clientes..</Text>
        <Text style={styles.content}>- Manténgase a la vanguardia de la tecnología y las tendencias de la industria automotriz..</Text>
        <Image source={require('../../img/img7.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#9F4A80',
  },
  backButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    padding:7,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#9F4A80',
    
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    color:'#030303',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default AboutUs;
