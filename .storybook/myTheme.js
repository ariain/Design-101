import { create } from "@storybook/theming/create";

export default create({
    base: "light",

    colorPrimary: "#1B3A4F",
    colorSecondary: "deepskyblue",

    // UI
    appBg: "white",
    appContentBg: "#ffffff",
    appBorderColor: "#ffffff",
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: "black",
    textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    barTextColor: "#ffffff",
    barSelectedColor: "#ffffff",
    barBg: "#1B3A4F",

    // Form colors
    inputBg: "white",
    inputBorder: "#ffffff",
    inputTextColor: "black",
    inputBorderRadius: 4,

});