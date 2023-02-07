// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sio4-icon',
  styleUrl: 'icon.component.scss',
  shadow: true,
})
export class Sio4IconComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  
  render() {
    return ( <div>Hello, World! I'm </div> );
  }
}
