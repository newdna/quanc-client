import { extendTheme } from "@chakra-ui/react";
import '@fontsource/lexend/index.css';
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const theme = extendTheme({
  colors: {
    blue: {
      100: "#32B2DF",
      200: "#2C74B3",
      300: "#205295",
      400: "#144272",
      450: "#133d6a",
      500: "#002E57",
      600: "#0A2647",
      700: "#0A2342"
    },
    cyan: {
      100: "#00FFFC",
    },
    green: {
      100: "#1ED760",
    },
    background: {
      default: "#0A2647"
    },
  },
  fonts: {
    heading: 'Lexend',
    body: 'Lexend',
  },
}, withProse());

export default theme;