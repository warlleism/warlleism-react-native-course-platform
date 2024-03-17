import * as React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useTheme from '../hooks/useTheme';
import { Aulas } from '../../aulas/aulas';
import { useNavigation } from '@react-navigation/native';
import useCoursesStore from '../context/cursesStore';

const HomeScreen = () => {

    const { styles, colorMode } = useTheme()
    const alterObj = useCoursesStore((state) => state.alterObj)
    const navigation = useNavigation()
    const handleCourses = (obj: any) => {
        alterObj(obj)
        navigation.navigate('Course' as never)
    }
    return (
        <ScrollView style={[style.container, { backgroundColor: styles.backgroundColor }]}>
            <View style={style.content}>
                <View style={style.logoContainer}>
                    <Image source={colorMode !== 'dark' ? require('../../assets/dark-icon.png') : require('../../assets/icone.png')} style={style.logo} />
                    <View style={style.divider} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        {Aulas?.map((e: any) => (
                            <TouchableOpacity
                                onPress={() => handleCourses(e)}
                                key={e?.id}
                                style={{ flex: 1, alignSelf: "center", borderRadius: 10, height: 300, width: "35%", marginBottom: 20, overflow: "hidden" }}
                            >
                                <ImageBackground
                                    source={e?.img}
                                    style={{ justifyContent: 'center', alignItems: 'center', alignSelf: "center", width: 200, height: "100%" }}>
                                    <View style={style.imageOverlay} />
                                    <Text style={{ fontSize: 20, color: "#fff", width: '90%', fontWeight: '700', textAlign: "center" }}>{e?.disciplina}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <View style={style.divider} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', height: 240, }}>
                    <Image
                        source={require('../../assets/man-home.png')}
                        style={{ width: "50%", height: "100%", objectFit: 'cover' }} />
                    <View style={{ width: "48%" }}>
                        <Image
                            source={colorMode !== 'dark' ? require('../../assets/dark-icon.png') : require('../../assets/icone.png')}
                            style={{
                                width: 120,
                                height: 30,
                                marginBottom: 10,
                            }} />
                        <Text style={{ color: styles.colorText, fontSize: 11, letterSpacing: -.1 }}>Explore nossa plataforma de cursos de TI, repleta de conteúdos  atualizados e práticos, ministrados por especialistas do setor. Desde  programação até segurança cibernética, oferecemos uma jornada de  aprendizado flexível, com recursos interativos, exercícios práticos e  avaliações desafiadoras. Capacite-se para o futuro da tecnologia da  informação, estudando no seu próprio ritmo, de qualquer lugar. Junte-se a  nós nesta emocionante jornada de desenvolvimento profissional. O futuro  da TI começa aqui!</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 30,
                    marginBottom: 30,
                    width: "100%",
                    height: 25,
                    backgroundColor: '#6100FF',
                    borderRadius: 100
                }} />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 130 }}>
                    <Text style={{ color: styles.colorText, fontWeight: '900', fontSize: 15 }}>PLANOS</Text>

                    <View style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '32.5%', marginTop: 30 }}>
                            <Text style={{ color: styles.colorText, fontWeight: '900', fontSize: 15, textAlign: 'center', marginBottom: 5 }}>GRATUITO</Text>
                            <View style={{ width: '100%', gap: 50, borderRadius: 10, borderColor: '#6100FF', borderWidth: 2, justifyContent: 'space-between', paddingTop: 20, paddingBottom: 10, height: 400 }}>
                                <View style={{ gap: 15 }}>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Aulas gratuitas</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Acesso limitado</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Restrição de acesso</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Nível introdutório</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Exercícios práticos</Text>
                                </View>
                                <TouchableOpacity style={{ gap: 15, width: '90%', height: 70, borderRadius: 10, borderColor: '#6100FF', borderWidth: 2, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                    <Text style={{ color: styles.colorText, fontWeight: '800' }}>COMPRAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '32.5%' }}>
                            <Text style={{ color: "#6100FF", fontWeight: '900', fontSize: 25, textAlign: 'center', marginBottom: 5 }}>PREMIUM</Text>
                            <View style={{ gap: 50, width: '100%', borderRadius: 10, borderColor: '#6100FF', justifyContent: 'space-between', borderWidth: 2, paddingTop: 20, height: 418, paddingBottom: 10 }}>
                                <View style={{ gap: 15 }}>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Aulas gratuitas</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Acesso ilimitado</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Acesso prioritário</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Sem restrição de acesso</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Certificados</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Benefícios</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Networking</Text>
                                </View>
                                <TouchableOpacity style={{ gap: 15, width: '90%', height: 70, borderRadius: 10, borderColor: '#6100FF', borderWidth: 2, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                    <Text style={{ color: "#6100FF", fontWeight: '800' }}>COMPRAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '32.5%', marginTop: 30 }}>
                            <Text style={{ color: styles.colorText, fontWeight: '900', fontSize: 15, textAlign: 'center', marginBottom: 5 }}>FULLSTACK</Text>
                            <View style={{ width: '100%', gap: 50, borderRadius: 10, borderColor: '#6100FF', borderWidth: 2, justifyContent: 'space-between', paddingTop: 20, paddingBottom: 10, height: 400 }}>
                                <View style={{ gap: 15 }}>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Aulas gratuitas</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Acesso ilimitado</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Sem restrição de acesso</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Certificados</Text>
                                    <Text style={[style.listText, { color: styles.colorText }]}>Networking</Text>
                                </View>
                                <TouchableOpacity style={{ gap: 15, width: '90%', height: 70, borderRadius: 10, borderColor: '#6100FF', borderWidth: 2, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                    <Text style={{ color: styles.colorText, fontWeight: '800' }}>COMPRAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        width: "95%",
        alignSelf: 'center',
        marginTop: 30,
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    logo: {
        width: 190,
        height: 40,
    },
    divider: {
        marginBottom: 30,
        width: "100%",
        height: 2,
        backgroundColor: '#6100FF',
        borderRadius: 100
    },
    imageOverlay: {
        backgroundColor: '#6100FF',
        opacity: .6,
        ...StyleSheet.absoluteFillObject,
    },
    listText: {
        width: "100%",
        fontSize: 12,
        letterSpacing: -.5,
        paddingLeft: 10,
    }
});

export default HomeScreen;
