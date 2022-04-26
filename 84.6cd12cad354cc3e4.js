"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84],{9878:(B,w,s)=>{s.d(w,{SV:()=>D,Bb:()=>a});var m=s(6895),l=s(3848),d=s(6630),g=s(8929),C=s(6686),x=s(2268);const S=new class P extends x.v{}(class e extends C.o{constructor(t,o){super(t,o),this.scheduler=t,this.work=o}schedule(t,o=0){return o>0?super.schedule(t,o):(this.delay=o,this.state=t,this.scheduler.flush(this),this)}execute(t,o){return o>0||this.closed?super.execute(t,o):this._execute(t,o)}requestAsyncId(t,o,c=0){return null!==c&&c>0||null===c&&this.delay>0?super.requestAsyncId(t,o,c):t.flush(this)}});var M=s(2654),A=s(3489),y=s(9312);class O extends A.L{constructor(t,o,c=0){super(t),this.scheduler=o,this.delay=c}static dispatch(t){const{notification:o,destination:c}=t;o.observe(c),this.unsubscribe()}scheduleMessage(t){this.destination.add(this.scheduler.schedule(O.dispatch,this.delay,new T(t,this.destination)))}_next(t){this.scheduleMessage(y.P.createNext(t))}_error(t){this.scheduleMessage(y.P.createError(t)),this.unsubscribe()}_complete(){this.scheduleMessage(y.P.createComplete()),this.unsubscribe()}}class T{constructor(t,o){this.notification=t,this.destination=o}}var L=s(5279),b=s(5283);class Z extends g.xQ{constructor(t=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY,c){super(),this.scheduler=c,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=t<1?1:t,this._windowTime=o<1?1:o,o===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(t){if(!this.isStopped){const o=this._events;o.push(t),o.length>this._bufferSize&&o.shift()}super.next(t)}nextTimeWindow(t){this.isStopped||(this._events.push(new h(this._getNow(),t)),this._trimBufferThenGetEvents()),super.next(t)}_subscribe(t){const o=this._infiniteTimeWindow,c=o?this._events:this._trimBufferThenGetEvents(),p=this.scheduler,f=c.length;let v;if(this.closed)throw new L.N;if(this.isStopped||this.hasError?v=M.w.EMPTY:(this.observers.push(t),v=new b.W(this,t)),p&&t.add(t=new O(t,p)),o)for(let u=0;u<f&&!t.closed;u++)t.next(c[u]);else for(let u=0;u<f&&!t.closed;u++)t.next(c[u].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),v}_getNow(){return(this.scheduler||S).now()}_trimBufferThenGetEvents(){const t=this._getNow(),o=this._bufferSize,c=this._windowTime,p=this._events,f=p.length;let v=0;for(;v<f&&!(t-p[v].time<c);)v++;return f>o&&(v=Math.max(v,f-o)),v>0&&p.splice(0,v),p}}class h{constructor(t,o){this.time=t,this.value=o}}var I=s(8638),r=s(4650),V=s(6675);function N(n,t){if(1&n&&(r.TgZ(0,"a",4,5),r._uU(2),r.qZA()),2&n){const o=t.$implicit,c=r.MAs(1),p=r.oxw();r.Q6J("routerLink",p.componentId+"/"+o.toLowerCase())("active",c.isActive),r.xp6(2),r.Oqu(o)}}let D=(()=>{class n{constructor(o,c,p,f){this.router=c,this.componentPageTitle=p,this.docItems=f,this.componentDocItem=new Z(1),this.sections=new Set(["overview","api"]),this.destroyed=new g.xQ,this.componentId="",o.parent&&[o.params].push(o.parent.params),this.router.events.subscribe(u=>{u instanceof d.m2&&(this.componentId=u.url.split("/")[2],this.componentPageTitle.title=this.componentId)})}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}}return n.\u0275fac=function(o){return new(o||n)(r.Y36(d.gz),r.Y36(d.F0),r.Y36(V._),r.Y36(I.o0))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-component-viewer"]],decls:5,vars:1,consts:[[1,"docs-component-viewer"],["mat-tab-nav-bar","","aria-label","Documentation Sections","id","component-viewer","focusOnNavigation","",1,"docs-component-viewer-tabbed-content"],["mat-tab-link","","class","docs-component-viewer-section-tab","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],[1,"docs-component-viewer-content"],["mat-tab-link","","routerLinkActive","",1,"docs-component-viewer-section-tab",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(o,c){1&o&&(r.TgZ(0,"div",0)(1,"nav",1),r.YNc(2,N,3,3,"a",2),r.qZA(),r.TgZ(3,"div",3),r._UZ(4,"router-outlet"),r.qZA()()),2&o&&(r.xp6(2),r.Q6J("ngForOf",c.sections))},directives:[l.BU,m.sg,d.yS,l.Nj,d.Od,d.lC],styles:["[_nghost-%COMP%]{font-weight:400;padding:20px 50px}@media (max-width: 599px){[_nghost-%COMP%]{padding-left:15px;padding-right:15px}}.docs-component-viewer-section-tab[_ngcontent-%COMP%]{text-transform:uppercase}.docs-component-viewer-tabbed-content[_ngcontent-%COMP%]{margin-bottom:25px}.docs-component-viewer-content[_ngcontent-%COMP%]{position:relative;min-height:500px}.docs-component-viewer-content[_ngcontent-%COMP%]   component-overview[_ngcontent-%COMP%], .docs-component-viewer-content[_ngcontent-%COMP%]   component-api[_ngcontent-%COMP%]{display:flex;align-items:flex-start}@media (max-width: 959px){.docs-component-viewer-content[_ngcontent-%COMP%]   component-overview[_ngcontent-%COMP%], .docs-component-viewer-content[_ngcontent-%COMP%]   component-api[_ngcontent-%COMP%]{flex-direction:column}}.docs-component-viewer-content[_ngcontent-%COMP%]   table-of-contents[_ngcontent-%COMP%]{top:35px;position:sticky}@media (max-width: 959px){.docs-component-viewer-content[_ngcontent-%COMP%]   table-of-contents[_ngcontent-%COMP%]{order:-1;position:inherit;width:auto;padding-left:0}}.docs-component-view-text-content[_ngcontent-%COMP%]{flex-grow:1;width:100%}.docs-component-api[_ngcontent-%COMP%], .docs-component-overview[_ngcontent-%COMP%]{width:80%;display:inline-flex}@media (max-width: 959px){.docs-component-api[_ngcontent-%COMP%], .docs-component-overview[_ngcontent-%COMP%]{width:100%;margin-right:0}}"]}),n})(),a=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[I.o0],imports:[[l.Nh,d.Bz,m.ez]]}),n})()},9084:(B,w,s)=>{s.r(w),s.d(w,{ComponentSidenavModule:()=>k});var m=s(6895),l=s(6630),d=s(8638),g=s(3546),C=s(3426),e=s(4650),x=s(6675);function P(i,a){if(1&i&&(e.TgZ(0,"a",5)(1,"div",6)(2,"div",7),e._uU(3),e.qZA(),e.TgZ(4,"div",8),e._uU(5),e.qZA()()()),2&i){const n=a.$implicit,t=e.oxw().ngIf;e.Q6J("routerLink","/"+t+"/"+n.id),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.Oqu(n.summary)}}function F(i,a){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,P,6,3,"a",4),e.qZA()),2&i){const n=a.ngIf,t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.docItems.getItems(n))}}let S=(()=>{class i{constructor(n,t,o){this.docItems=n,this.componentPageTitle=t,this.route=o}ngOnInit(){this.params=(0,C.aj)(this.route.pathFromRoot.map(n=>n.params),Object.assign),this.routeParamSubscription=this.params.subscribe(n=>{console.log(n);const o=d.SA[n.section];console.log(o),this.componentPageTitle.title=o.name,this.categoryListSummary=o.summary})}ngOnDestroy(){this.routeParamSubscription&&this.routeParamSubscription.unsubscribe()}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(d.o0),e.Y36(x._),e.Y36(l.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-component-category-list"]],decls:4,vars:4,consts:[["id","category-summary","focusOnNavigation","",1,"docs-component-category-list-summary"],[3,"innerHTML"],["class","docs-component-category-list",4,"ngIf"],[1,"docs-component-category-list"],["class","docs-component-category-list-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"docs-component-category-list-item",3,"routerLink"],[1,"docs-component-category-list-card"],[1,"docs-component-category-list-card-title"],[1,"docs-component-category-list-card-summary"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA(),e.YNc(2,F,2,1,"div",2),e.ALo(3,"async")),2&n){let o;e.xp6(1),e.Q6J("innerHTML",t.categoryListSummary,e.oJD),e.xp6(1),e.Q6J("ngIf",null==(o=e.lcZ(3,2,t.params))?null:o.section)}},directives:[m.O5,m.sg,l.yS],pipes:[m.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.docs-component-category-list-summary[_ngcontent-%COMP%]{padding:25px 40px 0;font-size:18px;line-height:1.5;display:flex;justify-content:center}@media (max-width: 1255px){.docs-component-category-list-summary[_ngcontent-%COMP%]{max-width:600px}}@media (max-width: 694px){.docs-component-category-list-summary[_ngcontent-%COMP%]{max-width:280px}}.docs-component-category-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:20px;justify-content:center}.docs-component-category-list-item[_ngcontent-%COMP%]{display:inline-block;margin:20px;vertical-align:top;width:280px}.docs-component-category-list-item[_ngcontent-%COMP%]   .docs-component-category-list-card-title[_ngcontent-%COMP%]{align-items:center;display:flex;padding:15px;font-size:20px;font-weight:500}.docs-component-category-list-item[_ngcontent-%COMP%], .docs-component-category-list-item[_ngcontent-%COMP%]:active, .docs-component-category-list-item[_ngcontent-%COMP%]:hover, .docs-component-category-list-item[_ngcontent-%COMP%]:focus{text-decoration:none}.docs-component-category-list-card[_ngcontent-%COMP%]{overflow:hidden}.docs-component-category-list-card-image-wrapper[_ngcontent-%COMP%]{height:156px}.docs-component-category-list-card-summary[_ngcontent-%COMP%]{padding:0 15px 15px;min-height:2.4em;font-size:15px}.docs-component-category-list-card-image[_ngcontent-%COMP%]{width:100%}"]}),i})(),M=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[d.o0],imports:[[m.ez,g.QW,l.Bz]]}),i})();var A=s(9878),y=s(4859),_=s(3336);let E=(()=>{class i{constructor(n){this.componentPageTitle=n,this.toggleSidenav=new e.vpe}getTitle(){return this.componentPageTitle.title}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(x._))},i.\u0275cmp=e.Xpm({type:i,selectors:[["component-page-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:6,vars:1,consts:[[1,"docs-primary-header","component-page-header"],["mat-button","",1,"sidenav-toggle",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"header",0)(1,"button",1),e.NdJ("click",function(){return t.toggleSidenav.emit()}),e.TgZ(2,"mat-icon"),e._uU(3,"menu"),e.qZA()(),e.TgZ(4,"h1"),e._uU(5),e.qZA()()),2&n&&(e.xp6(5),e.Oqu(t.getTitle()))},directives:[y.lW,_.Hw],styles:[".component-page-header[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width: 959px){.component-page-header[_ngcontent-%COMP%]{padding-left:0}}h1[_ngcontent-%COMP%]{outline:none}@media (max-width: 959px){h1[_ngcontent-%COMP%]{padding:24px 8px;font-size:20px}}.sidenav-toggle[_ngcontent-%COMP%]{padding:0;margin:8px;min-width:64px;display:none}@media (max-width: 959px){.sidenav-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:64px;width:64px;line-height:64px;color:#fff}"]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[y.ot,_.Ps]]}),i})();var T=s(9636),L=s(2654),b=s(4850),Z=s(2289),h=s(7340),I=s(6338);function r(i,a){if(1&i&&(e.TgZ(0,"a",4),e._uU(1),e.qZA()),2&i){const n=a.$implicit,t=e.oxw().ngIf,o=e.oxw();e.Q6J("routerLink","/"+t+"/"+n.id),e.uIk("aria-current",o.currentItemId===n.id?"page":"false"),e.xp6(1),e.hij(" ",n.name," ")}}function V(i,a){if(1&i&&(e.TgZ(0,"div",2)(1,"mat-nav-list"),e.YNc(2,r,2,3,"a",3),e.qZA()()),2&i){const n=a.ngIf,t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.docItems.getItems(n))}}let N=(()=>{class i{constructor(n){this.docItems=n}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(d.o0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-component-nav"]],inputs:{params:"params"},decls:3,vars:3,consts:[[1,"docs-component-viewer-nav"],["class","docs-component-viewer-nav-content",4,"ngIf"],[1,"docs-component-viewer-nav-content"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0),e.YNc(1,V,3,1,"div",1),e.ALo(2,"async"),e.qZA()),2&n){let o;e.xp6(1),e.Q6J("ngIf",null==(o=e.lcZ(2,1,t.params))?null:o.section)}},directives:[m.O5,I.Hk,m.sg,I.Tg,l.yS,l.Od],pipes:[m.Ov],encapsulation:2,data:{animation:[(0,h.X$)("bodyExpansion",[(0,h.SB)("collapsed",(0,h.oB)({height:"0px",display:"none"})),(0,h.SB)("expanded",(0,h.oB)({height:"*",display:"block"})),(0,h.eR)("expanded <=> collapsed",(0,h.jt)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])]}}),i})();function j(i,a){if(1&i&&(e.TgZ(0,"mat-sidenav",7,8),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async"),e.ALo(5,"async"),e._UZ(6,"app-component-nav",9),e.qZA()),2&i){const n=e.oxw();e.Q6J("opened",!1===e.lcZ(2,5,n.isScreenSmall))("mode",e.lcZ(3,7,n.isScreenSmall)?"over":"side")("fixedInViewport",e.lcZ(4,9,n.isScreenSmall))("fixedTopGap",e.lcZ(5,11,n.isExtraScreenSmall)?92:56),e.xp6(6),e.Q6J("params",n.params)}}function z(i,a){if(1&i&&e._UZ(0,"app-component-nav",9),2&i){const n=e.oxw();e.Q6J("params",n.params)}}const R=[{path:"",component:(()=>{class i{constructor(n,t,o,c){this.router=n,this.route=t,this.docItems=c,this.subscriptions=new L.w,this.isExtraScreenSmall=o.observe("(max-width: 720px)").pipe((0,b.U)(p=>p.matches)),this.isScreenSmall=o.observe("(max-width: 959px)").pipe((0,b.U)(p=>p.matches))}ngOnInit(){this.params=(0,C.aj)(this.route.pathFromRoot.map(n=>n.params),Object.assign)}toggleSidenav(n){return n.toggle()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(Z.Yg),e.Y36(d.o0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-sidenav"]],viewQuery:function(n,t){if(1&n&&e.Gf(T.JX,5),2&n){let o;e.iGM(o=e.CRH())&&(t.sidenav=o.first)}},decls:10,vars:6,consts:[[1,"docs-component-viewer-sidenav-container"],["class","docs-component-viewer-sidenav",3,"opened","mode","fixedInViewport","fixedTopGap",4,"ngIf"],[1,"docs-component-sidenav-content"],[3,"toggleSidenav"],[1,"docs-component-sidenav-inner-content"],[1,"docs-component-sidenav-body-content"],[3,"params",4,"ngIf"],[1,"docs-component-viewer-sidenav",3,"opened","mode","fixedInViewport","fixedTopGap"],["sidenav",""],[3,"params"]],template:function(n,t){1&n&&(e.TgZ(0,"mat-sidenav-container",0),e.YNc(1,j,7,13,"mat-sidenav",1),e.ALo(2,"async"),e.TgZ(3,"div",2)(4,"component-page-header",3),e.NdJ("toggleSidenav",function(){return t.toggleSidenav(t.sidenav)}),e.qZA(),e.TgZ(5,"div",4)(6,"main",5),e.YNc(7,z,1,1,"app-component-nav",6),e.ALo(8,"async"),e._UZ(9,"router-outlet"),e.qZA()()()()),2&n&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,2,t.isScreenSmall)),e.xp6(6),e.Q6J("ngIf",!1===e.lcZ(8,4,t.isScreenSmall)))},directives:[T.TM,m.O5,T.JX,N,E,l.lC],pipes:[m.Ov],styles:[".docs-component-viewer-nav{position:sticky;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{width:240px;height:calc(100vh - 56px);overflow:auto}.docs-component-viewer-nav .docs-component-viewer-nav-content::-webkit-scrollbar{height:4px;width:4px}app-component-sidenav{display:flex;flex-direction:column;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.docs-component-viewer-sidenav-container{flex:1;box-sizing:border-box}.docs-component-viewer-sidenav{overflow:auto}.mat-drawer::-webkit-scrollbar{height:4px;width:4px}.docs-component-sidenav-content{display:flex;flex-direction:column;min-height:100%}.docs-component-sidenav-inner-content{display:flex;flex-direction:column;flex:1}.docs-component-sidenav-inner-content router-outlet+*{flex-grow:1;overflow:auto}.docs-component-sidenav-body-content{display:flex;flex:1 1 auto}.mat-list-base{padding-top:0}.docs-component-viewer-nav-content .mat-nav-list .mat-list-item .mat-list-item-content{padding-left:25px}@media (max-width: 959px){.docs-component-viewer-sidenav-container .docs-component-viewer-sidenav{z-index:4}.docs-component-viewer-nav{position:relative;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{box-sizing:border-box;margin:0;max-height:initial}}@media (max-width: 720px){.docs-component-viewer-sidenav-container{flex:1 0 auto}.docs-component-sidenav-body-content{flex-direction:column}}\n"],encapsulation:2}),i})(),children:[{path:"",redirectTo:"categories",pathMatch:"full"},{path:"categories",children:[{path:"",component:S}]},{path:"",loadChildren:()=>s.e(360).then(s.bind(s,2360)).then(i=>i.ComponentsModule)},{path:"**",redirectTo:"categories"}]}];let k=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.ez,d.m8,l.Bz.forChild(R),M,A.Bb,O]]}),i})()},6675:(B,w,s)=>{s.d(w,{_:()=>d});var m=s(4650),l=s(1481);let d=(()=>{class g{constructor(e){this.bodyTitle=e,this.localTitle="",this.originalTitle="Angular Material Extras library"}get title(){return this.localTitle}set title(e){this.localTitle=e&&this.capitalizeTitle(e),this.bodyTitle.setTitle(e=""!==e?`${this.localTitle} | Angular Material Extras`:this.originalTitle)}capitalizeTitle(e){return e.split("-").join(" ").replace(/\b\w+\b/g,x=>x.substring(0,1).toUpperCase()+x.substring(1))}}return g.\u0275fac=function(e){return new(e||g)(m.LFG(l.Dx))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);