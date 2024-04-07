import { View } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'
import { CheckBox } from "@rneui/themed";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const GenderItem = ({checked, selectedGender}) => {
  return (
     <View>
          <View style={{marginBottom:30}}>
          {["Male", "Female", "Other"].map((l, i) => (
              <CheckBox
              key={i}
                title={l}
                containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
                checkedIcon={
                  <AntDesign name="checkcircle" size={24} color={colors.main} />
                }
                uncheckedIcon={
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={24}
                    color={colors.main}
                  />
                }
                checked={checked === l }
                onPress={() => selectedGender(l)}
              />
          ))}
          </View>
     </View>
  )
}

export default GenderItem