(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{4785:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Posts",function(){return r(4531)}])},5369:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n=r(3366),i=r(7462),s=r(7294),o=r(512),a=r(8027),l=r(8510),d=r(2908),u=r(5149),p=r(3390),c=r(4110),m=r(7172),h=r(6523);let x=["ownerState"],f=["variants"],v=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Z(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let g=(0,m.Z)(),y=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function b({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function _(e,t){let{ownerState:r}=t,s=(0,n.Z)(t,x),o="function"==typeof e?e((0,i.Z)({ownerState:r},s)):e;if(Array.isArray(o))return o.flatMap(e=>_(e,(0,i.Z)({ownerState:r},s)));if(o&&"object"==typeof o&&Array.isArray(o.variants)){let{variants:e=[]}=o,t=(0,n.Z)(o,f);return e.forEach(e=>{let n=!0;"function"==typeof e.props?n=e.props((0,i.Z)({ownerState:r},s,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&s[t]!==e.props[t]&&(n=!1)}),n&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,i.Z)({ownerState:r},s,r)):e.style))}),t}return o}let j=function(e={}){let{themeId:t,defaultTheme:r=g,rootShouldForwardProp:s=Z,slotShouldForwardProp:o=Z}=e,a=e=>(0,h.Z)((0,i.Z)({},e,{theme:b((0,i.Z)({},e,{defaultTheme:r,themeId:t}))}));return a.__mui_systemSx=!0,(e,l={})=>{var d;let u;(0,p.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:m,slot:h,skipVariantsResolver:x,skipSx:f,overridesResolver:g=(d=y(h))?(e,t)=>t[d]:null}=l,j=(0,n.Z)(l,v),w=void 0!==x?x:h&&"Root"!==h&&"root"!==h||!1,k=f||!1,S=Z;"Root"===h||"root"===h?S=s:h?S=o:"string"==typeof e&&e.charCodeAt(0)>96&&(S=void 0);let P=(0,p.default)(e,(0,i.Z)({shouldForwardProp:S,label:u},j)),A=e=>"function"==typeof e&&e.__emotion_real!==e||(0,c.P)(e)?n=>_(e,(0,i.Z)({},n,{theme:b({theme:n.theme,defaultTheme:r,themeId:t})})):e,R=(n,...s)=>{let o=A(n),l=s?s.map(A):[];m&&g&&l.push(e=>{let n=b((0,i.Z)({},e,{defaultTheme:r,themeId:t}));if(!n.components||!n.components[m]||!n.components[m].styleOverrides)return null;let s=n.components[m].styleOverrides,o={};return Object.entries(s).forEach(([t,r])=>{o[t]=_(r,(0,i.Z)({},e,{theme:n}))}),g(e,o)}),m&&!w&&l.push(e=>{var n;let s=b((0,i.Z)({},e,{defaultTheme:r,themeId:t}));return _({variants:null==s||null==(n=s.components)||null==(n=n[m])?void 0:n.variants},(0,i.Z)({},e,{theme:s}))}),k||l.push(a);let d=l.length-s.length;if(Array.isArray(n)&&d>0){let e=Array(d).fill("");(o=[...n,...e]).raw=[...n.raw,...e]}let u=P(o,...l);return e.muiName&&(u.muiName=e.muiName),u};return P.withConfig&&(R.withConfig=P.withConfig),R}}();var w=r(5893);let k=["className","component","disableGutters","fixed","maxWidth","classes"],S=(0,m.Z)(),P=j("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,d.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),A=e=>(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:S}),R=(e,t)=>{let{classes:r,fixed:n,disableGutters:i,maxWidth:s}=e,o={root:["root",s&&`maxWidth${(0,d.Z)(String(s))}`,n&&"fixed",i&&"disableGutters"]};return(0,l.Z)(o,e=>(0,a.ZP)(t,e),r)};var W=r(5228),C=r(9262),N=r(9145),E=function(e={}){let{createStyledComponent:t=P,useThemeProps:r=A,componentName:a="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}));return s.forwardRef(function(e,t){let s=r(e),{className:d,component:u="div",disableGutters:p=!1,fixed:c=!1,maxWidth:m="lg"}=s,h=(0,n.Z)(s,k),x=(0,i.Z)({},s,{component:u,disableGutters:p,fixed:c,maxWidth:m}),f=R(x,a);return(0,w.jsx)(l,(0,i.Z)({as:u,ownerState:x,className:(0,o.Z)(f.root,d),ref:t},h))})}({createStyledComponent:(0,C.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,W.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,N.Z)({props:e,name:"MuiContainer"})})},4531:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return p},default:function(){return c}});var n=r(5893);r(7294);var i=r(9008),s=r.n(i),o=r(5369),a=r(4466),l=r(3821),d=r(4246),u=e=>{let{data:t}=e;return(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("h1",{children:"Server-Side Rendered Page"}),(0,n.jsx)(a.ZP,{container:!0,spacing:3,children:t.map(e=>(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,n.jsxs)(l.Z,{sx:{height:"200px",overflowY:"auto",padding:"15px"},children:[(0,n.jsx)(d.Z,{variant:"h5",component:"div",children:e.name}),(0,n.jsx)(d.Z,{variant:"body2",color:"text.secondary",children:e.email}),(0,n.jsx)(d.Z,{variant:"body1",component:"p",children:e.body})]})},e.id))})]})},p=!0,c=e=>{let{data:t,error:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"About Posts"}),(0,n.jsx)("meta",{name:"description",content:"Explore ssr ,  detailed posts and comments fetched directly from an API. "}),(0,n.jsx)("meta",{name:"keywords",content:"posts, comments, real-time, social data, user interactions"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("meta",{property:"og:title",content:"About Posts"}),(0,n.jsx)("meta",{property:"og:description",content:"Detailed insight into user comments and interactions on our platform."}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"url_to_an_image_that_represents_the_page"})]}),r?(0,n.jsxs)("div",{children:["Error: ",r.message]}):(0,n.jsx)(u,{data:t})]})}}},function(e){e.O(0,[831,888,774,179],function(){return e(e.s=4785)}),_N_E=e.O()}]);