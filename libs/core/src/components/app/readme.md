# sio4-app



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                             | Default         |
| ---------- | ---------- | ----------- | ------------------------------------------------ | --------------- |
| `appName`  | `app-name` |             | `string`                                         | `'SILICIA APP'` |
| `color`    | `color`    |             | `string`                                         | `undefined`     |
| `menu`     | --         |             | `Sio4CoreMenuInterface`                          | `undefined`     |
| `sidemenu` | `sidemenu` |             | `"lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs"` | `'none'`        |


## Dependencies

### Depends on

- [sio4-menu](../menu)

### Graph
```mermaid
graph TD;
  sio4-app --> sio4-menu
  sio4-menu --> sio4-menu-item
  style sio4-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
