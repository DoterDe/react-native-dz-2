import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Infa = ({ navigation, route }) => {
  const { phone, name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Контакты</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Телефон: {phone}</Text>
        <Text style={styles.infoText}>Имя: {name}</Text>
        <Text style={styles.infoText}>Email: {email}</Text>
      </View>
      
      <Button
        title="Главная"
        onPress={() => {
          navigation.navigate('Main');
        }}
        color="#007BFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
    width: '100%',
    maxWidth: 350, 
  },
  infoText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
});

export default Infa;
