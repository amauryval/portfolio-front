"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[137],{3137:(q,x,c)=>{c.r(x),c.d(x,{BlogModule:()=>N});var s=c(9808),g=c(9560),r=c(2397),y=c(2087),t=c(5e3),d=c(7579),T=c(520);let b=(()=>{class o{constructor(e){this.http=e,this.apiUrlNotesData=r.JW,this.ErrorTopicsDataApiFound=new d.x,this.topicsData=new d.x,this.topicData=new d.x}pulltopicsData(){this.http.get(`${this.apiUrlNotesData}blog_topics`).subscribe({complete:()=>{},error:e=>{this.ErrorTopicsDataApiFound.next(e.message)},next:e=>{this.topicsData.next(e)}})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(T.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=c(1557),Z=c(2313),A=c(3686),_=c(9444),h=c(4586);function w(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"span",27),t._uU(2),t.qZA(),t.BQk()),2&o){const e=i.$implicit,n=t.oxw(3);t.xp6(1),t.Akn("background-color:"+n.getTagColor(e,n.seedCategory)+";color: white"),t.xp6(1),t.Oqu(e)}}function L(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"span",27),t._uU(2),t.qZA(),t.BQk()),2&o){const e=i.$implicit,n=t.oxw(3);t.xp6(1),t.Akn("background-color:"+n.getTagColor(e,n.seedTag)+";color: white"),t.xp6(1),t.Oqu(e)}}function F(o,i){if(1&o&&(t.TgZ(0,"div",11)(1,"div",12)(2,"span",13),t._uU(3),t.qZA()(),t.TgZ(4,"div",14)(5,"div",15),t._UZ(6,"img",16),t.ALo(7,"safeUrl"),t.qZA(),t.TgZ(8,"div",17)(9,"div",18),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"div",19)(13,"div",20)(14,"span",21),t._uU(15,"Cat\xe9gorie(s):"),t.qZA(),t.YNc(16,w,3,3,"ng-container",22),t.qZA(),t.TgZ(17,"div",23)(18,"span",21),t._uU(19,"Tag(s):"),t.qZA(),t.YNc(20,L,3,3,"ng-container",22),t.qZA(),t.TgZ(21,"p",24),t._uU(22),t.qZA()(),t.TgZ(23,"a",25),t._uU(24,"Acc\xe9der"),t.qZA()(),t._UZ(25,"div",26),t.qZA()),2&o){const e=i.$implicit;t.xp6(3),t.Oqu(e.title),t.xp6(3),t.Q6J("src",t.lcZ(7,7,e.image),t.LSH),t.xp6(4),t.hij("Le ",t.xi3(11,9,e.date,"dd MMMM y"),""),t.xp6(6),t.Q6J("ngForOf",e.categories),t.xp6(4),t.Q6J("ngForOf",e.tags),t.xp6(2),t.Oqu(e.resume),t.xp6(1),t.Q6J("href",e.url,t.LSH)}}function B(o,i){1&o&&t.GkF(0)}function J(o,i){if(1&o&&(t.TgZ(0,"div",28),t.YNc(1,B,1,0,"ng-container",29),t.qZA()),2&o){t.oxw(2);const e=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",e)}}function S(o,i){1&o&&t._UZ(0,"div",28)}function M(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,F,26,12,"div",5),t.qZA(),t.TgZ(3,"div",6)(4,"div",7)(5,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw().showHideLegend()}),t._UZ(6,"fa-icon",9),t._uU(7," L\xe9gende "),t.qZA()(),t.YNc(8,J,2,1,"div",10),t.YNc(9,S,1,0,"div",10),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.selectedblogTopics),t.xp6(4),t.Q6J("icon",e.tagsIcon),t.xp6(2),t.Q6J("ngIf",e.isLegendDisplayed),t.xp6(1),t.Q6J("ngIf",!e.isLegendDisplayed)}}function O(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",33)(1,"button",38),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).selectContentByCategory(l)}),t._UZ(2,"fa-icon",35),t._uU(3),t.qZA()()}if(2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngClass",n.currentCategory===e?"fw-bolderer":"inactive"),t.xp6(1),t.Akn("color:"+n.getTagColor(e,n.seedCategory)+";"),t.Q6J("icon",n.tagIcon),t.xp6(1),t.hij("",e," ")}}function U(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",33)(1,"button",38),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).selectContentByTag(l)}),t._UZ(2,"fa-icon",35),t._uU(3),t.qZA()()}if(2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngClass",n.currentTag===e?"fw-bolderer":"inactive"),t.xp6(1),t.Akn("color:"+n.getTagColor(e,n.seedTag)+";"),t.Q6J("icon",n.tagIcon),t.xp6(1),t.hij("",e," ")}}function k(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",30)(1,"div",31)(2,"h6"),t._uU(3,"Filtrage par cat\xe9gories"),t.qZA(),t.TgZ(4,"div",32)(5,"div",33)(6,"button",34),t.NdJ("click",function(){return t.CHM(e),t.oxw().resetContent()}),t._UZ(7,"fa-icon",35),t._uU(8,"Tous "),t.qZA()(),t.YNc(9,O,4,5,"div",36),t.qZA()(),t.TgZ(10,"div",37)(11,"h6"),t._uU(12,"Filtrage par tags"),t.qZA(),t.TgZ(13,"div",32),t.YNc(14,U,4,5,"div",36),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngClass",null===e.currentCategory?"fw-bolderer":"inactive"),t.xp6(1),t.Q6J("icon",e.tagIcon),t.xp6(2),t.Q6J("ngForOf",e.allCategories),t.xp6(5),t.Q6J("ngForOf",e.allTags)}}const D=[{path:"",component:(()=>{class o{constructor(e,n,a,l,p){this.blogService=e,this.mainService=n,this.activatedRoute=a,this.titleService=l,this.controlerService=p,this.pageUrlToLoad=r.lF,this.isLegendDisplayed=!0,this.tagsIcon=r.yK,this.tagIcon=r.V2,this.seedCategory=50,this.seedTag=8,this.titleService.setTitle(this.activatedRoute.snapshot.data.title),this.topicsDataSubscription=this.blogService.topicsData.subscribe(v=>{this.allBlogTopics=v,this.selectedblogTopics=v;let u=[];this.allBlogTopics.forEach((f,Y)=>{u=[...u,...f.categories]}),this.allCategories=Array.from(new Set(u));let m=[];this.allBlogTopics.forEach((f,Y)=>{m=[...m,...f.tags]}),this.allTags=Array.from(new Set(m))})}ngOnInit(){this.sendResumeSubMenus(),this.blogService.pulltopicsData()}ngOnDestroy(){this.topicsDataSubscription.unsubscribe()}sendResumeSubMenus(){this.controlerService.pullSubMenus([])}getTagColor(e,n){return(0,r.u_)(e,n)}showHideLegend(){this.isLegendDisplayed=!this.isLegendDisplayed}resetContent(){this.selectedblogTopics=this.allBlogTopics,this.mainService.scrollToTopAction()}selectContentByCategory(e){let n=this.allBlogTopics.filter(a=>a.categories.includes(e));this.selectedblogTopics=n,this.mainService.scrollToTopAction()}selectContentByTag(e){let n=this.allBlogTopics.filter(a=>a.tags.includes(e));this.selectedblogTopics=n,this.mainService.scrollToTopAction()}displayContentRegardingDeviceScreen(){0===window.screen.orientation.angle&&window.screen.height<=r.OM&&(this.isLegendDisplayed=!1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b),t.Y36(C.J),t.Y36(g.gz),t.Y36(Z.Dx),t.Y36(A.L))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-layout"]],hostBindings:function(e,n){1&e&&t.NdJ("orientationchange",function(l){return n.displayContentRegardingDeviceScreen(l)},!1,t.Jf7)},decls:4,vars:2,consts:[[1,"container-fluid","g-0"],["class","d-flex flex-column",4,"ngIf"],["controler",""],[1,"d-flex","flex-column"],[1,"m-4","grid-container"],["class","mb-4 feat-topic bg-white",4,"ngFor","ngForOf"],[1,"d-flex","flex-column","legend-container"],[1,"mx-3"],["type","button","checked","","autocomplete","off",1,"btn","btn-dark","me-2","shadow",3,"click"],[1,"",3,"icon"],["class","bg-white legend-content text-center py-3",4,"ngIf"],[1,"mb-4","feat-topic","bg-white"],[1,"card-header","p-2","bg-dark","bg-gradient","text-white"],[1,"fs-6","fw-bold"],[1,"card-body"],[1,"d-flex","flex-column","py-2"],[1,"card-img",3,"src"],[1,"d-flex","flex-row","justify-content-end"],[1,"fst-italic","small"],[1,"d-flex","flex-column","pb-2"],[1,"py-1"],[1,"fw-bold","small","me-2"],[4,"ngFor","ngForOf"],[1,""],[1,"card-text","my-2"],["target","_blank","rel","noopener noreferrer",1,"btn","btn-warning","mt-auto","fw-bold",3,"href"],[1,"card-footer"],[1,"badge","rounded-pill","mx-1"],[1,"bg-white","legend-content","text-center","py-3"],[4,"ngTemplateOutlet"],[1,"d-flex","flex-column","flex-xl-row","justify-content-around","align-items-center"],[1,"d-flex","flex-column","m-2"],["role","toolbar",1,"btn-toolbar","my-2","d-flex","justify-content-center"],["role","group",1,"btn-group","my-1","mx-1"],[1,"btn","btn-secondary","btn-sm",3,"ngClass","click"],[1,"me-2",3,"icon"],["class","btn-group my-1 mx-1","role","group",4,"ngFor","ngForOf"],[1,"d-flex","flex-column","mx-2"],[1,"btn","btn-sm","btn-secondary","btn-sm",3,"ngClass","click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,M,10,4,"div",1),t.qZA(),t.YNc(2,k,15,4,"ng-template",null,2,t.W1O)),2&e&&(t.Q6J("@fadeInOut",void 0),t.xp6(1),t.Q6J("ngIf",n.selectedblogTopics))},directives:[s.O5,s.sg,_.BN,s.tP,s.mk],pipes:[h.Q5,s.uU],styles:['.grid-container[_ngcontent-%COMP%]{columns:200px;-webkit-column-count:3;-webkit-column-gap:3%;-moz-column-count:3;-moz-column-gap:3%;column-count:3;column-gap:3%}.feat-topic[_ngcontent-%COMP%]{page-break-inside:avoid;break-inside:avoid}.card-img[_ngcontent-%COMP%]{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:80%}.legend-container[_ngcontent-%COMP%]{position:sticky;bottom:0;width:100%}.legend-content[_ngcontent-%COMP%]{color:"#FFFFF";background-color:#f5f5f5;box-shadow:0 -5px 20px #00000080;min-height:2em}.blog-content[_ngcontent-%COMP%]{min-height:100vh}'],data:{animation:[y.Ae]}}),o})(),data:{title:"Blog",page:"blog"}}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.Bz.forChild(D)],g.Bz]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,Q,h.Dt,_.uH]]}),o})()}}]);