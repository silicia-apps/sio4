
import { Sio4CoreAppComponent } from './app';
import { Sio4CoreMenuItemComponent } from '../menu-item';
export default {
  title: 'test',
  component: Sio4CoreAppComponent
}

const Template = (args: any) => `<sio4-app title="${args.title}"></sio4-app>`;

export const Example = Template.bind({});
Example.args = {
  title: 'App title',
};