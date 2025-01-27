import React , {useEffect , useState} from "react";
import {View , Text, FlatList , ActivityIndicator , StyleSheet} from "react-native";

const Routing = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);

            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
    };
    if (error){
        return (
            <View style={styles.container}>
                <Text>Error:{error.message}</Text>
            </View>
        )
    };
    return(
        <View style = {styles.container}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.body}</Text>
                </View>
              )}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
      padding: 10,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 15,
      marginVertical: 10,
      elevation: 5, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      width: '100%',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
    text: {
      fontSize: 14,
      color: '#555',
    },
  });

export default Routing;