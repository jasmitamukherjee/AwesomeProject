
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../registrationUtils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { AuthContext } from '../AuthContext';

const PreFinalScreen = () => {
 
  useEffect(()=>{
    if(token){
      navigation.replace("MainStack",{screen:"Main"})

    }

  },[token])
  const navigation = useNavigation();
  const route = useRoute();
  const [userData, setUserData] = useState();
  useEffect(() => {
    getAllUserData();
  }, []);

  const { token, isLoading,setToken } = useContext(AuthContext);

  console.log(token)

  useEffect(() => {
    // Check if the token is set and not in loading state
    if (token) {
      // Navigate to the main screen
      navigation.navigate('MainStack', { screen: 'Main' });
    }
  }, [token, navigation]);
  const getAllUserData = async () => {
    try {
      // Define an array to store data for each screen
      const screens = [
        'Name',
        'Email',
        'Password',
        'Birth',
        'Location',
        'Gender',
        'UserType',
       
        'LookingForEmployee',
        'EmployeeSkills',

        'CompanyOffers',
        'LookingFor',
       
        'Photos',
        'CompanyPhotos',

        'Prompts',
        'EmployerPrompts'
      ]; 

      
      let userData = [];

     
      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        if (screenData) {
          userData = {...userData, ...screenData}; // Merge screen data into user data
        }
      }
      // for (const screenName of screens) {
      //   const screenData = await getRegistrationProgress(screenName);
      //   if (screenData) {
      //     userData.push({ ...screenData }); // Push screen data as an object into the userData array
      //   }
      // }

      
      setUserData(userData);
    } catch (error) {
      console.error('Error retrieving user data:', error);
      return null;
    }
  };
 

const registerUser= async ()=>{

  try {
    const response = await axios
    .post('http://localhost:5000/register', userData)
    .then(response => {
      console.log("resonse ",response);
      const token = response.data.token;
      AsyncStorage.setItem('token', token);
      setToken(token)
    });


  clearAllScreenData();
    
  } catch (error) {
    console.log("Error",error)
    
  }
 }

 const clearAllScreenData = async () => {
  try {
    const screens = [
      'Name',
      'Email',
      'Password',
      'Birth',
      'Location',
      'Gender',
      'UserType',
     
      'LookingForEmployee',
      'EmployeeSkills',

      'CompanyOffers',
      'LookingFor',
     
      'Photos',
      'CompanyPhotos',

      'Prompts',
      'EmployerPrompts'
    ];
    for (const screenName of screens) {
      const key = `registration_progress_${screenName}`;
      await AsyncStorage.removeItem(key);
    }
    console.log('All screen data cleared successfully');
  } catch (error) {
    console.error('Error clearing screen data:', error);
  }
};

// const registerUser = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to register');
//     }

//     const responseData = await response.json();
//     const token = responseData.token;
//     await AsyncStorage.setItem('token', token);
//     setToken(token);

//     await clearAllScreenData();
//   } catch (error) {
//     console.error('Error registering user:', error);
//   }
// };
  console.log(userData);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 80}}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            color:"black"
          }}>
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 33,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginRight: 10,
            marginTop: 10,
            color:"black"

          }}>
          Setting up your profile for you
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20}}>
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

      <Pressable
        onPress={registerUser}
        style={{backgroundColor: '#502b63', padding: 15, marginTop: 'auto'}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}>
          Finish registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;

const styles = StyleSheet.create({});