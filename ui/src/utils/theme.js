import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Lato1 from "./fonts/Lato-Regular.ttf";
import Lato2 from "./fonts/Lato-Light.ttf";
import Lato3 from "./fonts/Lato-Bold.ttf";

const lato1 = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Lato'),
    local('Lato-Regular'),
    url(${Lato1}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const lato2 = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    local('Lato'),
    local('Lato-Light'),
    url(${Lato2}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const lato3 = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `
    local('Lato'),
    local('Lato-Bold'),
    url(${Lato3}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#C6E2E9",
      main: "#A7BED3",
      dark: "#344055",
    },
    secondary: {
      main: "#FFCAAF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f0f0f0",
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [lato1, lato2, lato3],
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: "2.25rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

theme.typography.h2 = {
  fontSize: "1.875rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.625rem",
  },
};

theme.typography.h3 = {
  fontSize: "1.75rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.625rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.375rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.375rem",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
};

theme.typography.h6 = {
  fontSize: "1.25rem",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

theme.typography.subtitle1 = {
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9375rem",
  },
};

theme.typography.body1 = {
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9375rem",
  },
};

theme.typography.body2 = {
  fontSize: "0.9375rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
};

export default theme;
