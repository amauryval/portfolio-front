"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[352],{2352:(q,h,n)=>{n.r(h),n.d(h,{BlogModule:()=>P});var p=n(6895),u=n(646),T=n(2087),y=n(3996),f=n(2687),_=n(8227),t=n(4650),m=n(7579),C=n(8453),x=n(529);let v=(()=>{class o{constructor(e){this.http=e,this.apiUrlNotesData=C.JW,this.ErrorTopicsDataApiFound=new m.x,this.topicsData=new m.x,this.topicData=new m.x}pulltopicsData(){this.http.get(`${this.apiUrlNotesData}blog_topics`).subscribe({complete:()=>{},error:e=>{this.ErrorTopicsDataApiFound.next(e.message)},next:e=>{this.topicsData.next(e)}})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(x.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=n(1557),B=n(1481),F=n(3686),A=n(7727),Z=n(942),L=n(485),S=n(873),J=n(6298),N=n(6423);function D(o,s){if(1&o&&(t.TgZ(0,"set-badge-content",12),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("customBgColor",e.color),t.xp6(1),t.Oqu(e.name)}}function O(o,s){if(1&o&&(t.TgZ(0,"div",9)(1,"span",10),t._uU(2,"Cat\xe9gorie(s):"),t.qZA(),t.YNc(3,D,2,2,"set-badge-content",11),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(3),t.Q6J("ngForOf",e.categories)}}function Y(o,s){if(1&o&&(t.TgZ(0,"set-badge-content",12),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("customBgColor",e.color),t.xp6(1),t.Oqu(e.name)}}function E(o,s){if(1&o&&(t.TgZ(0,"div",9)(1,"span",10),t._uU(2,"Tag(s):"),t.qZA(),t.YNc(3,Y,2,2,"set-badge-content",11),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(3),t.Q6J("ngForOf",e.tags)}}function M(o,s){if(1&o&&(t.TgZ(0,"div",7),t.YNc(1,O,4,1,"div",8),t.YNc(2,E,4,1,"div",8),t.qZA(),t.TgZ(3,"set-paragraph-content"),t._uU(4),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("ngIf",e.categories.length>0),t.xp6(1),t.Q6J("ngIf",e.tags.length>0),t.xp6(2),t.Oqu(e.description)}}function Q(o,s){1&o&&t.GkF(0)}function I(o,s){if(1&o&&t.YNc(0,Q,1,0,"ng-container",13),2&o){t.oxw(2);const e=t.MAs(2);t.Q6J("ngTemplateOutlet",e)}}function H(o,s){if(1&o&&(t.TgZ(0,"div",2)(1,"app-grid-container",3),t.YNc(2,M,5,3,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(4,"set-legend-container",5),t.YNc(5,I,1,1,"ng-template",null,6,t.W1O),t.qZA()()),2&o){const e=t.oxw();t.Q6J("@fadeInOut",void 0),t.xp6(1),t.Q6J("features",e.selectedblogTopics)}}function U(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"set-button-content",16),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.selectContentByCategory(c.name))}),t._uU(1),t.qZA()}if(2&o){const e=s.$implicit,i=t.oxw(2);t.Q6J("classes",i.currentCategory===e.name?"btn-sm btn-secondary fw-bold":"btn-sm btn-secondary")("icon",i.tagIcon)("iconNgStyle","color:"+e.color+";"),t.xp6(1),t.hij("",e.name," ")}}function $(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"set-button-content",16),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.selectContentByTag(c.name))}),t._uU(1),t.qZA()}if(2&o){const e=s.$implicit,i=t.oxw(2);t.Q6J("classes",i.currentTag===e.name?"btn-sm btn-secondary fw-bold":"btn-sm btn-secondary")("icon",i.tagIcon)("iconNgStyle","color:"+e.color+";"),t.xp6(1),t.hij("",e.name," ")}}function R(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"set-section-container")(1,"h6"),t._uU(2,"Filtrage par cat\xe9gories"),t.qZA(),t.TgZ(3,"set-button-content",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.resetContent())}),t._uU(4,"Tous "),t.qZA(),t.YNc(5,U,2,4,"set-button-content",15),t.qZA(),t.TgZ(6,"set-section-container")(7,"h6"),t._uU(8,"Filtrage par tags"),t.qZA(),t.YNc(9,$,2,4,"set-button-content",15),t.qZA()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("icon",e.tagIcon),t.xp6(2),t.Q6J("ngForOf",e.allCategories),t.xp6(4),t.Q6J("ngForOf",e.allTags)}}const j=[{path:"",component:(()=>{class o{constructor(e,i,a,c,l){this.blogService=e,this.mainService=i,this.activatedRoute=a,this.titleService=c,this.controlerService=l,this.isLegendDisplayed=!0,this.tagsIcon=f.tho,this.tagIcon=f.LEN,this.allCategories=[],this.seedCategory=50,this.allTags=[],this.seedTag=8,this.selectedblogTopics=[],this.allBlogTopics=[],this.titleService.setTitle(this.activatedRoute.snapshot.data.title),this.topicsDataSubscription=this.blogService.topicsData.subscribe(X=>{X.forEach(r=>{this.allBlogTopics.push(this.buildFeature(r))}),this.selectedblogTopics=this.allBlogTopics,this.allBlogTopics.forEach(r=>{r.categories.forEach(g=>{0===Array.from(this.allCategories.values()).filter(d=>d.name===g.name).length&&this.allCategories.push(g)})}),this.allBlogTopics.forEach(r=>{r.tags.forEach(g=>{0===Array.from(this.allTags.values()).filter(d=>d.name===g.name).length&&this.allTags.push(g)})})})}ngOnInit(){this.sendResumeSubMenus(),this.blogService.pulltopicsData()}ngOnDestroy(){this.topicsDataSubscription.unsubscribe()}sendResumeSubMenus(){this.controlerService.pullSubMenus([])}buildFeature(e){let i=[];e.categories.forEach(c=>{i.push({name:c,color:this.getTagColor(c,this.seedCategory)})});let a=[];return e.tags.forEach(c=>{a.push({name:c,color:this.getTagColor(c,this.seedTag)})}),{title:e.title,image_url:e.image,content_url:e.url,categories:i,tags:a,type:"website",description:e.resume}}getTagColor(e,i){return(0,_.u_)(e,i)}showHideLegend(){this.isLegendDisplayed=!this.isLegendDisplayed}resetContent(){this.selectedblogTopics=this.allBlogTopics,this.mainService.scrollToTopAction()}selectContentByCategory(e){let i=this.allBlogTopics.filter(a=>1===Array.from(a.categories.values()).filter(l=>l.name===e).length);this.currentCategory=e,this.selectedblogTopics=i,this.mainService.scrollToTopAction()}selectContentByTag(e){let i=this.allBlogTopics.filter(a=>1===Array.from(a.tags.values()).filter(l=>l.name===e).length);this.currentTag=e,this.selectedblogTopics=i,this.mainService.scrollToTopAction()}displayContentRegardingDeviceScreen(){0===window.screen.orientation.angle&&window.screen.height<=y.OM&&(this.isLegendDisplayed=!1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v),t.Y36(b.J),t.Y36(u.gz),t.Y36(B.Dx),t.Y36(F.L))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-app-layout"]],hostBindings:function(e,i){1&e&&t.NdJ("orientationchange",function(c){return i.displayContentRegardingDeviceScreen(c)},!1,t.Jf7)},decls:3,vars:1,consts:[["id","blogHome","class","gallery",4,"ngIf"],["controler",""],["id","blogHome",1,"gallery"],["columnNb","4","featuresHeaderClass","text-bg-dark",3,"features"],["descriptionTemplate",""],["classes","position-sticky"],["controlersTemplate",""],[1,"body-generic-badges","mt-2"],["class","body-text small",4,"ngIf"],[1,"body-text","small"],[1,"fw-bold"],[3,"customBgColor",4,"ngFor","ngForOf"],[3,"customBgColor"],[4,"ngTemplateOutlet"],["classes","btn-sm btn-secondary",3,"icon","click"],[3,"classes","icon","iconNgStyle","click",4,"ngFor","ngForOf"],[3,"classes","icon","iconNgStyle","click"]],template:function(e,i){1&e&&(t.YNc(0,H,7,2,"div",0),t.YNc(1,R,10,3,"ng-template",null,1,t.W1O)),2&e&&t.Q6J("ngIf",i.selectedblogTopics.length>0)},dependencies:[p.sg,p.O5,p.tP,A.A,Z.d,L.C,S.v,J.H,N.b],data:{animation:[T.Ae]}}),o})(),data:{title:"Blog",page:"blog"}}];let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(j),u.Bz]}),o})();var z=n(2216),G=n(4586),W=n(739),K=n(7157);let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[v],imports:[p.ez,w,G.Dt,z.uH,W.j,K.p]}),o})()}}]);