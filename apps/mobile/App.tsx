import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Text } from 'src/components';
import { COLORS_MAP, PEACH } from 'src/components/ui/colors';
import { useLoadFonts } from 'src/hooks';
import { SvgXml } from 'react-native-svg';
import { GEOHUB_LOGO_WITH_TEXT, GEOHUB_LOGO_WITHOUT_TEXT } from 'src/icons';

export default function App() {
    const { fontsLoaded } = useLoadFonts();

    if (!fontsLoaded) {
        // @ToDO: Add a preloading screen.
        return null;
    }

    return (
        <View style={styles.container}>
            <SvgXml xml={GEOHUB_LOGO_WITH_TEXT} width={209} height={247} />
            <SvgXml xml={GEOHUB_LOGO_WITHOUT_TEXT} width={144} height={170} />
            <Button onPress={() => Alert.alert('Hello!')} borderRadius={22}>
                <Text color='white' fontSize={26} fontFamily='Inter-Medium'>
                    Log In
                </Text>
            </Button>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS_MAP[PEACH],
        alignItems: 'center',
        justifyContent: 'center',
    },
});
