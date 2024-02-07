import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './pages/Welcome';
import OnBoarding from './pages/OnBoarding';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import SignIn from './pages/login/SignIn';
import SignupSteps from './navigations/SignupSteps';
import HomeNavigation from './navigations/HomeNavigation';



export default function App() {
  const Stack = createStackNavigator();

  return (
   <NavigationContainer  >
    <StatusBar style='dark' />
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='home'>
        <Stack.Screen  name="welcome" component={Welcome} />
        <Stack.Screen  name="onboarding" component={OnBoarding} />
        <Stack.Screen  name="login" component={Login} />
        <Stack.Screen  name="signin" component={SignIn} />
        <Stack.Screen  name="signupsteps" component={SignupSteps} />
        <Stack.Screen  name="home" component={HomeNavigation} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}


