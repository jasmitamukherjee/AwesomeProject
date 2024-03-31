import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,Pressable } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
const PreFinalScreen = () => {
  const navigation =useNavigation()

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View style={{marginTop:80}}>
        
        <Text style={{fontSize:35,fontFamily:"Poppins-Bold",
        fontWeight: 800,
    marginLeft: 20,
    marginTop:10,
    color:'black'}}>
        All set to register.
        </Text>
        <Text style={{fontSize:25,fontFamily:"Poppins-Bold",
        fontWeight: 700,
    marginLeft: 20,
    marginTop:10,
    color:'black'}}>
Setting up your profile for you.        </Text>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
       
        <LottieView
          source={require('../assets/lottie.json')}
          style={{
            height: 500,
            width: 500,
            alignSelf: 'center',
            
            justifyContent: 'center',
          }}
          autoPlay
          loop={true}
          speed={0.7}
        />
        </View> 
        
        </View>
        
        <Pressable 
        onPress={()=> navigation.navigate("Name")}
        style={{backgroundColor: '#502b63', padding: 15, marginTop: 'auto'}}>
            <Text style={{textAlign:"center",color:"white",fontWeight:600,fontSize:15}}>
                Finish Registering
            </Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default PreFinalScreen

const styles = StyleSheet.create({})