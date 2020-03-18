# ElLayout
Standard layout component that is included inside of `ToolboxLayout`. This goes best as the root node of your app.

It renders a `ElHeader` at the top followed by whatever is given in the component's default `<slot/>`.

## Props
| **name** | **type**   | **default**  | **description**      |
|----------|------------|--------------|----------------------|
| baseUrl  | `String`   | `/`          | link for the title   |
| title    | `String`   | **required** | page title           |
| subtitle | `String`   | `undefined`  | page subtitle        |

## Slots
| **name**    | **description**              | **default content**            |
|-------------|------------------------------|--------------------------------|
| **default** | page content                 | `'Hello World!'`               |
| `header`    | override for default header  | Header with title and subtitle |

## Example
_The tool itself should go in an element with class `.ToolWrapper`, with the taskbar being the only element outside._
```html
<el-layout title="My App">
	<div class="JsonFormatter">
		<div class="ToolWrapper">
			<!-- ... -->
		</div>
		<el-taskbar/>
	</div>
</el-layout>
```