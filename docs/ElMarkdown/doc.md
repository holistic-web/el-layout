# ElMarkdown
This component has a very simple interface, as it's only functionality is to render markdown. It is powered by `marked`.

## Props
| **name** | **type** | **default**         | **description**    |
|----------|----------|---------------------|--------------------|
| markdown | `String` | `undefined`         | markdown to render |

## Example
```html
<el-markdown :markdown="markdownString"/>
```