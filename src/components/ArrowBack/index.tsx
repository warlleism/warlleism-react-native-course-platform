import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';

interface ArrowBackProps {
    title?: string;
    route?: string;
}

const ArrowBack = ({ title, route }: ArrowBackProps) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const { styles } = useTheme();
    const [showConfig, setShowConfig] = useState(false);

    useEffect(() => {
        setShowConfig(false)
    }, [isFocused]);

    const HandleShowConfig = () => {
        if (route === undefined) return
        setShowConfig(!showConfig)
    }

    return (
        <View
            style={{
                paddingBottom: 30,
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
            }}
        >
            <Feather
                style={{ width: '10%' }}
                onPress={() => (route ? navigation.navigate(route as never) : navigation.goBack())}
                name="arrow-left"
                size={34}
                color={styles.colorText}
            />
            <Text
                style={[
                    {
                        textAlign: 'center',
                        width: '80%',
                        fontSize: 20,
                        color: styles.colorText,
                        fontWeight: '600',
                    },
                    { color: styles.colorText },
                ]}
            >
                {title === 'undefined' ? 'Aulas' : title}
            </Text>
            <TouchableOpacity onPress={() => HandleShowConfig()} style={{ width: '10%', position: 'relative' }}>
                <Ionicons name="ellipsis-vertical" size={24} color={styles.colorText} />
            </TouchableOpacity>
            {showConfig && (
                <View
                    style={{
                        width: 150,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#fff',
                        position: 'absolute',
                        right: 25,
                        gap: 20,
                        top: 40,
                        zIndex: 2,
                        padding: 10,
                        borderRadius: 5,
                    }}
                >
                    <TouchableOpacity onPress={() => { navigation.navigate('Config' as never) }}>
                        <Text style={{ color: '#000', fontSize: 15 }}>Configurações</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default ArrowBack;
