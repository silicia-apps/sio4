# sio4-app



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                             | Default         |
| ---------- | ---------- | ----------- | ------------------------------------------------ | --------------- |
| `atitle`   | `atitle`   |             | `string`                                         | `'SILICIA APP'` |
| `color`    | `color`    |             | `string`                                         | `undefined`     |
| `menu`     | --         |             | `Sio4MenuInterface`                              | `undefined`     |
| `sidemenu` | `sidemenu` |             | `"lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs"` | `'none'`        |


## Dependencies

### Depends on

- ion-app
- ion-split-pane
- ion-menu
- ion-header
- ion-toolbar
- ion-title
- ion-content
- [sio4-menu](../sio4-menu)
- ion-item
- ion-footer
- ion-buttons
- ion-button
- ion-icon

### Graph
```mermaid
graph TD;
  sio4-app --> ion-app
  sio4-app --> ion-split-pane
  sio4-app --> ion-menu
  sio4-app --> ion-header
  sio4-app --> ion-toolbar
  sio4-app --> ion-title
  sio4-app --> ion-content
  sio4-app --> sio4-menu
  sio4-app --> ion-item
  sio4-app --> ion-footer
  sio4-app --> ion-buttons
  sio4-app --> ion-button
  sio4-app --> ion-icon
  ion-menu --> ion-backdrop
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
  ion-button --> ion-ripple-effect
  style sio4-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
