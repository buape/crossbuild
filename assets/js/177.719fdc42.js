(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[177],{686:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(698),s=n(9901),a=n(4517),c=n(5154),o=n(2171),i=n(8523);const l={anchorWithStickyNavbar:"anchorWithStickyNavbar_oqDS",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_va6o"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();if("h1"===t||!n)return s.createElement(t,(0,r.Z)({},u,{id:void 0}));const f=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return s.createElement(t,(0,r.Z)({},u,{className:(0,a.Z)("anchor",d?l.anchorWithHideOnScrollNavbar:l.anchorWithStickyNavbar,u.className),id:n}),u.children,s.createElement(i.default,{className:"hash-link",to:`#${n}`,"aria-label":f,title:f},"\u200b"))}},891:(e,t,n)=>{"use strict";n.d(t,{b:()=>c,k:()=>o});var r=n(9901),s=n(4602);const a=r.createContext(null);function c(e){let{children:t,content:n}=e;const s=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return r.createElement(a.Provider,{value:s},t)}function o(){const e=(0,r.useContext)(a);if(null===e)throw new s.i6("DocProvider");return e}},6671:(e,t,n)=>{"use strict";n.d(t,{F:()=>o});var r=n(9901),s=n(4602);const a={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){const[n,c]=(0,r.useState)(),o=(0,r.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,r.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=a);const c=(0,s.zX)(t),o=(0,s.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,o),()=>t.disconnect()}),[e,c,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function o(){const[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(!1),a=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");s(n)}),[a]);return c(a,i),(0,r.useEffect)((()=>{i()}),[e,i]),(0,r.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:o}}},9017:(e,t,n)=>{"use strict";n.d(t,{p:()=>a});var r=n(9445),s=n(2171);function a(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},8658:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});var r=n(9901),s=n(2171);function a(e){const t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>a(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function o(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){const t=(0,r.useRef)(void 0),n=o();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let s=t;s<=n;s+=1)r.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),l=c(i,{anchorTopOffset:n.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}},5215:(e,t,n)=>{"use strict";n.d(t,{QC:()=>m,Vo:()=>d,bc:()=>l,nZ:()=>f,nt:()=>u});var r=n(2613),s=n.n(r);const a=/title=(?<quote>["'])(?<title>.*?)\1/,c=/\{(?<range>[\d,-]+)\}/,o={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function i(e,t){const n=e.map((e=>{const{start:n,end:r}=o[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function l(e){return e?.match(a)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function f(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:l}=t;if(l&&c.test(l)){const e=l.match(c).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=s()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return i(["js","jsBlock"],t);case"jsx":case"tsx":return i(["js","jsBlock","jsx"],t);case"html":return i(["js","jsBlock","html"],t);case"python":case"py":case"bash":return i(["bash"],t);case"markdown":case"md":return i(["html","jsx","bash"],t);default:return i(Object.keys(o),t)}}(r,a),d=n.split("\n"),f=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),h=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let s=0;s<d.length;){const e=d[s].match(u);if(!e){s+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?f[m[t]].range+=`${s},`:h[t]?f[h[t]].start=s:p[t]&&(f[p[t]].range+=`${f[p[t]].start}-${s-1},`),d.splice(s,1)}n=d.join("\n");const v={};return Object.entries(f).forEach((e=>{let[t,{range:n}]=e;s()(n).forEach((e=>{v[e]??=[],v[e].push(t)}))})),{lineClassNames:v,code:n}}function m(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,s]=e;const a=t[r];a&&"string"==typeof s&&(n[a]=s)})),n}},8277:(e,t,n)=>{"use strict";n.d(t,{a:()=>a,b:()=>o});var r=n(9901);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):r.push(s)})),r}function a(e){return(0,r.useMemo)((()=>s(e)),[e])}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>c({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}},2613:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,s,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);