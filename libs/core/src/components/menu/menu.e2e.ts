import { newE2EPage } from '@stencil/core/testing';

describe('sio4-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sio4-menu></sio4-menu>');
    const element = await page.find('sio4-menu');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<sio4-menu></sio4-menu>');
    const component = await page.find('sio4-menu');
    const element = await page.find('sio4-menu >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
