# ElButton
A typical button element, a wrapper for bootstrap vue's button component.

## Props
| **name** | **type** | **default**         | **description** |
|----------|----------|---------------------|-----------------|
| `size`   | `String` | `null`              | button size     |
| `variant`| `String` | `'outline-primary'` | bootstrap theme |

_All other props on boostrap-vue's [b-button](https://bootstrap-vue.js.org/docs/components/button) are also supported thanks to binding._

## Events
| **name**       | **paylod**   | **description**            |
|----------------|--------------|----------------------------|
| `click.native` | `ClickEvent` | when the button is clicked |

## Example
```html
<el-button
	v-text="'Click Me'"
	@click.native="onButtonClick"/>
```