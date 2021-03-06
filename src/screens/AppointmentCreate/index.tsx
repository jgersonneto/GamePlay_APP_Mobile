import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform  
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
    
    const [category, setCategory] = useState('');


    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >   
            <ScrollView>

                <Background>
                    <Header
                        title="Agendar partida"               
                    />

                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={setCategory}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <RectButton>
                            <View style={styles.select}>

                                {
                                    /*<View style={styles.image} />*/
                                    <GuildIcon />
                                }

                                

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        Selecione um servidor
                                    </Text>
                                </View>

                                <Feather 
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />

                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>
                                    dia e m??s
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}>
                                    hora e minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                            
                        </View>
                        <View style={[styles.field, {marginBottom: 12}]}>
                            <Text style={styles.label}>
                                descri????o
                            </Text>
                            <Text style={styles.caracteresLimit}>
                                max 100 caracteres
                            </Text>
                        </View>
                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />
                        <View style={styles.footer}>
                            <Button title="Agendar"/>
                        </View>
                    </View>                    
                </Background>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}