import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";

addParameters({
  backgrounds: {
    default: "Defalut Theme",
    values: [
      { name: "Defalut Theme", value: "#ffffff" },
      { name: "Dark Theme", value: "#1B3A4F" }
    ]
  },
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: false
  }
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
