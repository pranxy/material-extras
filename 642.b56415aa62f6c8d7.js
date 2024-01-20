"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[642],{2642:(H,u,i)=>{i.r(u),i.d(u,{default:()=>P});var c=i(6814),l=i(2651),r=i(1865),w=i(7902),y=i(2994),f=i(6124),m=i(6283),d=i(6825),v=i(9038),e=i(5879);function S(t,p){if(1&t&&(e.TgZ(0,"a",4),e._uU(1),e.qZA()),2&t){const n=p.$implicit,o=e.oxw().ngIf,a=e.oxw();e.Q6J("routerLink","/"+o+"/"+n.id),e.uIk("aria-current",a.currentItemId===n.id?"page":"false"),e.xp6(1),e.hij(" ",n.name," ")}}function T(t,p){if(1&t&&(e.TgZ(0,"div",2)(1,"mat-nav-list"),e.YNc(2,S,2,3,"a",3),e.qZA()()),2&t){const n=p.ngIf,o=e.oxw();e.xp6(2),e.Q6J("ngForOf",o.docItems.getItems(n))}}let C=(()=>{class t{constructor(n){this.docItems=n}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(m.o0))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-component-nav"]],inputs:{params:"params"},standalone:!0,features:[e.jDz],decls:3,vars:3,consts:[[1,"docs-component-viewer-nav"],["class","docs-component-viewer-nav-content",4,"ngIf"],[1,"docs-component-viewer-nav-content"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink"]],template:function(o,a){if(1&o&&(e.TgZ(0,"div",0),e.YNc(1,T,3,1,"div",1),e.ALo(2,"async"),e.qZA()),2&o){let s;e.xp6(1),e.Q6J("ngIf",null==(s=e.lcZ(2,1,a.params))?null:s.section)}},dependencies:[c.ez,c.sg,c.O5,c.Ov,v.ie,v.Hk,v.Tg,r.rH],encapsulation:2,data:{animation:[(0,d.X$)("bodyExpansion",[(0,d.SB)("collapsed",(0,d.oB)({height:"0px",display:"none"})),(0,d.SB)("expanded",(0,d.oB)({height:"*",display:"block"})),(0,d.eR)("expanded <=> collapsed",(0,d.jt)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])]}})}return t})();var x=i(2296),h=i(1175),Z=i(6528);let I=(()=>{class t{constructor(n){this.componentPageTitle=n,this.toggleSidenav=new e.vpe}getTitle(){return this.componentPageTitle.title}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(Z._))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["component-page-header"]],outputs:{toggleSidenav:"toggleSidenav"},standalone:!0,features:[e.jDz],decls:6,vars:1,consts:[[1,"docs-primary-header","component-page-header"],["mat-button","",1,"sidenav-toggle",3,"click"]],template:function(o,a){1&o&&(e.TgZ(0,"header",0)(1,"button",1),e.NdJ("click",function(){return a.toggleSidenav.emit()}),e.TgZ(2,"mat-icon"),e._uU(3,"menu"),e.qZA()(),e.TgZ(4,"h1"),e._uU(5),e.qZA()()),2&o&&(e.xp6(5),e.Oqu(a.getTitle()))},dependencies:[x.ot,x.lW,h.Ps,h.Hw],styles:[".component-page-header[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width: 959px){.component-page-header[_ngcontent-%COMP%]{padding-left:0}}h1[_ngcontent-%COMP%]{outline:none}@media (max-width: 959px){h1[_ngcontent-%COMP%]{padding:24px 8px;font-size:20px}}.sidenav-toggle[_ngcontent-%COMP%]{padding:0;margin:8px;min-width:64px;display:none}@media (max-width: 959px){.sidenav-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:64px;width:64px;line-height:64px;color:#fff}"]})}return t})();var M=i(1088);function A(t,p){if(1&t&&(e.TgZ(0,"mat-sidenav",7,8),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async"),e.ALo(5,"async"),e._UZ(6,"app-component-nav",9),e.qZA()),2&t){const n=e.oxw();e.Q6J("opened",!1===e.lcZ(2,5,n.isScreenSmall))("mode",e.lcZ(3,7,n.isScreenSmall)?"over":"side")("fixedInViewport",e.lcZ(4,9,n.isScreenSmall))("fixedTopGap",e.lcZ(5,11,n.isExtraScreenSmall)?92:56),e.xp6(6),e.Q6J("params",n.params)}}function O(t,p){if(1&t&&e._UZ(0,"app-component-nav",9),2&t){const n=e.oxw();e.Q6J("params",n.params)}}let P=(()=>{class t{constructor(n,o,a,s){this.router=n,this.route=o,this.docItems=s,this.subscriptions=new w.w,this.isExtraScreenSmall=a.observe("(max-width: 720px)").pipe((0,f.U)(g=>g.matches)),this.isScreenSmall=a.observe("(max-width: 959px)").pipe((0,f.U)(g=>g.matches))}ngOnInit(){this.params=(0,y.aj)(this.route.pathFromRoot.map(n=>n.params),Object.assign)}toggleSidenav(n){return n.toggle()}ngOnDestroy(){this.subscriptions.unsubscribe()}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(r.F0),e.Y36(r.gz),e.Y36(M.Yg),e.Y36(m.o0))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-sidenav"]],viewQuery:function(o,a){if(1&o&&e.Gf(l.JX,5),2&o){let s;e.iGM(s=e.CRH())&&(a.sidenav=s.first)}},standalone:!0,features:[e._Bn([m.o0]),e.jDz],decls:10,vars:6,consts:[[1,"docs-component-viewer-sidenav-container"],["class","docs-component-viewer-sidenav",3,"opened","mode","fixedInViewport","fixedTopGap",4,"ngIf"],[1,"docs-component-sidenav-content"],[3,"toggleSidenav"],[1,"docs-component-sidenav-inner-content"],[1,"docs-component-sidenav-body-content"],[3,"params",4,"ngIf"],[1,"docs-component-viewer-sidenav",3,"opened","mode","fixedInViewport","fixedTopGap"],["sidenav",""],[3,"params"]],template:function(o,a){1&o&&(e.TgZ(0,"mat-sidenav-container",0),e.YNc(1,A,7,13,"mat-sidenav",1),e.ALo(2,"async"),e.TgZ(3,"div",2)(4,"component-page-header",3),e.NdJ("toggleSidenav",function(){return a.toggleSidenav(a.sidenav)}),e.qZA(),e.TgZ(5,"div",4)(6,"main",5),e.YNc(7,O,1,1,"app-component-nav",6),e.ALo(8,"async"),e._UZ(9,"router-outlet"),e.qZA()()()()),2&o&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,2,a.isScreenSmall)),e.xp6(6),e.Q6J("ngIf",!1===e.lcZ(8,4,a.isScreenSmall)))},dependencies:[c.ez,c.O5,c.Ov,r.Bz,r.lC,l.SJ,l.JX,l.TM,C,I],styles:[".docs-component-viewer-nav{position:sticky;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{width:240px;height:calc(100vh - 56px);overflow:auto}.docs-component-viewer-nav .docs-component-viewer-nav-content::-webkit-scrollbar{height:4px;width:4px}app-component-sidenav{display:flex;flex-direction:column;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.docs-component-viewer-sidenav-container{flex:1;box-sizing:border-box}.docs-component-viewer-sidenav{overflow:auto}.mat-drawer::-webkit-scrollbar{height:4px;width:4px}.docs-component-sidenav-content{display:flex;flex-direction:column;min-height:100%}.docs-component-sidenav-inner-content{display:flex;flex-direction:column;flex:1}.docs-component-sidenav-inner-content router-outlet+*{flex-grow:1;overflow:auto}.docs-component-sidenav-body-content{display:flex;flex:1 1 auto}.mat-mdc-list-base{padding-top:0}.docs-component-viewer-nav-content .mat-nav-list .mat-mdc-list-item .mat-list-item-content{padding-left:25px}@media (max-width: 959px){.docs-component-viewer-sidenav-container .docs-component-viewer-sidenav{z-index:4}.docs-component-viewer-nav{position:relative;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{box-sizing:border-box;margin:0;max-height:initial}}@media (max-width: 720px){.docs-component-viewer-sidenav-container{flex:1 0 auto}.docs-component-sidenav-body-content{flex-direction:column}}\n"],encapsulation:2})}return t})()}}]);