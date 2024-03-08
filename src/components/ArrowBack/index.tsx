import { Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import useColorMode from "../../context/darkModeStore";

interface ArrowBackProps {
    title: string;
}


const ArrowBack = ({ title }: ArrowBackProps) => {

    const navigation = useNavigation()
    const colorMode = useColorMode((state) => state.colorMode);
    const styles = { colorText: colorMode === 'dark' ? "#4100ff" : "#212121" };

    return (
        <View style={{ width: "100%", display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Feather
                style={{ width: 100 }}
                onPress={() => navigation.goBack()}
                name="arrow-left"
                size={34}
                color={styles.colorText} />
            <Text style={[{ textAlign: "center", width: 200, fontSize: 25, color: styles.colorText, fontWeight: '300' }, { color: colorMode === 'dark' ? "#fff" : "#212121" }]}>{title}</Text>
            <View style={{ width: 100 }} />
        </View>
    )
}

export default ArrowBack;