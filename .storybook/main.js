module.exports = {
  stories: ["../src/**/*.stories.(js|mdx|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-a11y/register",
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
};
