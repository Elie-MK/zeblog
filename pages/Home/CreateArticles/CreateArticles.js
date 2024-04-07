import {
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utilities/Color";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { Androids } from "../../../utilities/Platform";
import { Button, Divider } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';

const CreateArticles = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [textAlignIcon, setTextAlignIcon] = useState("left");
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [text, setText]=useState('')
  const [uppercase, setUppercase] = useState(false);

  const handleSelectionChange = (event) => {
    const { start, end } = event.nativeEvent.selection;
    setSelection({ start: start, end: end });
  };

  const handleApplyUppercase = ()=>{
    setUppercase(!uppercase)
    if(uppercase){
      const {start, end} = selection;
      const newText = text.slice(0, start) + text.slice(start, end).toUpperCase() + text.slice(end);
      setText(newText);
    }else {
      const {start, end} = selection;
      const newText = text.slice(0, start) + text.slice(start, end).toLowerCase() + text.slice(end);
      setText(newText);
    }

  }
  
  const paragraphStyle = [
    {
      id:"left", 
      title:"format-align-left",
    }, 
    {
      id:"center", 
      title:"format-align-center",
    }, 
    {
      id:"right", 
      title:"format-align-right",
    }, 
    {
      id:"justify", 
      title:"format-align-justify",
    },  
  ]
function handleParagraph(id){
  const newId = {
    left:"left", 
    right:"right", 
    center:"center",
    justify:"justify"
  }
  if(id==newId.right||id==newId.center||id==newId.justify||id==newId.left){
    setTextAlignIcon(id)
  }

  return null
}


  const {height} = Dimensions.get("window");

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need to library permissions to upload image!");
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      // console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}
   >

    <SafeAreaView style={{flex: 1, marginHorizontal: 20, marginTop:Androids?30:10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity  onPress={()=>navigation.goBack()} >
            <MaterialIcons
              style={{ flexDirection: "row", alignSelf: "flex-start" }}
              name="close"
              size={24}
              color={colors.black}
            />
          </TouchableOpacity>

          <View style={{flexDirection:"row", gap:10, alignItems:"center"}}>
            <Button  buttonStyle={{backgroundColor:colors.main, borderRadius:20, paddingLeft:20, paddingRight:20}}  title="Save" />
            <Button title="Publish" type="outline" buttonStyle={{borderColor:colors.main, borderRadius:20, borderWidth:2, paddingLeft:20, paddingRight:20}} titleStyle={{color:colors.main}} />
          </View>
        
        </View>

            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
              <TouchableOpacity activeOpacity={0.7} onPress={pickImage} style={{ marginTop: 20, height:height/2.5, backgroundColor:colors.subGray, borderRadius:10 }}>
                {
                  image?<Image
                  style={{ width: "auto", height: height/2.5, borderRadius: 20 }}
                  source={{uri:image}}
                />:  <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", flex:1}}>
                <View >
                  <View style={{flexDirection:"row", justifyContent:"center"}}> 
                    <Ionicons  name="image" size={80} color={colors.gray} />
                  </View>
                <Text style={{textAlign:"center", color:colors.gray }}>Add article cover image</Text>
                </View>
             </View>
                }
              </TouchableOpacity>
              <Text style={{fontSize:18, fontWeight:"bold", marginTop:20, color:colors.gray}}>Title</Text>
                <TextInput
                  placeholder="Title"
                  placeholderTextColor={colors.gray}
                  style={{
                    backgroundColor: colors.subGray,
                    borderColor: colors.gray,
                    borderRadius: 10,
                    padding: 15,
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 10,
                  }}
                />

                <Text style={{fontSize:18, fontWeight:"bold", marginBottom:10, color:colors.gray}}>Article</Text>
                <View style={{marginBottom:20, backgroundColor:colors.subGray, borderRadius:10}}>
                  <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center", padding:20}}>
                    {
                      paragraphStyle.map((item, index)=>(
                          <TouchableOpacity key={index} onPress={()=>handleParagraph(item.id)} style={{backgroundColor:textAlignIcon===item.id?colors.main:null, padding:8, borderRadius:5}}>
                              <MaterialIcons name={item.title} size={25} color={textAlignIcon===item.id?colors.white:colors.gray} />                  
                          </TouchableOpacity>
                      ))
                    }
                    
                  </View>
                  <Divider color={colors.gray}  />
                  <TextInput
                    multiline
                    placeholder="Write your article here..."
                    placeholderTextColor={colors.gray}
                    scrollEnabled
                    selectionColor={colors.main}
                    selection={selection}
                    value={text}
                    onChangeText={(text)=>setText(text)}
                    onSelectionChange={handleSelectionChange}
                    autoCorrect
                    textAlign={textAlignIcon}
                    style={{
                      backgroundColor: colors.subGray,
                      borderColor: colors.gray,
                      borderRadius: 10,
                      marginBottom:20,
                      padding: 15,
                      fontSize: 18,
                      paddingTop: 20,
                      marginVertical: 10,
                    }}
                  />
                </View>
                
            </ScrollView>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CreateArticles;
