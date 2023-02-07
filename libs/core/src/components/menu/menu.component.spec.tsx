import { newSpecPage } from '@stencil/core/testing';
import { Sio4MenuComponent } from './menu.component';

describe('sio4-menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Sio4MenuComponent],
      html: '<sio4-menu></sio4-menu>',
    });
    expect(root).toEqualHtml(`
      <sio4-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sio4-menu>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Sio4MenuComponent],
      html: `<sio4-menu first="Stencil" last="'Don't call me a framework' JS"></sio4-menu>`,
    });
    expect(root).toEqualHtml(`
      <sio4-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sio4-menu>
    `);
  });
});
