import { Component, h, Prop } from '@stencil/core';
import { Sio4MenuItemInterface } from '../sio4-menu-item';
import { Sio4MenuInterface } from './menu.interface';

@Component({
  tag: 'sio4-menu',
  styleUrl: 'menu.scss',
  shadow: true,
})
export class Sio4CoreMenuComponent implements Sio4MenuInterface {
  @Prop() menuId: string = 'main';
  @Prop() enabled: boolean = false;
  @Prop() layout: 'flat' | 'accordion' = 'flat';
  @Prop() label: string = 'NO LABEL';
  @Prop() color: string | undefined;
  @Prop() toggleIcon: string = '';
  @Prop() toggleIconSlot: 'start' | 'end' = 'start';
  @Prop() lines: 'full' | 'inset' | 'none' = 'none';
  @Prop() position: 'top' | 'bottom' | 'hover' = 'hover';
  @Prop() menuItems: Sio4MenuItemInterface[] | undefined;

  render() {
    return (
      <host>
        {this.position === 'hover' ? (
          this.layout === 'accordion' ? (
            <ion-accordion-group expand="compact">
              <ion-accordion
                value={this.label}
                toggleIconSlot={this.toggleIconSlot}
                toggleIcon={this.toggleIcon}
              >
                <ion-item slot="header" color={this.color}>
                  <ion-label>{this.label}</ion-label>
                </ion-item>
                <ion-list slot="content" inset>
                  {this.menuItems.map((item, index) => (
                    <sio4-menu-item
                      menuItemId={index}
                      color={this.color}
                      icon={item.icon}
                      caption={item.caption}
                      url={item.url}
                    />
                  ))}
                </ion-list>
              </ion-accordion>
            </ion-accordion-group>
          ) : (
            <ion-list lines={this.lines}>
              <ion-item-divider>
                <ion-label>{this.label}</ion-label>
              </ion-item-divider>
              <ion-menu-toggle auto-hide="false">
                {this.menuItems.map((item) => {
                  return (
                    <sio4-menu-item
                      color={this.color}
                      icon={item.icon}
                      caption={item.caption}
                      url={item.url}
                    />
                  );
                })}
              </ion-menu-toggle>
            </ion-list>
          )
        ) : (
          <ion-tabs
          >
            <ion-tab-bar color={this.color} class="ion-no-border">
              {this.menuItems.map((item) => {
                <sio4-menu-item
                  color={this.color}
                  icon={item.icon}
                  caption={item.caption}
                  url={item.url}
                  layout="rounded"
                />;
              })}
            </ion-tab-bar>
          </ion-tabs>
        )}
      </host>
    );
  }
}
