import type { Meta, StoryObj } from "@storybook/react";
import { CompareTokens } from "./CompareTokens";

const meta: Meta<typeof CompareTokens> = {
  component: CompareTokens,
  title: "Design System/Testing/CompareTokens",
  // Render as a full-page canvas instead of the contained autodocs page,
  // which wraps the story in padded blocks that overflow horizontally.
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CompareTokens>;

export const Main: Story = {};
