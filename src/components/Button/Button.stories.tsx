import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      control: {
        type: "radio",
        options: ["large", "middle", "small"],
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["primary", "default", "dashed", "link", "text"],
      },
    },
    shape: {
      control: {
        type: "radio",
        options: ["default", "circle", "round"],
      },
    },
    startIcon: {
      control: { type: "none" },
    },
    endIcon: {
      control: { type: "none" },
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    danger: {
      control: "boolean",
    },
    ghost: {
      control: "boolean",
    },
    block: {
      control: "boolean",
    },
    href: {
      control: "text",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  type: "default",
  size: "md",
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  type: "primary",
  size: "md",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger Button",
  type: "primary",
  danger: true,
  size: "md",
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Loading Button",
  type: "primary",
  loading: true,
  size: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  type: "default",
  disabled: true,
  size: "md",
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  children: "Button with Start Icon",
  type: "primary",
  size: "md",
  startIcon: (
    <span className="text-red-500">
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 7L7 6L4.70711 3.70711L5.19868 3.21553C5.97697 2.43724 7.03256 2 8.13323 2C11.361 2 14 4.68015 14 7.93274C14 11.2589 11.3013 14 8 14C6.46292 14 4.92913 13.4144 3.75736 12.2426L2.34315 13.6569C3.90505 15.2188 5.95417 16 8 16C12.4307 16 16 12.3385 16 7.93274C16 3.60052 12.4903 0 8.13323 0C6.50213 0 4.93783 0.647954 3.78447 1.80132L3.29289 2.29289L1 0L0 1V7H6Z"
          fill="#fff"
        />
      </svg>
    </span>
  ),
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  children: "Button with End Icon",
  type: "primary",
  size: "md",
  endIcon: (
    <span className="text-red-500">
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 7L7 6L4.70711 3.70711L5.19868 3.21553C5.97697 2.43724 7.03256 2 8.13323 2C11.361 2 14 4.68015 14 7.93274C14 11.2589 11.3013 14 8 14C6.46292 14 4.92913 13.4144 3.75736 12.2426L2.34315 13.6569C3.90505 15.2188 5.95417 16 8 16C12.4307 16 16 12.3385 16 7.93274C16 3.60052 12.4903 0 8.13323 0C6.50213 0 4.93783 0.647954 3.78447 1.80132L3.29289 2.29289L1 0L0 1V7H6Z"
          fill="#fff"
        />
      </svg>
    </span>
  ),
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  children: "Block Button",
  type: "primary",
  size: "md",
  block: true,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: "Link Button",
  type: "link",
  href: "#",
};

export const CircleButton = Template.bind({});
CircleButton.args = {
  children: "Circle button",
  type: "primary",
  shape: "circle",
  size: "md",
};

export const GhostButton = Template.bind({});
GhostButton.args = {
  children: "Ghost Button",
  type: "primary",
  ghost: true,
  size: "md",
};
