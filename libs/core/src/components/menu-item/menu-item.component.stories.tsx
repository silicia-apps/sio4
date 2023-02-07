import * as readme from './readme.md';
import { html } from 'lit-html';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sio4MenuItem } from '@sio4/core/sio4-menu-item';

export default {
  title: 'Sio4MenuItem',
  component: 'Sio4MenuItem',
  
  parameters:{
    notes: readme
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => { return html `<sio4-menu-item caption="${args.caption}"></sio4-menu-item>` };

export const Example = Template.bind({});
Example.args = {
  caption: 'xl',
};
