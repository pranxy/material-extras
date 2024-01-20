"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2],{7002:(B,h,c)=>{c.r(h),c.d(h,{ComponentApi:()=>I,ComponentBaseView:()=>l,ComponentExamples:()=>A,ComponentOverview:()=>E,ComponentViewerModule:()=>T,default:()=>p});var s=c(6814),d=c(4104),a=c(1865),f=c(8367),g=c(2079),x=c(6124),v=c(9352),w=c(4521),u=c(6283),t=c(5879),C=c(6528),m=c(1088);function P(e,r){if(1&e&&(t.TgZ(0,"a",4,5),t._uU(2),t.qZA()),2&e){const n=r.$implicit,o=t.MAs(1),i=t.oxw();t.Q6J("routerLink",i.componentId+"/"+n.toLowerCase())("active",o.isActive),t.xp6(2),t.Oqu(n)}}function M(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"h2",1),t._uU(2),t.qZA(),t.BQk()),2&e){const n=r.$implicit;t.xp6(2),t.hij("Overview for ",n.id,"")}}function D(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"span",1),t._uU(2),t.qZA(),t._UZ(3,"div",2),t.BQk()),2&e){const n=r.$implicit;t.xp6(2),t.hij(" API for ",n.id," ")}}function y(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"span",1),t._uU(2),t.qZA(),t.BQk()),2&e){const n=r.$implicit;t.xp6(2),t.hij(" Examples for ",n.id," ")}}let p=(()=>{class e{constructor(n,o,i,_){this.router=o,this.componentPageTitle=i,this.docItems=_,this.componentDocItem=new f.t(1),this.sections=new Set(["overview","api"]),this.destroyed=new g.xQ,this.componentId="",n.parent&&[n.params].push(n.parent.params),this.router.events.subscribe(O=>{O instanceof a.m2&&(this.componentId=O.url.split("/")[2],this.componentPageTitle.title=this.componentId)})}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(a.gz),t.Y36(a.F0),t.Y36(C._),t.Y36(u.o0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-component-viewer"]],standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"docs-component-viewer"],["mat-tab-nav-bar","","aria-label","Documentation Sections","id","component-viewer","focusOnNavigation","",1,"docs-component-viewer-tabbed-content"],["mat-tab-link","","class","docs-component-viewer-section-tab","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],[1,"docs-component-viewer-content"],["mat-tab-link","","routerLinkActive","",1,"docs-component-viewer-section-tab",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"nav",1),t.YNc(2,P,3,3,"a",2),t.qZA(),t.TgZ(3,"div",3),t._UZ(4,"router-outlet"),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",i.sections))},dependencies:[d.Nh,d.BU,d.Nj,s.ax,a.Od,a.rH,a.lC],styles:["[_nghost-%COMP%]{font-weight:400;padding:20px 50px}@media (max-width: 599px){[_nghost-%COMP%]{padding-left:15px;padding-right:15px}}.docs-component-viewer-section-tab[_ngcontent-%COMP%]{text-transform:uppercase}.docs-component-viewer-tabbed-content[_ngcontent-%COMP%]{margin-bottom:25px}.docs-component-viewer-content[_ngcontent-%COMP%]{position:relative;min-height:500px}.docs-component-viewer-content[_ngcontent-%COMP%]   component-overview[_ngcontent-%COMP%], .docs-component-viewer-content[_ngcontent-%COMP%]   component-api[_ngcontent-%COMP%]{display:flex;align-items:flex-start}@media (max-width: 959px){.docs-component-viewer-content[_ngcontent-%COMP%]   component-overview[_ngcontent-%COMP%], .docs-component-viewer-content[_ngcontent-%COMP%]   component-api[_ngcontent-%COMP%]{flex-direction:column}}.docs-component-viewer-content[_ngcontent-%COMP%]   table-of-contents[_ngcontent-%COMP%]{top:35px;position:sticky}@media (max-width: 959px){.docs-component-viewer-content[_ngcontent-%COMP%]   table-of-contents[_ngcontent-%COMP%]{order:-1;position:inherit;width:auto;padding-left:0}}.docs-component-view-text-content[_ngcontent-%COMP%]{flex-grow:1;width:100%}.docs-component-api[_ngcontent-%COMP%], .docs-component-overview[_ngcontent-%COMP%]{width:80%;display:inline-flex}@media (max-width: 959px){.docs-component-api[_ngcontent-%COMP%], .docs-component-overview[_ngcontent-%COMP%]{width:100%;margin-right:0}}"]})}return e})(),l=(()=>{class e{constructor(n,o,i){this.componentViewer=n,this.changeDetectorRef=i,this.destroyed=new g.xQ,this.showToc=o.observe("(max-width: 1200px)").pipe((0,x.U)(_=>(this.changeDetectorRef.detectChanges(),!_.matches)))}ngOnInit(){this.componentViewer.componentDocItem.pipe((0,v.R)(this.destroyed)).subscribe(()=>{}),this.showToc.pipe((0,w.T)(1),(0,v.R)(this.destroyed)).subscribe(()=>{})}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}updateTableOfContents(n,o,i=0){}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p),t.Y36(m.Yg),t.Y36(t.sBO))};static#e=this.\u0275dir=t.lG2({type:e})}return e})(),E=(()=>{class e extends l{constructor(n,o,i){super(n,o,i)}getOverviewDocumentUrl(n){return`/docs-content/overviews/${n.overviewPath||`${n.packageName}/${n.id}/${n.id}.html`}`}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p),t.Y36(m.Yg),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["component-overview"]],standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],["tabindex","-1",1,"cdk-visually-hidden"]],template:function(o,i){1&o&&(t.YNc(0,M,3,1,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,i.componentViewer.componentDocItem))},dependencies:[s.O5,s.Ov],encapsulation:2})}return e})(),I=(()=>{class e extends l{constructor(n,o,i){super(n,o,i)}getApiDocumentUrl(n){return`/docs-content/api-docs/${n.apiDocId||`${n.packageName}-${n.id}`}.html`}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p),t.Y36(m.Yg),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["component-api"]],standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],["tabindex","-1",1,"cdk-visually-hidden"],[1,"docs-component-api"]],template:function(o,i){1&o&&(t.YNc(0,D,4,1,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,i.componentViewer.componentDocItem))},dependencies:[s.O5,s.Ov],styles:[".docs-api-class-name{margin-top:28px;margin-bottom:0;display:block;font-weight:700;font-size:20px;background:none}.docs-api-class-name code{background:none}@media (max-width: 399px){.docs-api-type-alias-name,.docs-api-class-name{word-break:break-word}}.docs-api-h3{font-weight:300;font-size:24px;line-height:32px;margin:40px 0 20px;padding-bottom:3px}.docs-api-method-name-cell,.docs-api-method-header,.docs-api-method-description-cell,.docs-api-property-description,.docs-api-class-export-label,.docs-api-directive-selectors,.docs-api-class-description,.docs-api-class-export-name{font-size:15px}.docs-api-class-description{line-height:24px}.docs-api-property-type{font-weight:700;font-size:14px;margin-top:5px}\n"],encapsulation:2})}return e})(),A=(()=>{class e extends l{constructor(n,o,i){super(n,o,i)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p),t.Y36(m.Yg),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["component-examples"]],standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],["tabindex","-1",1,"cdk-visually-hidden"]],template:function(o,i){1&o&&(t.YNc(0,y,3,1,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,i.componentViewer.componentDocItem))},dependencies:[s.O5,s.Ov],encapsulation:2})}return e})(),T=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({providers:[u.o0],imports:[d.Nh,a.Bz,s.ez,p]})}return e})()}}]);