import { View, Text } from 'react-native'
import React from 'react'
import {  Button } from "@rneui/themed";
import { colors } from '../utilities/Color';

const ItemGlobalModal = ({  onPressCancel, 
    onPressConfirm,}) => {
  return (
    <View>
      <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              fontWeight: "bold",
              lineHeight: 30,
            }}
          >
            Are you sure you want to delete this articles?{" "}
          </Text>

          <View style={{ flexDirection: "row", gap: 10, marginTop:20 }}>
            <Button
              containerStyle={{ width: 200 }}
              titleStyle={{ color: colors.main, fontWeight: "800" }}
              buttonStyle={{
                padding: 15,
                backgroundColor: colors.second,
                borderRadius: 20,
              }}
              title="Cancel"
              onPress={onPressCancel}
            />
            <Button
              containerStyle={{ width: 170 }}
              titleStyle={{ fontWeight: "800" }}
              buttonStyle={{
                backgroundColor: colors.main,
                padding: 15,
                borderRadius: 20,
              }}
              title="Yes, delete"
              onPress={onPressConfirm}
            />
          </View>
    </View>
  )
}

export default ItemGlobalModal