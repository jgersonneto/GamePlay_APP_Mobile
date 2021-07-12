import React from 'react';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {  
    Text,      
} from 'react-native';

import { styles } from './styles';

interface propsButton extends RectButtonProps {
    title: String;    
}

export function Button({ title, ...rest }: propsButton) {
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    )
}
