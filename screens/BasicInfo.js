import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const BasicInfo = () => {
const navigation =useNavigation()
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
     <View style={{marginTop:300}}>
        
        <Text style={{fontSize:35,fontFamily:"Poppins-Bold",
        fontWeight: 800,
    marginLeft: 20,
    marginTop:10,
    color:'black'}}>
        Empowering connections for professionals like you.
        </Text>
        <Text style={{fontSize:25,fontFamily:"Poppins-Bold",
        fontWeight: 700,
    marginLeft: 20,
    marginTop:10,
    color:'black'}}>
        Let your profile shine, bridging the gap between employers and employees seamlessly.
        </Text>
        {/* <View style={{ alignItems: 'center', marginTop: 20 }}>
        <LottieView
        
            source={require('../assets/handshake.json')} // Replace 'animation.json' with your animation file path
            autoPlay
            loop
            style={{ width: 200, height: 200 , flex: 1}}
          />
        </View>  */}
        
        </View>

        <Pressable 
        onPress={()=> navigation.navigate("Name")}
        style={{backgroundColor: '#502b63', padding: 15, marginTop: 'auto'}}>
            <Text style={{textAlign:"center",color:"white",fontWeight:600,fontSize:15}}>
                Enter basic Info
            </Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default BasicInfo

const styles = StyleSheet.create({})