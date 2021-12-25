import React from "react";
import { Button } from "@/components/Button";

export default {
  component: Button,
  title: "Components/Button",
};

const Template = (args) => <Button {...args} />;

// Tagline & Subtagline
export const Tag = Template.bind({});
Tag.args = {
  label: "Button",
};
Tag.storyName = "With Tagline & Subtagline";
