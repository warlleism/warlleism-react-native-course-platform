import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }: any) {
    return (
        <View>
            <View
                style={styles.container}>
                {state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {
                                options.tabBarIcon == 'home' ?
                                    <FontAwesome5 name={options.tabBarIcon} size={24} color={isFocused ? "#000" : "#fff"} />
                                    :
                                    <FontAwesome6 name={options.tabBarIcon} size={24} color={isFocused ? "#000" : "#fff"} />
                            }

                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        borderRadius: 100,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2b2a3399',
        paddingVertical: 25,
    },
    tabButton: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeTab: {
        color: '#22244e',
    },
    inactiveTab: {
        color: '#0000002e',
    },
});
