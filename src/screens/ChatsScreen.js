import ChatListItem from "../components/ChatListItem";
import chats from "../../assets/data/chats.json";
import { FlatList } from "react-native";



const ChatScreen = () => {
   return(
    <FlatList data={chats} 
    renderItem={({ item }) => <ChatListItem chat={item} />} style={{ backgroundColor: 'white' }}
    />
   )
}

export default ChatScreen