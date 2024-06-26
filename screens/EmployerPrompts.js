import { StyleSheet, Text, View ,SafeAreaView,Image,Pressable} from 'react-native'
import React from 'react'
import AntDesign
from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { saveRegistrationProgress } from '../registrationUtils'
const EmployerPrompts = () => {
  const route= useRoute()
  const navigation = useNavigation()
  const handleNext=()=>{
    saveRegistrationProgress('EmployerPrompts',{prompts: route?.params?.prompts})
    navigation.navigate("PreFinal")
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} >
     <View  style={{marginTop: 90, marginHorizontal: 20}}>
     <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width:44,height:44,borderRadius:22,borderWidth:2,borderColor:"black",justifyContent:"center",alignItems:"center"}}>
      <AntDesign name="eye" size={26} color="black"/>

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
          }}>Choose the prompts based on your company and enter your answers</Text>
          <View style={{marginTop:20,flexDirection:"column",gap:20}}> 
          <View style={{marginTop: 20, flexDirection: 'column', gap: 20}}>
          {route?.params?.prompts ? (
            route?.params?.prompts?.map((item, index) => (
              <Pressable key={index}
                onPress={() => navigation.navigate('ShowEmployerPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                  }}>
                  {item?.question}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  {item?.answer}
                </Text>
              </Pressable>
            ))
          ) : (
            <View>
              <Pressable
                onPress={() => navigation.navigate('ShowEmployerPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                  }}>
                  Select a Prompt
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  And write your own answer
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('ShowEmployerPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                  marginVertical: 15
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                  }}>
                  Select a Prompt
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  And write your own answer
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('ShowEmployerPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                  }}>
                  Select a Prompt
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  And write your own answer
                </Text>
              </Pressable>
            </View>
          )}
          {/* {route?.params?.prompts?.map((item, index) => (
            <Pressable
              onPress={() => navigation.navigate('ShowPrompts')}
              style={{
                borderColor: '#707070',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dashed',
                borderRadius: 10,
                height: 70,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontStyle: 'italic',
                  fontSize: 15,
                }}>
                {item?.question}
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontStyle: 'italic',
                  fontSize: 15,
                  marginTop: 3,
                }}>
                {item?.answer}
              </Text>
            </Pressable>
          ))}

          <Pressable
            onPress={() => navigation.navigate('ShowPrompts')}
            style={{
              borderColor: '#707070',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderStyle: 'dashed',
              borderRadius: 10,
              height: 70,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
              }}>
              Select a Prompt
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
                marginTop: 3,
              }}>
              And write your own answer
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('ShowPrompts')}
            style={{
              borderColor: '#707070',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderStyle: 'dashed',
              borderRadius: 10,
              height: 70,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
              }}>
              Select a Prompt
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
                marginTop: 3,
              }}>
              And write your own answer
            </Text>
          </Pressable> */}
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
      </View>
    </SafeAreaView>
  )
}

export default EmployerPrompts

const styles = StyleSheet.create({})