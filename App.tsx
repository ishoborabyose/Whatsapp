/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
} from 'react-native';

import  ChatScreen from './src/screens/ChatsScreen';
import { StyleSheet } from 'react-native';





function App(): JSX.Element {
 

  return (
   
      <View style={styles.container}>
      <ChatScreen />
    </View>
  
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 50, 
  }
})

export default App;
