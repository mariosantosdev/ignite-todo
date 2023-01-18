import { extendTheme } from "@chakra-ui/react";

const colors = {
  danger: "#E25858",
  gray: {
    100: "#f2f2f2",
    200: "#d9d9d9",
    300: "#808080",
    400: "#333333",
    500: "#262626",
    600: "#1A1A1A",
    700: "#0D0D0D",
  },
  brand: {
    purple: "#8284FA",
    purpleDark: "#8284FA",
    blue: "#4EA8DE",
    blueDark: "#1E6F9F",
  },
};

const components = {
  Button: {
    variants: {
      "blue-brand": {
        bg: "brand.blueDark",
        color: "gay.100",
        transaction: "background-color 0.2s",
        _hover: {
          bg: "brand.blue",
        },
      },
    },
  },
};

const fonts = {
  body: "Inter, sans-serif",
  heading: "Inter, sans-serif",
  mono: "Menlo, monospace",
};

export const theme = extendTheme({
  colors,
  components,
  fonts,
  styles: {
    global: {
      body: {
        color: "gray.100",
        bg: "gray.600",
      },
    },
  },
});
