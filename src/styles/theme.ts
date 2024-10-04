import { extendTheme } from '@chakra-ui/react'
import * as consts from '@/consts'

const config = {
    initialColorMode: 'light' as 'light',
    useSystemColorMode: false,
}
const breakpoints = {
    xs: '22em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}

export const theme = extendTheme({
    breakpoints,
    config,
    fonts: {
        body: 'Times New Roman, sans-serif',
    },
    colors: {
        primary: {
            100: '#E5FCF1',
            200: '#27EF96',
            300: '#10DE82',
            400: '#0EBE6F',
            500: '#0CA25F',
            600: '#0A864F',
            700: '#086F42',
            800: '#075C37',
            900: '#064C2E',
        },
    },

    components: {
        Button: {
            baseStyle: {
                fontWeight: 600,
                fontSize: '18px',
                borderRadius: '5px',
                width: '175px',
                _hover: {
                    transform: 'scale(1.02)',
                    opacity: 0.95,
                },
            },
            variants: {
                primary: {
                    backgroundColor: 'brand.200',
                    color: 'white',

                    _hover: {
                        backgroundColor: 'brand.200 !important',
                        color: 'white !important',
                        transform: 'scale(1.02)',
                        opacity: 0.95,
                    },
                },
                secondary: {
                    border: '1px solid #192A5F',
                    color: 'black',
                    _hover: {
                        transform: 'scale(1.02)',
                        opacity: 0.95,
                    },
                },
            },
        },
    },
    textStyles: {
        h1: {
            fontSize: '64px',
            fontWeight: 500,
            fontFamily: 'Nunito, sans-serif',

            [consts.mediaQueryCss.mobileL]: {
                fontSize: '48px',
                lineHeight: '120%',
            },
        },
        h2: {
            fontSize: '36px',
            fontWeight: 500,
            fontFamily: 'Nunito, sans-serif',

            [consts.mediaQueryCss.mobileL]: {
                fontSize: '28px',
                lineHeight: '120%',
            },
        },
        h3: {
            fontSize: '32px',
            fontWeight: 400,
            fontFamily: 'Nunito, sans-serif',

            [consts.mediaQueryCss.mobileL]: {
                fontSize: '25px',
            },
        },
        h4: {
            fontSize: '24px',
            fontWeight: 400,
            fontFamily: 'Nunito, sans-serif',

            [consts.mediaQueryCss.mobileL]: {
                fontSize: '18px',
            },
        },
        h5: {
            fontSize: '20px',
            fontWeight: 400,
            fontFamily: 'Nunito, sans-serif',

            [consts.mediaQueryCss.mobileL]: {
                fontSize: '16px',
            },
        },
        p: {
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: 'Nunito, sans-serif',

            [consts.mediaQueryCss.mobileL]: {
                fontSize: '12px',
            },
        },
    },
    styles: {
        global: {
            body: {
                color: 'black',
            },
        },
    },
})
