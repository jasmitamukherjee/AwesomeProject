import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import MaterialIcons
from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
const PhotosScreen = () => {

  
  const navigation=useNavigation()
  const handleNext=()=>{
   
    navigation.navigate("Prompts")}
 
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
     <View  style={{marginTop: 90, marginHorizontal: 20}}>
     <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width:44,height:44,borderRadius:22,borderWidth:2,borderColor:"black",justifyContent:"center",alignItems:"center"}}>
      <MaterialIcons name="add-a-photo" size={26} color="black"/>

      </View>
      <Image  style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}/>
    </View>
    <Text   style={{
            fontSize: 25,
            fontWeight: 'bold',
           color:"black",
            marginTop: 15,
          }}>Select your best picture and an introductory video</Text>
    <TouchableOpacity
        onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#502b63"
            style={{alignSelf: 'center', marginTop: 20}}
          />
        </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default PhotosScreen

const styles = StyleSheet.create({})

