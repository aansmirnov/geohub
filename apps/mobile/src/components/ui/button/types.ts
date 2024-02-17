import { PressableProps } from 'react-native';
import { Colors } from '../colors';

export type ButtonProps = {
    bg?: Colors;
    size?: 'l';
    borderRadius?: number;
} & PressableProps;
