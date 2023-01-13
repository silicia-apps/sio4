import * as readme from './readme.md';
import { html } from 'lit-html';
import { Sio4App } from '@sio4/core/sio4-app';

export default {
  title: 'Sio4App',
  component: 'Sio4App',
  args: {
    title: 'Sio4-Demo',
    sidemenu: 'xl',
  },
  argTypes: {
    sidemenu: {
      options: ['xs','sm','md','lg','xl','none'],
      control: { type: 'select' },
    },
    color: {
      control: 'color'
    }
  },
  parameters:{
    notes: readme
  }
};

const Template = (args: any) => { return html `<sio4-app title="${args.title}" sidemenu="${args.sidemenu}" color="${args.color}"></sio4-app>` };

export const Default = (args) => Template(args);
