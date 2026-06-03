import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ColorGrid } from "./ColorGrid";

const meta: Meta<typeof ColorGrid> = {
  component: ColorGrid,
  title: "Design System/Testing/Color Grid",
  // Render as a full-page canvas instead of the contained autodocs page,
  // which wraps the story in padded blocks that overflow horizontally.
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    source: "oklch",
    size: "small",
    steps: 8,
    colorSpace: "oklch",
    variant: "primary",
    isHovered: false,
    isActive: false,
    isFocused: false,
    isDisabled: false,
  },
  argTypes: {
    source: {
      options: ["oklch", "hex", "appsmith"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "big"],
      control: { type: "radio" },
      if: { arg: "source", neq: "appsmith" },
    },
    colorSpace: {
      options: ["oklch", "hex"],
      control: { type: "radio" },
    },
    steps: {
      if: { arg: "source", neq: "appsmith" },
    },
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
  },
  render: (args, { globals: { colorMode } }) => (
    <ColorGrid {...args} colorMode={colorMode}>
      {(color: { seed: string; derived: string }) => (
        <>
          {color.seed}
          <br />
          {color.derived}
        </>
      )}
    </ColorGrid>
  ),
};

export default meta;
type Story = StoryObj<typeof ColorGrid>;

export const Main: Story = {};
