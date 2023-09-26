import { useState  } from "react";
import { View, StyleSheet, TextInput} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { SafeAreaView } from "react-native-safe-area-context";



const InputBox = () =>{

   const [ newMessage, setNewMessage ] = useState('Hello');

    const onSend = () => {
        console.warn('Send a new message: ', newMessage);
        setNewMessage('')
    }
    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>

          <EntypoIcon name="plus" size={20} color="royalblue" />
        <TextInput 
        value={newMessage} 
        onChangeText={setNewMessage} 
        style={styles.input} 
        placeholder="type your message..." />
        <MaterialIcons  style={styles.send} onPress={onSend} name="send" size={16} color="white" />
        </SafeAreaView>
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