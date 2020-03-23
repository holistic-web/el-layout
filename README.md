# El Layout
This is a shared [Vue.js](https://vuejs.org) component library for use in the in all holistic-web projects. [Boostrap Vue](https://bootstrap-vue.js.org/) is used to drive the core of the functionality.

## Factsheet
| **Category**         | **Value**                               |
|----------------------|-----------------------------------------|
| **Project Type**     | Component Library                       |
| **Package Name**     | @holistic-web/el-layout                 |
| **Demo URL**         | https://el-layout-stories.web.app       |
| **Key Dependencies** | Bootstrap Vue                           |

## Usage
To use this library in a Vue app, simply include:
```
import 'layout';
import 'layout/dist/layout.css';
```
in your main.js file to make the components available.

The following SCSS variables can also be accessed with: `@import 'layout/src/theme'`.
```
$primary: $colour-orange-dark;
$highlight: $colour-blue;
$secondary: $colour-blue-light;
$dark: $colour-blue-dark;
$light: $colour-white;
$warning: $colour-pink;
$danger: $colour-red;
$success: $colour-green;
$info: $colour-cream;
```

## Development

## Testing
Run the following command to open up a demo of the components:
```
npm run storybook
```
_Be sure to update this demo in the `/docs` folder as we improve the library._

### Building
This project can be built as a library with the following commands
```
npm install
npm run build-bundle
```

### Publishing
Publishing for this project is handled by our [Github workflow](/.github/workflows/publish) on merge into the master branch.

Manual publishing is not recommended but if we need to try the following (provided you are logged into npm and authorized):
```
npm publish --access public
```
_Remember to increment the version number in package.json and package-lock.json._

## Notes and Caveats
- This project uses [storybook](https://storybook.js.org/) to provide visual documentation. This storybook deployment is released automatically by the `.github/workflows/deploy-stories` action.

## Roadmap
- upgrade to latest storybook
- resolve "withNotes" is deprecated console error and markdown errors
- add breakpoints to the storybook examples
- allow override of theme colours