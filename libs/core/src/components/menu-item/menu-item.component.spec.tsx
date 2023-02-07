import { newSpecPage } from '@stencil/core/testing';
import { Sio4MenuItemComponent } from './menu-item.component';

describe('sio4-menu-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Sio4MenuItemComponent],
      html: '<sio4-menu-item></sio4-menu-item>',
    });
    expect(root).toEqualHtml(`
      <sio4-menu-item>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sio4-menu-item>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Sio4MenuItemComponent],
      html: `<sio4-menu-item first="Stencil" last="'Don't call me a framework' JS"></sio4-menu-item>`,
    });
    expect(root).toEqualHtml(`
      <sio4-menu-item first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sio4-menu-item>
    `);
  });
});
