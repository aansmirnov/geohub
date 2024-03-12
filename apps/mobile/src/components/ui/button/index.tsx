import { Pressable, StyleSheet, View } from 'react-native';
import { ButtonProps } from './types';
import { COLORS_MAP, GREEN } from '../colors';
import { useState } from 'react';

export const Button = ({
    children,
    bg = GREEN,
    borderRadius,
    // size = 'l',
    ...props
}: ButtonProps) => {
    const [onHover, setOnHover] = useState(false);
    const backgroundColor = COLORS_MAP[bg];
    const buttonSize = { width: 320, height: 62 };
    const buttonHoverStyles = {
        transition: 'all 100ms ease',
        transform: 'scale(1.02)',
        shadowColor: 'black',
        shadowOpacity: 0.1,
    };

    return (
        <View style={styles.buttonWrapper}>
            <Pressable
                style={{
                    backgroundColor,
                    borderRadius,
                    ...buttonSize,
                    ...styles.button,
                    ...(onHover ? buttonHoverStyles : {}),
                }}
                onMoveShouldSetResponder={() => true}
                onResponderStart={() => setOnHover(true)}
                onResponderEnd={() => setOnHover(false)}
                {...props}
            >
                {children}
            </Pressable>
            {onHover && <View style={{ ...styles.overlay, borderRadius }} />}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        position: 'relative',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        transform: 'scale(1.02)',
    },
});
