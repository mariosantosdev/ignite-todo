import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const circular = definePartsStyle({
  control: defineStyle({
    rounded: "full",
    borderColor: "brand.blue",
  }),
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { circular },
});
