(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"01X5":function(s,t,n){"use strict";n.r(t),t.default='\x3c!--\n <form [formGroup]="form">\n    <mat-form-field [appearance]="\'outline\'">\n        <mat-label>select2 test</mat-label>\n        <pme-select2 formControlName="select" [clearable]="true" [multiple]="true">\n            <mat-option *ngFor="let item of items2" [value]="item">{{ item }}</mat-option>\n        </pme-select2>\n    </mat-form-field>\n\n</form> --\x3e\n\x3c!-- <mat-form-field [appearance]="\'outline\'">\n    <mat-label>select2 test</mat-label>\n    <mat-select formControlName="select2">\n        <mat-option *ngFor="let item of items" [value]="item.id">{{item.label}}</mat-option>\n    </mat-select>\n</mat-form-field> --\x3e\n\n<mat-form-field appearance="outline">\n    <input id="pickerId" matInput type="time" />\n    <button mat-icon-button appTimePicker matSuffix><mat-icon>schedule</mat-icon></button>\n</mat-form-field>\n'},"Zd+Y":function(s,t){s.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormBuilder</span>, <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n    <span class="hljs-comment">// eslint-disable-next-line @angular-eslint/component-selector</span>\n    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;select-example&#x27;</span>,\n    <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n    <span class="hljs-comment">//   styleUrls: [&#x27;./app.component.scss&#x27;],</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n    items = [\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Example 1&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Example 2&#x27;</span> },\n    ];\n\n    items2 = [<span class="hljs-string">&#x27;oi1&#x27;</span>, <span class="hljs-string">&#x27;oi2&#x27;</span>];\n\n    selectedItem = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;oi1&#x27;</span>);\n    <span class="hljs-attr">form</span>: <span class="hljs-title class_">FormGroup</span>;\n    <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> fb: FormBuilder</span>) {\n        <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">fb</span>.<span class="hljs-title function_">group</span>({\n            <span class="hljs-attr">select</span>: [[<span class="hljs-string">&#x27;oi1&#x27;</span>], []],\n            <span class="hljs-attr">select2</span>: [<span class="hljs-string">&#x27;oi1&#x27;</span>, []],\n        });\n    }\n}\n'},c26K:function(s,t,n){"use strict";n.r(t),n.d(t,"SelectModule",function(){return w});var a=n("ofXK"),e=n("3Pt+"),l=n("kmnG"),o=n("tyNb"),p=n("rDax"),c=n("bTqV"),r=n("qFsG"),i=n("d3UM"),m=n("fXoL");let u=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=m.Lb({type:s}),s.\u0275inj=m.Kb({imports:[[a.c,p.f,i.b,r.c,c.c]]}),s})();n("FKr1");var f=n("OlrJ"),h=n("NFeN");const d={title:"Configurable select",component:(()=>{class s{constructor(s){this.fb=s,this.items=[{id:1,label:"Example 1"},{id:2,label:"Example 2"}],this.items2=["oi1","oi2"],this.selectedItem=new e.d("oi1"),this.form=this.fb.group({select:[["oi1"],[]],select2:["oi1",[]]})}}return s.\u0275fac=function(t){return new(t||s)(m.Nb(e.c))},s.\u0275cmp=m.Hb({type:s,selectors:[["select-example"]],decls:5,vars:0,consts:[["appearance","outline"],["id","pickerId","matInput","","type","time"],["mat-icon-button","","appTimePicker","","matSuffix",""]],template:function(s,t){1&s&&(m.Tb(0,"mat-form-field",0),m.Ob(1,"input",1),m.Tb(2,"button",2),m.Tb(3,"mat-icon"),m.Ac(4,"schedule"),m.Sb(),m.Sb(),m.Sb())},directives:[l.b,r.b,c.b,l.f,h.a],encapsulation:2}),s})(),files:[{file:"app.component.html",content:n("iw+E"),filecontent:n("01X5")},{file:"app.component.ts",content:n("Zd+Y"),filecontent:n("tQFV")}]};var g=n("ZpCV");function j(s,t){if(1&s&&(m.Rb(0),m.Ob(1,"example-viewer",2),m.Qb()),2&s){const s=t.$implicit;m.Cb(1),m.kc("exampleData",s)}}function b(s,t){if(1&s&&(m.Rb(0),m.yc(1,j,2,1,"ng-container",1),m.Qb()),2&s){const s=t.ngIf;m.Cb(1),m.kc("ngForOf",s.examples)}}const x=[{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",pathMatch:"full",component:(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(t){return new(t||s)(m.Nb(o.a))},s.\u0275cmp=m.Hb({type:s,selectors:[["ng-component"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,t){1&s&&(m.yc(0,b,2,1,"ng-container",0),m.gc(1,"async")),2&s&&m.kc("ngIf",m.hc(1,1,t.route.data))},directives:[a.l,a.k,g.a],pipes:[a.b],styles:[".mat-grid-list{border-bottom:1px solid #dadada}  .mat-grid-tile:first-child .mat-figure{justify-content:flex-start;align-items:flex-start}  .mat-grid-tile:first-child .mat-figure h2{border:0}"]}),s})(),data:{examples:[d]}},{path:"api",component:(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(t){return new(t||s)(m.Nb(o.a))},s.\u0275cmp=m.Hb({type:s,selectors:[["app-select-api"]],decls:1,vars:0,template:function(s,t){1&s&&m.Ac(0,"select overview!\n")},encapsulation:2}),s})(),pathMatch:"full",data:{content:n("rCP6")}}],q=[l.d,e.l];let w=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=m.Lb({type:s}),s.\u0275inj=m.Kb({imports:[[a.c,o.f.forChild(x),f.c,u,...q]]}),s})()},"iw+E":function(s,t){s.exports='<span class="hljs-comment">&lt;!--\n &lt;form [formGroup]=&quot;form&quot;&gt;\n    &lt;mat-form-field [appearance]=&quot;&#x27;outline&#x27;&quot;&gt;\n        &lt;mat-label&gt;select2 test&lt;/mat-label&gt;\n        &lt;pme-select2 formControlName=&quot;select&quot; [clearable]=&quot;true&quot; [multiple]=&quot;true&quot;&gt;\n            &lt;mat-option *ngFor=&quot;let item of items2&quot; [value]=&quot;item&quot;&gt;{{ item }}&lt;/mat-option&gt;\n        &lt;/pme-select2&gt;\n    &lt;/mat-form-field&gt;\n\n&lt;/form&gt; --&gt;</span>\n<span class="hljs-comment">&lt;!-- &lt;mat-form-field [appearance]=&quot;&#x27;outline&#x27;&quot;&gt;\n    &lt;mat-label&gt;select2 test&lt;/mat-label&gt;\n    &lt;mat-select formControlName=&quot;select2&quot;&gt;\n        &lt;mat-option *ngFor=&quot;let item of items&quot; [value]=&quot;item.id&quot;&gt;{{item.label}}&lt;/mat-option&gt;\n    &lt;/mat-select&gt;\n&lt;/mat-form-field&gt; --&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> <span class="hljs-attr">appearance</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;pickerId&quot;</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">appTimePicker</span> <span class="hljs-attr">matSuffix</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>schedule<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n'},rCP6:function(s,t,n){"use strict";n.r(t),t.default='<h1 id="select">Select</h1>\n<h2 id="api-reference">API reference</h2>\n\x3c!-- `import { MtxAlertModule } from \'@pranxy/extensions/alert\';` --\x3e\n'},tQFV:function(s,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\nimport { FormBuilder, FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    // eslint-disable-next-line @angular-eslint/component-selector\n    selector: 'select-example',\n    templateUrl: './app.component.html',\n    //   styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n    items = [\n        { id: 1, label: 'Example 1' },\n        { id: 2, label: 'Example 2' },\n    ];\n\n    items2 = ['oi1', 'oi2'];\n\n    selectedItem = new FormControl('oi1');\n    form: FormGroup;\n    constructor(private fb: FormBuilder) {\n        this.form = this.fb.group({\n            select: [['oi1'], []],\n            select2: ['oi1', []],\n        });\n    }\n}\n"}}]);