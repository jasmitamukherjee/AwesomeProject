import { StyleSheet, Text, View,SafeAreaView ,Image,TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo
from 'react-native-vector-icons/Entypo'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
const LocationScreen = () => {
  const [location,setLocation] =useState("")
  const [coordinates] = useState([
    {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      latitude: 13.0451,
      longitude: 77.6269,
    },
  ]);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const navigation=useNavigation()
  const handleNext=()=>{
    navigation.navigate("Gender")

  }
//   useEffect(()=>{
// Geolocation.getCurrentPosition(position=>{
//   const [latitude,longitude] = position.coords;
//   setRegion(...region,latitude,longitude)
//   fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDJqEKwV49K0ycxK_os6f9ZgKuv6pJHINA`,
//   )
// })

//   },[])
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width:44,height:44,borderRadius:22,borderWidth:2,borderColor:"black",justifyContent:"center",alignItems:"center"}}>
      <Entypo name="location" size={26} color="black"/>

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
          }}>Enter your location</Text>
          {/* <MapView   initialRegion={{
            latitude: 13.0451,
            longitude: 77.6269,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{width: '100%', height: 500, marginTop: 20, borderRadius: 5}}>
            <Marker draggable coordinate={coordinates[1]}>
            <View>
              <Text  style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '500',
                }}>
                {location}
              </Text>
            </View>
          </Marker>
          </MapView> */}
            
  <TextInput
  autoFocus={true}
  value={city}
  onChangeText={(text)=> setCity(text)}
  placeholder='City(required)' placeholderTextColor={"#BEBEBE"}
  style={{width:340,marginVertical:10,marginTop:25,borderBottomColor:"black",borderBottomWidth:1,
  paddingBottom:10,
  fontSize: city? 22:22
  }}/>

<TextInput
  autoFocus={true}
  value={state}
  onChangeText={(text)=> setState(text)}
  placeholder='State(required)' placeholderTextColor={"#BEBEBE"}
  style={{width:340,marginVertical:10,marginTop:20,borderBottomColor:"black",borderBottomWidth:1,
  paddingBottom:10,
  fontSize: state? 22:22
  }}/>

<TouchableOpacity
onPress={handleNext}
activeOpacity={0.8} style={{marginTop:40,marginLeft:"auto"}}>
<MaterialCommunityIcons 
style={{alignSelf:"center",marginTop:20}}name="arrow-right-circle" size={45} color="#502b63"/>
</TouchableOpacity>
      </View>

          

    
    </SafeAreaView>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})