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

import { StyleSheet } from 'react-native';
import Navigator from './src/navigation';



function App(): JSX.Element {
return (
      <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",

  }
})

export default App;
