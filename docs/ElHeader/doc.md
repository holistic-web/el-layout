# ElHeader
Standard header component, with named slots to override content.

## Props
| **name**   | **type**   | **default** | **description**                       |
|------------|------------|-------------|---------------------------------------|
| `baseUrl`  | `String`   | `/`         | link for the title                    |
| `title`    | `String`   | `'Welcome'` | page title, displayed on the left     |
| `subtitle` | `String`   | `undefined` | page subtitle, displayed on the right |

## Slots
| **name** | **description**      | **default content**        |
|----------|----------------------|----------------------------|
| `right`  | right header content | `title` text and animation |
| `left`   | left header content  | `subtitle` text            |

## Example
```html
<el-header title="My Application"/>
```