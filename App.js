import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './pages/Welcome';
import OnBoarding from './pages/OnBoarding';
import SignIn from './pages/login/SignIn';



export default function App() {
  const Stack = createStackNavigator();

  return (
   <NavigationContainer  >
    <StatusBar style='dark' />
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="welcome" component={Welcome} />
        <Stack.Screen  name="onboarding" component={OnBoarding} />
        <Stack.Screen  name="signin" component={SignIn} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}


