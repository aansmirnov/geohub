import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useLoadFonts } from 'src/hooks';

export default function App() {
    const { fontsLoaded } = useLoadFonts();

    if (!fontsLoaded) {
        // @ToDO: Add a preloading screen.
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Inter-Bold', fontSize: 30 }}>Bold</Text>
            <Text style={{ fontFamily: 'Inter-Medium', fontSize: 25 }}>
                Medium
            </Text>
            <Text style={{ fontFamily: 'Inter-Regular', fontSize: 20 }}>
                Regular
            </Text>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
