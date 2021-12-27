import { Button } from "@/components/Button";

export default {
  component: Button,
  title: "Components/Button",
};

const Template = (args) => <Button {...args} />;

// Primary
export const Primary = Template.bind({});
Primary.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8BWwOrlrwLRivDSMfEwvUp/Top-Navigation?node-id=7%3A172",
    },
  },
};
Primary.args = {
  primary: true,
  label: "Primary Button",
};
Primary.storyName = "Primary";

// Primary
export const Secondary = Template.bind({});
Secondary.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/8BWwOrlrwLRivDSMfEwvUp/Top-Navigation?node-id=7%3A172",
    },
  },
};
Secondary.args = {
  primary: false,
  label: "Secondary Button",
};
Secondary.storyName = "Secondary";
