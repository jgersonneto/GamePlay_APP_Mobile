import { 
    StyleSheet,
    Dimensions
} from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    },
    category: {        
        paddingVertical: 10
    },
    content: {
        marginTop: 25
    },
    matches: {
        marginTop: 15,
        marginLeft: 15
    }
});