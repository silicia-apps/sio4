import * as readme from './readme.md';
import { html } from 'lit-html';
import { Sio4AppComponent } from '@sio4/core/sio4-app';

export default {
  title: 'Sio4App',
  component: 'Sio4AppComponent',
  args: {
    appname: 'Sio4-Demo',
    sidemenu: 'overlay',
    color: 'primary'
  },
  argTypes: {
    sidemenu: {
      options: ['overlay','reveal','push','toogle','none'],
      control: { type: 'select' },
    },
    color: {
      options: ["danger","dark","light","medium","primary","secondary","success","tertiary","warning","none"],
      control: { type: 'select' },
    }
  },
  parameters:{
    notes: readme
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => { return html `<sio4-app appname="${args.appname}" sidemenu="${args.sidemenu}" color="${args.color}"></sio4-app>` };

export const Default = (args) => Template(args);
