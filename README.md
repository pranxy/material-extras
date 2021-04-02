# Pranxy Material Extras


[![npm](https://img.shields.io/npm/v/@pranxy/material-extras.svg)](https://www.npmjs.com/package/@pranxy/material-extras)
[![GitHub Release Date](https://img.shields.io/github/release-date/pranxy/material-extras)](https://github.com/pranxy/material-extras/releases)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/pranxy/extensions/blob/dev/LICENSE)
![build status](https://github.com/pranxy/sandbox/actions/workflows/build.yml/badge.svg)

The Pranxy Material Extras is an extended library of Angular Material.

## Installation

At first, you should install the Angular Material and setup it. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install the Material Extras library:

```bash
$ npm install @pranxy/material-extras --save
```

## Setup

Once installed you need to import the modules you need, e.g. select.

```ts
import { PmeSelectModule } from '@pranxy/material-extras/select';

@NgModule({
  ...
  imports: [PmeSelectModule, ...],
  ...
})
export class YourAppModule {
}
```

<!-- ## Theming

After import modules, you must define a theme. [More details about theming](https://material.angular.io/guide/theming).

```scss
@import '~@pranxy/extensions/theming';

@include material-extensions-theme($theme);
@include material-extensions-experimental-theme($theme);
``` -->

<!-- ## Roadmap

Check [projects](https://github.com/pranxy/extras/projects) to know the develop plans. -->

## License

MIT
