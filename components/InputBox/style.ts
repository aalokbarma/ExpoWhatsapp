import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.dark.background,
        paddingHorizontal: 10,
        borderRadius: 50,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
        maxHeight: 75,
        minHeight: 45,
    },
    ButtonContainer: {
        backgroundColor: Colors.dark.tint,
        borderRadius: 50,
        padding: 8,
        width: 47,
        height: 45,
    },
    textInput: {
        flex: 1,
        marginLeft: 5,
        marginBottom: -5,
        paddingBottom: 10,
        paddingLeft: 5,
        fontSize: 17,
        letterSpacing: 1,
    },
    smallIcons: {
        padding: 5,
    },
});

export default styles;
