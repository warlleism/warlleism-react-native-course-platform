import * as React from 'react';
import { TouchableOpacity, ScrollView, Text, View, ImageBackground } from 'react-native';
import { Aulas } from '../../aulas/aulas';
import { Entypo } from '@expo/vector-icons';
import useColorMode from '../context/darkModeStore';
import useCoursesStore from '../context/cursesStore';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../components/ArrowBack';

const OtherScreen = () => {

    const colorMode = useColorMode((state) => state.colorMode)
    const alterObj = useCoursesStore((state) => state.alterObj)
    const navigation = useNavigation()

    const handleCourses = (obj: any) => {
        alterObj(obj)
        navigation.navigate('Course' as never)
    }

    return (
        <ScrollView style={{ backgroundColor: colorMode === 'dark' ? "#001817" : "#f2f2f2" }}>
            <ArrowBack title={'Cursos'} route='Home'/>
            <View style={{ width: "95%", alignSelf: 'center' }}>
                {Aulas?.map((e) => (
                    <TouchableOpacity
                        onPress={() => handleCourses(e)}
                        key={e?.id}
                        style={{ flex: 1, alignSelf: "center", borderRadius: 10, height: 200, width: "100%", marginBottom: 20, overflow: "hidden" }}
                    >
                        <ImageBackground
                            source={e?.img}
                            style={{ alignSelf: "center", width: "100%", height: "100%" }}
                        >
                            <View style={{ alignSelf: "center", width: '100%', height: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                                <Entypo
                                    style={{
                                        borderWidth: 2,
                                        borderColor: "#00938A",
                                        backgroundColor: "#00b9cf5C", padding: 20, borderRadius: 100
                                    }}
                                    name="book" size={24} color={"#fff"} />
                                <View style={{ width: 240, alignItems: "flex-start" }}>
                                    <Text style={{ fontSize: 10, color: "#fff", width: 200, fontWeight: '700', textAlign: "left" }}>Aulas: {e?.qtdAulas}</Text>
                                    <Text style={{ fontSize: 20, color: "#fff", width: 200, fontWeight: '700', textAlign: "left" }}>{e?.disciplina}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default OtherScreen;
