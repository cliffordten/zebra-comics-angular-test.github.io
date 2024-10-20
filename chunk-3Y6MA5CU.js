import{$ as L,Ba as y,Ca as _,Ea as M,Ma as A,N as v,Na as S,Q as c,S as p,T as m,Ua as j,Va as z,X as V,a as w,ca as B,d as x,ea as s,fa as a,ib as O,ja as d,o as f,ra as e,sb as P,ta as i,tb as D}from"./chunk-EICPZ4M7.js";var _1=new v("Ng Glyph Config");var A1=new v("NgGlyphsToken");function X(o){return o==null?"":/^\d+$/.test(o)?`${o}px`:o}var J=new v("Ng Icon Pre Processor"),Y=new v("Ng Icon Post Processor");function t1(){return c(J,{optional:!0})??(o=>o)}function o1(){return c(Y,{optional:!0})??(()=>{})}var l1=new v("Ng Icon Logger"),C=class{log(r){console.log(r)}warn(r){console.warn(r)}error(r){console.error(r)}};function r1(){return c(l1,{optional:!0})??new C}var s1=new v("Ng Icon Config"),h1={size:"1em"};function c1(){return c(s1,{optional:!0})??h1}var v1=new v("Ng Icon Loader Token");var n1=new v("Ng Icon Cache Token");function e1(){return c(v1,{optional:!0})}function a1(){return c(n1,{optional:!0})}function b(o){return[{provide:k,useFactory:(r=c(k,{optional:!0,skipSelf:!0}))=>w(w({},r?.reduce((t,l)=>w(w({},t),l),{})),o),multi:!0}]}var k=new v("Icons Token");function i1(){return c(k,{optional:!0})??[]}function w1(o){return typeof o=="string"?Promise.resolve(o):f(o)?o.toPromise():o}function g1(o){return o.replace(/([^a-zA-Z0-9])+(.)?/g,(r,t,l)=>l?l.toUpperCase():"").replace(/[^a-zA-Z\d]/g,"").replace(/^([A-Z])/,r=>r.toLowerCase())}var F=(()=>{class o{constructor(){this.config=c1(),this.icons=i1(),this.loader=e1(),this.cache=a1(),this.preProcessor=t1(),this.postProcessor=o1(),this.injector=c(L),this.renderer=c(i),this.platform=c(d),this.elementRef=c(a),this.logger=r1(),this.name=s(),this.svg=s(),this.size=s(this.config.size,{transform:X}),this.strokeWidth=s(this.config.strokeWidth),this.color=s(this.config.color),O(()=>this.updateIcon())}ngOnDestroy(){this.svgElement=void 0}updateIcon(){return x(this,null,function*(){let t=this.name(),l=this.svg();if(l!==void 0){this.setSvg(l);return}if(t===void 0)return;let h=g1(t);for(let n of[...this.icons].reverse())if(n[h]){this.setSvg(n[h]);return}if(this.loader){let n=yield this.requestIconFromLoader(t);if(n!==null){this.setSvg(n);return}}this.logger.warn(`No icon named ${t} was found. You may need to import it using the withIcons function.`)})}setSvg(t){if(D(this.platform)){this.elementRef.nativeElement.innerHTML=t,this.elementRef.nativeElement.setAttribute("data-ng-icon-ssr","");return}if(this.elementRef.nativeElement.hasAttribute("data-ng-icon-ssr")&&(this.elementRef.nativeElement.removeAttribute("data-ng-icon-ssr"),this.svgElement=this.elementRef.nativeElement.querySelector("svg")??void 0,this.elementRef.nativeElement.innerHTML===t)||(this.svgElement&&this.renderer.removeChild(this.elementRef.nativeElement,this.svgElement),t===""))return;let l=this.renderer.createElement("template");this.renderer.setProperty(l,"innerHTML",this.preProcessor(t)),this.svgElement=l.content.firstElementChild,this.postProcessor(this.svgElement),this.renderer.appendChild(this.elementRef.nativeElement,this.svgElement)}requestIconFromLoader(t){return new Promise(l=>{V(this.injector,()=>x(this,null,function*(){if(this.cache){let g=this.cache.get(t);if(typeof g=="string"){l(g);return}if(g instanceof Promise){let $=yield g;l($);return}}let h=w1(this.loader(t));this.cache?.set(t,h);let n=yield h;this.cache?.set(t,n),l(n)}))})}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=p({type:o,selectors:[["ng-icon"]],hostVars:6,hostBindings:function(l,h){l&2&&_("--ng-icon__stroke-width",h.strokeWidth())("--ng-icon__size",h.size())("color",h.color())},inputs:{name:[1,"name"],svg:[1,"svg"],size:[1,"size"],strokeWidth:[1,"strokeWidth"],color:[1,"color"]},standalone:!0,features:[z],decls:0,vars:0,template:function(l,h){},styles:["[_nghost-%COMP%]{display:inline-block;width:var(--ng-icon__size, 1em);height:var(--ng-icon__size, 1em);line-height:initial;vertical-align:initial;overflow:hidden}[_nghost-%COMP%]     svg{width:inherit;height:inherit;vertical-align:inherit}"],changeDetection:0})}}return o})();var R='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"></path></svg>';var Z='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"></path></svg>';var T='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path></svg>';var E='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>';var q='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 32)"></path></svg>';var N='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><circle cx="256" cy="256" r="64"></circle><path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path></svg>';var I='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 32)"></path></svg>';var W='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"></path></svg>';var U='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 32)"></path></svg>';var G='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon" style="stroke-width:var(--ng-icon__stroke-width, 1.5)"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg>';var u=class o{constructor(r,t){this.el=r;this.renderer=t}scaleSize=s(1.4);scaleDuration=s(300);confettiCount=s(3);confettiDuration=s(1e3);onClick(){this.animateElement()}animateElement(){let r=this.el.nativeElement;this.renderer.setStyle(r,"transition",`transform ${this.scaleDuration()}ms ease-in-out`),this.renderer.setStyle(r,"transform",`scale(${this.scaleSize()})`),setTimeout(()=>{this.renderer.setStyle(r,"transform","scale(1)"),setTimeout(()=>{},this.scaleDuration())},this.scaleDuration())}static \u0275fac=function(t){return new(t||o)(e(a),e(i))};static \u0275dir=m({type:o,selectors:[["","clickAnimate",""]],hostBindings:function(t,l){t&1&&S("click",function(){return l.onClick()})},inputs:{scaleSize:[1,"scaleSize"],scaleDuration:[1,"scaleDuration"],confettiCount:[1,"confettiCount"],confettiDuration:[1,"confettiDuration"]},standalone:!0})};var K=class o{className=s();color=s();name=s.required();static \u0275fac=function(t){return new(t||o)};static \u0275cmp=p({type:o,selectors:[["app-icons"]],inputs:{className:[1,"className"],color:[1,"color"],name:[1,"name"]},standalone:!0,features:[j([],[b({matArrowForwardIos:Z,matArrowBackIos:R,ionEye:N,ionHeart:W,ionHeartOutline:I,ionBookmarkOutline:q,ionNotificationsOutline:U,heroArrowDownTray:G,matLaunch:E,matImportExport:T})]),z],decls:1,vars:4,consts:[["clickAnimate","",3,"name","color"]],template:function(t,l){t&1&&A(0,"ng-icon",0),t&2&&(M(l.className()),y("name",l.name())("color",l.color()))},dependencies:[F,u]})};var Q=class o{constructor(r,t,l,h){this.el=r;this.renderer=t;this.ngZone=l;this.isBrowser=P(h)}slideDistance=s("100%");slideDuration=s(1e3);observer=null;isBrowser;hasAnimated=!1;ngAfterViewInit(){this.isBrowser&&(this.initializeElement(),this.setupIntersectionObserver())}ngOnDestroy(){this.observer&&this.observer.disconnect()}initializeElement(){this.renderer.setStyle(this.el.nativeElement,"opacity","0"),this.renderer.setStyle(this.el.nativeElement,"transform",`translateX(-${this.slideDistance()})`),this.renderer.setStyle(this.el.nativeElement,"transition",`opacity ${this.slideDuration()}ms, transform ${this.slideDuration()}ms`)}setupIntersectionObserver(){let t={root:null,rootMargin:"0px",threshold:window.innerWidth<=768?0:.25};this.ngZone.runOutsideAngular(()=>{this.observer=new IntersectionObserver(l=>{l.forEach(h=>{console.log("Entry",h),h.isIntersecting&&!this.hasAnimated&&(this.ngZone.run(()=>this.animateElement()),this.observer?.unobserve(h.target),this.hasAnimated=!0)})},t),this.observer.observe(this.el.nativeElement)})}animateElement(){this.renderer.setStyle(this.el.nativeElement,"opacity","1"),this.renderer.setStyle(this.el.nativeElement,"transform","translateX(0)")}static \u0275fac=function(t){return new(t||o)(e(a),e(i),e(B),e(d))};static \u0275dir=m({type:o,selectors:[["","slideHorizontal",""]],inputs:{slideDistance:[1,"slideDistance"],slideDuration:[1,"slideDuration"]},standalone:!0})};export{K as a,Q as b};
