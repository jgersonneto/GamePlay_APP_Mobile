import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50        
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 15,

    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 48,
    },
    image: {
        width: '100%',
        height: 304,
    }
});