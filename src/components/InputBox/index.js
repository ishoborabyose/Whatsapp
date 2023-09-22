import { useState  } from "react";
import { View,Text , StyleSheet, TextInput} from "react-native";
// import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import { AiOutlinePlus } from 'react-icons/fa';


const InputBox = () =>{

   const [ newMessage, setNewMessage ] = useState('Hello');

    const onSend = () => {
        console.warn('Send a new message: ', newMessage);
        setNewMessage('')
    }
    return (
        <View style={styles.container}>

          {/* <AntDesign name="plus" size={20} color="royalblue" /> */}
          <Text style={styles.plus}>+</Text>
        <TextInput 
        value={newMessage} 
        onChangeText={setNewMessage} 
        style={styles.input} 
        placeholder="type your message..." />
        {/* <MaterialIcons name="send" size={16} color="white" /> */}
        <Text style={styles.send} onPress={onSend}> - </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "whitesmoke",
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
     
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
        color: "white",
        fontSize: 16
    },
    plus:{
        fontSize: 20,
        color: "royalblue"
    }
})

export default InputBox