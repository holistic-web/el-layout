# ElTaskbar
Use this component to provide a constient UI and UX for executing an action.

Simply next the content you wish to put in the taskbar inside its `<slot/>`.

## Slots
| **name**      | **description** | **default content** |
|---------------|-----------------|---------------------|
| **`default`** | taskbar content | `'Hello World!'`    |

## Example
```html
<el-taskbar>
	<el-button
		class="ml-3"
		size="lg"
		v-text="'Calculate'"
		@click.native="calculateButtonClick"/>
	<el-button
		class="ml-3"
		size="sm"
		variant="secondary"
		v-text="'reset'"
		@click.native="resetButtonClick"/>
</el-taskbar>
```