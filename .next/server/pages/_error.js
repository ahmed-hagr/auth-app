"use strict";(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7909:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>p,getServerSideProps:()=>m,getStaticPaths:()=>h,getStaticProps:()=>f,reportWebVitals:()=>g,routeModule:()=>_,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>y});var o=r(7093),a=r(5244),i=r(1323),l=r(2899),s=r.n(l),d=r(9413),u=r(6971),c=e([d]);d=(c.then?(await c)():c)[0];let p=(0,i.l)(u,"default"),f=(0,i.l)(u,"getStaticProps"),h=(0,i.l)(u,"getStaticPaths"),m=(0,i.l)(u,"getServerSideProps"),x=(0,i.l)(u,"config"),g=(0,i.l)(u,"reportWebVitals"),y=(0,i.l)(u,"unstable_getStaticProps"),b=(0,i.l)(u,"unstable_getStaticPaths"),P=(0,i.l)(u,"unstable_getStaticParams"),j=(0,i.l)(u,"unstable_getServerProps"),v=(0,i.l)(u,"unstable_getServerSideProps"),_=new o.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:d.default,Document:s()},userland:u});n()}catch(e){n(e)}})},6971:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(167),o=r(997),a=n._(r(6689)),i=n._(r(7828)),l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||l[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:d.error,children:[(0,o.jsx)(i.default,{children:(0,o.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:d.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,o.jsx)("div",{style:d.wrap,children:(0,o.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,o.jsx)(o.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=s,u.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5495:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},7828:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return c}});let n=r(167),o=r(8760),a=r(997),i=o._(r(6689)),l=n._(r(7215)),s=r(8039),d=r(1988),u=r(5495);function c(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1997);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let a=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,i.useContext)(s.AmpStateContext),n=(0,i.useContext)(d.HeadManagerContext);return(0,a.jsx)(l.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(6689),o=()=>{},a=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),a(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1997:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},7373:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>j});var o=r(997),a=r(6689),i=r.n(a),l=r(3882),s=r.n(l),d=r(1431),u=r.n(d),c=r(7163),p=r.n(c),f=r(7934),h=r.n(f),m=r(1664),x=r.n(m),g=r(3819),y=r.n(g),b=r(9915),P=e([b]);b=(P.then?(await P)():P)[0];let j=()=>{let e=b.default.get("token"),t={color:"#f1f1f1",textDecoration:" none"};return o.jsx(s(),{sx:{marginBottom:"30px !important"},position:"fixed",children:(0,o.jsxs)(u(),{children:[o.jsx(h(),{edge:"start",color:"inherit","aria-label":"menu"}),o.jsx(p(),{variant:"h6",style:{flexGrow:1},children:"My App"}),e?(0,o.jsxs)(i().Fragment,{children:[o.jsx(y(),{className:"btn-min",color:"secondary",children:o.jsx(x(),{style:t,href:"/",passHref:!0,children:o.jsx(p(),{variant:"button",color:"inherit",children:"Main"})})}),o.jsx(y(),{className:"btn-min",color:"inherit",children:o.jsx(x(),{style:t,href:"/Posts",passHref:!0,children:o.jsx(p(),{variant:"button",color:"success",children:"Posts"})})})]}):(0,o.jsxs)(i().Fragment,{children:[o.jsx(y(),{className:"btn-min",color:"inherit",children:o.jsx(x(),{style:t,href:"/Posts",passHref:!0,children:o.jsx(p(),{variant:"button",color:"success",children:"Posts"})})}),o.jsx(y(),{className:"btn-min",color:"inherit",children:o.jsx(x(),{style:t,href:"/login",passHref:!0,children:o.jsx(p(),{variant:"button",color:"success",children:"Login"})})})]})]})})};n()}catch(e){n(e)}})},9413:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>l});var o=r(997);r(6689);var a=r(7373),i=e([a]);a=(i.then?(await i)():i)[0];let l=function({Component:e,pageProps:t}){return e.getInitialProps||(()=>Promise.resolve({})),(0,o.jsxs)("div",{children:[o.jsx(a.Z,{}),o.jsx(e,{...t})]})};n()}catch(e){n(e)}})},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{e.exports=r(7093).vendored.contexts.HeadManagerContext},3882:e=>{e.exports=require("@mui/material/AppBar")},3819:e=>{e.exports=require("@mui/material/Button")},7934:e=>{e.exports=require("@mui/material/IconButton")},1431:e=>{e.exports=require("@mui/material/Toolbar")},7163:e=>{e.exports=require("@mui/material/Typography")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},9915:e=>{e.exports=import("js-cookie")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[117,899,664],()=>r(7909));module.exports=n})();