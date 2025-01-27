import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View} from "react-native";
import Main from "./screens/Main";
import Infa from "./screens/Infa";
import Profile from './screens/Profile';
import Counter from './screens/Counter';
import Routing from './screens/Routing';
import Help from './screens/Help';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{
            title: 'Главная',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <Main {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="Infa"
          options={{
            title: 'Инфа',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <Infa {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="Profile"
          options={{
            title: 'Профиль',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <Profile {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="Counter"
          options={{
            title: 'Счет',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <Counter {...props}/>
          </View>
          }
        />
        <Stack.Screen
          name="Help"
          options={{
            title: 'Помощь',
            headerStyle: {
              backgroundColor: '#2098a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={(props)=><View>
            <Help {...props}/>
          </View>
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
