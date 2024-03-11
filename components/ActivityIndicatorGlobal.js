import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'

const ActivityIndicatorGlobal = () => {
  return (
    <ActivityIndicator size="small" color={colors.main} animating   />
  )
}

export default ActivityIndicatorGlobal