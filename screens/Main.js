import { Button, View, Text, StyleSheet } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главная страница</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Инфа" 
          onPress={() => {
            navigation.navigate("Infa", {
              phone: 877777777,
              name: 'Alex',
              email: 'chil.dima@gmail.com'
            });
          }} 
        />
        <View style={styles.spacer} />
        <Button 
          title="Счет" 
          onPress={() => {
            navigation.navigate("Counter");
          }} 
        />
        <View style={styles.spacer} />
        <Button 
          title="Помощь" 
          onPress={() => {
            navigation.navigate("Help");
          }} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', 
    justifyContent: 'center',   
    alignItems: 'center',       
    padding: 20,                
  },
  title: {
    fontSize: 32,               
    fontWeight: 'bold',         
    marginBottom: 30,           
    color: '#333',              
  },
  buttonContainer: {
    width: '100%',              
    paddingHorizontal: 20,      
  },
  spacer: {
    height: 15,                 
  },
});

export default Main;
