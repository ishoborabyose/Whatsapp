/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import ChatListItem from './src/components/ChatListItem';



const chat = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Lukas",
  },
  lastMessage: {
    text: "Oke",
    createdAt: "07:30",
  },
};


function App(): JSX.Element {
 

  return (
    <SafeAreaView>
      <View>
      <ChatListItem chat={chat} /> 
    </View>
    </SafeAreaView>
    
  );
}



export default App;
