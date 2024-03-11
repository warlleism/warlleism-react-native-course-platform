import { Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import useColorMode from "../../context/darkModeStore";

interface ArrowBackProps {
    title?: string;
    route?: string
}

const ArrowBack = ({ title, route }: ArrowBackProps) => {

    const navigation = useNavigation()
    const colorMode = useColorMode((state) => state.colorMode);
    const styles = { colorText: colorMode === 'dark' ? "#fff" : "#212121" };

    return (
        <View style={{ paddingBottom: 30, width: "100%", display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Feather
                style={{ width: '10%' }}
                onPress={() => route ? navigation.navigate(route as never) : navigation.goBack()}
                name="arrow-left"
                size={34}
                color={styles.colorText} />
            <Text style={[{ textAlign: "center", width: "80%", fontSize: 20, color: styles.colorText, fontWeight: '600' }, { color: colorMode === 'dark' ? "#fff" : "#212121" }]}>
                {title === 'undefined' ? 'Aulas' : title}
            </Text>
            <View style={{ width: "10%" }} />
        </View>
    )
}

export default ArrowBack;