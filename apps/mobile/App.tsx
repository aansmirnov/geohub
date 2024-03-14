import { StatusBar } from 'expo-status-bar';
import {
    Keyboard,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { COLORS_MAP, PEACH } from 'src/components/ui/colors';
import { useLoadFonts } from 'src/hooks';
import { SvgXml } from 'react-native-svg';
import { GEOHUB_LOGO_WITH_TEXT } from 'src/icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const { fontsLoaded } = useLoadFonts();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.wrapper}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView>
                        <SvgXml
                            xml={GEOHUB_LOGO_WITH_TEXT}
                            width={209}
                            height={247}
                        />
                        <StatusBar style='auto' />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLORS_MAP[PEACH],
    },
});
