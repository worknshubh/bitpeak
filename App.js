import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Getstartedscreen from './screens/getStartedscreen';
import Drawermenu from './screens/drawerMenu';
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
          name="drawerScreen"
          component={Drawermenu}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
