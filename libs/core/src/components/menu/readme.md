# sio4-menu



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type                           | Default      |
| ---------------- | ------------------ | ----------- | ------------------------------ | ------------ |
| `color`          | `color`            |             | `string`                       | `undefined`  |
| `enabled`        | `enabled`          |             | `boolean`                      | `false`      |
| `label`          | `label`            |             | `string`                       | `'NO LABEL'` |
| `layout`         | `layout`           |             | `"accordion" \| "flat"`        | `'flat'`     |
| `lines`          | `lines`            |             | `"full" \| "inset" \| "none"`  | `'none'`     |
| `menuId`         | `menu-id`          |             | `string`                       | `'main'`     |
| `menuItems`      | --                 |             | `Sio4MenuItemInterface[]`      | `undefined`  |
| `position`       | `position`         |             | `"bottom" \| "hover" \| "top"` | `'hover'`    |
| `toggleIcon`     | `toggle-icon`      |             | `string`                       | `''`         |
| `toggleIconSlot` | `toggle-icon-slot` |             | `"end" \| "start"`             | `'start'`    |


## Dependencies

### Used by

 - [sio4-app](../app)

### Depends on

- ion-accordion-group
- ion-accordion
- ion-item
- ion-label
- ion-list
- [sio4-menu-item](../menu-item)
- ion-item-divider
- ion-menu-toggle
- ion-tabs
- ion-tab-bar

### Graph
```mermaid
graph TD;
  sio4-menu --> ion-accordion-group
  sio4-menu --> ion-accordion
  sio4-menu --> ion-item
  sio4-menu --> ion-label
  sio4-menu --> ion-list
  sio4-menu --> sio4-menu-item
  sio4-menu --> ion-item-divider
  sio4-menu --> ion-menu-toggle
  sio4-menu --> ion-tabs
  sio4-menu --> ion-tab-bar
  ion-accordion --> ion-icon
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  sio4-menu-item --> ion-tab-button
  sio4-menu-item --> ion-icon
  sio4-menu-item --> ion-label
  sio4-menu-item --> ion-badge
  sio4-menu-item --> ion-item
  ion-tab-button --> ion-ripple-effect
  sio4-app --> sio4-menu
  style sio4-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
