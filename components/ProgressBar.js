import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../utilities/Color'
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from "react-native-reanimated"

const ProgressBar = ({step}) => {
    const progress = useSharedValue(0);

    const progressStyle = useAnimatedStyle(() => {
        return {
            width: `${progress.value}%`
        };
    });

    useEffect(() => {
        progress.value = withTiming(step, { duration: 2000 });
    }, [step]);

  return (
    <View>
        <Animated.View style={{width:300, height: 10, backgroundColor:colors.lightGray, borderRadius: 10}}>
            <Animated.View style={[{ height: 10, backgroundColor:colors.main, borderRadius: 10}, progressStyle]} />
        </Animated.View>
    </View>
  )
}

export default ProgressBar