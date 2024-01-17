import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Onboarding from '../components/Onboarding'
import { colors } from '../utilities/Color'

const OnBoarding = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.white }}>
      <Onboarding navigation={navigation} />
    </SafeAreaView>
  )
}

export default OnBoarding