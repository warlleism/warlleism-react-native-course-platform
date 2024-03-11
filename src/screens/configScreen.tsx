import React from 'react';
import { ScrollView, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ArrowBack from '../components/ArrowBack';
import useColorMode from '../context/darkModeStore';
import useTheme from '../hooks/useTheme';

const ConfigScreen = () => {
    const alterColorMode = useColorMode((state) => state.alterColorMode);
    const { colorMode, styles } = useTheme()

    return (
        <ScrollView style={{ backgroundColor: styles.backgroundColor }}>
            <ArrowBack title='Configurações' />
            <View style={{ width: "95%", alignSelf: 'center' }}>
                <View
                    style={{
                        borderWidth: 2,
                        borderColor: "#00938A",
                        padding: 10,
                        borderRadius: 5
                    }}
                >
                    <Picker
                        style={{ color: styles.colorText }}
                        selectedValue={colorMode}
                        onValueChange={(itemValue) => alterColorMode(itemValue)}>
                        <Picker.Item label="Selecione" value="" />
                        <Picker.Item label="Modo Escuro" value="dark" />
                        <Picker.Item label="Modo Claro" value="light" />
                    </Picker>
                </View>
            </View>
        </ScrollView>
    );
};

export default ConfigScreen;
