## Drawer component

Import `PmeDrawerModule` module

```typescript
@NgModule({
    (...)
    imports: [(...), PmeDrawerModule],
})
export class AppModule {}

```

A drawer is opened by calling the open method with a component to be loaded and an optional config object. The open method will return an instance of `PmeDrawerRef`:

```typescript
@Component({/* ... */})
export class DashboardComponent {
    constructor(private drawer: PmeDrawerService) {}
    open() {
        let drawerRef = this.drawer.open(TestComponentComponent, {
            width: '200px',
        });
    }
}

```
The `PmeDrawerRef` provides a handle on the opened drawer. It can be used to close the drawer and to receive notifications when the drawer has been closed. Any notification Observables will complete when the drawer closes.

```typescript
drawerRef.afterClosed().subscribe(result => {
  console.log(`Drawer result: ${result}`); // Dogs!
});

drawerRef.close('Dogs!');

```

Components created via PmeDrawerService can inject `PmeDrawerRef` and use it to close the drawer in which they are contained. When closing, an optional result value can be provided. This result value is forwarded as the result of the afterClosed Observable.

```typescript
@Component({/* ... */})
export class YourDrawer {
  constructor(public drawerRef: PmeDrawerRef<YourDrawer>) { }

  close() {
    this.drawerRef.close('Dogs!');
  }
}

```

Sharing data with the Drawer component.
If you want to share data with your drawer, you can use the data option to pass information to the drawer component.

```typescript
let drawerRef = drawer.open(YourDrawer, {
  data: { name: 'john doe' },
});
```

To access the data in your drawer component, you have to use the PME_DRAWER_DATA injection token:

```typescript
import {Component, Inject} from '@angular/core';
import {PME_DRAWER_DATA} from '@pranxy/material-extras/drawer';

@Component({
  template: 'passed in {{ data.name }}',
})
export class YourDrawer {
  constructor(@Inject(PME_DRAWER_DATA) public data: {name: string}) { }
}
```
