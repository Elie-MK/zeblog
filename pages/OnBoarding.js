import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Onboarding from '../components/Onboarding'
import { colors } from '../utilities/Color'

const OnBoarding = () => {
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.white }}>
      <Onboarding />
    </SafeAreaView>
  )
}

export default OnBoarding