import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Text } from 'src/components';
import { COLORS_MAP, PEACH } from 'src/components/ui/colors';
import { useLoadFonts } from 'src/hooks';

export default function App() {
    const { fontsLoaded } = useLoadFonts();

    if (!fontsLoaded) {
        // @ToDO: Add a preloading screen.
        return null;
    }

    return (
        <View style={styles.container}>
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
