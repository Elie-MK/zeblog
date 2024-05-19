import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'
import { Button } from '@rneui/base'
import { Image } from 'react-native'
import { WidthScreen } from '../utilities/Platform'

const AnnounceHome = () => {
  return (
    <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <View>
            <View>
              <Image
                style={{ width: WidthScreen, height: 190, borderRadius: 22 }}
                source={require("../assets/images/announce.png")}
              />
            </View>
            <View
              style={{
                position: "absolute",
                marginTop: 145,
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
              <Button
                buttonStyle={{
                  backgroundColor: colors.white,
                  padding: 5,
                  borderRadius: 7,
                }}
                titleStyle={{
                  color: colors.main,
                  fontSize: 12,
                }}
                title="Read more"
              />
            </View>
          </View>
        </View>
  )
}

export default AnnounceHome