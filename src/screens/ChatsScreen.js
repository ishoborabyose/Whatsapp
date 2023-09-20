import ChatListItem from "../components/ChatListItem";
import chats from "../../assets/data/chats.json";
import { FlatList } from "react-native";



const chatScreen = () => {
   return(
    <FlatList data={chats} 
    renderItem={({ item }) => <ChatListItem chat={item} />} 
    />
   )
}

export default chatScreen