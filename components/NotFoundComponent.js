import { View, Text, Image } from 'react-native'
import React from 'react'

const NotFoundComponent = () => {
  return (
    <View>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../assets/images/notfound.png")}
            />
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Not Found
              </Text>
              <Text
                style={{ textAlign: "center", marginTop: 20, fontSize: 18 }}
              >
                We're sorry, the keyword you were looking for could not be
                found. Please search with another keyworkds.
              </Text>
            </View>
          </View>
        </View>
        
    </View>
  )
}

export default NotFoundComponent