import * as React from "react";
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

export const Main: Story = {
  parameters: {
    layout: "fullscreen",
  },
  // Stretch the form to fill the full viewport. A single-cell grid stretches
  // its child to fill both width and height by default. Authored with
  // React.createElement so the file can stay `.ts` (no JSX transform needed).
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        { style: { display: "grid", minHeight: "100vh" } },
        React.createElement(Story),
      ),
  ],
};
