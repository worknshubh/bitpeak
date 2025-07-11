import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Getstartedscreen from './screens/getStartedscreen';
import Drawermenu from './screens/drawerMenu';
import Graphscreen from './screens/maingraphs';
import primary_color from './components/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Searchmenu from './screens/searchScreen';
import Signup from './screens/signupScreen';
import Login from './screens/loginScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="getStartedscreen"
          component={Getstartedscreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="drawerScreen"
          component={Drawermenu}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="graphScreen"
          component={Graphscreen}
          options={{
            headerTitle: 'About Coin',
            headerStyle: {
              backgroundColor: primary_color,
            },
            headerTintColor: 'white',
            headerTitleStyle: { fontFamily: 'Kanit-Regular', fontSize: 25 },
            headerShadowVisible: true,
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="SearchScreen"
          component={Searchmenu}
          options={{
            headerTitle: 'Search Menu',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: primary_color },
            headerTitleStyle: { fontFamily: 'Kanit-Regular', fontSize: 25 },
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
