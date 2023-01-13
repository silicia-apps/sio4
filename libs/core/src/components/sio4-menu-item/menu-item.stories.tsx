import * as readme from './readme.md';
import { html } from 'lit-html';
import { Sio4MenuItem } from '@sio4/core/sio4-menu-item';

export default {
  title: 'Sio4MenuItem',
  component: 'Sio4MenuItem',
  
  parameters:{
    notes: readme
  }
};

const Template = (args: any) => { return html `<sio4-menu-item caption="${args.caption}"></sio4-menu-item>` };

export const Example = Template.bind({});
Example.args = {
  caption: 'xl',
};
