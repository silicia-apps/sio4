import { newSpecPage } from '@stencil/core/testing';
import { Sio4AppComponent } from './app.component';

describe('sio4-app', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Sio4AppComponent],
      html: '<sio4-app></sio4-app>',
    });
    expect(root).toEqualHtml(`
      <sio4-app>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sio4-app>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Sio4AppComponent],
      html: `<sio4-app first="Stencil" last="'Don't call me a framework' JS"></sio4-app>`,
    });
    expect(root).toEqualHtml(`
      <sio4-app first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sio4-app>
    `);
  });
});
