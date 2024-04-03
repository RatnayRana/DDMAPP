import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartingPage from './screens/StartingPage';
import Home from './screens/Home';
import UserAccount from './screens/UserAccount';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor=' rgb(255,255,255)' barStyle="dark-content" />
    <Stack.Navigator>
      <Stack.Screen name="UserAccount" component={UserAccount} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
