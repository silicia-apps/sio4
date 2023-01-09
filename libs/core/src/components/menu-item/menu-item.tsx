import { Component, getMode, h, Prop, setMode } from '@stencil/core';
import { Sio4CoreMenuItemInterface } from './menu-item.interface';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the item.
 * @slot end - Content is placed to the right of the item.
 */

@Component({
  tag: 'sio4-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true,
})
export class Sio4CoreMenuItemComponent implements Sio4CoreMenuItemInterface {
  @Prop() menuItemId: number | undefined;
  @Prop() icon: string | undefined;
  @Prop() url: string = '/';
  @Prop() caption: string | undefined;
  @Prop() type: 'download' | 'navigate' = 'navigate';
  @Prop() disabled: boolean = false;
  @Prop() badge: number = 0;
  @Prop() tabbed: boolean = false;
  @Prop() layout: string;
  @Prop() styleMenu: string = 'rounded';

  constructor() {
    this.caption = (
      this.caption
        ? this.caption
        : this.url !== '/'
        ? `M_${this.url?.replace('/', '_').toUpperCase()}`
        : 'NO_CAPTION'
    ).replace('__', '_');
    console.log(
      'set mode ' +
        setMode(() => {
          return 'md';
        })
    );
    console.log(
      'get mode ' +
        getMode((elm) => {
          return JSON.stringify(elm);
        })
    );
  }

  render() {
    return (
      <host>
        {this.tabbed ? (
          <ion-tab-button
            tab="{this.url}"
            download="false"
            layout="icon-start"
          >
            <ion-icon
              ios={this.icon + '-outline'}
              md={this.icon + '-sharp'}
            ></ion-icon>
            <ion-label>{this.caption}</ion-label>
            {this.badge > 0 ? <ion-badge> {this.badge}</ion-badge> : null}
          </ion-tab-button>
        ) : (
          <ion-item button >
            <slot name="start">
              <ion-icon
                name={this.icon}
                ios={this.icon + '-outline'}
                md={this.icon + '-sharp'}
                slot="start"
              />
            </slot>
            <ion-label>{this.caption}</ion-label>
            <slot name="end">
              {this.badge ? (
                <ion-badge slot="end" color="danger">
                  {this.badge}
                </ion-badge>
              ) : (
                <div></div>
              )}
            </slot>
          </ion-item>
        )}
      </host>
    );
  }
}
