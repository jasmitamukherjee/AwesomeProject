/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { ModalPortal } from 'react-native-modals';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




import StackNavigator from './navigation/StackNavigator';

function App() {
 
  return (
   <>
   <StackNavigator/>
   <ModalPortal />
   
   
   </>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
