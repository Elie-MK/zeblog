import {
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Dialog, CheckBox } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../utilities/Color";
import { MaterialIcons } from "@expo/vector-icons";

const ModalGender = ({ isVisible, onBackdropPress, onDismiss, selectedGender, checked }) => {
//   const [checked, setChecked] = useState('Male');

//   const selectedGender = (gender)=>{
//     setChecked(gender)
//     console.log(gender)
//   }

  return (
    <Dialog
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      onDismiss={onDismiss}
    >
      <SafeAreaView>
        <View>
          <Dialog.Title title="Choose your gender" />
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
      </SafeAreaView>
    </Dialog>
  );
};

export default ModalGender;
