"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[423],{4423:(Z,u,o)=>{o.r(u),o.d(u,{MapModule:()=>y});var l=o(9808),p=o(9444),s=o(9560),c=o(9619),e=o(5e3),g=o(9947),m=o(3686);const h=function(t){return[t]};function v(t,i){if(1&t&&(e.TgZ(0,"div")(1,"div",4)(2,"div",5),e._uU(3),e.qZA(),e.TgZ(4,"div",6)(5,"h5",7),e._uU(6),e.qZA(),e.TgZ(7,"p",8),e._uU(8),e.qZA(),e.TgZ(9,"a",9),e._uU(10,"Acc\xe9der"),e.qZA()()()()),2&t){const n=i.$implicit;e.xp6(3),e.Oqu(n.title),e.xp6(3),e.Oqu(n.title),e.xp6(2),e.Oqu(n.details),e.xp6(1),e.Q6J("routerLink",e.VKq(4,h,n.route))}}const b=[{path:"app",component:(()=>{class t{constructor(n,a,d){this.mapService=n,this.router=a,this.controlerService=d,this.tagIcon=c.V2,this.centerIcon=c.HI,this.isLegendDisplayed=!0,this.ScaleFeaturesSubscription=this.mapService.mapContainerScale.subscribe(r=>{const M=window.document.getElementById("legend-scale"),C=window.document.getElementById("attribution");M.appendChild(r.scale.getContainer()),C.appendChild(r.attribution.getContainer())}),this.routerSubscription=this.router.events.subscribe(r=>{this.currentMapTool=a.url})}ngOnInit(){this.mapService.MapInteraction(!0),this.sendResumeSubMenus()}ngAfterViewInit(){this.mapService.getMapContainerForLegend()}ngOnDestroy(){this.ScaleFeaturesSubscription.unsubscribe(),this.routerSubscription.unsubscribe(),this.mapService.MapInteraction(!1)}sendResumeSubMenus(){this.controlerService.pullSubMenus([])}showHideLegend(){this.isLegendDisplayed=!this.isLegendDisplayed}zoomOnData(){this.mapService.sendZoomAction()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.S),e.Y36(s.F0),e.Y36(m.L))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-layout"]],decls:21,vars:4,consts:[["name","map-sandbox"],[1,"container-fluid","g-0"],[1,"d-flex","flex-column"],[1,"d-flex","flex-row","map-content"],[1,"legend-container"],[1,"d-flex","flex-column","flex-fill"],[1,"d-flex","flex-row","align-items-end","justify-content-between","px-3"],[1,"d-flex","flex-row"],["type","button","checked","","autocomplete","off",1,"btn","btn-sm","btn-dark","me-2",3,"click"],[1,"",3,"icon"],["title","Centrer","type","button","checked","","autocomplete","off",1,"btn","btn-sm","btn-warning","me-2",3,"click"],[1,"map-sources","d-flex","flex-column"],[1,"col-12"],["id","attribution",1,"float-end"],["id","legend-scale",1,"float-end"],[1,"bg-white","legend-content","text-center","py-3","justify-content-center",3,"ngClass"],["name","map-activities"],[1,"d-flex","flex-column","flex-lg-row","bg-white","legend-content","text-center","py-3","justify-content-center",3,"ngClass"]],template:function(n,a){1&n&&(e._UZ(0,"router-outlet",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"button",8),e.NdJ("click",function(){return a.showHideLegend()}),e._UZ(9,"fa-icon",9),e._uU(10," L\xe9gende "),e.qZA(),e.TgZ(11,"button",10),e.NdJ("click",function(){return a.zoomOnData()}),e._UZ(12,"fa-icon",9),e.qZA()(),e.TgZ(13,"div",11)(14,"div",12),e._UZ(15,"div",13),e.qZA(),e.TgZ(16,"div",12),e._UZ(17,"div",14),e.qZA()()(),e.TgZ(18,"div",15),e._UZ(19,"router-outlet",16),e.qZA(),e._UZ(20,"div",17),e.qZA()()()()),2&n&&(e.xp6(9),e.Q6J("icon",a.tagIcon),e.xp6(3),e.Q6J("icon",a.centerIcon),e.xp6(6),e.Q6J("ngClass",a.isLegendDisplayed?"d-block":"d-none"),e.xp6(2),e.Q6J("ngClass",a.isLegendDisplayed?"d-none":"d-block"))},directives:[s.lC,p.BN,l.mk],styles:[".map-content{min-height:100vh;pointer-events:none}.legend-container{position:sticky;bottom:0;transition:all .1s}@media (max-width: 576px){.legend-container{position:fixed;width:100%}}.legend-content{box-shadow:0 -5px 20px #00000080}.legend-content.disable{height:2em}.legend-content.disable .d-flex{visibility:hidden}.leaflet-control-scale{visibility:visible!important}.leaflet-control-scale-line{background:rgba(255,255,255,.83)!important}#attribution,#legend-scale{font-size:12px!important;background-color:#f1f1f1c9!important;margin:3px!important;padding:5px;border-radius:5px}\n"],encapsulation:2}),t})(),children:[{path:"activities",loadChildren:()=>Promise.all([o.e(981),o.e(534)]).then(o.bind(o,9534)).then(t=>t.MapActivitiesModule)},{path:"sandbox",loadChildren:()=>Promise.all([o.e(981),o.e(362)]).then(o.bind(o,8362)).then(t=>t.MapSandboxModule)},{path:"",redirectTo:"",pathMatch:"full"}]},{path:"",component:(()=>{class t{constructor(n){this.controlerService=n,this.mapPagesMenus=c.v2}ngOnInit(){this.sendResumeSubMenus()}sendResumeSubMenus(){this.controlerService.pullSubMenus([])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.L))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:4,vars:1,consts:[[1,"container","h-100"],[1,"d-flex","flex-row","justify-content-center","align-items-stretch"],["id","cards-container",1,"d-flex","flex-column","flex-lg-row","justify-content-around"],[4,"ngFor","ngForOf"],[1,"card","text-white","m-3","shadow"],[1,"card-header","bg-dark","bg-gradient"],[1,"card-body","text-black"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-warning","mt-auto","fw-bold",3,"routerLink"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.YNc(3,v,11,6,"div",3),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("ngForOf",a.mapPagesMenus.sub_menus))},directives:[l.sg,s.yS],styles:["#cards-container[_ngcontent-%COMP%]{height:70vh}"]}),t})(),data:{title:"Cartes",page:"home"}}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(b)],s.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,x,p.uH]]}),t})()}}]);