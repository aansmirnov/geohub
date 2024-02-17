import { Pressable, StyleSheet } from 'react-native';
import { ButtonProps } from './types';
import { COLORS_MAP, GREEN } from '../colors';

export const Button = ({
    children,
    bg = GREEN,
    borderRadius,
    // size = 'l',
    ...props
}: ButtonProps) => {
    const backgroundColor = COLORS_MAP[bg];
    const buttonSize = { width: 320, height: 62 };

    return (
        <Pressable
            style={{
                backgroundColor,
                borderRadius,
                ...buttonSize,
                ...styles.button,
            }}
            {...props}
        >
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
