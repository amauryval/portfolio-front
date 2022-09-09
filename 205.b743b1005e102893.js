"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[205],{205:(He,z,l)=>{l.r(z),l.d(z,{MapActivitiesModule:()=>Qe});var x=l(9808),I=l(9444),N=l(9560),K=l(4004),Z=l(3171),U=l(7053),G=l(5947),M=l(187),q=l(3324),ee=l(8313),te=l(3620),ie=l(483),ne=l(8377),F=l(1274),oe=l(6527),c=l(9255),h=l(8610),g=l(6177),C=l(109),S=l(949),D=l(5044),T=l(6785);const v="activities",A="travel",P="legendActivity",J="slider-bar",b="white",le=new S.Z({radius:0,fill:new D.Z({color:g.Cm}),stroke:new T.Z({color:b,width:2})}),ce=new S.Z({radius:0,fill:new D.Z({color:g.bj}),stroke:new T.Z({color:b,width:2})}),de=new S.Z({radius:0,fill:new D.Z({color:g.C1}),stroke:new T.Z({color:b,width:2})});function j(i){let r;return r="job"===i.type?le.clone():"education"===i.type?ce.clone():de.clone(),r.setRadius(2*i.months),new C.ZP({image:r})}function $(i){return new C.ZP({image:new S.Z({radius:i,fill:new D.Z({color:"rgba(255, 215, 0, 0.6)"}),stroke:new T.Z({color:"black",width:2})})})}const Y="black",B="yellow",ye=new C.ZP({stroke:new T.Z({width:4,color:"black"})}),xe=new C.ZP({image:new S.Z({radius:2,fill:new D.Z({color:"black"}),stroke:new T.Z({color:Y,width:1})})}),Q=new C.ZP({image:new S.Z({radius:7,fill:new D.Z({color:B}),stroke:new T.Z({color:Y,width:3})})}),V=i=>"route"===i?ye:"limit"===i?xe:Q;function _(i,r,t,n){return i.getLayers().getArray().filter(p=>p.get("name")===r)[0].getSource().getFeatures().filter(p=>p.get(n)===t)[0]}var e=l(5e3),W=l(9947),w=l(7579),Te=l(520);let E=(()=>{class i{constructor(t){this.http=t,this.apiUrlActivitiesGeoData=h.JW+"activities_geodata",this.ErrorapiUrlActivitiesGeoDataApiFound=new w.x,this.activitiesGeoData=new w.x,this.dataToMap=new w.x,this.dateNotified=new w.x,this.timelineBuild=new w.x,this.activitiesGeoDataToMap=new w.x,this.tripsGeoDataToMap=new w.x}pullActivitiesGeoData(){this.http.get(this.apiUrlActivitiesGeoData).subscribe({complete:()=>{},error:t=>{this.ErrorapiUrlActivitiesGeoDataApiFound.next(t.error.message)},next:t=>{this.activitiesGeoData.next(t)}})}pullDataToMap(t){this.dataToMap.next(t)}pullActivitiesGeoDataToMap(t){this.activitiesGeoDataToMap.next(t)}pullTripsGeoDataToMap(t){this.tripsGeoDataToMap.next(t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Te.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var we=l(2313),Se=l(3686),De=l(6423);function be(i,r){if(1&i&&(e.O4$(),e._UZ(0,"circle")),2&i){const t=r.$implicit,n=e.oxw();e.Tol(t.class),e.uIk("r",n.activityTypesLegendData.circleR)("cx",n.activityTypesLegendData.circleCxPos)("cy",t.cy)("fill",t.color)("stroke",t.strokeColor)}}function Le(i,r){if(1&i&&(e.O4$(),e.TgZ(0,"text"),e._uU(1),e.qZA()),2&i){const t=r.$implicit,n=e.oxw();e.Tol(t.class+" label"),e.uIk("x",n.activityTypesLegendData.textXPos)("y",t.cy)("font-size",n.fontSize),e.xp6(1),e.hij("",t.label," ")}}function Ze(i,r){if(1&i&&(e.O4$(),e._UZ(0,"circle",8)),2&i){const t=r.$implicit,n=e.oxw();e.uIk("r",t)("cx",n.activityMonthLegendData.circleCxPos)("cy",t)}}function Ce(i,r){if(1&i&&(e.O4$(),e.TgZ(0,"text",9),e._uU(1),e.qZA()),2&i){const t=r.$implicit,n=e.oxw();e.uIk("x",n.activityMonthLegendData.textXPos)("y",2*t)("font-size",n.fontSize),e.xp6(1),e.hij("",t," mois ")}}function ke(i,r){if(1&i&&(e.O4$(),e._UZ(0,"line",10)),2&i){const t=r.$implicit;e.uIk("y1",2*t+2)("y2",2*t+2)}}function Me(i,r){if(1&i&&(e.O4$(),e._UZ(0,"line")),2&i){const t=r.$implicit;e.Tol(t.classLine),e.uIk("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("strokeColor",t.strokeColor)}}function Ae(i,r){if(1&i&&(e.O4$(),e._UZ(0,"circle")),2&i){const t=r.$implicit;e.Tol(t.classMarker),e.uIk("r",t.r)("cx",t.y2/2)("cy",t.y2/2)("color",t.circleColor)("strokeColor",t.strokeColor)}}function Pe(i,r){if(1&i&&(e.O4$(),e._UZ(0,"text")),2&i){const t=r.$implicit,n=e.oxw();e.uIk("x",t.y2/2)("y",t.y2/2)("font-size",n.movesLineLegendData.markerFontSize)}}function _e(i,r){if(1&i&&(e.O4$(),e.TgZ(0,"text",9),e._uU(1),e.qZA()),2&i){const t=r.$implicit,n=e.oxw();e.uIk("x",n.movesLineLegendData.textXPos)("y",t.y2/2)("font-size",n.fontSize),e.xp6(1),e.hij("",t.label," ")}}let Ie=(()=>{class i{constructor(){this.sliderBarId=J,this.legendActivitiesId=P,this.widthLegendElement=200,this.heightLegendElement=140,this.heightMoveLegendElement=60,this.fontSize="19px",this.activityMonthLegendData={circleMonthR:[40,20,10],circleCxPos:50,textXPos:120},this.activityTypesLegendData={circleR:18,circleCxPos:20,textXPos:50,circleJobs:[{cy:25,class:"education",label:"Formations",color:g.bj,strokeColor:b},{cy:70,class:"job",label:"Entreprises",color:g.Cm,strokeColor:b},{cy:115,class:"volunteer",label:"B\xe9n\xe9volat",color:g.C1,strokeColor:b}]},this.movesLineLegendData={textXPos:50,markerFontSize:"12px",moves:[{x1:0,x2:45,y1:0,y2:45,r:12,classLine:"train-line",classMarker:"train-marker",classMarkerText:"train-marker-text",label:"Train",circleColor:B,strokeColor:Y}]}}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-theme-legend"]],decls:22,vars:13,consts:[["id","theme-legend",1,"d-flex","flex-row","py-2","justify-content-around"],[1,"d-flex","flex-column","mx-2"],[3,"id"],[3,"class",4,"ngFor","ngForOf"],["class","activity-months",4,"ngFor","ngForOf"],["class","label",4,"ngFor","ngForOf"],["x1","50","x2","115","class","line-dot",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"activity-months"],[1,"label"],["x1","50","x2","115",1,"line-dot"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h6"),e._uU(3,"Activit\xe9s"),e.qZA(),e.O4$(),e.TgZ(4,"svg",2),e.YNc(5,be,1,7,"circle",3),e.YNc(6,Le,2,6,"text",3),e.qZA()(),e.kcU(),e.TgZ(7,"div",1)(8,"h6"),e._uU(9,"Dur\xe9e"),e.qZA(),e.O4$(),e.TgZ(10,"svg"),e.YNc(11,Ze,1,3,"circle",4),e.YNc(12,Ce,2,4,"text",5),e.YNc(13,ke,1,2,"line",6),e.qZA()(),e.kcU(),e.TgZ(14,"div",1)(15,"h6"),e._uU(16,"D\xe9placements"),e.qZA(),e.O4$(),e.TgZ(17,"svg"),e.YNc(18,Me,1,7,"line",3),e.YNc(19,Ae,1,7,"circle",3),e.YNc(20,Pe,1,3,"text",7),e.YNc(21,_e,2,4,"text",5),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("id",n.legendActivitiesId),e.uIk("viewBox","0 0 "+n.widthLegendElement+" "+n.heightLegendElement),e.xp6(1),e.Q6J("ngForOf",n.activityTypesLegendData.circleJobs),e.xp6(1),e.Q6J("ngForOf",n.activityTypesLegendData.circleJobs),e.xp6(4),e.uIk("viewBox","0 0 "+n.widthLegendElement+" "+n.heightLegendElement),e.xp6(1),e.Q6J("ngForOf",n.activityMonthLegendData.circleMonthR),e.xp6(1),e.Q6J("ngForOf",n.activityMonthLegendData.circleMonthR),e.xp6(1),e.Q6J("ngForOf",n.activityMonthLegendData.circleMonthR),e.xp6(4),e.uIk("viewBox","0 0 "+n.widthLegendElement+" "+n.heightMoveLegendElement),e.xp6(1),e.Q6J("ngForOf",n.movesLineLegendData.moves),e.xp6(1),e.Q6J("ngForOf",n.movesLineLegendData.moves),e.xp6(1),e.Q6J("ngForOf",n.movesLineLegendData.moves),e.xp6(1),e.Q6J("ngForOf",n.movesLineLegendData.moves))},directives:[x.sg],styles:[".label[_ngcontent-%COMP%]{text-anchor:start;dominant-baseline:middle}svg[_ngcontent-%COMP%]{width:9em}@media (max-width: 576px){svg[_ngcontent-%COMP%]{width:6em}}"]}),i})(),Ne=(()=>{class i{constructor(t,n){this.dataService=t,this.mapService=n,this.backwardIcon=h.Gq,this.forwardIcon=h.cn,this.sliderBarId="#"+J,this.margin={top:10,right:15,bottom:0,left:15},this.width=600,this.height=90,this.fontSize="14px",this.sliderNodesSize=5,this.endDate=h.cQ,this.currentYear=h.VK,this.selectedDatePosition=0,this.maxDatePosition=this.width-this.margin.left-this.margin.right,this.currentCountNodes=0,this.mapSubscription=this.mapService.map.subscribe(s=>{this.map=s}),this.pullGeoDataSubscription=this.dataService.activitiesGeoData.subscribe(s=>{this.geoTripsData=s.trips_data,this.geoActivitiesData=s.activities_geojson;const o=new Date(s.start_date);o.setMonth(o.getMonth()-1),this.startDate=o,this.buildTimeline(String(this.currentYear))})}ngOnInit(){this.dataService.pullActivitiesGeoData()}ngOnDestroy(){this.pullGeoDataSubscription.unsubscribe(),this.mapSubscription.unsubscribe()}parseTime(t){return c.Z1g("%Y-%m-%d")(t)}formatDate(t){return c.i$Z("%b %Y")(t)}formatDateToYearString(t){return c.i$Z("%Y")(t)}formatDateToString(t){return c.i$Z("%Y-%m-%d")(t)}startTimeLine(){const t=c.Ys("#play-button");"Pause"===t.html()?(clearInterval(this.timer),t.text("Continue")):(t.html(),this.timer=setInterval(this.step.bind(this),100),t.html("Pause"))}resetTimeLine(){c.Ys("#play-button").html("Start"),this.sliderDate=this.startDate,this.update(this.startDate),this.selectedDatePosition=0,clearInterval(this.timer)}forwardTimeLine(){c.Ys("#play-button").html("Play"),this.sliderDate=this.startDate,this.update(this.endDate),this.selectedDatePosition=0,clearInterval(this.timer)}updateTrips(t){let n=[];this.geoTripsData.forEach(s=>{const d=s.end_date,a=this.parseTime(s.start_date),p=this.parseTime(d);null!==a&&null!==p&&t>=a&&t<p&&n.push(s)}),this.dataService.pullTripsGeoDataToMap(1===n.length?n:[])}update(t){this.updateTrips(t);const n=this.geoActivitiesData.features.filter(s=>{const o=this.parseTime(s.properties.start_date);return null!==o&&o>=this.startDate&&o<t});n.length!==this.currentCountNodes&&(this.dataService.pullActivitiesGeoDataToMap(n),this.displaySliderNodes(n)),this.currentCountNodes=n.length,c.Ys("#trace").attr("x2",this.dateRange(t)),c.Ys("#handle").attr("cx",this.dateRange(t)),this.sliderDate=t}step(){this.update(this.dateRange.invert(this.selectedDatePosition)),this.selectedDatePosition=this.selectedDatePosition+this.maxDatePosition/151,this.selectedDatePosition>this.maxDatePosition&&(this.selectedDatePosition=0,clearInterval(this.timer),c.Ys("#play-button").text("Play"))}_initDateRange(){this.dateRange=c.Xf().domain([this.startDate,this.endDate]).range([0,this.maxDatePosition]).clamp(!0)}buildTimeline(t){const n=c.Ys(this.sliderBarId),s=c.Ys("#play-button");this._initDateRange();const o=n.append("g").attr("class","slider-bar").attr("transform","translate("+this.margin.left+","+this.height/2+")");o.append("line").attr("class","track").attr("x1",this.dateRange.range()[0]).attr("x2",this.dateRange.range()[1]).select((m,u,L)=>L[u].parentNode.appendChild(L[u].cloneNode(!0))).attr("class","track-inset").select((m,u,L)=>L[u].parentNode.appendChild(L[u].cloneNode(!0))).attr("class","track-overlay").call(c.ohM().on("drag start",m=>{s.text("Pause"),this.selectedDatePosition=m.x,this.update(this.dateRange.invert(this.selectedDatePosition)),c.Ys("#slider-bar .events").selectAll("circle").style("pointer-events","none")}).on("end",()=>{c.Ys("#slider-bar .events").selectAll("circle").style("pointer-events","all");const m=this.dateRange.invert(this.selectedDatePosition).toTimeString();m===this.endDate.toTimeString()||m===this.startDate.toTimeString()?s.text("Play"):s.text("Continue")})),o.insert("g",".track-overlay").attr("class","ticks").attr("transform","translate(0,21)").selectAll("text").data(this.dateRange.ticks(10)).enter().append("text").attr("x",this.dateRange).attr("y",0).style("font-size",this.fontSize).attr("text-anchor","middle").text(m=>this.formatDateToYearString(m)),o.insert("g",".track-overlay").attr("class","ticks-line").attr("transform","translate(0,-6)").selectAll("line").data(this.dateRange.ticks(10)).enter().append("line").attr("x1",this.dateRange).attr("x2",this.dateRange).attr("y1",0).attr("y2",12).style("stroke","grey").style("stroke-width","2px"),o.insert("g",".track-overlay").attr("class","trace-events").selectAll("circle").data(this.geoActivitiesData.features).enter().append("circle").attr("class",m=>{const u=this.parseTime(m.properties.start_date);return null!==u&&u>=this.startDate?"trace":""}).attr("r",m=>{const u=this.parseTime(m.properties.start_date);return null!==u&&u>=this.startDate?4:2}).attr("cx",m=>{const u=this.parseTime(m.properties.start_date);return null===u?"":u>=this.startDate?this.dateRange(u):void 0}),o.insert("line",".track-overlay").attr("id","trace").attr("x1",this.dateRange(this.startDate)),o.insert("circle",".track-overlay").attr("id","handle").attr("r",10),o.append("g").attr("class","events"),this.sliderDate=this.endDate,this.update(this.endDate)}displaySliderNodes(t){const n=c.Ys("#slider-bar .events").selectAll("circle").data(t,s=>s.properties.id);n.enter().append("circle").attr("id",s=>"location_"+s.properties.id).attr("class",s=>{const o=c.td_("#"+P+" circle."+s.properties.type);return o.size()>0&&o.classed("disabled")?"invisible activityPoint "+s.properties.type:"activityPoint "+s.properties.type}).style("fill",s=>"job"===s.properties.type?g.Cm:"education"===s.properties.type?g.bj:"volunteer"===s.properties.type?g.C1:g.Cm).attr("r",this.sliderNodesSize).attr("cursor","pointer").attr("cx",s=>this.dateRange(this.parseTime(s.properties.start_date))).on("click",(s,o)=>{const a=_(this.map,v,o.properties.id,"id").getGeometry();void 0!==a&&this.mapService.zoomToExtent(a.getExtent(),13)}).on("mouseover",(s,o)=>{this.interactionWithEventNode(s.currentTarget,o),c.Ys("#popup-feature-"+o.properties.id).style("display","block").style("right","1em").style("top","5em");const d=_(this.map,v,o.properties.id,"id");d.setStyle($(d.get("radius")))}).on("mouseout",(s,o)=>{this.interactionWithEventNode(s.currentTarget,o),c.Ys("#popup-feature-"+o.properties.id).style("display","none").style("right","unset").style("top","unset"),_(this.map,v,o.properties.id,"id").setStyle(j(o.properties))}),n.exit().remove()}interactionWithEventNode(t,n){const s=c.Ys(t);s.classed("selected",!s.classed("selected"));const o=c.Ys("#"+P+" circle."+n.properties.type);o.classed("selected",!o.classed("selected"))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(E),e.Y36(W.S))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-time-legend"]],inputs:{currentActivityIdSelected:"currentActivityIdSelected",map:"map"},decls:17,vars:7,consts:[["id","theme-legend",1,"d-flex","flex-column","flex-xxl-row","mt-auto","py-2","justify-content-center","align-items-center"],[1,""],["id","slider-bar"],[1,"text-center","px-5"],[1,"d-flex","flex-column","justify-content-center"],["id","slider-value"],[1,"d-flex","flex-row"],["id","start-button","role","button",1,"btn","btn-dark",3,"click"],[3,"icon"],["id","play-button","role","button",1,"btn","btn-dark","mx-2",3,"click"],["id","end-button","role","button",1,"btn","btn-dark",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h6"),e._uU(3,"Barre Temporelle"),e.qZA(),e.O4$(),e._UZ(4,"svg",2),e.qZA(),e.kcU(),e.TgZ(5,"div",3)(6,"div",4)(7,"h5",5),e._uU(8),e.ALo(9,"date"),e.qZA(),e.TgZ(10,"div",6)(11,"a",7),e.NdJ("click",function(){return n.resetTimeLine()}),e._UZ(12,"fa-icon",8),e.qZA(),e.TgZ(13,"a",9),e.NdJ("click",function(){return n.startTimeLine()}),e._uU(14,"Play"),e.qZA(),e.TgZ(15,"a",10),e.NdJ("click",function(){return n.forwardTimeLine()}),e._UZ(16,"fa-icon",8),e.qZA()()()()()),2&t&&(e.xp6(4),e.uIk("viewBox","0 0 "+n.width+" "+n.height),e.xp6(4),e.Oqu(e.xi3(9,4,n.sliderDate,"MMMM y")),e.xp6(4),e.Q6J("icon",n.backwardIcon),e.xp6(4),e.Q6J("icon",n.forwardIcon))},directives:[I.BN],pipes:[x.uU],styles:[".events circle{stroke-width:1px;opacity:1;stroke:#f8f8ff}.trace-events circle.trace{fill:#686868;stroke:#f8f8ff;stroke-width:3px;stroke-opacity:1}.ticks{font-size:10px}.track,.track-inset,.track-overlay{stroke-linecap:round}.track{stroke:#000;stroke-opacity:.3;stroke-width:13px}.track-inset{stroke:#dcdcdc;stroke-width:11px}.track-overlay{pointer-events:stroke;stroke-width:50px;stroke:transparent;cursor:pointer}#handle{fill:#fff;stroke:#000;stroke-opacity:.5;stroke-width:1.25px}svg #trace{stroke:#6c6c6c;stroke-width:4}#play-button{width:90px}circle.preselected{stroke:#000!important;stroke-width:2px!important}#slider-bar{width:33em}@media (max-width: 576px){#slider-bar{width:20em}}\n"],encapsulation:2}),i})();function Fe(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().zoomOnData()}),e._UZ(1,"fa-icon",7),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.centerIcon)}}function Oe(i,r){1&i&&e.GkF(0)}function Ye(i,r){if(1&i&&(e.TgZ(0,"div",21),e._UZ(1,"img",22),e.qZA()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("src",n.apiImgUrl+t.properties.img_activity,e.LSH)}}function Ee(i,r){1&i&&e._UZ(0,"div")}function Re(i,r){if(1&i&&(e.TgZ(0,"div",16),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.AsE("Du ",e.xi3(2,2,t.properties.start_date,"MM-yyyy")," au ",e.xi3(3,5,t.properties.end_date,"MM-yyyy"),"")}}function ze(i,r){if(1&i&&(e.TgZ(0,"div",16),e._uU(1),e.ALo(2,"date"),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.hij("Du ",e.xi3(2,1,t.properties.start_date,"MM-yyyy")," \xe0 aujourd'hui")}}function Ue(i,r){if(1&i&&(e.TgZ(0,"div",9)(1,"div",10)(2,"div",11)(3,"h5",12),e._uU(4),e.qZA()(),e.TgZ(5,"div",13),e.YNc(6,Ye,2,1,"div",14),e.TgZ(7,"div",15)(8,"h6",12),e._uU(9),e.qZA(),e.TgZ(10,"span",16),e._UZ(11,"fa-icon",17),e._uU(12),e.qZA(),e.YNc(13,Ee,1,0,"div",18),e.YNc(14,Re,4,8,"ng-template",null,19,e.W1O),e.YNc(16,ze,3,4,"ng-template",null,20,e.W1O),e.qZA()()()()),2&i){const t=r.$implicit,n=e.MAs(15),s=e.MAs(17),o=e.oxw(2);e.Q6J("id","popup-feature-"+t.properties.id),e.xp6(4),e.Oqu(t.properties.title),e.xp6(2),e.Q6J("ngIf","null"!==t.properties.img_activity),e.xp6(3),e.Oqu(t.properties.name),e.xp6(2),e.Q6J("icon",o.locationIcon),e.xp6(1),e.hij(" ",t.properties.location," "),e.xp6(1),e.Q6J("ngIf","InProgress"===t.properties.status)("ngIfThen",s)("ngIfElse",n)}}function Ge(i,r){if(1&i&&e.YNc(0,Ue,18,9,"div",8),2&i){const t=e.oxw();e.Q6J("ngForOf",t.geoFeaturesData)}}const Je=function(){return{}},je=[{path:"",component:(()=>{class i{constructor(t,n,s,o,d){this.mapService=t,this.dataService=n,this.activatedRoute=s,this.titleService=o,this.controlerService=d,this.imageProfile=h.tz,this.fragment=null,this.experiencesRoute=h.I_.route,this.educationRoute=h.QD.route,this.travelId=null,this.isLegendDisplayed=!0,this.defaultActivitieLayerZoom=9,this.apiImgUrl=h.uV,this.locationIcon=h.pk,this.tagIcon=h.yK,this.centerIcon=h.HI,this.helpIcon=h.mv,this.helpPopup="Voici une cartographie spatio-temporelles de mes exp\xe9riences",this.popupWidth=330,this.popupHeight=190,this.zoomEventSubscription=this.mapService.zoomEvent.subscribe(a=>{this.mapService.zoomToLayerName(v,this.defaultActivitieLayerZoom)}),this.newCoordsSubscription=this.mapService.newCoords.subscribe(a=>{this.popupMoving(a[1])}),this.mapSubscription=this.mapService.map.subscribe(a=>{this.map=a}),this.pullActivitiesGeoDataToMapSubscription=this.dataService.activitiesGeoDataToMap.pipe((0,K.U)((a,p)=>[a,p])).subscribe(a=>{if(this.mapService.removeLayerByName(v),this.geoFeaturesData=a[0],this.buildActivityLayer(this.geoFeaturesData),null!==this.fragment){const f=_(this.map,v,this.fragment,"id").getGeometry();void 0!==f&&this.mapService.zoomToExtent(f.getExtent(),13)}else 0===a[1]&&this.mapService.zoomToLayerName(v,this.defaultActivitieLayerZoom)}),this.pullTripsGeoDataToMapSubscription=this.dataService.tripsGeoDataToMap.subscribe(a=>{1===a.length&&this.travelId!==a[0].name&&(this.mapService.removeLayerByName(A),this.travelId=a[0].name,this.buildTravelLayer(a[0])),0===a.length&&(this.travelId=null,this.mapService.removeLayerByName(A))}),this.routeSubscription=this.activatedRoute.fragment.subscribe(a=>{this.fragment=null===a?null:a})}ngOnInit(){this.mapService.changeMapInteractionStatus(!0),this.mapService.getMap(),this.sendResumeSubMenus(),this.zoomInitDone=!1,this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight}ngOnDestroy(){this.mapSubscription.unsubscribe(),this.pullActivitiesGeoDataToMapSubscription.unsubscribe(),this.pullTripsGeoDataToMapSubscription.unsubscribe(),this.zoomEventSubscription.unsubscribe(),this.routeSubscription.unsubscribe(),this.newCoordsSubscription.unsubscribe(),this.mapService.removeLayerByName(v),this.mapService.removeLayerByName(A),this.mapService.changeMapInteractionStatus(!1),this.mapService.resetMapView()}zoomOnData(){this.mapService.sendZoomAction()}sendResumeSubMenus(){this.controlerService.pullSubMenus([]),this.controlerService.pullTitlePage(this.activatedRoute.snapshot.data.title),this.titleService.setTitle(this.activatedRoute.snapshot.data.title)}showHideLegend(){this.isLegendDisplayed=!this.isLegendDisplayed}buildLayerFromFeatures(t,n,s){let o=new G.Z({features:[]}),d=new U.Z({source:o});return n.forEach((a,p)=>{let f=new Z.Z({geometry:new M.Z(a.geometry.coordinates).transform("EPSG:4326","EPSG:3857"),id:a.properties.id,type:a.properties.type,name:a.properties.name,radius:2*a.properties.months});f.setStyle(s(a.properties)),o.addFeature(f)}),d.set("name",t),d}buildActivityLayer(t){let n=this.buildLayerFromFeatures(v,t,j);this.map.addLayer(n);let s=new q.Z({condition:ee.MJ,multi:!1,layers:[n],style:o=>$(o.get("radius"))});s.on("select",o=>{const d=o.selected,a=o.deselected;if(1===a.length){let p=a[0];this.currentFeatureSelectedId=null,this.mapService.unsetMapEvent("mapCoords"),c.Ys("#popup-feature-"+p.get("id")).style("display","none").style("right","unset").style("top","unset").style("left","unset"),this._handleActivityCircleOnLegend(p)}if(1===d.length){let p=d[0];this.currentFeatureSelectedId=p.get("id"),this.mapService.setMapEvent("mapCoords"),c.Ys("#popup-feature-"+p.get("id")).style("display","block").style("z-index","1"),this._handleActivityCircleOnLegend(p)}}),this.map.addInteraction(s)}_handleActivityCircleOnLegend(t){const n=c.Ys("#"+P+" circle."+t.get("type"));n.classed("selected",!n.classed("selected"));const s=c.Ys("circle#location_"+t.get("id"));s.classed("selected",!s.classed("selected"))}buildTravelLayer(t){let n=[];t.geojson_data.forEach(y=>{n.push((0,F.vs)(y.geometry.coordinates,"EPSG:4326","EPSG:3857"))});let s=new oe.Z(n);var o=new Z.Z({type:"route",geometry:s});const d=new Z.Z({type:"limit",geometry:new M.Z(s.getFirstCoordinate())}),a=new Z.Z({type:"limit",geometry:new M.Z(s.getLastCoordinate())}),p=new M.Z(s.getFirstCoordinate()),f=new Z.Z({type:"movingNode",geometry:p});let m=new G.Z({features:[]}),u=new U.Z({source:m});[o,f,d,a].forEach((y,R)=>{y.setStyle(V(y.get("type"))),m.addFeature(y)}),u.set("name",A),this.map.addLayer(u);let H=Date.now(),k=0;u.on("postrender",y=>{const R=y.frameState.time;k=(k+100*(R-H)/1e6)%2,H=R;const We=s.getCoordinateAt(k>1?2-k:k);p.setCoordinates(We);const X=function se(i){if(!(i.context instanceof CanvasRenderingContext2D))throw new Error("Only works for render events from Canvas 2D layers");var o,r=i.inversePixelTransform[0],t=i.frameState,n=(0,ie.Jp)(i.inversePixelTransform.slice(),t.coordinateToPixelTransform),s=(0,ne.se)(t.viewState.resolution,r),d=(0,F.Cs)();return d&&(o=(0,F.WO)(d,t.viewState.projection)),new te.Z(i.context,r,t.extent,n,t.viewState.rotation,s,o)}(y);X.setStyle(V("movingNode")),X.drawGeometry(p),this.map.render()})}popupMoving(t){c.Ys("#popup-feature-"+this.currentFeatureSelectedId).style("left",()=>t[0]+this.popupWidth+20>this.innerWidth?t[0]-this.popupWidth-15+"px":t[0]+15+"px").style("top",()=>t[1]+this.popupHeight+20>this.innerHeight?t[1]-this.popupHeight-15+"px":t[1]+15+"px")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(W.S),e.Y36(E),e.Y36(N.gz),e.Y36(we.Dx),e.Y36(Se.L))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-map-view"]],decls:9,vars:5,consts:[["classes","position-fixed"],["buttonsTemplate",""],[1,"d-flex","flex-column","flex-xl-row","justify-content-around","align-items-center"],[3,"currentActivityIdSelected","map"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["activitiesPopups",""],["title","Centrer","type","button","checked","","autocomplete","off",1,"btn","btn-sm","btn-warning","mx-1",3,"click"],[1,"",3,"icon"],["class","item card shadow map-popup",3,"id",4,"ngFor","ngForOf"],[1,"item","card","shadow","map-popup",3,"id"],[1,"card-body"],[1,"d-flex","flex-row","justify-content-around","mb-1"],[1,"fw-bolder","small"],[1,"d-flex","flex-row","justify-content-around"],["class","w-25 justify-content-around text-center",4,"ngIf"],[1,"my-auto"],[1,"small"],[1,"me-2","text-danger",3,"icon"],[4,"ngIf","ngIfThen","ngIfElse"],["pastJob",""],["currentJob",""],[1,"w-25","justify-content-around","text-center"],[1,"img-fluid","rounded","mx-auto","shadow","mini-img-thumbnail",3,"src"]],template:function(t,n){if(1&t&&(e.TgZ(0,"set-legend-container",0),e.YNc(1,Fe,2,1,"ng-template",null,1,e.W1O),e.TgZ(3,"div",2),e._UZ(4,"app-theme-legend")(5,"app-time-legend",3),e.qZA()(),e.YNc(6,Oe,1,0,"ng-container",4),e.YNc(7,Ge,1,1,"ng-template",null,5,e.W1O)),2&t){const s=e.MAs(8);e.xp6(5),e.Q6J("currentActivityIdSelected",n.fragment)("map",n.map),e.xp6(1),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.DdM(4,Je))}},directives:[De.b,I.BN,Ie,Ne,x.tP,x.sg,x.O5],pipes:[x.uU],styles:['.map-popup{position:fixed;display:none;background-color:#f8f8ff;max-width:400px}#map-title{background-color:#f1f1f1c9!important;padding:10px;border-bottom-right-radius:25px;border-bottom-left-radius:25px}#map-title:after{left:-30px;border-top:30px solid salmon;border-left:30px solid transparent;z-index:-10}.mini-img-thumbnail{width:15vw}.train-line{stroke:#000;stroke-width:3px}.train-marker{fill:#ff0;stroke:#000;stroke-width:3px;color:#000}.train-marker-text{font-family:"Font Awesome 5 Free";font-weight:900;color:#000;text-anchor:middle;dominant-baseline:middle;pointer-events:none}\n'],encapsulation:2}),i})(),data:{title:"Carte des activit\xe9s",page:"map-activities"},outlet:"map-activities"}];let $e=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[N.Bz.forChild(je)],N.Bz]}),i})();var Be=l(7157);let Qe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[E],imports:[[x.ez,$e,I.uH,Be.p]]}),i})()}}]);