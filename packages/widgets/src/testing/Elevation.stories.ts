import type { Meta, StoryObj } from "@storybook/react";
import { Elevation } from "./Elevation";

const meta: Meta<typeof Elevation> = {
  component: Elevation,
  title: "Design System/Testing/Elevation",
  // Render as a full-page canvas instead of the contained autodocs page,
  // which wraps the story in padded blocks that overflow horizontally.
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Elevation>;

export const Main: Story = {};
