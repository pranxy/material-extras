# Pranxy Material Extras

<!-- [![npm](https://img.shields.io/npm/v/@pranxy/extensions.svg)](https://www.npmjs.com/package/@pranxy/extensions) -->
<!-- [![GitHub Release Date](https://img.shields.io/github/release-date/pranxy/extensions)](https://github.com/pranxy/extensions/releases) -->
<!-- [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/pranxy/extensions/blob/dev/LICENSE) -->
<!-- [![Gitter](https://img.shields.io/gitter/room/pranxy/extensions.svg)](https://gitter.im/matero-io/extensions) -->
<!-- [![API docs](https://img.shields.io/badge/API%20docs-gitbook-red)](https://nzbin.gitbook.io/material-extensions/) -->

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
