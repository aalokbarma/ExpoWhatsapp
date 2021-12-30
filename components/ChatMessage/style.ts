import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container : {
        padding: 10,
    },
    messageBox: {
        backgroundColor: "#e5e5e5",
        marginRight: 50,
        padding: 10,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 5,
        width: 'auto',
        minWidth: '40%',
        maxWidth: '100%',
    },
    nameTimeCont: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    userName: {
        flex: 0.5,
        fontWeight: 'bold',
        color: Colors.light.tint,
        fontSize: 14,
        paddingBottom: 5,
    },
    time: {
        flex: 0.5,
        alignItems: 'flex-end',
        textAlign: 'right',
        fontSize: 11,
        color: '#555',
    },
    message: {
        color: 'gray',
        fontWeight: "500",
    },
});

export default styles;
