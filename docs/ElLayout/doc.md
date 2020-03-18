# ElLayout
Standard layout component that is included inside of `ElLayout`. This goes best as the root node of your app.

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
_The content itself should go in an element with class `.ElWrapper`, with the taskbar being the only element outside._
```html
<el-layout title="My App">
	<div class="JsonFormatter">
		<div class="ElWrapper">
			<!-- ... -->
		</div>
		<el-taskbar/>
	</div>
</el-layout>
```