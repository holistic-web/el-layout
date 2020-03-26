# ElInputSelect
A typical select element, a wrapper for bootstrap vue's select component.

## Props
| **name** | **type** | **default**         | **description**    |
|----------|----------|---------------------|--------------------|
| `options`| `Array`  | **required**        | options to display |

## Example
```html
<el-input-select
	v-model="selected"
	:options="options" />
```