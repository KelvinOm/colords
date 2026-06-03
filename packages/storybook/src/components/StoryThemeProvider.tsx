import * as React from "react";
import type { UseThemeProps } from "@appsmith/wds-theming";
import { ThemeProvider, useTheme } from "@appsmith/wds-theming";

interface StoryThemeProviderProps {
  children: React.ReactNode;
  theme: UseThemeProps;
}

export const StoryThemeProvider = ({
  children,
  theme,
}: StoryThemeProviderProps) => {
  const { theme: currentTheme } = useTheme(theme);

  return (
    <ThemeProvider
      style={{
        display: "flex",
        width: "100%",
        padding: "36px",
        justifyContent: "center",
      }}
      theme={currentTheme}
    >
      <div style={{ maxWidth: "1000px", width: "100%" }}>{children}</div>
    </ThemeProvider>
  );
};
