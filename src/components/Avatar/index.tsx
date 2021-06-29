import React from 'react';
import {    
    Image,
    ImageProps,
    ImagePropsBase,
    ImageSourcePropType,
    View
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface PropsAvatar {
    urlImage: string;    
}

export function Avatar({ urlImage }: PropsAvatar) {

    const { secondary50, secondary70 } = theme.colors;

    return(
        <View>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <Image
                    style={styles.avatar}                
                    source={{uri: urlImage}}
                />
            </LinearGradient>
        </View>        
    )
}