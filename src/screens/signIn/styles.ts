import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
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
        fontFamily: theme.fonts.title700,
        lineHeight: 30,
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 48,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    },
    image: {
        width: '100%',
        height: 304,
    }
});