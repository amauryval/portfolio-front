"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[13],{13:(E,y,l)=>{l.r(y),l.d(y,{GalleryModule:()=>U});var s=l(9808),g=l(9444),p=l(9560),a=l(8610),v=l(2087),t=l(5e3),m=l(9187),f=l(1557),_=l(2313),x=l(3686),T=l(7727),C=l(6298),b=l(6423);function A(i,o){if(1&i&&t._UZ(0,"set-badge-content",11),2&i){const e=t.oxw().$implicit;t.Q6J("title",e.activityType.name)("classes","text-bg-"+e.activityType.class)}}const Z=function(i){return[i]};function J(i,o){if(1&i&&t._UZ(0,"set-badge-content",12),2&i){const e=t.oxw().$implicit,n=t.oxw(2);t.Q6J("routerLink",t.VKq(4,Z,n.experiencesRoute))("fragment",e.id)("title",e.experienceName.name)("customBgColor",e.experienceName.color)}}function L(i,o){if(1&i&&t._UZ(0,"set-badge-content",13),2&i){const e=t.oxw().$implicit;t.Q6J("title",e.mediaType.icon.title)("classes","text-bg-"+e.mediaType.name)("icon",e.mediaType.icon.icon)}}function G(i,o){if(1&i&&(t.TgZ(0,"div",7),t.YNc(1,A,1,2,"set-badge-content",8),t.YNc(2,J,1,6,"set-badge-content",9),t.YNc(3,L,1,3,"set-badge-content",10),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",e.activityType),t.xp6(1),t.Q6J("ngIf",e.experienceName),t.xp6(1),t.Q6J("ngIf",e.mediaType)}}function S(i,o){1&i&&t.GkF(0)}function Q(i,o){if(1&i&&(t.TgZ(0,"article",2)(1,"app-grid-container",3),t.YNc(2,G,4,3,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(4,"set-legend-container",5),t.YNc(5,S,1,0,"ng-container",6),t.qZA()()),2&i){const e=t.oxw(),n=t.MAs(2);t.Q6J("@fadeInOut",void 0),t.xp6(1),t.Q6J("features",e.galleryItems),t.xp6(4),t.Q6J("ngTemplateOutlet",n)}}const d=function(i){return{active:i}};function D(i,o){if(1&i&&(t.ynx(0),t.TgZ(1,"div",30)(2,"button",31),t._uU(3),t.qZA()(),t.BQk()),2&i){const e=o.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("id",e.key)("ngClass",t.VKq(3,d,n.currentActivity===e.key)),t.xp6(1),t.hij(" ",e.value," ")}}function M(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",32),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw(2).getGalleryDataByType(u)}),t._UZ(2,"fa-icon",19),t.qZA(),t.BQk()}if(2&i){const e=o.$implicit,n=t.oxw(2);t.xp6(1),t.Tol("btn btn-sm text-bg-"+e),t.Q6J("title",n.typeStyleMapping[e].title)("ngClass",t.VKq(5,d,n.currentType===e)),t.xp6(1),t.Q6J("icon",n.typeStyleMapping[e].icon)}}function B(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",14)(1,"div",15)(2,"h6"),t._uU(3,"Filtrage par cat\xe9gories"),t.qZA(),t.TgZ(4,"div",16)(5,"div",17)(6,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().resetGallery()}),t._UZ(7,"fa-icon",19),t._uU(8,"Tous "),t.qZA()(),t.TgZ(9,"div",17)(10,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().getGalleryDataByCategory("job")}),t._UZ(11,"fa-icon",21),t._uU(12,"Exp\xe9riences "),t.qZA()(),t.TgZ(13,"div",17)(14,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().getGalleryDataByCategory("personal_project")}),t._UZ(15,"fa-icon",22),t._uU(16,"Projets personnels "),t.qZA()(),t.TgZ(17,"div",17)(18,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().getGalleryDataByCategory("volunteer")}),t._UZ(19,"fa-icon",23),t._uU(20,"B\xe9n\xe9volat "),t.qZA()()()(),t.TgZ(21,"div",24)(22,"h6"),t._uU(23,"Filtrage par activit\xe9s"),t.qZA(),t.TgZ(24,"div",25)(25,"div",26),t.YNc(26,D,4,5,"ng-container",27),t.ALo(27,"keyvalue"),t.qZA()()(),t.TgZ(28,"div",15)(29,"h6"),t._uU(30,"Filtrage par types d'illustration"),t.qZA(),t.TgZ(31,"div",28)(32,"div",29),t.YNc(33,M,3,7,"ng-container",27),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(6),t.Q6J("ngClass",null===e.currentCategory?"fw-bolde":"inactive"),t.xp6(1),t.Q6J("icon",e.tagIcon),t.xp6(3),t.Q6J("id","all"+e.currentCategory)("ngClass","job"===e.currentCategory?"active":"inactive"),t.xp6(1),t.Q6J("icon",e.tagIcon),t.xp6(3),t.Q6J("id","all"+e.currentCategory)("ngClass","personal_project"===e.currentCategory?"active":"inactive"),t.xp6(1),t.Q6J("icon",e.tagIcon),t.xp6(3),t.Q6J("id","all"+e.currentCategory)("ngClass","volunteer"===e.currentCategory?"active":"inactive"),t.xp6(1),t.Q6J("icon",e.tagIcon),t.xp6(7),t.Q6J("ngForOf",t.lcZ(27,13,e.activities)),t.xp6(7),t.Q6J("ngForOf",e.mediaTypes)}}const I=[{path:"",component:(()=>{class i{constructor(e,n,r,u,h){this.galleryService=e,this.mainService=n,this.activatedRoute=r,this.titleService=u,this.controlerService=h,this.experiencesRoute=a.I_.route,this.currentDate=(new Date).getFullYear(),this.defaultActivity=null,this.currentActivity=null,this.defaultCategory=null,this.currentCategory=null,this.isLegendDisplayed=!0,this.tagsIcon=a.yK,this.tagIcon=a.V2,this.defaultType=null,this.currentType=null,this.assetsImagesPath=a.On,this.galleryItems=[],this.innerRoutesAvailable=["maps/app/"],this.isDataAvailable=!1,this.fragment=null,this.typeStyleMapping={chart:{icon:a.Mj,title:"Graphiques & tableaux"},video:{icon:a.uk,title:"Vid\xe9os"},map:{icon:a.aD,title:"Cartes"},app:{icon:a.XL,title:"Applications"},tool:{icon:a.MQ,title:"Outils"},library:{icon:a.C1,title:"Libraries"},methodo:{icon:a.VF,title:"M\xe9thodologies"}},this.categoriesActivity={job:"Exp\xe9riences",personal_project:"Projet personnel",volunteer:"B\xe9n\xe9volat"},this.featureTypes={youtube:"video",url_img:"modal",url_app:"website",api_img:"modal"},this.titleService.setTitle(this.activatedRoute.snapshot.data.title),this.activatedRoute.fragment.subscribe(c=>{void 0!==c&&(this.fragment=c)}),this.activitiesGallerySubscription=this.galleryService.activitiesGalleryData.subscribe(c=>{this.galleryItems=[],c.items.forEach(w=>{this.galleryItems.push(this.buildFeature(w))}),this.mediaTypes=c.media_types_available,this.activities=c.activities,console.log(c),this.currentCategory=c.current_category,this.isDataAvailable=!0})}ngOnInit(){this.sendResumeSubMenus(),this.resetGallery(),this.filterFromAnchor()}ngOnDestroy(){this.activitiesGallerySubscription.unsubscribe()}sendResumeSubMenus(){this.controlerService.pullSubMenus([])}buildFeature(e){let n=e.media_splash;[null,"nan"].includes(n)&&(n=e.media),n.includes("http")||(n=a.On+n),!e.media.includes("http")&&"modal"===this.featureTypes[e.source]&&(e.media=a.On+e.media);let r={};return e.data&&(r.Donn\u00e9es=e.data),e.tools&&(r.Outils=e.tools),{id:e.identifier,title:e.title,image_url:n,content_url:e.media,categories:[],tags:[],activityType:{name:this.categoriesActivity[e.category],class:e.category},experienceName:{name:e.name,color:e.color},mediaType:{name:e.type,icon:this.typeStyleMapping[e.type]},type:this.featureTypes[e.source],description:e.description,addons:r}}filterFromAnchor(){try{null!==this.fragment&&this.getGalleryDataByActivity(this.fragment.replace("#",""))}catch(e){}}resetGallery(){this.currentActivity=this.defaultActivity,this.currentCategory=this.defaultCategory,this.currentType=this.defaultType,this.galleryService.pullExistingActivitiesGallery(this.currentActivity,this.currentCategory,this.currentType),this.mainService.scrollToTopAction()}getGalleryDataByActivity(e){this.currentActivity=e,this.currentType=this.defaultType,this.galleryService.pullExistingActivitiesGallery(this.currentActivity,this.currentCategory,this.currentType),this.mainService.scrollToTopAction()}getGalleryDataByCategory(e){this.currentCategory=e,this.currentActivity=this.defaultActivity,this.currentType=this.defaultType,this.galleryService.pullExistingActivitiesGallery(this.currentActivity,this.currentCategory,this.currentType),this.mainService.scrollToTopAction()}getGalleryDataByType(e){this.currentType=e,this.galleryService.pullExistingActivitiesGallery(this.currentActivity,this.currentCategory,this.currentType),this.mainService.scrollToTopAction()}displayContentRegardingDeviceScreen(){0===window.screen.orientation.angle&&window.screen.height<=a.OM&&(this.isLegendDisplayed=!1)}showHideLegend(){this.isLegendDisplayed=!this.isLegendDisplayed}urlAppChecker(e){let n=!1;return this.innerRoutesAvailable.forEach(r=>{e.includes(r)&&(n=!0)}),n}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.r),t.Y36(f.J),t.Y36(p.gz),t.Y36(_.Dx),t.Y36(x.L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-layout"]],hostBindings:function(e,n){1&e&&t.NdJ("orientationchange",function(u){return n.displayContentRegardingDeviceScreen(u)},!1,t.Jf7)},decls:3,vars:1,consts:[["id","galleryHome","class","gallery",4,"ngIf"],["galleryControler",""],["id","galleryHome",1,"gallery"],[3,"features"],["galleryTemplate",""],["classes","position-sticky"],[4,"ngTemplateOutlet"],[1,"body-activity-badges","d-flex","flex-row","flex-wrap","mt-2","align-items-center"],[3,"title","classes",4,"ngIf"],["classes","pointer",3,"routerLink","fragment","title","customBgColor",4,"ngIf"],[3,"title","classes","icon",4,"ngIf"],[3,"title","classes"],["classes","pointer",3,"routerLink","fragment","title","customBgColor"],[3,"title","classes","icon"],[1,"d-flex","flex-column","flex-xl-row","justify-content-around","align-items-center"],[1,"col-12","col-xl-3","mx-2"],["role","toolbar",1,"btn-toolbar","my-2","d-flex","justify-content-center"],["role","group",1,"btn-group","my-1","mx-1"],["type","button","id","allButton",1,"btn","btn-sm","text-bg-secondary",3,"ngClass","click"],[3,"icon"],["type","button",1,"btn","btn-sm","text-bg-secondary",3,"id","ngClass","click"],[1,"text-job","mx-1",3,"icon"],[1,"text-personal_project","mx-1",3,"icon"],[1,"text-volunteer","mx-1",3,"icon"],[1,"col-12","col-xl-4","mx-2"],[1,"my-2","activities-container"],["role","toolbar",1,"btn-toolbar","d-flex","justify-content-center"],[4,"ngFor","ngForOf"],[1,"d-flex","flex-row","justify-content-center","my-2","mb-1","flex-wrap"],[1,"btn-group"],["role","group",1,"btn-group","my-1","me-1"],["type","button",1,"btn","btn-sm","text-bg-secondary",3,"id","ngClass"],["type","button",3,"title","ngClass","click"]],template:function(e,n){1&e&&(t.YNc(0,Q,6,3,"article",0),t.YNc(1,B,34,15,"ng-template",null,1,t.W1O)),2&e&&t.Q6J("ngIf",n.isDataAvailable)},directives:[s.O5,T.A,C.H,p.rH,b.b,s.tP,s.mk,g.BN,s.sg],pipes:[s.Nd],styles:[".gallery-container[_ngcontent-%COMP%]{columns:350px;column-count:3;column-gap:3%}"],data:{animation:[v.Ae]}}),i})(),data:{title:"Galerie",page:"gallery"}}];let N=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.Bz.forChild(I)],p.Bz]}),i})();var j=l(4586),F=l(739),O=l(7157);let U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[m.r],imports:[[s.ez,N,g.uH,j.Dt,F.j,O.p]]}),i})()}}]);