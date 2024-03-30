import { StyleSheet, Text, View,SafeAreaView,Image, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'

const BirthScreen = () => {
  const navigation=useNavigation()
  const monthRef = useRef(null)
  const yearRef= useRef(null)
  const [day,setDay] = useState("")
  const [month,setMonth] = useState("")
  const [year,setYear] = useState("")

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <View style={{marginTop:90,marginHorizontal:20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width:44,height:44,borderRadius:22,borderWidth:2,borderColor:"black",justifyContent:"center",alignItems:"center"}}>
      <MaterialCommunityIcons name="cake-variant-outline" size={26} color="black"/>

      </View>
      <Image  style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}/>
    </View>
    <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color:"black",
            marginTop: 15,
          }}>Enter your date of birth</Text>
          <View>
            <TextInput autoFocus={true} placeholder='DD' maxLength={2} keyboardType='numeric' value={day} style={{borderBottomWidth:1,borderColor:"black",  padding: 10,
              width: 50,
              fontSize: day ? 20 : 20,}}/>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default BirthScreen

const styles = StyleSheet.create({})