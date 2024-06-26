export const mediaQueryBreakpoints = {
    mobileS: 320, // xs
    mobileM: 576, // sm
    mobileL: 768, // md
    tablet: 992, // lg
    desktopS: 1200, // xl
    desktopM: 1440, // w1440
}

export const mediaQueryChakra = {
    mobileS: `(max-width: ${mediaQueryBreakpoints.mobileS}px)`, // xs
    mobileM: `(max-width: ${mediaQueryBreakpoints.mobileM}px)`, // sm
    mobileL: `(max-width: ${mediaQueryBreakpoints.mobileL}px)`, // md
    tablet: `(max-width: ${mediaQueryBreakpoints.tablet}px)`, // lg
    desktopS: `(max-width:${mediaQueryBreakpoints.desktopS}px)`, // xl
    desktopM: `(max-width: ${mediaQueryBreakpoints.desktopM}px)`, // w1440
}

export const mediaQueryCss = {
    mobileS: `@media (max-width: ${mediaQueryBreakpoints.mobileS}px)`, // xs
    mobileM: `@media (max-width: ${mediaQueryBreakpoints.mobileM}px)`, // sm
    mobileL: `@media (max-width: ${mediaQueryBreakpoints.mobileL}px)`, // md
    tablet: `@media (max-width: ${mediaQueryBreakpoints.tablet}px)`, // lg
    desktopS: `@media (max-width:${mediaQueryBreakpoints.desktopS}px)`, // xl
    desktopM: `@media (max-width: ${mediaQueryBreakpoints.desktopM}px)`, // w1440
}
