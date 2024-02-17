import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from 'src/components';
import { useLoadFonts } from 'src/hooks';

export default function App() {
    const { fontsLoaded } = useLoadFonts();

    if (!fontsLoaded) {
        // @ToDO: Add a preloading screen.
        return null;
    }

    return (
        <View style={styles.container}>
            <Text fontFamily='Inter-Bold' fontSize={30} color='red'>
                Bold
            </Text>
            <Text fontFamily='Inter-Medium' fontSize={25} color='peach'>
                Medium
            </Text>
            <Text fontFamily='Inter-Regular' color='orange'>
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
