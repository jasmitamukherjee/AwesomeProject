/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Fontisto from 'react-native-vector-icons/Fontisto'

function App() {
 
  return (
    <SafeAreaView>
      
     <View>
      <Text>
      ConnectIn
      </Text>
      <Fontisto name='email' size={26} color='black'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
