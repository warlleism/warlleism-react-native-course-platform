import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import useColorMode from '../context/darkModeStore';

const HomeScreen = () => {

    const colorMode = useColorMode((state) => state.colorMode)

    return (
        <>
            <ScrollView >
                <View>
                    <Text>{colorMode}</Text>
                </View>
            </ScrollView>
        </>
    );
};

export default HomeScreen;
