import { html } from 'lit-html';
import { Sio4Icon } from '@sio4/core/sio4-icon';

export default {
  title: 'Sio4Icon',
  component: 'Sio4Icon',
  args: {
    first: 'first',
    middle: 'first',
    last: 'first',
  },
};

const Template = (args) => {
  return html`
    <sio4-icon
      first=${args.first}
      middle=${args.middle}
      last=${args.last}
    ></sio4-icon>
  `;
};

export const Default = (args) => Template(args);
