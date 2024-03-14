import { TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { InputProps } from './types';
import { COLORS_MAP, DARK_GREY, GREY, LIGHT_GREY } from '../colors';
import { useState } from 'react';

export const Input = ({
    width = 100,
    height = 50,
    value,
    placeholder,
    keyboardType,
    autoFocus,
    onChangeText,
}: InputProps) => {
    const [onFocus, setOnFocus] = useState(false);

    const activeBackgroundColor = onFocus
        ? COLORS_MAP[GREY]
        : styles.input.backgroundColor;

    return (
        <SafeAreaView>
            <TextInput
                style={{
                    ...styles.input,
                    width,
                    height,
                    backgroundColor: activeBackgroundColor,
                }}
                autoFocus={autoFocus}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={COLORS_MAP[DARK_GREY]}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        backgroundColor: COLORS_MAP[LIGHT_GREY],
        borderRadius: 22,
        paddingLeft: 20,
        paddingRight: 20,
    },
});
