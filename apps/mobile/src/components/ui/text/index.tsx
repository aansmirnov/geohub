import { Text as BaseText } from 'react-native';
import { TextProps } from './types';
import { INTER_REGULAR } from './consts';
import { BLACK, COLORS_MAP } from '../colors';

export const Text = ({ children, ...props }: TextProps) => {
    const { fontFamily = INTER_REGULAR, fontSize = 18, color = BLACK } = props;

    return (
        <BaseText
            style={{ fontFamily, fontSize, color: COLORS_MAP[color] }}
            {...props}
        >
            {children}
        </BaseText>
    );
};
