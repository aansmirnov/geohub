import { useFonts } from 'expo-font';

type UseLoadFontsReturnType = {
    fontsLoaded: boolean;
};

export const useLoadFonts = (): UseLoadFontsReturnType => {
    const [fontsLoaded] = useFonts({
        'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
        'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
    });

    return { fontsLoaded };
};
