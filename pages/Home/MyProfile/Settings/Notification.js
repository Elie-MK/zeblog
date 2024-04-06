import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import SwitchInput from '../../../../components/SwitchInput';
import { colors } from '../../../../utilities/Color';
import { Androids } from '../../../../utilities/Platform';

const Notification = ({navigation}) => {
    const [switchStates, setSwitchStates] = useState({
        'There is a new recommendation': false,
        'Someone is following me': false,
        'There are comments on my article': false,
        'Someone liked my comment': false,
        'Someone I follow published a new article': false,
        'There is activity on my account': false,
    });

    const [switchSystem, setSwitchSystem] = useState({
        'App system': false,
        'Guidance & tips': false,
        'Participate in a survey': false,
    });
    
    const handleSwitch = (title) => {
        setSwitchStates((prevStates) => ({
            ...prevStates,
            [title]: !prevStates[title],
        }));
    };

 const renderSwitch = (title) => (
        <SwitchInput
            key={title} 
            title={title}
            trackColor={{ true: colors.main }}
            value={switchStates[title]}
            onValueChange={() => handleSwitch(title)}
        />
    );

    const handleSwitchSystem = (title) => {
        setSwitchSystem((prevStates) => ({
            ...prevStates,
            [title]: !prevStates[title],
        }));
    };

 const renderSystSwitch = (title) => (
        <SwitchInput
            key={title} 
            title={title}
            
            value={switchSystem[title]}
            onValueChange={() => handleSwitchSystem(title)}
        />
    );

    
  return (
    <SafeAreaView style={{flex:1, marginHorizontal:20}}>
        <View style={{flexDirection:"row", alignItems:"center", gap:20, marginTop:Androids?30:10}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="black" />
            </TouchableOpacity>
                <Text style={{fontSize:20, fontWeight: "bold"}}>Notification</Text>
        </View>
        <ScrollView style={{flex:1, marginTop:20}}>
            <Text style={{fontWeight:"700", fontSize:16}}>Notify me when...</Text>
            
            {
                Object.keys(switchStates).map(renderSwitch)
            }
        
            <Text style={{fontWeight:"700", fontSize:16, marginTop:20}}>System</Text>

            {
                Object.keys(switchSystem).map(renderSystSwitch)
            }

        </ScrollView>
    </SafeAreaView>
  )
}

export default Notification