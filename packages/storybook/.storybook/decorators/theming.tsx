import * as React from "react";
// @ts-ignore
import isChromatic from "chromatic/isChromatic";
import { ThemeProvider, useTheme } from "@appsmith/wds-theming";

export const theming = (Story, args) => {
  const { theme } = useTheme({
    seedColor: args.globals.seedColor,
    colorMode: args.parameters.colorMode || args.globals.colorMode,
    borderRadius: args.globals.borderRadius,
    userDensity: args.globals.userDensity,
    userSizing: args.globals.userSizing,
  });

  return (
    <ThemeProvider
      className={isChromatic() ? "is-chromatic" : ""}
      style={{
        display: "flex",
        minWidth: "100%",
        minHeight: "100%",
        padding: "16px",
        alignItems: "center",
        justifyContent: "center",
      }}
      theme={theme}
    >
      <Story />
    </ThemeProvider>
  );
};
