import type { Meta, StoryObj } from "@storybook/react";
import { ComplexForm } from "./ComplexForm";

const meta: Meta<typeof ComplexForm> = {
  component: ComplexForm,
  title: "Design System/Testing/ComplexForm",
  // Render the story as a full-page canvas instead of inside the
  // contained, scaled-down autodocs preview block.
  tags: ["!autodocs"],
};

export default meta;
type Story = StoryObj<typeof ComplexForm>;

// The form sizes to its content and is centered by the global theming
// decorator — no extra height stretching, so there are no redundant scrolls.
export const Main: Story = {
  parameters: {
    layout: "fullscreen",
  },
};
