import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    function BottomTabs(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home/" component={HomeScreen} options={{tabBarStyle:{backgroundColor:'#101010'},
            tabBarLabelStyle:{color:'#008397'},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused ?(
                <MaterialCommunityIcons name='alpha' size={26} color='white'/>


            ):(
                <MaterialCommunityIcons name='alpha' size={26} color='#989898'/>


            )
            
            }}/>
            <Tab.Screen name="Likes/" component={LikesScreen} options={{tabBarStyle:{backgroundColor:'#101010'},
            tabBarLabelStyle:{color:'#008397'},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused ?(
                <MaterialCommunityIcons name='sticker-check' size={26} color='white'/>


            ):(
                <MaterialCommunityIcons name='sticker-check' size={26} color='#989898'/>


            )
            
            }}/>
            <Tab.Screen name="Chat/" component={ChatScreen} options={{tabBarStyle:{backgroundColor:'#101010'},
            tabBarLabelStyle:{color:'#008397'},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused ?(
                <MaterialIcons name='chat-bubble-outline' size={26} color='white'/>


            ):(
                <MaterialIcons name='chat-bubble-outline' size={26} color='#989898'/>


            )
            
            }}/>

<Tab.Screen name="Profile/" component={ProfileScreen} options={{tabBarStyle:{backgroundColor:'#101010'},
            tabBarLabelStyle:{color:'#008397'},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused ?(
                <IonIcons name='person-circle-outline' size={26} color='white'/>


            ):(
                <IonIcons name='person-circle-outline' size={26} color='#989898'/>


            )
            
            }}/>
            </Tab.Navigator>
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
        <MainStack/>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})