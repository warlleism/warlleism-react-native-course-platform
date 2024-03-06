import * as React from 'react';
import { TouchableOpacity, ScrollView, Text, View, ImageBackground } from 'react-native';
import { Aulas } from '../../aulas/aulas';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {

    return (
        <>
            <ScrollView >
                <View style={{ marginTop: 20 }}>
                    {Aulas?.map((e) => (
                        <TouchableOpacity
                            key={e?.id}
                            style={{
                                flex: 1,
                                alignSelf: "center",
                                borderRadius: 30,
                                height: 200,
                                width: "90%",
                                marginBottom: 20,
                                overflow: "hidden",
                            }}
                        >
                            <ImageBackground
                                source={e?.img}
                                style={{
                                    alignSelf: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <View style={{
                                    alignSelf: "center",
                                    width: '70%',
                                    height: "100%",
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 10
                                }}>
                                    <AntDesign 
                                    style={{backgroundColor: "#000000c9", padding: 15, borderRadius: 5 }}
                                    name="book" size={24} color={"#fff"} />
                                    <View style={{ width: 240, alignItems: "flex-start" }}>
                                        <Text style={{ fontSize: 10, color: "#fff", width: 200, fontWeight: '700', textAlign: "left" }}>Aulas: {e?.qtdAulas}</Text>
                                        <Text style={{ fontSize: 23, color: "#fff", width: 200, fontWeight: '700', textAlign: "left" }}>{e?.disciplina}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </>
    );
};

export default HomeScreen;
