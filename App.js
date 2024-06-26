import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./pages/Welcome";
import OnBoarding from "./pages/OnBoarding";
import Login from "./pages/login/Login";
import SignIn from "./pages/login/SignIn";
import SignupSteps from "./navigations/SignupSteps";
import HomeNavigation from "./navigations/HomeNavigation";
import { colors } from "./utilities/Color";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colors.white },
          }}
          initialRouteName="welcome"
        >
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="onboarding" component={OnBoarding} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signin" component={SignIn} />
          <Stack.Screen name="signupsteps" component={SignupSteps} />
          <Stack.Screen name="home" component={HomeNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
