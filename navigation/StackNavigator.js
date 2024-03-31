import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
import LikesScreen from '../screens/LikesScreen';
import MaterialIcons
from 'react-native-vector-icons/MaterialIcons'

import IonIcons
from 'react-native-vector-icons/Ionicons'
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import BasicInfo from '../screens/BasicInfo';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import BirthScreen from '../screens/BirthScreen';
import LocationScreen from '../screens/LocationScreen';
import GenderScreen from '../screens/GenderScreen';
import UserType from '../screens/UserType';
import PhotosScreen from '../screens/PhotosScreen'
import PromptsScreen from '../screens/PromptsScreen';
import ShowPromptsScreen from '../screens/ShowPromptsScreen';
import PreFinalScreen from '../screens/PreFinalScreen';
import SkillsScreen from '../screens/SkillsScreen';
import LookingForEmployee from '../screens/LookingForEmployee';
import LookingFor from '../screens/LookingFor';
import CompanyOffers from '../screens/CompanyOffers';
import CompanyPhotos from '../screens/CompanyPhotos';
import EmployerPrompts from '../screens/EmployerPrompts';
import ShowEmployerPrompts from '../screens/ShowEmployerPrompts';
import EmployeeSkills from '../screens/EmployeeSkills';
import { AuthContext } from '../AuthContext';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const {isLoading,token}=useContext(AuthContext)
    
    function BottomTabs(){
        return(
            <Tab.Navigator screenOptions={()=>({
                tabBarShowLabel:false
            })}>
                <Tab.Screen name="Home" component={HomeScreen} options={{tabBarStyle:{backgroundColor:'#101010'},
            tabBarLabelStyle:{color:'#008397'},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused ?(
                <MaterialIcons name='explore' size={30} color='white'/>


            ):(
                <MaterialIcons name='explore' size={30} color='#989898'/>


            )
            
            }}/>
            <Tab.Screen name="Likes" component={LikesScreen} options={{tabBarStyle:{backgroundColor:'#101010'},
            tabBarLabelStyle:{color:'#008397'},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused ?(
                <MaterialCommunityIcons name='sticker-check' size={30} color='white'/>


            ):(
                <MaterialCommunityIcons name='sticker-check' size={30} color='#989898'/>


            )
            
            }}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{tabBarStyle:{backgroundColor:'#101010'},
            tabBarLabelStyle:{color:'#008397'},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused ?(
                <MaterialIcons name='chat-bubble-outline' size={30} color='white'/>


            ):(
                <MaterialIcons name='chat-bubble-outline' size={30} color='#989898'/>


            )
            
            }}/>

<Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarStyle:{backgroundColor:'#101010'},
            tabBarLabelStyle:{color:'#008397'},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused ?(
                <IonIcons name='person-circle-outline' size={30} color='white'/>


            ):(
                <IonIcons name='person-circle-outline' size={30} color='#989898'/>


            )
            
            }}/>
            </Tab.Navigator>
        )
    }
     const AuthStack= ()=>{
        return(
            <Stack.Navigator>
                <Stack.Screen name="Basic" component={BasicInfo} options={{headerShown:false}}/>

                <Stack.Screen name="Name" component={NameScreen} options={{headerShown:false}}/>

                <Stack.Screen name="Email" component={EmailScreen} options={{headerShown:false}}/>

                <Stack.Screen name="Password" component={PasswordScreen} options={{headerShown:false}}/>

                <Stack.Screen name="Birth" component={BirthScreen} options={{headerShown:false}}/>

                <Stack.Screen name="Location" component={LocationScreen} options={{headerShown:false}}/>

                <Stack.Screen name="Gender" component={GenderScreen} options={{headerShown:false}}/>


                <Stack.Screen name="UserType" component={UserType} options={{headerShown:false}}/>

                <Stack.Screen name="LookingForEmployee" component={LookingForEmployee} options={{headerShown:false}}/>
                <Stack.Screen name="LookingFor" component={LookingFor} options={{headerShown:false}}/>

                <Stack.Screen name="Photos" component={PhotosScreen} options={{headerShown:false}}/>
                <Stack.Screen name="CompanyOffers" component={CompanyOffers} options={{headerShown:false}}/>

                <Stack.Screen name="Prompts" component={PromptsScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Skills" component={SkillsScreen} options={{headerShown:false}}/>

                <Stack.Screen name="ShowPrompts" component={ShowPromptsScreen} options={{headerShown:false}}/>

                <Stack.Screen name="PreFinal" component={PreFinalScreen} options={{headerShown:false}}/>
                <Stack.Screen name="CompanyPhotos" component={CompanyPhotos} options={{headerShown:false}}/>
                <Stack.Screen name="EmployerPrompts" component={EmployerPrompts} options={{headerShown:false}}/>
                <Stack.Screen name="ShowEmployerPrompts" component={ShowEmployerPrompts} options={{headerShown:false}}/>
                <Stack.Screen name="EmployeeSkills" component={EmployeeSkills} options={{headerShown:false}}/>


            </Stack.Navigator>

            
        )


     }


    function MainStack(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
            </Stack.Navigator>
        )
    }
  return (
    <NavigationContainer>
        {token === null || token === '' ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})