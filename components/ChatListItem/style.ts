import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginRight: 15,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.dark.text,
        
    },
    lastMessage: {
        fontSize: 16,
        color: "gray",
        flexWrap: 'wrap',
    },
    time: {
        fontSize: 13,
        color: "gray",
    },
})

export default styles;