export function pxToRem(value) {
  return `${value / 16}rem`;
}

const FONT_FAMILY = "Source Sans Pro, sans-serif"; // Google Font

const typography = {
  fontFamily: FONT_FAMILY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    fontSize: pxToRem(40),
  },
  h2: {
    fontWeight: 800,
    fontSize: pxToRem(32),
  },
  h3: {
    fontWeight: 700,
    fontSize: pxToRem(24),
  },
  h4: {
    fontWeight: 700,
    fontSize: pxToRem(20),
  },
  h5: {
    fontWeight: 700,
    fontSize: pxToRem(18),
  },
  h6: {
    fontWeight: 700,
    fontSize: pxToRem(17),
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: pxToRem(14),
  },
  body1: {
    fontSize: pxToRem(16),
  },
  body2: {
    fontSize: pxToRem(14),
  },
  caption: {
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,

    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;
