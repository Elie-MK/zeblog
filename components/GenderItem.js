import { View } from 'react-native'
import React from 'react'
import { colors } from '../utilities/Color'
import { CheckBox } from "@rneui/themed";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const GenderItem = ({checked, selectedGender}) => {
  return (
     <View>
          <View style={{marginBottom:30}}>
          {["MALE", "FEMALE"].map((gender, i) => (
              <CheckBox
              key={i}
                title={gender}
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
                checked={checked === gender }
                onPress={()=>selectedGender(gender)}
              />
          ))}
          </View>
     </View>
  )
}

export default GenderItem