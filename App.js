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
import { AuthProvider } from './AuthContext';

function App() {
 
  return (
   <>
   <AuthProvider>
    <>
   <StackNavigator/>
   <ModalPortal />
   </>
   </AuthProvider>
   </>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
