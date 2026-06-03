import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../**/*.stories.@(ts|tsx)"],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-toolbars",
    "@storybook/preset-create-react-app",
    "./addons/theming/manager.ts",
  ],

  framework: "@storybook/react-vite",

  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      propFilter: (prop) =>
        prop.parent ? !/node_modules\*/.test(prop.parent.fileName) : true,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },

  core: {
    disableTelemetry: true,
  },

  docs: {},
};

export default config;
