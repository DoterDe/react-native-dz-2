import {Button, View, Text} from "react-native";

const Profile = ({navigation, route}) => {
  const {id, name} = route.params
  return (
    <View>
      <Text>Профиль</Text>
      <Text>{id} - {name}</Text>
      <Button title="Главная" onPress={()=>{navigation.navigate("Main")}}/>
    </View>
  );
};

export default Profile;
