import { newSpecPage } from '@stencil/core/testing';
import { Sio4Icon } from './sio4-icon';

describe('sio4-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Sio4Icon],
      html: '<sio4-icon></sio4-icon>',
    });
    expect(root).toEqualHtml(`
      <sio4-icon>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sio4-icon>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Sio4Icon],
      html: `<sio4-icon first="Stencil" last="'Don't call me a framework' JS"></sio4-icon>`,
    });
    expect(root).toEqualHtml(`
      <sio4-icon first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sio4-icon>
    `);
  });
});
