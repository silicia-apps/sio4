import * as readme from './readme.md';
import { html } from 'lit-html';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sio4MenuComponent } from '@sio4/core/sio4-menu';

export default {
  title: 'Sio4MenuComponent',
  component: 'Sio4MenuComponent',
  
  parameters:{
    notes: readme
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => { return html `<sio4-menu></sio4-menu-item>` };

export const Example = Template.bind({});
Example.args = {
  caption: 'xl',
};