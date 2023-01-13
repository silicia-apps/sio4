import { Component, h, Prop } from '@stencil/core';
import { Sio4MenuInterface } from '../sio4-menu';
import { Sio4AppInterface } from './app.interface';

@Component({
  tag: 'sio4-app',
  styleUrl: 'app.scss',
  shadow: true,
})
export class Sio4App implements Sio4AppInterface {
  @Prop() title: string = 'SILICIA APP';
  @Prop() sidemenu: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' = 'none';
  @Prop() color: string | undefined = undefined;
  @Prop() menu: Sio4MenuInterface | undefined = undefined;

  render() {
    return (
      <ion-app>
        {this.sidemenu !== 'none' ? (
          <ion-split-pane when="xl" contentId="main-content">
            <ion-menu contentId="main-content" type="overlay">
              <ion-header class="ion-no-border">
                <slot name="header">
                  <ion-toolbar color={this.color}>
                    <ion-title>{this.title}</ion-title>
                  </ion-toolbar>
                </slot>
              </ion-header>
              <ion-content>
                <slot name="center">
                  {this.menu !== undefined ? (
                    <sio4-menu
                      menuItems={this.menu.menuItems}
                      lines={this.menu.lines}
                      layout={this.menu.layout}
                    />
                  ) : (
                    <ion-item>
                      <label>
                        <h1>No Menu Provided</h1>
                        <p>
                          please add some content with slot="center" or use menu
                          property
                        </p>
                      </label>
                    </ion-item>
                  )}
                </slot>
              </ion-content>
              <ion-footer class="ion-no-border">
                <slot name="footer">
                  <ion-toolbar>
                    <ion-buttons slot="end">
                      <ion-button href="https://github.com/silicia-apps/sio4">
                        <ion-icon
                          slot="icon-only"
                          name="logo-github"
                        ></ion-icon>
                      </ion-button>
                    </ion-buttons>
                    <ion-item>
                      <label>powered by Silicia Apps</label>
                    </ion-item>
                  </ion-toolbar>
                </slot>
              </ion-footer>
            </ion-menu>
            <div id="main-content">
            <slot ></slot>
            </div>
          </ion-split-pane>
        ) : (
          <slot></slot>
        )}
      </ion-app>
    );
  }
}
