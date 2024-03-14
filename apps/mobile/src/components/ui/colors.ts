export const BLACK = 'black';
export const GREEN = 'green';
export const PEACH = 'peach';
export const LIGHT_GREY = 'lightGrey';
export const GREY = 'grey';
export const DARK_GREY = 'darkGrey';

const WHITE = 'white';
const ORANGE = 'orange';
const RED = 'red';

export const COLORS_MAP = {
    [BLACK]: '#000',
    [WHITE]: '#fff',
    [GREEN]: '#1F9B00',
    [ORANGE]: '#A77900',
    [DARK_GREY]: '#4F4F4F',
    [LIGHT_GREY]: '#D7CFB8',
    [GREY]: '#C4BAA1',
    [RED]: '#DC2626',
    [PEACH]: '#EEDCB9',
};

export type Colors = keyof typeof COLORS_MAP;
