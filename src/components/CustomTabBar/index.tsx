import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { FontAwesome6, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }: any) {

    if (state.routes[state.index].name === 'Course') {
        return null;
    }

    interface RouteObject {
        key: string;
        name: string;
        params: undefined | Record<string, unknown>;
    };

    return (
        <View>
            <View style={styles.container}>
                {state.routes.map((route: RouteObject, index: number) => {
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

                    if(route.name === 'Class') return

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabButton}
                        >
                            {
                                options.tabBarIcon === 'home' ? (
                                    <FontAwesome5 name={options.tabBarIcon} size={24} color={isFocused ? "#8033FD" : "#fff"} />
                                ) : (
                                    options.tabBarIcon === 'school' ? (
                                        <Ionicons name={options.tabBarIcon} size={24} color={isFocused ? "#8033FD" : "#fff"} />
                                    ) : (
                                        <FontAwesome6 name={options.tabBarIcon} size={24} color={isFocused ? "#8033FD" : "#fff"} />
                                    )
                                )
                            }
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
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
        paddingVertical: 25,
        borderWidth: 2,
        borderColor: "#6100FF",
        backgroundColor: "#6100FF4F",
    },
    tabButton: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
