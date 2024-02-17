import { TextProps as BaseTextProps } from 'react-native';
import { INTER_BOLD, INTER_MEDIUM, INTER_REGULAR } from './consts';
import { Colors } from '../colors';

type FontFamily =
    | typeof INTER_BOLD
    | typeof INTER_MEDIUM
    | typeof INTER_REGULAR;

export type TextProps = BaseTextProps & {
    fontFamily?: FontFamily;
    fontSize?: number;
    color?: Colors;
};
