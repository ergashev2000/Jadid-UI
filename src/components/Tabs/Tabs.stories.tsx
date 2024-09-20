import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tabs, { TabPane } from './Tabs'; // Import Tabs and TabPane components

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    defaultActiveKey: {
      control: 'text',
      description: 'The key of the tab to be active by default',
      defaultValue: '1',
    },
    className: {
      control: 'text',
      description: 'CSS class for the Tabs container',
    },
    tabBarClassName: {
      control: 'text',
      description: 'CSS class for the tab bar',
    },
    contentClassName: {
      control: 'text',
      description: 'CSS class for the content area',
    },
    onTabChange: {
      action: 'tab changed',
      description: 'Callback function triggered when the tab changes',
    },
    vertical: {
      control: 'boolean',
      description: 'Display tabs in vertical orientation',
      defaultValue: true, // Set to true for vertical layout
    },
    position: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      description: 'Position of the tab bar',
      defaultValue: 'left',
    },
  },
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabPane key="1" tab="Tab 1">
      Content for Tab 1
    </TabPane>
    <TabPane key="2" tab="Tab 2">
      Content for Tab 2
    </TabPane>
    <TabPane key="3" tab="Tab 3">
      Content for Tab 3
    </TabPane>
  </Tabs>
);

// Story for vertical tabs on the left
export const LeftVerticalTabs = Template.bind({});
LeftVerticalTabs.args = {
  defaultActiveKey: '1',
  className: '',
  tabBarClassName: '',
  contentClassName: '',
  vertical: true, // Vertical layout
  position: 'left', // Tabs on the left
};

// Story for vertical tabs on the right
export const RightVerticalTabs = Template.bind({});
RightVerticalTabs.args = {
  defaultActiveKey: '1',
  className: '',
  tabBarClassName: '',
  contentClassName: '',
  vertical: true, // Vertical layout
  position: 'right', // Tabs on the right
};
