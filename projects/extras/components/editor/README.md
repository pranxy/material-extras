# Drawer component

Import `HydrogenEditorModule` module

```typescript
@NgModule({
    (...)
    imports: [(...), HydrogenEditorModule],
})
export class AppModule {}

```


Basic usage on template
```html
<h-editor formControlName="message"></h-editor>

```

Usage inside a Material Form Field

```html

<mat-form-field>
    <mat-label>Message</mat-label>
    <h-editor formControlName="message"></h-editor>
</mat-form-field>
```
