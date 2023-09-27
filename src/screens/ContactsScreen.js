import ContactListItem from "../components/ContactListItem copy";
import chats from "../../assets/data/chats.json";
import { FlatList  } from "react-native"

const ContactsScreen = () => {
    return(
        <FlatList data={chats} 
    renderItem={({ item }) => <ContactListItem user={item.user} />} style={{ backgroundColor: 'white' }}
    />
    )
}

export default ContactsScreen