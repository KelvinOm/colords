import { addons } from "@storybook/manager-api";
import wdsTheme from "./wds-theme";

addons.setConfig({
  theme: wdsTheme,
  selectedPanel: "ds-test",
  enableShortcuts: false,
  sidebar: {
    showRoots: false,
  },
});
