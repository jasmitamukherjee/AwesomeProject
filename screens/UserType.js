import { StyleSheet, Text, View , SafeAreaView,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5
from 'react-native-vector-icons/FontAwesome5'
import FontAwesome
from 'react-native-vector-icons/FontAwesome'
import AntDesign
from 'react-native-vector-icons/AntDesign'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils'
const UserType = () => {
  useEffect(()=>{
    getRegistrationProgress('UserType').then(progressData =>{
      if(progressData){
        setUserType(progressData.userType || '' )
      }
    })
  },[])
  const navigation=useNavigation()
  const handleNext=()=>{
    
      saveRegistrationProgress('UserType',{userType})
    
   
    if(userType == 'Employee'){
    navigation.navigate("EmployeeSkills")}
    else{
      navigation.navigate("LookingFor")

    }

  }
  const [userType,setUserType]= useState("")
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width:44,height:44,borderRadius:22,borderWidth:2,borderColor:"black",justifyContent:"center",alignItems:"center"}}>
      <FontAwesome5 name="user-tie" size={26} color="black"/>

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
          }}>You're here for</Text>
            <Text style={{marginTop: 30, fontSize: 15, color: 'gray'}}>
          ConnectIn users are matched based on this selection.
        </Text>

        <View style={{marginTop: 30, flexDirection: 'column', gap: 12}}>
          <View  style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}> 
            <Text style={{fontWeight: '500', fontSize: 15,color:"black"}}>I am here to look for jobs.</Text>
            <Pressable onPress={() => setUserType('Employee')}>
              <FontAwesome
                name="circle"
                size={26}
                color={userType == 'Employee' ? '#502b63' : '#F0F0F0'}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '500', fontSize: 15,color:"black"}}>I am here to hire.</Text>
            <Pressable onPress={() => setUserType('Employer')}>
              <FontAwesome
                name="circle"
                size={26}
                color={userType == 'Employer' ? '#502b63' : '#F0F0F0'}
              />
            </Pressable>
          </View>
          
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          <AntDesign name="checksquare" size={26} color="#502b63" />
          <Text style={{fontSize: 15}}>Visible on profile</Text>
        </View>
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

export default UserType

const styles = StyleSheet.create({})