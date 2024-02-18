import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/login/SignUp';
import ChooseCountry from '../screens/ChooseCountry';
import ChooseTopics from '../screens/ChooseTopics';
import DiscoverPeople from '../screens/DiscoverPeople';

const SignupSteps = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='choosecountry'>
                <Stack.Screen name='choosecountry' component={ChooseCountry} />
                <Stack.Screen  name="choosetopics" component={ChooseTopics} />
                <Stack.Screen  name="discoverPeople" component={DiscoverPeople} />
                <Stack.Screen  name="signup" component={SignUp} />
    </Stack.Navigator>
  )
}

export default SignupSteps