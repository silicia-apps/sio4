import * as readme from './readme.md';
import { html } from 'lit-html';
import { Sio4App } from '@sio4/core/sio4-app';

export default {
  title: 'Sio4App',
  component: 'Sio4App',
  args: {
    title: 'Sio4- Demo',
    sidemenu: 'xl',
  },
  argTypes: {
    sidemenu: {
      options: ['xs','sm','md','lg','xl','none'],
      control: { type: 'select' },
    },
  },
  parameters:{
    notes: readme
  }
};

const Template = (args: any) => { return html `<sio4-app atitle="${args.atitle}" sidemenu="${args.sidemenu}"></sio4-app>` };

export const Empty = (args) => Template(args);

export const SideMenu = Template.bind({});
SideMenu.args = {
  sidemenu: 'xl',
};
