import React from 'react';
import { ScrollView, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ArrowBack from '../components/ArrowBack';
import useColorMode from '../context/darkModeStore';

const ConfigScreen = () => {
    const alterColorMode = useColorMode((state) => state.alterColorMode);
    const colorMode = useColorMode((state) => state.colorMode);

    const styles = {
        backgroundColor: colorMode === 'dark' ? "#001817" : "#f2f2f2",
        colorText: colorMode === 'dark' ? "#fff" : "#001817",
    };

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
