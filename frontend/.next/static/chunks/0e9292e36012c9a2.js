(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22115,e=>{"use strict";var t=e.i(32700),r=e.i(6219),a=e.i(91125),n=a;let o=!r.isServer&&!!a.DEV;a.equalFn;let i=(e,t)=>e===t||e.length===t.length&&e.every((e,r)=>e===t[r]),l=e=>"function"!=typeof e||e.length?e:e(),s=e=>Array.isArray(e)?e:e?[e]:[];function c(e,...t){return"function"==typeof e?e(...t):e}let d=o?e=>(0,a.getOwner)()?(0,a.onCleanup)(e):e:a.onCleanup;function g(e,t,r,a){return e.addEventListener(t,r,a),d(e.removeEventListener.bind(e,t,r,a))}function p(e,t,n,o){if(r.isServer)return;let i=()=>{s(l(e)).forEach(e=>{e&&s(l(t)).forEach(t=>g(e,t,n,o))})};"function"==typeof e?(0,a.createEffect)(i):(0,a.createRenderEffect)(i)}function u(e,t=(0,a.getOwner)()){let r=0,n,o;return()=>(r++,(0,a.onCleanup)(()=>{r--,queueMicrotask(()=>{!r&&o&&(o(),o=n=void 0)})}),o||(0,a.createRoot)(t=>n=e(o=t),t),n)}function m(e,t){for(let r=e.length-1;r>=0;r--){let a=t.slice(0,r+1);if(!i(e[r],a))return!1}return!0}let f=u(()=>{if(r.isServer)return()=>null;let[e,t]=(0,a.createSignal)(null);return g(window,"keydown",e=>{t(e),setTimeout(()=>t(null))}),e}),h=u(()=>{if(r.isServer){let e=()=>[];return e[0]=e,e[1]={event:()=>null},e[Symbol.iterator]=function*(){yield e[0],yield e[1]},e}let[e,t]=(0,a.createSignal)([]),n=()=>t([]),o=f();return g(window,"keydown",r=>{if(r.repeat||"string"!=typeof r.key)return;let a=r.key.toUpperCase(),n=e();if(n.includes(a))return;let o=[...n,a];0===n.length&&"ALT"!==a&&"CONTROL"!==a&&"META"!==a&&"SHIFT"!==a&&(r.shiftKey&&o.unshift("SHIFT"),r.altKey&&o.unshift("ALT"),r.ctrlKey&&o.unshift("CONTROL"),r.metaKey&&o.unshift("META")),t(o)}),g(window,"keyup",e=>{if("string"!=typeof e.key)return;let r=e.key.toUpperCase();t(e=>e.filter(e=>e!==r))}),g(window,"blur",n),g(window,"contextmenu",e=>{e.defaultPrevented||n()}),e[0]=e,e[1]={event:o},e[Symbol.iterator]=function*(){yield e[0],yield e[1]},e}),v=u(()=>{if(r.isServer)return()=>[];let e=h();return(0,a.createMemo)(t=>0===e().length?[]:[...t,e()],[])}),b=(0,a.createContext)(void 0),y=e=>{let[t,r]=(0,a.createSignal)(e.theme);return(0,a.createEffect)(()=>{r(e.theme)}),(0,a.createComponent)(b.Provider,{value:{theme:t,setTheme:r},get children(){return e.children}})};var n=a,k=e.i(7670);let C={data:""},w=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,x=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,E=(e,t)=>{let r="",a="",n="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?E(i,o):o+"{"+E(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=E(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=E.p?E.p(o,i):o+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+a},S={},A=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+A(e[r]);return t}return e};function z(e){let t,r,a=this||{},n=e.call?e(a.p):e;return((e,t,r,a,n)=>{var o;let i=A(e),l=S[i]||(S[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!S[l]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=w.exec(e.replace(x,""));)t[4]?a.shift():t[3]?(r=t[3].replace(M," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(M," ").trim();return a[0]})(e);S[l]=E(n?{["@keyframes "+l]:t}:t,r?"":"."+l)}let s=r&&S.g?S.g:null;return r&&(S.g=S[l]),o=S[l],s?t.data=t.data.replace(s,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),l})(n.unshift?n.raw?(t=[].slice.call(arguments,1),r=a.p,n.reduce((e,a,n)=>{let o=t[n];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":E(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"")):n.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):n,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||C})(a.target),a.g,a.o,a.k)}z.bind({g:1}),z.bind({k:1});let F={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)"},weight:{medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",full:"9999px"}},size:{.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",4.5:"calc(var(--tsrd-font-size) * 1.125)",6.5:"calc(var(--tsrd-font-size) * 1.625)",12:"calc(var(--tsrd-font-size) * 3)"}},N={primary:{bg:F.colors.gray[900],hover:F.colors.gray[800],active:F.colors.gray[700],text:"#fff",border:F.colors.gray[900]},secondary:{bg:F.colors.gray[100],hover:F.colors.gray[200],active:F.colors.gray[300],text:F.colors.gray[900],border:F.colors.gray[300]},info:{bg:F.colors.blue[500],hover:F.colors.blue[600],active:F.colors.blue[700],text:"#fff",border:F.colors.blue[500]},warning:{bg:F.colors.yellow[500],hover:F.colors.yellow[600],active:F.colors.yellow[700],text:"#fff",border:F.colors.yellow[500]},danger:{bg:F.colors.red[500],hover:F.colors.red[600],active:F.colors.red[700],text:"#fff",border:F.colors.red[500]},success:{bg:F.colors.green[500],hover:F.colors.green[600],active:F.colors.green[700],text:"#fff",border:F.colors.green[500]}},B=(e="dark")=>{let{colors:t,font:r,size:a,border:n}=F,{fontFamily:o}=r,i=(t,r)=>"light"===e?t:r;return{logo:z`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      width: ${a[12]};
      height: ${a[12]};
      font-family: ${o.sans};
      gap: ${F.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
    `,selectWrapper:z`
      width: 100%;
      max-width: ${320}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,selectContainer:z`
      width: 100%;
    `,selectLabel:z`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${i(t.gray[900],t.gray[100])};
      text-align: left;
    `,selectDescription:z`
      font-size: 0.8rem;
      color: ${i(t.gray[500],t.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,select:z`
      appearance: none;
      width: 100%;
      padding: 0.5rem 3rem 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${i(t.gray[50],t.darkGray[800])};
      color: ${i(t.gray[900],t.gray[100])};
      border: 1px solid ${i(t.gray[200],t.gray[800])};
      font-size: 0.875rem;
      transition: all 0.15s ease;
      cursor: pointer;

      /* Custom arrow */
      background-image: url("data:image/svg+xml;utf8,<svg fill='%236b7280' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25rem;

      &:hover {
        border-color: ${i(t.gray[300],t.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${t.gray[400]};
        box-shadow: 0 0 0 3px ${i(t.gray[200],t.gray[800])};
      }
    `,inputWrapper:z`
      width: 100%;
      max-width: ${320}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,inputContainer:z`
      width: 100%;
    `,inputLabel:z`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${i(t.gray[900],t.gray[100])};
      text-align: left;
    `,inputDescription:z`
      font-size: 0.8rem;
      color: ${i(t.gray[500],t.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,input:z`
      appearance: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${i(t.gray[50],t.darkGray[800])};
      color: ${i(t.gray[900],t.gray[100])};
      border: 1px solid ${i(t.gray[200],t.gray[800])};
      font-size: 0.875rem;
      font-family: ${o.mono};
      transition: all 0.15s ease;

      &::placeholder {
        color: ${i(t.gray[400],t.gray[500])};
      }

      &:hover {
        border-color: ${i(t.gray[300],t.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${i(t.gray[400],t.gray[600])};
        box-shadow: 0 0 0 3px ${i(t.gray[200],t.gray[800])};
      }
    `,checkboxWrapper:z`
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      padding: 0.375rem;
      border-radius: 0.375rem;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: ${i(t.gray[50],t.darkGray[900])};
      }
    `,checkboxContainer:z`
      width: 100%;
    `,checkboxLabelContainer:z`
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    `,checkbox:z`
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid ${i(t.gray[300],t.gray[700])};
      border-radius: 0.25rem;
      background-color: ${i(t.gray[50],t.darkGray[800])};
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
      flex-shrink: 0;
      margin-top: 0.125rem;

      &:hover {
        border-color: ${i(t.gray[400],t.gray[600])};
      }

      &:checked {
        background-color: ${i(t.gray[900],t.gray[100])};
        border-color: ${i(t.gray[900],t.gray[100])};
      }

      &:checked::after {
        content: '';
        width: 0.4rem;
        height: 0.6rem;
        border: solid ${i("#fff",t.gray[900])};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -3px;
      }
    `,checkboxLabel:z`
      color: ${i(t.gray[900],t.gray[100])};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
      text-align: left;
    `,checkboxDescription:z`
      color: ${i(t.gray[500],t.gray[400])};
      font-size: 0.8rem;
      line-height: 1.3;
      text-align: left;
    `,button:{base:z`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: ${F.font.fontFamily.sans};
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        cursor: pointer;
        transition:
          background 0.15s,
          color 0.15s,
          border 0.15s,
          box-shadow 0.15s;
        outline: none;
        border-width: 1px;
        border-style: solid;
      `,variant(e,r,a){let n=N[e];return a?z`
            background: transparent;
            color: ${i(n.bg,n.bg)};
            border-color: transparent;
            &:hover {
              background: ${i(t.gray[100],t.darkGray[800])};
            }
            &:active {
              background: ${i(t.gray[200],t.darkGray[700])};
            }
          `:r?z`
            background: transparent;
            color: ${i(n.bg,n.bg)};
            border-color: ${i(n.bg,n.bg)};
            &:hover {
              background: ${i(t.gray[50],t.darkGray[800])};
              border-color: ${i(n.hover,n.hover)};
            }
            &:active {
              background: ${i(t.gray[100],t.darkGray[700])};
              border-color: ${i(n.active,n.active)};
            }
          `:z`
          background: ${i(n.bg,n.bg)};
          color: ${i(n.text,n.text)};
          border-color: ${i(n.border,n.border)};
          &:hover {
            background: ${i(n.hover,n.hover)};
            border-color: ${i(n.hover,n.hover)};
          }
          &:active {
            background: ${i(n.active,n.active)};
            border-color: ${i(n.active,n.active)};
          }
        `}},tag:{dot:e=>z`
        width: ${F.size[1.5]};
        height: ${F.size[1.5]};
        border-radius: ${F.border.radius.full};
        background-color: ${i(F.colors[e][500],F.colors[e][500])};
      `,base:z`
        display: flex;
        gap: ${F.size[1.5]};
        box-sizing: border-box;
        height: ${F.size[6.5]};
        background: ${i(t.gray[50],t.darkGray[500])};
        color: ${i(t.gray[700],t.gray[300])};
        border-radius: ${F.border.radius.sm};
        font-size: ${r.size.sm};
        padding: ${F.size[1]};
        padding-left: ${F.size[1.5]};
        align-items: center;
        font-weight: ${r.weight.medium};
        border: ${i("1px solid "+t.gray[300],"1px solid transparent")};
        user-select: none;
        position: relative;
        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${i(t.blue[700],t.blue[800])};
        }
      `,label:z`
        font-size: ${r.size.xs};
      `,count:z`
        font-size: ${r.size.xs};
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${i(t.gray[500],t.gray[400])};
        background-color: ${i(t.gray[200],t.darkGray[300])};
        border-radius: 2px;
        font-variant-numeric: tabular-nums;
        height: ${F.size[4.5]};
      `},tree:{info:z`
        color: ${i(t.gray[500],t.gray[500])};
        font-size: ${r.size.xs};
        margin-right: ${a[1]};
      `,actionButton:z`
        background-color: transparent;
        color: ${i(t.gray[500],t.gray[500])};
        border: none;
        display: inline-flex;
        padding: 0px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: ${a[3]};
        height: ${a[3]};
        position: relative;
        z-index: 1;

        &:hover svg {
          color: ${i(t.gray[600],t.gray[400])};
        }

        &:focus-visible {
          border-radius: ${n.radius.xs};
          outline: 2px solid ${i(t.blue[700],t.blue[800])};
          outline-offset: 2px;
        }
      `,expanderContainer:z`
        position: relative;
      `,expander:z`
        position: absolute;
        cursor: pointer;
        left: -16px;
        top: 3px;
        & path {
          stroke: ${i(t.blue[400],t.blue[300])};
        }
        & svg {
          width: ${a[3]};
          height: ${a[3]};
        }

        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
      `,expandedLine:e=>z`
        display: block;
        padding-left: 0.75rem;
        margin-left: -0.7rem;
        ${e?`border-left: 1px solid ${i(t.blue[400],t.blue[300])};`:""}
      `,collapsible:z`
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: ${i(t.gray[100],t.darkGray[700])};
          border-radius: ${F.border.radius.sm};
          padding: 0 ${F.size[1]};
        }
      `,actions:z`
        display: inline-flex;
        margin-left: ${a[2]};
        gap: ${a[2]};
        align-items: center;
        & svg {
          height: 12px;
          width: 12px;
        }
      `,valueCollapsed:z`
        color: ${i(t.gray[500],t.gray[400])};
      `,valueFunction:z`
        color: ${i(t.cyan[500],t.cyan[400])};
      `,valueString:z`
        color: ${i(t.green[500],t.green[400])};
      `,valueNumber:z`
        color: ${i(t.yellow[500],t.yellow[400])};
      `,valueBoolean:z`
        color: ${i(t.pink[500],t.pink[400])};
      `,valueNull:z`
        color: ${i(t.gray[500],t.gray[400])};
        font-style: italic;
      `,valueKey:z`
        color: ${i(t.blue[400],t.blue[300])};
      `,valueBraces:z`
        color: ${t.gray[500]};
      `,valueContainer:e=>z`
        display: block;
        margin-left: ${e?"0":"1rem"};

        &:not(:hover) .actions {
          display: none;
        }

        &:hover .actions {
          display: inline-flex;
        }
      `},header:{row:z`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${F.size[2]} ${F.size[2.5]};
        gap: ${F.size[2.5]};
        border-bottom: ${i(t.gray[300],t.darkGray[500])} 1px solid;
        align-items: center;
      `,logoAndToggleContainer:z`
        display: flex;
        gap: ${F.size[3]};
        align-items: center;
        & > button {
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          gap: ${a[.5]};
          flex-direction: column;
        }
      `,logo:z`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        gap: ${F.size[.5]};
        padding: 0px;
        &:hover {
          opacity: 0.7;
        }
        &:focus-visible {
          outline-offset: 4px;
          border-radius: ${n.radius.xs};
          outline: 2px solid ${t.blue[800]};
        }
      `,tanstackLogo:z`
        font-size: ${r.size.md};
        font-weight: ${r.weight.bold};
        line-height: ${r.lineHeight.xs};
        white-space: nowrap;
        color: ${i(t.gray[700],t.gray[300])};
      `,flavorLogo:(e,t)=>z`
        font-weight: ${r.weight.semibold};
        font-size: ${r.size.xs};
        background: linear-gradient(to right, ${i(e,t)});
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      `},section:{main:z`
        margin-bottom: 1.5rem;
        padding: 1rem;
        background-color: ${i(t.gray[50],t.darkGray[800])};
        border: 1px solid ${i(t.gray[200],t.gray[800])};
        border-radius: 0.5rem;
        box-shadow: none;
      `,title:z`
        font-size: 1rem;
        font-weight: 600;
        color: ${i(t.gray[900],t.gray[100])};
        margin: 0 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${i(t.gray[200],t.gray[800])};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: left;
      `,icon:z`
        height: 18px;
        width: 18px;
        & > svg {
          height: 100%;
          width: 100%;
        }
        color: ${i(t.gray[700],t.gray[400])};
      `,description:z`
        color: ${i(t.gray[500],t.gray[400])};
        font-size: 0.8rem;
        margin: 0 0 1rem 0;
        line-height: 1.4;
        text-align: left;
      `},mainPanel:{panel:e=>z`
        padding: ${e?F.size[3]:0};
        background: ${i(t.gray[50],t.darkGray[700])};
        overflow-y: auto;
        height: 100%;
      `}}};function P(){let{theme:e}=function(){let e=(0,a.useContext)(b);if(!e)throw Error("useTheme must be used within a ThemeContextProvider");return e}(),[t,r]=(0,a.createSignal)(B(e()));return(0,a.createEffect)(()=>{r(B(e()))}),t}var T=(0,r.template)("<div>");let D=({className:e,children:t,class:a,withPadding:o})=>{var i;let l=P();return i=T(),(0,r.insert)(i,t),(0,n.createRenderEffect)(()=>(0,r.className)(i,(0,k.default)(l().mainPanel.panel(!!o),e,a))),i};var I=(0,r.template)("<section>"),H=(0,r.template)("<h3>"),R=(0,r.template)("<p>"),L=(0,r.template)("<span>");let $=({children:e,...t})=>{var n;let o=P();return n=I(),(0,r.spread)(n,(0,a.mergeProps)({get class(){return(0,k.default)(o().section.main,t.class)}},t),!1,!0),(0,r.insert)(n,e),n},Q=({children:e,...t})=>{var n;let o=P();return n=H(),(0,r.spread)(n,(0,a.mergeProps)({get class(){return(0,k.default)(o().section.title,t.class)}},t),!1,!0),(0,r.insert)(n,e),n},q=({children:e,...t})=>{var n;let o=P();return n=R(),(0,r.spread)(n,(0,a.mergeProps)({get class(){return(0,k.default)(o().section.description,t.class)}},t),!1,!0),(0,r.insert)(n,e),n},U=({children:e,...t})=>{var n;let o=P();return n=L(),(0,r.spread)(n,(0,a.mergeProps)({get class(){return(0,k.default)(o().section.icon,t.class)}},t),!1,!0),(0,r.insert)(n,e),n};var n=a,j=(0,r.template)("<div><label><input type=checkbox><div>"),O=(0,r.template)("<span>");function V(e){var t,o,i,l,s,c;let d=P(),[g,p]=(0,a.createSignal)(e.checked||!1);return l=(i=(o=(t=j()).firstChild).firstChild).nextSibling,i.$$input=t=>{let r=t.target.checked;p(r),e.onChange?.(r)},(0,r.insert)(l,(s=(0,r.memo)(()=>!!e.label),()=>{var t;return s()&&(t=O(),(0,r.insert)(t,()=>e.label),(0,n.createRenderEffect)(()=>(0,r.className)(t,d().checkboxLabel)),t)}),null),(0,r.insert)(l,(c=(0,r.memo)(()=>!!e.description),()=>{var t;return c()&&(t=O(),(0,r.insert)(t,()=>e.description),(0,n.createRenderEffect)(()=>(0,r.className)(t,d().checkboxDescription)),t)}),null),(0,n.createRenderEffect)(e=>{var a=d().checkboxContainer,n=d().checkboxWrapper,s=d().checkbox,c=d().checkboxLabelContainer;return a!==e.e&&(0,r.className)(t,e.e=a),n!==e.t&&(0,r.className)(o,e.t=n),s!==e.a&&(0,r.className)(i,e.a=s),c!==e.o&&(0,r.className)(l,e.o=c),e},{e:void 0,t:void 0,a:void 0,o:void 0}),(0,n.createRenderEffect)(()=>i.checked=g()),t}(0,r.delegateEvents)(["input"]);var n=a,Y=(0,r.template)("<div><div><input>"),G=(0,r.template)("<label>"),W=(0,r.template)("<p>");function Z(e){var t,o,i,l,s;let c=P(),[d,g]=(0,a.createSignal)(e.value||"");return i=(o=(t=Y()).firstChild).firstChild,(0,r.insert)(o,(l=(0,r.memo)(()=>!!e.label),()=>{var t;return l()&&(t=G(),(0,r.insert)(t,()=>e.label),(0,n.createRenderEffect)(()=>(0,r.className)(t,c().inputLabel)),t)}),i),(0,r.insert)(o,(s=(0,r.memo)(()=>!!e.description),()=>{var t;return s()&&(t=W(),(0,r.insert)(t,()=>e.description),(0,n.createRenderEffect)(()=>(0,r.className)(t,c().inputDescription)),t)}),i),i.$$input=t=>{let r=t.target.value;g(e=>e!==r?r:e),e.onChange?.(r)},(0,n.createRenderEffect)(a=>{var n=c().inputContainer,l=c().inputWrapper,s=e.type||"text",d=c().input,g=e.placeholder;return n!==a.e&&(0,r.className)(t,a.e=n),l!==a.t&&(0,r.className)(o,a.t=l),s!==a.a&&(0,r.setAttribute)(i,"type",a.a=s),d!==a.o&&(0,r.className)(i,a.o=d),g!==a.i&&(0,r.setAttribute)(i,"placeholder",a.i=g),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),(0,n.createRenderEffect)(()=>i.value=d()),t}(0,r.delegateEvents)(["input"]);var n=a,K=(0,r.template)("<div><div><select>"),J=(0,r.template)("<label>"),X=(0,r.template)("<p>"),_=(0,r.template)("<option>");function ee(e){var t,o,i,l,s;let c=P(),[d,g]=(0,a.createSignal)(e.value||e.options[0]?.value);return i=(o=(t=K()).firstChild).firstChild,(0,r.insert)(o,(l=(0,r.memo)(()=>!!e.label),()=>{var t;return l()&&(t=J(),(0,r.insert)(t,()=>e.label),(0,n.createRenderEffect)(()=>(0,r.className)(t,c().selectLabel)),t)}),i),(0,r.insert)(o,(s=(0,r.memo)(()=>!!e.description),()=>{var t;return s()&&(t=X(),(0,r.insert)(t,()=>e.description),(0,n.createRenderEffect)(()=>(0,r.className)(t,c().selectDescription)),t)}),i),i.$$input=t=>{let r=t.target.value;g(e=>e!==r?r:e),e.onChange?.(r)},(0,r.insert)(i,()=>e.options.map(e=>{var t;return t=_(),(0,r.insert)(t,()=>e.label),(0,n.createRenderEffect)(()=>t.value=e.value),t})),(0,n.createRenderEffect)(e=>{var a=c().selectContainer,n=c().selectWrapper,l=c().select;return a!==e.e&&(0,r.className)(t,e.e=a),n!==e.t&&(0,r.className)(o,e.t=n),l!==e.a&&(0,r.className)(i,e.a=l),e},{e:void 0,t:void 0,a:void 0}),(0,n.createRenderEffect)(()=>i.value=d()),t}(0,r.delegateEvents)(["input"]);var et=(0,r.template)("<button>");function er(e){var t;let n=P(),[o,i]=(0,a.splitProps)(e,["variant","outline","ghost","children","className"]),l=o.variant||"primary",s=(0,k.default)(n().button.base,n().button.variant(l,o.outline,o.ghost),o.className);return t=et(),(0,r.spread)(t,(0,a.mergeProps)(i,{class:s}),!1,!0),(0,r.insert)(t,()=>o.children),t}var n=a,ea=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7">'),en=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-file-search2-icon lucide-file-search-2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx=11.5 cy=14.5 r=2.5></circle><path d="M13.3 16.3 15 18">'),eo=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93">'),ei=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m10 9-3 3 3 3"></path><path d="m14 15 3-3-3-3"></path><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">'),el=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect width=20 height=16 x=2 y=4 rx=2>'),es=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx=12 cy=10 r=3>'),ec=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1=8 x2=16 y1=12 y2=12>'),ed=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12">'),eg=(0,r.template)('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16.5 9.39999L7.5 4.20999M12 17.5L12 3M21 16V7.99999C20.9996 7.64926 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64926 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ep=(0,r.template)('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.85999M22 4L12 14.01L9 11.01"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),eu=(0,r.template)('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),em=(0,r.template)('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 9L12 15L18 9"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ef=(0,r.template)('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),eh=(0,r.template)('<svg width=12 height=12 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11M15 3H21M21 3V9M21 3L10 14"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ev=(0,r.template)('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),eb=(0,r.template)('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M18 6L6 18M6 6L18 18"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ey=(0,r.template)('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M2 10h6V4"></path><path d="m2 4 6 6"></path><path d="M21 10V7a2 2 0 0 0-2-2h-7"></path><path d="M3 14v2a2 2 0 0 0 2 2h3"></path><rect x=12 y=14 width=10 height=7 rx=1>');function ek(){return ea()}function eC(){return en()}function ew(){return eo()}function ex(){return ei()}function eM(){return el()}function eE(){return es()}function eS(){return ei()}function eA(){return ec()}function ez(){return ed()}function eF(){return eg()}function eN(){return ep()}function eB(){return eu()}function eP(){return em()}function eT(){return ef()}function eD(){return eh()}function eI(){return ev()}function eH(){return eb()}function eR(){return ey()}var eL=e.i(29060);class e$ extends eL.EventClient{constructor(){super({pluginId:"tanstack-devtools-core"})}}let eQ=new e$;var eq=e.i(74776);let eU={width:null,height:null};function ej(e){if(r.isServer||!e)return{...eU};let{width:t,height:a}=e.getBoundingClientRect();return{width:t,height:a}}var eO=(0,a.createContext)(void 0),eV=e=>{let t=(e=>{let[t,r]=(0,a.createSignal)(!1),[n,o]=(0,a.createSignal)(!1),i=(0,a.createMemo)(()=>t()||n()),l=null;return(0,a.onCleanup)(()=>{l&&clearTimeout(l)}),{expanded:i,setForceExpand:o,hoverUtils:{enter:()=>{l&&(clearTimeout(l),l=null),r(!0)},leave:()=>{l=setTimeout(()=>{r(!1)},e.animationMs)}},animationMs:e.animationMs}})({animationMs:e.animationMs});return(0,a.createComponent)(eO.Provider,{value:t,get children(){return e.children}})};function eY(){let e=(0,a.useContext)(eO);if(void 0===e)throw Error("useDrawContext must be used within a DrawClientProvider");return e}var eG=()=>{let e=(0,a.useContext)(t.DevtoolsContext);if(void 0===e)throw Error("useDevtoolsShellContext must be used within a ShellContextProvider");return e};function eW(){let{settings:e,setSettings:t}=eJ();return{theme:(0,a.createMemo)(()=>e().theme),setTheme:e=>t({theme:e})}}var eZ=()=>{let{store:e,setStore:t}=eG(),{setForceExpand:r}=eY(),n=(0,a.createMemo)(()=>e.plugins),o=(0,a.createMemo)(()=>e.state.activePlugins);return(0,a.createEffect)(()=>{0===o().length?r(!0):r(!1)}),{plugins:n,toggleActivePlugins:e=>{t(t=>{let r=t.state.activePlugins.includes(e)?t.state.activePlugins.filter(t=>t!==e):[...t.state.activePlugins,e];return r.length>3?t:{...t,state:{...t.state,activePlugins:r}}})},activePlugins:o}},eK=()=>{let{store:e,setStore:t}=eG();return{state:(0,a.createMemo)(()=>e.state),setState:e=>{t(t=>({...t,state:{...t.state,...e}}))}}},eJ=()=>{let{store:e,setStore:t}=eG();return{setSettings:e=>{t(t=>({...t,settings:{...t.settings,...e}}))},settings:(0,a.createMemo)(()=>e.settings)}},eX=()=>{let{state:e,setState:t}=eK();return{height:(0,a.createMemo)(()=>e().height),setHeight:e=>{t({height:e})}}},e_=(e,t=!0)=>{for(let r of(t?e.setAttribute("tabIndex","-1"):e.removeAttribute("tabIndex"),e.children))e_(r,t)},e0={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)",lg:"calc(var(--tsrd-font-size) * 1.125)",xl:"calc(var(--tsrd-font-size) * 1.25)","2xl":"calc(var(--tsrd-font-size) * 1.5)","3xl":"calc(var(--tsrd-font-size) * 1.875)","4xl":"calc(var(--tsrd-font-size) * 2.25)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.75)","7xl":"calc(var(--tsrd-font-size) * 4.5)","8xl":"calc(var(--tsrd-font-size) * 6)","9xl":"calc(var(--tsrd-font-size) * 8)"},lineHeight:{"3xs":"calc(var(--tsrd-font-size) * 0.75)","2xs":"calc(var(--tsrd-font-size) * 0.875)",xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)",md:"calc(var(--tsrd-font-size) * 1.5)",lg:"calc(var(--tsrd-font-size) * 1.75)",xl:"calc(var(--tsrd-font-size) * 2)","2xl":"calc(var(--tsrd-font-size) * 2.25)","3xl":"calc(var(--tsrd-font-size) * 2.5)","4xl":"calc(var(--tsrd-font-size) * 2.75)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.25)","7xl":"calc(var(--tsrd-font-size) * 3.5)","8xl":"calc(var(--tsrd-font-size) * 3.75)","9xl":"calc(var(--tsrd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",lg:"calc(var(--tsrd-font-size) * 0.5)",xl:"calc(var(--tsrd-font-size) * 0.75)","2xl":"calc(var(--tsrd-font-size) * 1)","3xl":"calc(var(--tsrd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsrd-font-size) * 0.0625)",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",4.5:"calc(var(--tsrd-font-size) * 1.125)",5:"calc(var(--tsrd-font-size) * 1.25)",5.5:"calc(var(--tsrd-font-size) * 1.375)",6:"calc(var(--tsrd-font-size) * 1.5)",6.5:"calc(var(--tsrd-font-size) * 1.625)",7:"calc(var(--tsrd-font-size) * 1.75)",8:"calc(var(--tsrd-font-size) * 2)",9:"calc(var(--tsrd-font-size) * 2.25)",10:"calc(var(--tsrd-font-size) * 2.5)",11:"calc(var(--tsrd-font-size) * 2.75)",12:"calc(var(--tsrd-font-size) * 3)",14:"calc(var(--tsrd-font-size) * 3.5)",16:"calc(var(--tsrd-font-size) * 4)",20:"calc(var(--tsrd-font-size) * 5)",24:"calc(var(--tsrd-font-size) * 6)",28:"calc(var(--tsrd-font-size) * 7)",32:"calc(var(--tsrd-font-size) * 8)",36:"calc(var(--tsrd-font-size) * 9)",40:"calc(var(--tsrd-font-size) * 10)",44:"calc(var(--tsrd-font-size) * 11)",48:"calc(var(--tsrd-font-size) * 12)",52:"calc(var(--tsrd-font-size) * 13)",56:"calc(var(--tsrd-font-size) * 14)",60:"calc(var(--tsrd-font-size) * 15)",64:"calc(var(--tsrd-font-size) * 16)",72:"calc(var(--tsrd-font-size) * 18)",80:"calc(var(--tsrd-font-size) * 20)",96:"calc(var(--tsrd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},e1=e=>`${(e/1e3).toFixed(2)}s`,e2=e=>{let{colors:t,font:r,size:a,border:n}=e0,{fontFamily:o,size:i}=r,l=(t,r)=>"light"===e?t:r;return{seoTabContainer:z`
      padding: 0;
      margin: 0 auto;
      background: ${l(t.white,t.darkGray[700])};
      border-radius: 8px;
      box-shadow: none;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
      overflow-y: auto;
    `,seoTabTitle:z`
      font-size: 1.25rem;
      font-weight: 600;
      color: ${l(t.gray[900],t.gray[100])};
      margin: 0;
      padding: 1rem 1.5rem 0.5rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid ${l(t.gray[200],t.gray[800])};
    `,seoTabSection:z`
      padding: 1.5rem;
      background: ${l(t.gray[50],t.darkGray[800])};
      border: 1px solid ${l(t.gray[200],t.gray[800])};
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 0.75rem;
    `,seoPreviewSection:z`
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      flex-wrap: wrap;
      padding-bottom: 0.5rem;
    `,seoPreviewCard:z`
      border: 1px solid ${l(t.gray[200],t.gray[800])};
      border-radius: 8px;
      padding: 12px 10px;
      background: ${l(t.white,t.darkGray[900])};
      margin-bottom: 0;
      box-shadow: 0 1px 3px ${l("rgba(0,0,0,0.05)","rgba(0,0,0,0.1)")};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 200px;
      max-width: 240px;
      font-size: 0.95rem;
      gap: 4px;
    `,seoPreviewHeader:z`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0;
      color: ${l(t.gray[700],t.gray[300])};
    `,seoPreviewImage:z`
      max-width: 100%;
      border-radius: 6px;
      margin-bottom: 6px;
      box-shadow: 0 1px 2px ${l("rgba(0,0,0,0.03)","rgba(0,0,0,0.06)")};
      height: 160px;
      object-fit: cover;
    `,seoPreviewTitle:z`
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 4px;
      color: ${l(t.gray[900],t.gray[100])};
    `,seoPreviewDesc:z`
      color: ${l(t.gray[600],t.gray[400])};
      margin-bottom: 4px;
      font-size: 0.8rem;
    `,seoPreviewUrl:z`
      color: ${l(t.gray[500],t.gray[500])};
      font-size: 0.75rem;
      margin-bottom: 0;
      word-break: break-all;
    `,seoMissingTagsSection:z`
      margin-top: 4px;
      font-size: 0.875rem;
      color: ${l(t.red[500],t.red[400])};
    `,seoMissingTagsList:z`
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 240px;
    `,seoMissingTag:z`
      background: ${l(t.red[100],t.red[500]+"22")};
      color: ${l(t.red[700],t.red[500])};
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 0.75rem;
      font-weight: 500;
    `,seoAllTagsFound:z`
      color: ${l(t.green[700],t.green[500])};
      font-weight: 500;
      margin-left: 0;
      padding: 0 10px 8px 10px;
      font-size: 0.875rem;
    `,devtoolsPanelContainer:(e,r)=>z`
      direction: ltr;
      position: fixed;
      overflow-y: hidden;
      overflow-x: hidden;
      ${e}: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      ${r?"":"max-height: 90%;"}
      border-top: 1px solid ${l(t.gray[200],t.gray[800])};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>z`
        visibility: ${e?"visible":"hidden"};
        height: ${e?"auto":"0"};
      `,devtoolsPanelContainerResizing:e=>e()?z`
          transition: none;
        `:z`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t,r)=>e?z`
          pointer-events: auto;
          transform: translateY(0);
        `:z`
        pointer-events: none;
        transform: translateY(${"top"===r?-t:t}px);
      `,devtoolsPanel:z`
      display: flex;
      font-size: ${i.sm};
      font-family: ${o.sans};
      background-color: ${l(t.white,t.darkGray[700])};
      color: ${l(t.gray[900],t.gray[300])};
      width: w-screen;
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100%;
    `,dragHandle:e=>z`
      position: absolute;
      left: 0;
      ${"bottom"===e?"top":"bottom"}: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      user-select: none;
      z-index: 100000;
      &:hover {
        background-color: ${l(t.gray[400],t.gray[500])};
      }
    `,mainCloseBtn:z`
      background: transparent;
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      align-items: center;
      padding: 0;
      font-size: ${r.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;
      & > img {
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
        outline-offset: 2px;
        border-radius: ${n.radius.full};
        outline: 2px solid transparent;
      }
      &:hide-until-hover {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }
      &:hide-until-hover:hover {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }
      & > img:focus-visible,
      img:hover {
        outline: 2px solid ${l(t.black,t.black)};
      }
    `,mainCloseBtnPosition:e=>z`
        ${"top-left"===e?`top: ${a[2]}; left: ${a[2]};`:""}
        ${"top-right"===e?`top: ${a[2]}; right: ${a[2]};`:""}
        ${"middle-left"===e?`top: 50%; left: ${a[2]}; transform: translateY(-50%);`:""}
        ${"middle-right"===e?`top: 50%; right: ${a[2]}; transform: translateY(-50%);`:""}
        ${"bottom-left"===e?`bottom: ${a[2]}; left: ${a[2]};`:""}
        ${"bottom-right"===e?`bottom: ${a[2]}; right: ${a[2]};`:""}
      `,mainCloseBtnAnimation:(e,t)=>e?z`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:t?z`
              opacity: 0;

              &:hover {
                opacity: 1;
                pointer-events: auto;
                visibility: visible;
              }
            `:z`
              opacity: 1;
              pointer-events: auto;
              visibility: visible;
            `,tabContainer:z`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      background-color: ${l(t.gray[50],t.darkGray[900])};
      border-right: 1px solid ${l(t.gray[200],t.gray[800])};
      box-shadow: none;
      position: relative;
      width: ${a[10]};
    `,tab:z`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${a[10]};
      cursor: pointer;
      font-size: ${i.sm};
      font-family: ${o.sans};
      color: ${l(t.gray[600],t.gray[400])};
      background-color: transparent;
      border: none;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      &:hover:not(.close):not(.active):not(.detach) {
        background-color: ${l(t.gray[100],t.gray[800])};
        color: ${l(t.gray[900],t.gray[100])};
        border-left: 2px solid ${l(t.gray[900],t.gray[100])};
      }
      &.active {
        background-color: ${l(t.gray[100],t.gray[800])};
        color: ${l(t.gray[900],t.gray[100])};
        border-left: 2px solid ${l(t.gray[900],t.gray[100])};
      }
      &.detach {
        &:hover {
          background-color: ${l(t.gray[100],t.gray[800])};
        }
        &:hover {
          color: ${l(t.green[700],t.green[500])};
        }
      }
      &.close {
        margin-top: auto;
        &:hover {
          background-color: ${l(t.gray[100],t.gray[800])};
        }
        &:hover {
          color: ${l(t.red[700],t.red[500])};
        }
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.2;
        pointer-events: none;
      }
      &.disabled:hover {
        background-color: transparent;
        color: ${t.gray[300]};
      }
    `,tabContent:z`
      transition: all 0.2s ease-in-out;
      width: 100%;
      height: 100%;
    `,pluginsTabPanel:z`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `,pluginsTabDraw:e=>z`
      width: ${e?a[48]:0};
      height: 100%;
      background-color: ${l(t.white,t.darkGray[900])};
      box-shadow: none;
      ${e?`border-right: 1px solid ${l(t.gray[200],t.gray[800])};`:""}
    `,pluginsTabDrawExpanded:z`
      width: ${a[48]};
      border-right: 1px solid ${l(t.gray[200],t.gray[800])};
    `,pluginsTabDrawTransition:e=>z`
        transition: width ${e1(e)} ease;
      `,pluginsTabSidebar:e=>z`
      width: ${a[48]};
      overflow-y: auto;
      transform: ${e?"translateX(0)":"translateX(-100%)"};
      display: flex;
      flex-direction: column;
    `,pluginsTabSidebarTransition:e=>z`
        transition: transform ${e1(e)} ease;
      `,pluginsList:z`
      flex: 1;
      overflow-y: auto;
    `,pluginName:z`
      font-size: ${i.xs};
      font-family: ${o.sans};
      color: ${l(t.gray[600],t.gray[400])};
      padding: ${a[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;

      &:hover {
        background-color: ${l(t.gray[100],t.gray[800])};
        color: ${l(t.gray[900],t.gray[100])};
        padding: ${a[2]};
      }
      &.active {
        background-color: ${l(t.gray[100],t.gray[800])};
        color: ${l(t.gray[900],t.gray[100])};
        border-left: 2px solid ${l(t.gray[900],t.gray[100])};
      }
      &.active:hover {
        background-color: ${l(t.gray[200],t.gray[700])};
      }
    `,pluginsTabContent:z`
      width: 100%;
      height: 100%;
      overflow-y: auto;

      &:not(:last-child) {
        border-right: 5px solid ${l(t.purple[200],t.purple[800])};
      }
    `,settingsGroup:z`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,conditionalSetting:z`
      margin-left: 1.5rem;
      padding-left: 1rem;
      border-left: 2px solid ${l(t.gray[300],t.gray[600])};
      background-color: ${l(t.gray[50],t.darkGray[900])};
      padding: 0.75rem;
      border-radius: 0.375rem;
      margin-top: 0.5rem;
    `,settingRow:z`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,settingsModifiers:z`
      display: flex;
      gap: 0.5rem;
    `,noPluginsFallback:z`
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      padding: 2rem;
      background: ${l(t.gray[50],t.darkGray[700])};
      width: 100%;
      height: 100%;
    `,noPluginsFallbackContent:z`
      max-width: 600px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    `,noPluginsFallbackIcon:z`
      width: 64px;
      height: 64px;
      color: ${l(t.gray[400],t.gray[600])};
      margin-bottom: 0.5rem;

      svg {
        width: 100%;
        height: 100%;
      }
    `,noPluginsFallbackTitle:z`
      font-size: 1.5rem;
      font-weight: 600;
      color: ${l(t.gray[900],t.gray[100])};
      margin: 0;
    `,noPluginsFallbackDescription:z`
      font-size: 0.95rem;
      color: ${l(t.gray[600],t.gray[400])};
      line-height: 1.5;
      margin: 0;
    `,noPluginsSuggestions:z`
      width: 100%;
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${l(t.white,t.darkGray[800])};
      border: 1px solid ${l(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsSuggestionsTitle:z`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${l(t.gray[900],t.gray[100])};
      margin: 0 0 0.5rem 0;
    `,noPluginsSuggestionsDesc:z`
      font-size: 0.875rem;
      color: ${l(t.gray[600],t.gray[400])};
      margin: 0 0 1rem 0;
    `,noPluginsSuggestionsList:z`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,noPluginsSuggestionCard:z`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: ${l(t.gray[50],t.darkGray[900])};
      border: 1px solid ${l(t.gray[200],t.gray[700])};
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        border-color: ${l(t.gray[300],t.gray[600])};
        background: ${l(t.gray[100],t.darkGray[800])};
      }
    `,noPluginsSuggestionInfo:z`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      flex: 1;
    `,noPluginsSuggestionPackage:z`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${l(t.gray[900],t.gray[100])};
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,noPluginsSuggestionSource:z`
      font-size: 0.8rem;
      color: ${l(t.gray[500],t.gray[500])};
      margin: 0;
    `,noPluginsSuggestionStatus:z`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${l(t.green[600],t.green[400])};

      svg {
        width: 18px;
        height: 18px;
      }
    `,noPluginsSuggestionStatusText:z`
      font-size: 0.875rem;
      font-weight: 500;
    `,noPluginsSuggestionStatusTextError:z`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${l(t.red[600],t.red[400])};
    `,noPluginsEmptyState:z`
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${l(t.white,t.darkGray[800])};
      border: 1px solid ${l(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsEmptyStateText:z`
      font-size: 0.875rem;
      color: ${l(t.gray[600],t.gray[400])};
      margin: 0;
      line-height: 1.5;
    `,noPluginsFallbackLinks:z`
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.5rem;
    `,noPluginsFallbackLink:z`
      font-size: 0.875rem;
      color: ${l(t.gray[700],t.gray[300])};
      text-decoration: none;
      transition: color 0.15s ease;

      &:hover {
        color: ${l(t.gray[900],t.gray[100])};
        text-decoration: underline;
      }
    `,noPluginsFallbackLinkSeparator:z`
      color: ${l(t.gray[400],t.gray[600])};
    `,pluginMarketplace:z`
      width: 100%;
      overflow-y: auto;
      padding: 2rem;
      background: ${l("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1a1d23 0%, #13161a 100%)")};
      animation: fadeIn 0.3s ease;

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,pluginMarketplaceHeader:z`
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid ${l(t.gray[200],t.gray[700])};
    `,pluginMarketplaceTitleRow:z`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 0.5rem;
    `,pluginMarketplaceTitle:z`
      font-size: 1.5rem;
      font-weight: 700;
      color: ${l(t.gray[900],t.gray[100])};
      margin: 0;
      letter-spacing: -0.02em;
    `,pluginMarketplaceDescription:z`
      font-size: 0.95rem;
      color: ${l(t.gray[600],t.gray[400])};
      margin: 0 0 1rem 0;
      line-height: 1.5;
    `,pluginMarketplaceSearchWrapper:z`
      position: relative;
      display: flex;
      align-items: center;
      max-width: 400px;
      flex-shrink: 0;

      svg {
        position: absolute;
        left: 1rem;
        color: ${l(t.gray[400],t.gray[500])};
        pointer-events: none;
      }
    `,pluginMarketplaceSearch:z`
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      background: ${l(t.gray[50],t.darkGray[900])};
      border: 2px solid ${l(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
      color: ${l(t.gray[900],t.gray[100])};
      font-size: 0.875rem;
      font-family: ${o.sans};
      transition: all 0.2s ease;

      &::placeholder {
        color: ${l(t.gray[400],t.gray[500])};
      }

      &:focus {
        outline: none;
        border-color: ${l(t.blue[500],t.blue[400])};
        background: ${l(t.white,t.darkGray[800])};
        box-shadow: 0 0 0 3px
          ${l("rgba(59, 130, 246, 0.1)","rgba(96, 165, 250, 0.1)")};
      }
    `,pluginMarketplaceFilters:z`
      margin-top: 1.5rem;
      padding-top: 1rem;
    `,pluginMarketplaceTagsContainer:z`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.5rem;
      padding: 1rem;
      background: ${l(t.gray[50],t.darkGray[800])};
      border: 1px solid ${l(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
    `,pluginMarketplaceTagButton:z`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      background: ${l(t.white,t.darkGray[700])};
      border: 2px solid ${l(t.gray[300],t.gray[600])};
      border-radius: 0.375rem;
      color: ${l(t.gray[700],t.gray[300])};
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        background: ${l(t.gray[100],t.darkGray[600])};
        border-color: ${l(t.gray[400],t.gray[500])};
        color: ${l(t.gray[900],t.gray[100])};
      }
    `,pluginMarketplaceTagButtonActive:z`
      background: ${l("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")} !important;
      border-color: ${l("#2563eb","#3b82f6")} !important;
      color: white !important;

      &:hover {
        background: ${l("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")} !important;
        border-color: ${l("#1d4ed8","#2563eb")} !important;
      }
    `,pluginMarketplaceSettingsButton:z`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      background: ${l(t.gray[100],t.darkGray[800])};
      border: 2px solid ${l(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
      color: ${l(t.gray[700],t.gray[300])};
      cursor: pointer;
      transition: all 0.2s ease;
      margin-left: 0.5rem;

      &:hover {
        background: ${l(t.gray[200],t.darkGray[700])};
        border-color: ${l(t.gray[300],t.gray[600])};
        color: ${l(t.gray[900],t.gray[100])};
      }

      &:active {
        transform: scale(0.95);
      }
    `,pluginMarketplaceSettingsPanel:z`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 350px;
      background: ${l(t.white,t.darkGray[800])};
      border-left: 1px solid ${l(t.gray[200],t.gray[700])};
      box-shadow: -4px 0 12px ${l("rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.4)")};
      z-index: 1000;
      display: flex;
      flex-direction: column;
      animation: slideInRight 0.3s ease;

      @keyframes slideInRight {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }
    `,pluginMarketplaceSettingsPanelHeader:z`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid ${l(t.gray[200],t.gray[700])};
    `,pluginMarketplaceSettingsPanelTitle:z`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${l(t.gray[900],t.gray[100])};
      margin: 0;
    `,pluginMarketplaceSettingsPanelClose:z`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: transparent;
      border: none;
      color: ${l(t.gray[600],t.gray[400])};
      cursor: pointer;
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${l(t.gray[100],t.darkGray[700])};
        color: ${l(t.gray[900],t.gray[100])};
      }
    `,pluginMarketplaceSettingsPanelContent:z`
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    `,pluginMarketplaceGrid:z`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
      animation: slideUp 0.4s ease;

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,pluginMarketplaceCard:z`
      background: ${l(t.white,t.darkGray[800])};
      border: 2px solid ${l(t.gray[200],t.gray[700])};
      border-radius: 0.75rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${l("linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)")};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
      }

      &:hover {
        border-color: ${l(t.gray[400],t.gray[500])};
        box-shadow: 0 8px 24px ${l("rgba(0,0,0,0.1)","rgba(0,0,0,0.4)")};
        transform: translateY(-4px);

        &::before {
          transform: scaleX(1);
        }
      }
    `,pluginMarketplaceCardIcon:z`
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${l("linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)")};
      border-radius: 0.5rem;
      color: white;
      transition: transform 0.25s ease;

      svg {
        width: 20px;
        height: 20px;
      }

      &.custom-logo {
      }
    `,pluginMarketplaceCardHeader:z`
      flex: 1;
    `,pluginMarketplaceCardTitle:z`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${l(t.gray[900],t.gray[100])};
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    `,pluginMarketplaceCardDescription:z`
      font-size: 0.8rem;
      color: ${l(t.gray[500],t.gray[500])};
      margin: 0;
      padding: 0;
      background: transparent;
      border-radius: 0.375rem;
      display: block;
      font-weight: 500;
    `,pluginMarketplaceCardPackageBadge:z`
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      opacity: 0.6;
      padding: 4px 8px;
      padding-left: 0;
      background-color: var(--bg-tertiary);
      border-radius: 4px;
      word-break: break-all;
      display: inline-block;
    `,pluginMarketplaceCardDescriptionText:z`
      line-height: 1.5;
      margin-top: 0;
    `,pluginMarketplaceCardVersionInfo:z`
      margin-top: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,pluginMarketplaceCardVersionSatisfied:z`
      color: ${l(t.green[600],t.green[400])};
    `,pluginMarketplaceCardVersionUnsatisfied:z`
      color: ${l(t.red[600],t.red[400])};
    `,pluginMarketplaceCardDocsLink:z`
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      color: ${l(t.blue[600],t.blue[400])};
      text-decoration: none;
      margin-top: 0.5rem;
      transition: color 0.15s ease;

      &:hover {
        color: ${l(t.blue[700],t.blue[300])};
        text-decoration: underline;
      }

      svg {
        width: 12px;
        height: 12px;
      }
    `,pluginMarketplaceCardTags:z`
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-top: 0.75rem;
    `,pluginMarketplaceCardTag:z`
      font-size: 0.6875rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      background: ${l(t.gray[100],t.darkGray[700])};
      border: 1px solid ${l(t.gray[300],t.gray[600])};
      border-radius: 0.25rem;
      color: ${l(t.gray[700],t.gray[300])};
    `,pluginMarketplaceCardImage:z`
      width: 28px;
      height: 28px;
      object-fit: contain;
    `,pluginMarketplaceNewBanner:z`
      position: absolute;
      top: 12px;
      right: -35px;
      background-color: ${l(t.green[500],t.green[500])};
      color: white;
      padding: 4px 40px;
      font-size: 0.6875rem;
      font-weight: bold;
      text-transform: uppercase;
      transform: rotate(45deg);
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.5);
      z-index: 10;
      letter-spacing: 0.5px;
    `,pluginMarketplaceCardFeatured:z`
      border-color: ${l(t.blue[500],t.blue[400])};
      border-width: 2px;
    `,pluginMarketplaceCardActive:z`
      border-color: ${l(t.green[500],t.green[600])};
      border-width: 2px;

      &:hover {
        border-color: ${l(t.green[500],t.green[600])};
        box-shadow: none;
        transform: none;

        &::before {
          transform: scaleX(0);
        }
      }
    `,pluginMarketplaceCardStatus:z`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${l(t.green[600],t.green[400])};
      animation: statusFadeIn 0.3s ease;

      @keyframes statusFadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      svg {
        width: 18px;
        height: 18px;
        animation: iconPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      @keyframes iconPop {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `,pluginMarketplaceCardSpinner:z`
      width: 18px;
      height: 18px;
      border: 2px solid ${l(t.gray[200],t.gray[700])};
      border-top-color: ${l(t.blue[600],t.blue[400])};
      border-radius: 50%;
      animation: spin 0.8s linear infinite;

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,pluginMarketplaceCardStatusText:z`
      font-size: 0.875rem;
      font-weight: 600;
    `,pluginMarketplaceCardStatusTextError:z`
      font-size: 0.875rem;
      font-weight: 600;
      color: ${l(t.red[600],t.red[400])};
    `,pluginMarketplaceEmpty:z`
      padding: 3rem 2rem;
      text-align: center;
      background: ${l(t.white,t.darkGray[800])};
      border: 2px dashed ${l(t.gray[300],t.gray[700])};
      border-radius: 0.75rem;
      animation: fadeIn 0.3s ease;
    `,pluginMarketplaceEmptyText:z`
      font-size: 0.95rem;
      color: ${l(t.gray[600],t.gray[400])};
      margin: 0;
      line-height: 1.6;
    `,pluginMarketplaceSection:z`
      margin-bottom: 2.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    `,pluginMarketplaceSectionHeader:z`
      margin-bottom: 1rem;
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      background: ${l(t.gray[50],t.darkGray[800])};
      border: 1px solid ${l(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${l(t.gray[100],t.darkGray[700])};
        border-color: ${l(t.gray[300],t.gray[600])};
      }
    `,pluginMarketplaceSectionHeaderLeft:z`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionChevron:z`
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${l(t.gray[700],t.gray[300])};
      transition: transform 0.2s ease;
    `,pluginMarketplaceSectionChevronCollapsed:z`
      transform: rotate(-90deg);
    `,pluginMarketplaceSectionTitle:z`
      font-size: 1.25rem;
      font-weight: 700;
      color: ${l(t.gray[900],t.gray[50])};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionBadge:z`
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      background: ${l("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
      color: white;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,pluginMarketplaceCardDisabled:z`
      opacity: 0.6;
      filter: grayscale(0.3);
      cursor: not-allowed;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `,pluginMarketplaceCardBadge:z`
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 0.25rem;
      letter-spacing: 0.05em;
    `,pluginMarketplaceCardBadgeInstall:z`
      background: ${l(t.green[100],t.green[900])};
      color: ${l(t.green[700],t.green[300])};
    `,pluginMarketplaceCardBadgeAdd:z`
      background: ${l(t.blue[100],t.blue[900])};
      color: ${l(t.blue[700],t.blue[300])};
    `,pluginMarketplaceCardBadgeRequires:z`
      background: ${l(t.gray[100],t.gray[800])};
      color: ${l(t.gray[600],t.gray[400])};
    `,pluginMarketplaceButtonInstalled:z`
      opacity: 0.5;
    `,pluginNameAddMore:z`
      font-size: ${i.xs};
      font-family: ${o.sans};
      color: ${l(t.gray[600],t.gray[400])};
      padding: ${a[3]} ${a[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      background: ${l("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1f2937 0%, #111827 100%)")};
      font-weight: 600;
      position: relative;
      margin-top: auto;

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        &::before {
          content: '✨';
          font-size: 0.875rem;
          animation: sparkle 2s ease-in-out infinite;
        }
      }

      @keyframes sparkle {
        0%,
        100% {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
        50% {
          opacity: 0.6;
          transform: scale(1.1) rotate(10deg);
        }
      }

      &:hover {
        background: ${l("linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)","linear-gradient(135deg, #374151 0%, #1f2937 100%)")};
        color: ${l(t.gray[900],t.gray[100])};
        border-left-color: ${l(t.blue[500],t.blue[400])};

        h3::before {
          animation: sparkle 0.5s ease-in-out infinite;
        }
      }

      &.active {
        background: ${l("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
        color: ${l(t.white,t.white)};
        border-left: 2px solid ${l(t.blue[600],t.blue[300])};
        box-shadow: 0 4px 12px
          ${l("rgba(59, 130, 246, 0.3)","rgba(96, 165, 250, 0.3)")};

        h3::before {
          filter: brightness(0) invert(1);
        }
      }

      &.active:hover {
        background: ${l("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")};
      }
    `}};function e5(){let{theme:e}=eW(),[t,r]=(0,a.createSignal)(e2(e()));return(0,a.createEffect)(()=>{r(e2(e()))}),t}var e3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAA4+klEQVR4AeSWBXBbPRaFYwonxlLw56LbnxnLzMzM6DLubBoqt+G4TKEyMzdQhtAyMw4tGXr2RH5ONHEWy+2b+eZeS1fSvTrW0/N7Rh410RFNHX0hpBnpQWaQ9SSPnCIl5A4pF3j8EqUvl6wl00l30pQE1zG/huhEDi/5oyLaOkQwky4kkZwnv2YkaB8KZY5fkrMknnQkxjrE0YrcXpJHPg3yE00mkpPkzwTV6LTwCwmCyqh3qeqbnaqIeg5Vo/pO4ZvYZgx3+YWFuPzCQ4SvMhlEHGM8sfRFDOfgXLWF+iM5RsaSCDmhl+HUqGQhFL83OUr+TuBFFRrkUjW0OFQNLE5uolu0PzwP/AJ0bs7r5LwOVUiQq1b/X8lB0o1oauWpepGFMJP55Mfyq0hlCHOoqzYrPNhHAO37rRA8qBcMtomwxC9E/ZQENLSvQcSOdETszEBETpaHXRloxDb2of6GBJiXL4B+1gQED+gBzbtWH5FU+hC3WNMQ6qj1avs+sRH9iyaMVvINJE5+JakCdE51Q7NTbQp/IG9UYJvPYJkzAVFpCXi1IBtvnNiNt87vxVuXD6DxlYOCtwh/e7gkqPktYogSw7FijlfzsxCVGg+LbTwCvv4Y8ppqi/6BuoHJ6eevlU/OH8hSEibX9Dxf2N5nFvmT90SoAnUOTYRFPgkI69oa0Qlz0Dg/HS3O5qDl1X1kP6yX98J6sQDWC3mwnstDi3O5tRHt1vPsO+/bxzYxlnOIuVoW7hdztziTg8Z5aYiOsyG001eQc6nKTeWvdUgn5ndk8vN6WmQhWpOKaiECdA5tZI0QqnomRM8dixY56/HehRx8ULQXHxTuwfuX8vD+hRyy22MvVpErwxjJ9+mry8+BPCfXEGtxTbF2i91rEWUbDb/AgJpXZaSPMPfI58/TadEpNpDYCRQc2ghztRABzV9HkyQbPjq+EZ+XFODz4nx8dnk3Pru0S0D/CSCtd2U3cygQfHQ0G43jZ0D3enSNMI1MblqHVE+qJIbuWf2U1Sj+p+Qnyj/KpTGEODWWcO/FDWvyTHx1ZhPaXs9Hm6IctL68w8OVnWh9VUL8fkJcqcKTR5viHJHbV6c3onn8tBpR6uuh1gc56buV2r5H3lNq1jxLrzCN5M8hUPhHQLTF66PZ3BFoeyoTXW7monPJTnS6ug2dCrcr7JB8iSJhnwzyWsyNOYpc255IR5NZQ1B9uqMsojapzinyXjxL90UuAXmgDvF3+TfUi4QbtHkfbfOT0PvmLvS+vgM9C7egZ/FW9CreJqBPtslIfZL/H6gd1+t/i/NtK9oqcu19Y6fIvU1OPCyftxI1+UcYoQ7SOSVRtsh78rTvi3BSohzjf/jXr/mE/WDpKPQv3IjBd3ZiQPFmDCjZjIHXtvxHBij24XnoNUTORNTQ74od7y0YBm99OkuouFuU2i+SIEmUpyJGI/JjrxjB0ebqZLvuXIpRd7djxM3NGH7NjhHXN/1v3Hg6cVK8bEUNrIU18XW2bVF1ncHRJtD+XdmDSmKS9uiJihFDfk2EGKGxnvsitv17GHZ6NSaVbsO4G9kYX8VN+8Mh5pCxPx1u2EVNrA1DT6xExBctRM2hMWaxB4ooPyENnsRJkRdoJIsRFisSwrujO2BySRpmlm7C1JsZmHY7qw6yhf2P3KoiE9Pv2DH97mayCdPucF4yjW2MeVqwtkzWuBmTClPQcsg3onZlD2RRTI9bFI10Z/zYK4b+FY8YX9p6Yc6dTMy7n405t9Mx524mf2dIpMtWIZNxwkp+BmYTzoP59+ywlazFzItLMP30VEw9NQZzzo3E/OvJjM0WsVxHnst3Ptn3jVOsT9x/8DMxmzXOK82mzcCnk7uIPdC/apFFqSSBj+vrS+115AvcoIjRfmFfLC3NwBKy+G4aFt8jtEvup7M9E8vKsrC0LJu+gO2ZIsZDukSa4Fvl2ZhXlIzJh0Zh+t6PYdsfi3lHXkXc2bcQfzoSi0oSuVaWNP7Js4SwRk/d9L+Z2d0jSqxJFuWCtG+qx3E6cr1iGF8xecSY3QPx5WlYXpaGb9/bgLjSVCRUpCOhPANxd9djaXECFl5ahIUX5mLxxTlYVrgAcbdWMT4Ty0vTSApJFcTR5zjMODEHg+1WTM6NwrR9LWA7/C4Wn/4YieffwNKLkzk2Sxr3dIm7l4J41k4f30ztJPbEQFGki37To3516RQ7p/pkxBhBi6/GtUFyWQpWVqQg6f562lSsqkjjpi/HlAMTMHxbDwzI+gwDs1th+NbmmLC7MWbubYylJz5B/NVxSOaYFeWpnGMDkks3YPV30jHj6Ex0XBWOkdubYeQOK8bkNMP0g1YsONaE4z5H/J01HJPCMeslNghWyNbX/5/ifPto64xjLqWe2pNoPxn6hUcU7pH0SfxPaswBSpJmCdRfZGZVtbtHa1/btm3btm3btm2bv+3Vr5mdWYzV3aWMt1un526feXv3/9+77nO+k4rs7oqozMCzrmzkJVfCiWfArYETAK2vq7N4YFGuf68b8Ji3P46wHJJnOUEQsLywxKUX7+bAgUuIs0VEPNaCERDJiUKlVjU0qspwdYZy5WbY1u1QY7HWMHtoit/+4fOsG6kiouSaMdgMCIPDyCWMbHoujaEdZFkCIgCoKuBBPcB/poIhoF5xgaOz2OELL/4cu/+8i+pIxS9Ptg0AcCPg7BWdHvcqOo6xPFAC/gC0gmqQd2Y7FuD5X3wOzaEqPkkJneXg2H5OOfUvHJoaQ/GgGdYkBDajHOU0KoohY3k5JlePNy1CduM0IKpswqKcftIJLHR2U45qLCx3iULBGEOne5Bq5basWXMNkuVJsuVx8u4EQb6MkxxnLMYEWBEsHiscxYClv3/8tdXtlZYzQJZRqZW46k2uwh+++EfSdiqu7DKfeQPcEfgEkB/vrZErcTo+g/BUlKS5oR7OTyzyqu+/mKvcaDtxO8ZYAwon/ekUdl56IUvdZWJdYKTZolYJCMKMKIRyWahXLM4Is/MJJoBGrULEBWzZ/jKSpMIXvvs2tq7bTCdOMAbKkRIErjDMyMA2nIsxjFOKPKXQUA7tYcpEwTAm2EoeXAWCJpCDKsgxHk//0UN0/O/S3BNWInaduof3POLDDGxuMjs2n4gQqvJB4EVAAKRX2iB9xrgz8DsgH97aslOXz/HEdzycOz3yNiTdBDECAAg+98SdmNmpOS6/dIwzdp7LvvZFXGPdNlqtgKjkCZxQqVgqoWFqKkGcJckmWNu4MyYf5CdnfJGtAzuYX46JnFKtBjQbFVxgyXUZZ4VSWCIIhDCEUiBUS4ZG2dMsx5RsFQ1vjZauiqKAHueR9Urc5grw/yynXgmigN986U987U0/YGhrS6cvn1PAALcCTv57V5dcwS9cCFyrNlzOlqY67mb3vh7Peu9jCwV5r4j07xKMEUQMqsr89ALnnb2TL//lZyRukdvu2EqzaXrKNERWmJxOUcmZPhiSJxUSO02WCN3YMzwY0WgEZN7jNaNcstQqhmpFqJVMcWpczz8pQilyDNcczXAaCe+Mlq8P5PwnPqpgrCHpJHzwuZ/n/D/todwKs85c4oAzgZv8PYub42TjLwSuBaQuMA7gES+8B/VqgPE5oVEC6QOPyTNIYxw569e3uMe9bsX7n/siHnnN+3LhzjajlyfML2QsLmXML2cYoywuKgvLS0zMHSLtGubmMiqlADHC3EJMmmSUgp4BnCKieBQFrBNqZcdg3RJIzuRCl+nOMJr8gSC5lMAcmfeH0X8rodFCF81mxGNfdl8AytXQAakINwaeBigQXJFTN0AOtIDvA+XhzQ2ZGV+Sp77lgdzirtchS1ICI1gB0+c8BSV0hiiwLC92GLt8gp079zI1M1MITB2cZ+fYImmbwhBeIUuVTidnYR7wjribE1hHVLakWU4UGYIQEAXxGAEExIAxIICiCFCJLNXQsBynZL5EyRwiCrdhbYhZ7ej7MKvG/6jcCs6AZjlrNrSIqo6Tf3YBw5vq0l5IBLhpz8HHgBzPIA7wwKtFuEdQtunSdNe11lR49lseTLnsML7/4bRA0MLBtpe7nHXeHn5/5omcO3oyB5Z2sX/hLKbal1CuRkRGmJ32TE9moIAVkgSWFnLSBFSFUsWCeoyBNMmJD5OmnixTsryYxwhF6xw4K1gj5F5BoBIYuqkh85NU3BClaKRnEMUcU7G6SuHHktNjyHE8uQKD4qywfvMgP/zMn+ksJuIik6rXJrAInAAEgO83yOrTMQR8HSit2dSQpblYXvbBR3CdG20hj1OcBYNi+v54KbCMjU/zgz8fNsT4GZSjlIF6hcF6laHGIK1qExt4xCnGQRzD6P4M3/VghLitBUHJIQashSg01GqOVj2kUQuoRI68axgbj7nsQJeknZHEQp4ZVME6QQyFYUJbGAUnCc3qVpwxGFaU1fvv5jD0nqF/XuiX68FRub/t0+PJ9dYBn9MarLJh2yB//fkFjGyqFzoFrgd8EugCAkB/py8UewXwzlLNpd2lLLjWTTbyzq88lUotwudK/w5VJXSO3Zcd4vN/+AuhmaP5t1BXQZVu4nsBgCBGKFqBuKuM70uYnc2KdZ8b6o2AUgmishBFhykZ6lVDo26pVgyVwGK8MLk/4ZTzFtnVHScX2FSFq68ZZNvGAdatjYhCMBhKLuYaGx5IuTSE9xmI/Ec8vHWWhbk2z73/R5i4dI4gMmka+wB4HvDRPt0jqyKrANgNbFu/tZHvv3zBvvVzj+FO97ke3U6KGKHfGIGzjB9c4MO/+BOSz1CJhCDKcKIkaQ4ilEqmwFnBGJBeVrvU9sSJEseeUtmyOOWZXYLBQUMUQalw4pB7j6rSariCasUy0gjIO4YwvS5GAy4bH2fvxARnHjyPZtVz82ttZeO6Fs7OcI2192D94FXJ8hT5TxgE8F4plQN+/b0zefNzvs2KboGLgGv320BW5R0PBr7nQpNliXcjG6p8+dcvoDlQIcs80leusEboxDmf/vmp7Dq4h1ZksEEG3pNknnLFUC0bnKOQNZbiOzodj6pQr1oyr1grNFqO9r6cE09YYt31SjQqUC4X+6kcxgALiykuFFpNRyV0bBwUhmub2dy6NYENWO60mZld5MJdo/z+/DMImpNc/1qDXH/jrbn6uhuQaYYgVyJDLOZX9/8hOVVwgWX60CL3u+E7AQgik2eJt6rcE/jVig3MqizpyQAj6yoAPO1Fd2bNSBXJsl6Y63sokRPOuHAffxq7lIZ1ZD6l085ZWlaCwOAM5LknTZU0U+ZmM6ZnclQNQwMOY8FaaNQs9ZKhUhbqO2MmDyV0u548V7LsSOuJItixqUQjMizMpyRZxqEFYXppF/um/4zPYurlgO2bhrnPXW7MG570aG6/6R788cwxpudncCbvhaS+j/5xP7q6/w/LhUYLHW5YV+fFb74nAEMjZVU9qnNAAVyfM98M3NU6Ie6mFuAWt9lefKk3ihEAetYWZhc6/PK8vWy0SppnZElO7oVyGdQfMQSoCiLKwnyGiqXRsEVx0edKu5Mx2AoIAyF0UkRT9fNz5HopYyg7eo7de8hzIck9G9ZERZ4ys5AWexbadcruUhY7m1jbuDp5r+g41Kjy4LvfjGttX4e3KZERMl31dv+bP16VwCi3vv1VeD+gqhYAuBcwAkwCYvtC3UcjPGBgKMpmJmP70MfekAc85AaIKnZVvhEFlrN2H+Sj5+5ku4NOEpNlQhgC6gEQgSxTDkwkpLmj2bTFeik0RWJYKrJtQxgcxsHBvV2SP3YZHBT2NYVuW4vMPCoJ1kJghVyVwaaDnCKxDEtgCLFmjqFoGxVXwgDGA17ZMNJibWug6DsxWBFskUMVYGSlMKgUrfwDGDBcwbp6Ws0So5dNcvap+2VgOMy67bwMnAecCwQWAFDgrcBVh9dW/MJcYp7zkttz7euuw6c5zqzE1eCMgsIvT7uEsalJKj4rIqkgNKj3iAAoeQoH9qXEuWVgMMAaT61sSFJf5BPlnqN3AgATZ7SxezIGIsM16gF/dHO4ZUetagkiQdBCPvdKqx6wtOxJ85wgDBCZpeFGGIqGEM2wCBYg94h6nBRjHIIVeuvSG68ApmgVy0qIC1aOUd2Vvvl+3cgx5ADTSxRRpVoJivzqVz+9iOGRsl+YT4oV4NuAOMADQ8AtANqLsQG43mFjOM0JejG1AgDWCvNLCbsPzdNC6MQZNjD43COiiFGkK+ybXGTZe3asHSLPM0QE7z1L7Zxq1aCq5LkWCl6a8+S7MgZ2lAnPOcDtH3M37nWTbTzi858hlPWgIWbYUgQHYliOM9YNhYwe6NIuZQTGMd0ZZ3t1KyEK5CACAAqogoCuvrREjsohqChgUfGsSCkKR0VYabRvzOp+v1xf34vixHPDG6wHIIlTAyDCbVSpAUsWALgz8OTB4TCbmUrsAx9yTR76sOv3jrRi+jLPkjMcmmnz+TMuoZx0yNQXRlKfYw0EqXDq+Ci33byD2+zYxpkzkwyEhlIkvWybXmFQQJVSaJm7JCb+TkJjs2NtuMTtnnNPbn7jHdyouYGPnXMCbjEqrsmgDCKCEcEFYBGWujml0CESs628maoEiM+xqqxgAENvzBHooRhVHGA4+jZbVq60lbZIAP+hcotZaVWpVAIuunCC886Zot5wGse+DvwWuMwAALcFqNcCLQa33Ua94jA+LyzqWEFxosRxyp5uAqoYa/HeI0DcTjllfJQX3/oOvPsp92LjQIuJ9jRODFnmWV72oJBnSpYqqLDYXqJ9bk5tY0Alz2ldbQsb1jTJ2x3ucZOr8rNHPYULkkV+etEkE6MJy+28uCLbXU+pJOSppxMLM/EC3XiRIM+xeYZbTXaE/Cj5ETzOe6w/0mpBcKTVAgIFhxBgCBAcUOgA34f2tXqM+T7EIz6nVQu4wx12AMjgQJgDALfur+zeEkC9CsANr7+OamQwXjCrksFSKBRT3mOtIUPBK5IroXV85fEP5363vQbd1PPXyybYVhmkkMmF3INYwQOqBpVFrs7tGZ0fpVPfQ8OUWLOmSjUUSqL4NOYu19vMWfUn86HfnMAJY+OkKWzZHoEI1gmViiNJlbbmpL5DRZREPYLpu2oUEIpWBChaVAABjEDRp2/+6JwCiAFRQFH8qkhNjt9flSRWIsNNbrQeAGNlRehWAA6oAtcEOHiwYwB+9IPzOeEvl9CfDAKoQuCEsckOnDbOPutJ1WM0ZzmOuda6YS4dmuSjZx5icrbDOaeOkmRtuqEgohT7QyGwgjuCS9DaOHsvHiVeXmbUdrgsSRn7xJ+xzqBFSSWnVasgo8rlF85yKHZcts4w0HKEziAixWlz5YyZ+ulsCPeS6UpwIazWSW8B+tb751T6Npije1Z8Sa8H+P/PSorinOXgoUUA9k90jAioch0goJe6aw9fiowCV0iDSANKGhVUVPi/91WpqiM8xv5yH6wiUOCY1KjpUDisLdYotBRs33qkwP8U5bJRwPfGCbAD4AGAAtmK4MhIqJs2lQ9T0bVr0VYL/T9sm7WZJDEUhDUzzcwgWGY0F/xLYAI4RutSuUQmwaPa1/A1fL1GiVX/E5mK405pwqBZrwPcyKLxWjtm+GGrM5iBAWYyrO0VVtO5VOYix4bK+noFi9S0Ry6xfIYyZRCljuPDHJeXJwteLiIcnx/CCKluMBjkl3oMiUvylsoC8qsM7KsQRUJtQedjrlnbpoQLyWndwgGviHtU4P7uDFE4556cVLi9PQHnxmKP0iZmYZFMKOXj+LhEGBI7o/XTngQBsfZ8qutg3YOc7v0bEvvZV/4sN7mBJNjb2yewaiWkbHOlBlH/HoGCYQ7nAvf393h+fh7aNE3v8o1GwQocHR2NG5vnQ7mu696fPMMIRVEOfefn53j37h1+/PiB7XY7tFdVBV7zdo5Uqo9V9qKyav3auDS9e0kheQsh8fj0hLu7u95r1albw+B/cHDwKpf82/FRFHdsYtU1H7wsy+7nH8L3Q9zc3LRq2tbr4XVP9/4zif2aPJlpEG2+2+1e2KYSDIhhKHqCYU7UK/QmvURv0eNU71BBLEGI7IlIJHjT/hm1DZ4lb0U+SinQWsM5B+/9A2stIaWEdV1Jf54ncs7E11rBOb/GvK7Rb+LneYZSCjFGyluW5ffrvhfAGKO8u3Pfd3qbpgnHcZCn944xBlprkFJi27an9/YZY/7uDCFACEHaD6dmApFdFsbx/3wN9dkiI7skxZRIWRrJEpFUIhVFylKohAiRyCA7LQiDVIpiKimjXarRlLRKklIp2UlkZjrz/I95Hne67/t+mR/Xebv3LM85z3qIh6t9OCfnWlpa8t9oXDxo/i4oKHBbW1t+bHDdu7s7Nzw8bGc1Pz/vXl9ffb/b21sam82xvr7uXl5e/LenpydXXl7u3yclJfn2w9n/DGEqkkLS09N9u7Gx4T5Df3+/XywSPT09Nm9NTY37W26EysPDg7ynS//gWx6ocnh46N89Pz+7WIyOjnrlfIu/eBEC3MzMTOgbFRT01qqqKq+wWKyurvq+VJrCw/9JvI7vh4aGQnIGjD2Sh/wC4bdIISslJcW3U1NTFJZWYQLKvYOPPygeKC2wpaXFTU5O2sb5nS1ZW1uzeaurq72VEVocWV5e/jfJfXWPj49O2dzcdLOzs9aX852cnNBzTBb9dn5+7uW5v7+nZ5qcb29vlNF75dXVlV/n+vra5KRx8CG9vb0mJz2b0DMI93hxcWFzq+xdXV1uYWHBKfQ4jq+oqPBrK9vb2/59amoq22gK+RXC7x+SeiDufx/822s4qJDm5mb/Pi4uzrc3Nzf2fX9/34TmYegctbW1KqjOo4cR8oadnR13fHzsFBqFzlNUVOSOjo7c6empV1JlZSXfW/hSqKDgHhobG00uKpVjgwbAPn19faYwQkXo+Pr6eh9OFcoQVogpnTBU2fjExMRYClljpR2PKIhAkMNGRkYGCH8H4f/zErEwNDU1QeImiGwY4+PjEGsCSU5ORnd3d8Q5lI6ODpuL6G/OobJIMYDLy0tIzEZxcTFKSkogSRLZ2dmYm5uD5CGQ4N1Jf7MPKS0thRgaiHgjJHdAycrKAsnJybGxZGRkBKSwsBATExMQj4bkScjhQzwICQkJUMTYIKEM4gm8c/i/xdhAJFT5MQov3SoqUV2cRfMQPiKUJVw55P9Ydmtrq/Wbnp4OWYS6PVlZWfHvGhoagh6i4c3cmklR2d3dde3t7S4atPSzszNvtZxbDpQtLTqUo9LS0kIyLS4uSjn9o5dBEcPysipM1qJ8jmVxYjkmPj7e1mNIJsHwp+3BwQH7WCXH6uo7vVd9jXNy0Q6e/R9fPnOz5PMtcnNzodCKicR1KGqhtJig9dKapAIBkWRIL7D1aHmDg4P+kWSPj9DSMzMzMTAw4OenxUdDFIG6ujpIFQVlb28PEt4gBQEUKUzojaEzUI9VD+c+xBhgmNV/0da8rbOzExJ6/drv7xYBzOwNKoxz43+ii0oZaRtV15d8gvz8fBANW+JRkHxi4wj7SelqG+eG2RLxHBApjSGWCSkcMDY2BknqkCRroUxKSLS1tUGKD8SirKyMSuS8/pEc6NfneIUHqEbDPlJoQO4/IHl5eRDvpwxe+eJ9lEXltZZhlnLxb+5VvByE4Y370zj1+vbu/68goJY/Yyb1fwg5Aw2HgSAMv1QVFAV9ggIU+gYtpQ/QlkbcMwSEwAURTp4gESIA5E0Ocvst/8pochlWGdmd3ZmZnf9f7hgq97kr63K5CImpTBfhJlIUBdefmioCBGUNmqNBaIK9eZ57gEDp3243A58nNtkD+sUri+Eq9999ClXp+tV3gt+M3W7nG7cEW2VZmu/v9zuQ2KAx13tEbtUKZps6AfmRci0gLjOCYZzmGrHXD8MwSiBndV17J/ILZJbQHw6HA4cOTs+yzK+x3++Zq0Ooh4DcjLNAQgRJejnBgYZZlAU/QXc8Hg0MhSSyftu2Y9d12NSeIHoQVNkMaK1pGvZo9I/HwyeaBAKIPXc7CI3ZXiTONY+yvqf/EuN3LSBEeSrn8xkjJuOqqjJzcbiEA0dR5DcnUUAYcRyH7xACStBXhOCbpo4zLcCw1Y2oujUEUwWvT6eTOMeiuB7EXJLEJKRDY8am/NP3vV4DqBCGCYj+HvFrLSB6d0qSZEQgdmQU5MdBwhFh8xz29XqFDOH3er2STSKDPCXwDPNRypvNJrBeOY3sRfd+v8loZbgOSTbCAT4SB26hb5g31WEX+65XeMS03W71/GHOBhok2ZinwCigkMQ0TWUXYmvWdjTBEEzmsAb7eT6f6HkDnHs6+SPEGtIziqHo9+zftu0F1LbbeTdRc+GnuXmo20F0HSfnld+Z/x1ZkvdBnE5n9NPmABtBC+FIBIuLi4x2xmmHh4eIehiNwMEzAaIk08Rx+eOTE2xvbxPEQm1ui12UXN40TSqD44V48/MLvj3vU3mB29tbPD090c4hkNI7j0VYthPIrayskA3ub3Nzk9Po43jEfJ4wu6tra5wmqypkReH1dqdDPOoD+Q5WOaX19Q1cX1/j+fmZnuEBPZ3JUEkgKulQn6hvfLwMrz/tdoc+w4ThURnEo+n6T0fWJU3Inn+pCz5aa8uoRVVUIwqqXllP2kh8maiKI0L6SrNF1CIaqiGZJQW1MO/wnymsq7Cog7aOrPVZvmbLGNVKGJRyP+p2GnWUYzrKloCqIqGWiX2TKavyN1ojYqJqCiyJqId15L7GxNKgnMek+R3qoL7NOg3WNxX1mAH7rby3gJLjSNa2n8yCxmHSyJYsey2TzPa9hmVm715mZmZmZl5mZmYmM9vyrMzyCkcanp7GqsyMvyHrTP1zRx8unq/PeR1ZWeVWdzwdEVmQOVv29/y1ZySUc2bHZXabz3zOzLDsKKl+W+UHVPB0gPNyN0lcJVQCfJWlBUKBWADfLggUtzlWCYz4G1BbYVYFdgjl02RoYjbbf2oNjfr3Q6iOCOVx/77x9sdT9p+ptM1nmhKYERj+qvllKFKS830H2KOAMvAIMNuF4RpG9F++eB+zo2VS41DazxtDA4DgreQFrmcdCN66QR8CzuWPRbpSXVmBG46nrKyvMxRaxsow0n8mWBFEQoUyVQo4HCq7/akVx+spHzi2yFikmdDClfuqlDvTBPMh7qmXEAyVSRfX0B/9HPGOGVaW17h36TizIxGzF5Yoh6MEjRDRDpXdokWBSDaHe/OevBpYwfdr7fvUQDrXzvp1tr31WWIQcUQaji7X+YsPH6ALxdVT0QIHgXNDoAkcAGZ3DEXu0dVEv+Di3Vx23g5ILQQR6ABQXoCw6XDnrViwzm9bbz0Ya0Hy2wL0tjVDj1i+cmKeqaDJTFWYGlKMVTXFslDRZWaDcRALAE4gDLjhaI3bbZOLxkLCFJ53QYnzZmeJ7hii+8Hh2kug3cHtnELfeR+cewY3PlrhxOLDXHHWBGfsnUKtDIN1oADYnJblPIgg1+cd7yevbPYHGlTg295qvQ2oTSA4A6Hilv2H+0Bmh2L30EpHA3OACYHs5PDpCAJw+8MLXLZrAmukz0KUQykNsBUISAZlKwwv2brtECcoHMYprNO0utpwjmJbCDU4ESoG1sIalbjMsAqxYtEKbCLcMF8jajvWa3UoJHz+nlFGxo4yuWcv8YdvxY5UCfedjXneE3FrGxTvvY+rdu3i9ijm7s8ewJUTdoyfRWm1CsqBUhixGJcSjoIiJmhowOQcq73DHehg67a3Og8lE5IxQXD++bVbHzwJgHXOk+JmgAzIDQAbbasBPn//PD9x1dlEUTiIYp2lYgWSkSafrk4t+e/bSgY2AspKSEWROKGZCOVQEWlBoSC0LNBgOBhBG1A6YL6VMFdvMqbbBMwyXB7hwfU5HjoYUz1vhe4cCqKPXE8ax4Tnn4X81HeSfuEMwlsPcM1skYWxSVpH2xhWSa0maIdYQuqJ5uaDh9h9cZtzztuJmCGiRgyBgAJ0PkUPIPrt7dO3xgMZGBik6gBFu9XhU3PHAGSpYQMA4Kb8gy63AisLbRvMlgL3jnuOc3ypAU4hqYNUoG8dGBlsm/8FWZdr//8lfn+pBwRN6hQbiWOj7ah3tdF0tJqKE80NGrEjHVHIuOXLnSbNVGiuJVx44Xl874uf2T/+toOGxdVj1HeugQ0pvO8zqOvvxjqh9m3ns/b0PTQuGWJ6aoQzonGi838E9X2/ir3uh1DJMONpzD49wU2fWeeRBw5Sa9bBgRgHluw7bP99zKnkBvI+lJ51cHSxzsceXGJXJZT11GkF88Cd+eVdV33aYigOHMDdX1nyzj8VALeNdVs/aNY+xRdyFJVgUTiBjhHqnR6Uniy1Hpw1y43TK3z8CUt85qpFrmeDEZOgl4sMX/4Qhas+y7c/ezcPPtbmvsc6bHCIOTnCXGeVT7ztP3n9H/4Or/rVH+KuG/6VzsSD1MZXYHWD6PgxEqXYKAQ0wpCV2+7ikaWTtCsB6ycmqbSrYK2H4bb/Pvkfnt3ON1vk/XjHwUUACoF2AAI3AA0gzP+tjPcreF6tbQH4yNwRrjtvNzoKEev86AIQgHyIsiU95azL78sEzu9XXY2Ioq0DDAojgjaCUpDYwZPoGM3SsQ1OThni5QInv2xQoaF6QREm6xxdP8nZ145z8O4Stx/usKOkeXDtXm483mS4OEo5XSKMJ7n9AY1SRxitl5h8JOw/enqkc4J04QT6yw/idlTZMz3Gj43uYjQugCgw2fdW4ACd+275FJbt09k+BhZADSQiaCDtJHzgnkMA1DqWzPfeovD/O7ATeCRUlHYUQznaMuqhX30Oe2fHcRa0Djw6T0Xy2raI5/qtH+4O+lQyyMHLY4ZP1hU33ZVSkkWk0yYSQ0lBpICCUN/tOHamI+51PhziDlhatSYjl8ac+cQQ2QhoHIPawwaTGPb2hs0ScN9JQ6kg6EChtKFrcC2NvjEg3qspPbXK+uFjNI8bTju9yIv2ncWZMgMmBQeg8gV9IL2N1cE2/Vnh0N4Krgck1Hz56BIX/ufHOLMaucfqqQbWgMcBK4DKYITAceBTRqColQX43EPzkG6XmmR72Z6lZ/N513MRVKerVHFkKuTNey2/ML7Bv0dHWZ1aYqFiWBhJOTZhOLgzZe7chNsvTdh/mmG9JSyeFMxxIcViQmjOw4E3O+57ZYeDH2xRO5kQOjjaclgcMxVhqW1YbxoWl2DVhZQujjj73yOe8O8x3/EbCVf/1C4O7h8jMQVqrNKMG7CmB/VNZd8JsNtar+1qCgPZTX+pVCBxfPr+owAgZOHxMQ8jBESTf/nHUA43DQC/9+n9rKw00ZZccd9aB/JtchLwwaJSQbfh5GgXxHma39zZ5A1mlXStzmzQBXHWGvPn1zm5z3DyfMvJx1lWpx0dBWYdlteFdAH0RtealLgQoJuCsinRrEWfKayPOxaKllRgIXWcPR0zPRxxouLQV2h2v0Bx7rMMuy9rUZ1sUG/W2buvzVP+oMSBT3V45ESLjfIqnYtSlISwokH5FGTZtDa/nYNmMslW9X2nBBaW6/xG16ehgvmW0QrYsggzgbfi7aPAD1qY3FuJ7PGO1VdPjXD+1BjSoyxATy6TeOU+YM46BN1xpKHmc2cF/Ntsyu2uRrlWp5x0EGUIQ0clhEoBygWhEkNBQ+AUzkLSUyK0Gw7TNJiWxSqhEQprReFkVVgYFtbLsBALY0YhbZgsK86fjbm3kLJUNKzVLIfnLfMLwmpNaLQA2kztijl8SHFyucOu3gnp5SnJUy1BJyZ4OPTrZCiw+RNjPWiLV74tbFo3kFhBofjQgUO896FjnFWJ7UJiA+A+4HcBAHeqhQN+E/iXYa3SmpPo8tESX/jRZzNUKiLZkxgqd/mELXVEXK5WCEcnNW8+zfJ5tcFMo4GkHRKXIC5FiyGgJ0egbN8qsvf0J/VGSBJo9UZfdaHTVTsRWqkidQotEClNrAUJYMwJF9QChjQ8a2+JI0b406UaFxQ1oiHUgwlDQ1UYHRLO2q1pPBZz6P0JF+zTPP+cCQovFphRVL48SfWzw+gFhYwKSnSungT5E0ZQue2+HYASEZRWrDZaXPDyD3EisRSVStsiEfDzwCu3WzggV60Z8ZEycU4ldg81Ev3eF17Fd154Fs46tC90nsgmFA/DdaV7bQe37FT812SbdrtGtd2kZROc7UAPBrYPIezLEeoeFBlI9yz9tlIZb8Ea6CTQbgvNprDRgEZD0WqDMRCiMKFwUUszVFNcPBPw7Y+r8PbFJp/vNNlTDFCBEIdCIVKEASSpz0y3B9g54QXXFLjs2SMUX5yiYghXRxi9fpLibSUYtb7s5gp57rLKVhgAzi/V9LZ7HuaHPnobe7s+fbjrU+AYsBdonWqWHDlSf6LgL8tapQ3XJ8nSL1/HRLUyGC347Lc1ShwObRxGK953BrymuMF0o4ZN23T6IBJwBo3JYBD1QGjp21BD2GsHAyhhX6rfzkbd+KxojAfTgnoDVtdhZRWW6zCUKi5raWIlXLevRDBS4BW1FaZHhPFhYWwYxoYUlRJ9MNZCvQ6r8wF2KeC8vZrHXRMS6QiJFMrFDM/NMvqpUdCCFEA5DyUDQgbDW9TAV4HmxHqD2Zd8gLJWWCFNRCIZZKJ/y0fHdkAyUkM+SqYeV47co81U/9dTLuaXr9mHc4L2vwIPNQdDaBQ0r97l+JBa4/QujKZJSG0bsQlKcjC09Q53A6t6IHqiZz0YCPt9PSiDts7N2QP85FHodIR6U7G8DN00TXBAMXZIc/4eeNolQ8yd3aC4q81kJaBcHEzPjkK66llFEIAohVJ6kI2cRqkARYCgcZFQPjzLzCdnCWoKKUseSh6EtyACSiv+8fr9/N71c5zV9eXBri+BIz46OpnPTwWEHLFfVPBSgXRPKYq+0kqZ+/FnsW/npE9dWVj64m2ElbLm306z3GbWmGrW2bBtnOl0lSKSeBhmkKKCAYjAgxjA2YQS5+BEoeq1B8cEDOBoCHLSHpJzQqcDK2vC2gmFWQvYM62Z3WcYHoG4B6D/Hqonv9xTz3r1oajcBBeNSFcuxEaWeG2c0z+3h8KhGBlyKMnVDjbTlfWLztx9ZIHL3/ipHgy6MFIFkcCPA2/MfP2/s8TfvcDFO6LAnEht+KIzpnjndz2ZQhxlBR6nQFvNfFXz9zNtHumsMNRcp2EaWNPq1wxxFtBopQl04FNTSqhSAm294513+gBC3FPIZpTonu1v+z4PxdswUBmkDJx3MoQ9oAoUfluzBUY2u1d7GGT5fwBGNBaNsyEmMOj2MHtu2svwA2WkYlFkKQtAZZFBs5Py/Ld9mi/MrzERarNsXAjcAlwDaMD9ry4TG/qD54CfrDvhnGqsblrcYHcl5orTpnAAWqON5dBwyl9MrXOstUypbai5EsZVMTKEZQTbbeM6YObBrIJdR6QOqoKokr8hZFEISqlT3uvRXorN7UBlv27ptX3NAa10vx1p3e9XykeEf7O+gdxoyKcZn/t725IfzTsw4nAmJFEJC7tWiIIhho5WIQTR5Be3QWnNy247wCvuO9TznRxtGx9CvAiYB4LtgIRs/zI+nG4AXqLglx+qJ0k37OKf/cw93ZCZ5KpdY9BJeGBqlj+cmWDZDaELQ6zpEItgUDiyyycG7RIi0yHurFBoLVJoH6GY3EHMIsQg8Yyf39VGEECh8JfrUWgkDwTIYPn9CizZMQpBcNJPHbnzAkF6wADrGEQ3ICp36qzc4EcBZECME2wPhuiuNVgXYDHMXTLHxsg5nH3bDlRHIUWLs0IQhlx/8Di//vn9vVEVXd+lCmKBfwDu+t9dJnZr6gqBA8DeYa1MLSyFe5Imb/mDX+aBc67kTwsVKkpTwrGBATGIWA+ja53bvJei8dEgRM5QbNcYrR9huH4/leTzFCII4wmiMCbSTQqBIwwgzteUrQohzKWzflSEKktpfoSWrxd99bZ95ClQgkbnb4gCgzAV2bwC4ugBVh5MgHOaTmSYWDudC+7bw/BjBSjCodoae1724f6oSoFpOAmB/cAled/+3yw1fgVwB8Dw0LDUNmqKJzwTfuanuTAMMJ06LbGIOBySWxJBobRfssLlLi4q+v3Oj1BimzLWOMn06r2MtD9AQUNYGCMMS8S6RaRT4i31I9IQh315IL4dqGy/HwB45YHonrKa4RH4qFBKbaYtBm36IPARB0YUgsZJTyFpaMCVOHfhTIb2V/jpP76BT8gSO+PQHU+MBgD2AQdyPuX/BAi58PolBS8RSMujY9H02ipyzRNYfdoLaCQppOnA4cigUAZdFULickxULRBUuirFqDhA/NVghaD1AJpVmlAcE81FZlbnGG28h5JOCOKYKJgi0m3CICHOnO9HYD5K/HYuUryyIXNWwIP8KBU/qtIZiEFf/oaoQ0EGyW8b6bV9HxrnQnSk+j/Kf/yPI9z9djh9KuDoojUKQoGfAN6Q8yX/N0DIUX0dgzdP1NhELKvLcPkT0Nc+FXBgLQK5S+0C4qM/CoiHipQmq8QTVcJqETSIcSglvjjTB4MI481lZlcfZKz+WUryGGEMQbBjAEB3ujbxw2NNlB+ReVhhJg+kJ1/wPQD8f8iGuj5SBAEgQAgRAhwaVJAB6Mv22wHiOijdwLgy73nlCu99ywanz3ZhzNvE142XAL+Sj4yvBpB8zvsC8GSgw8hYgfVVuOopqMuvHQCwJr8yQtb0gHpWUIWQ0vQw5Z1jxONVlAJnLcqPkjSCURrbA9NeZ2b9IOPrt1BJbyEKQEcRUTjpa0tCpC1xaLOhM1Go/DlNrpZ4MJspC1AAGqXCvkRFQITgUHRAbSDSQAAgb7GAM0ABOnIxH3rDAd7/BsPMLsXJI9JRioIIHweel/OzfLWAAASABUp+pHAekFAZjmnU4NJr0F0waI0kHYDs+pYfowJaowKNAOIf6SnNDFPdPUE8MYQI4AYnndliaQZNKkI1aTBdP8lE7SGGGzdRlIODM+2I/vAzDMvEYUCke1AsUdhVdvklkBwQjdIaraOuDf2Iqo6SFTSAeIdrMHp3156BCYqkwQhOFSEo4XSRNlWS6i4arsT1L3knN73mE0yeUWXpUD1BESPcA1wJ2Jzv+GoCyaeucQ/lDCChOhpTX0Nf+UTiZ12HKpZw7RaCIMbgkgTptJEkRZxFKQ1RMCjs1vXBVE4bY2jPFNFYBRFBnK9FCpRzOCBBoaxhtL3BeHORkcYhRltzlGSOAq3NIh9moy/8anR6kLoCu7kAMqC8tSEkwbXUSxdSK+2lURinHg3TjMqYIEZ0gFEBKI3rClHoUon2ao1P/vPr4I1vZOyMUVYPrWUwsj/LWs/5jK8FkHyRnwFu9VA6XSiFHhR1zoUUXvQD6IlJXNIB6WPBWQvGIEkbV2/iOglK4YdCCjEChYihXV0wZ04TDpf9w5COLN1njw8ZFKmAFkc1bTOc1BnurDKUrna3l6i4JQpqnYg6sU4Je+oDidBBEQnHMNE0jeLp1Mq7WavsYK0wQj0qYoKIECFWQgSE2TpZgM5UKFA/+BXu/q0/ZuGuh7sRPkn98FIHRQHhQX8mvpqH8bUEkocyDtwInJePFID4536bYM/Zg+tYXeUepuw7WXpRU2/gWm0UMgCjFWIFijHV08e6cCYIx4cg0IjNHrAju8IE+HMD/2Gch1QSS4GenF8RzxfuMMJFMUnXJnER07VhEFBWQklDQQthdo6SnZg6UP5hQFEaQbFxz33c8MO/BkC0a5b0yHyCUjEi9wBPBOo5H/H1AJKHUgQ+DjwFSClVA1p1DRBe9/0Uvu1aJC5gkw7OGMgmkSpf6DsJbqMO7Y4fjYVID4xx0G0Xp4cZ2j1BcWoYVYwH0Jz0heDB9AQawF9fExTiK7juSvWH4rrv7KiruKtCqAiz/QgYh0kM7VZKp52SpN12x5A6N4BYb9D4zOfgzW+HKCQYHXZ2ccUNRgTyCeAFgM1HxtcTCFv+4ddk8xsIQkOpElJfR++9gOgZLyA4fTcEASZJ+lGTDY0FAaEPRHpgUgOBRkUBonzEAHqoSGVmhEpvZDZaQRcjVBAg2WNFfYEgeC7+vEOhdM9qgqCnQVsDWIttpzRrber1NrVuu5HmnllGUHE8eI9DX8G8+W1w8CDh6TswC8tGkjREAZINbSFfwL8RQLZ+gF8AXubbCcNjMbVVALjqaYRXXk24YxZChe30IsYCmxGjnCCtFtJogbH+5MGPzIRBndEaXYkpjVcoTw1RGCkTlAroOESHASrIrzGPTz2gxKGsw6WGpJHQ6ELYaHZtx2QwUQi6Z5X064SKQ+zSMu7WW3Dv/wAKYHpSZGEpBWIANk/6VG4NZL6RQACUB2OAy4C3ZfNOKBQdcTFkYw0AnnYd4cWXEU5P4kSw7fbmNAWyteHdIGKabUjN4MZRH4yvMyL4iwL+JnlEWIqIil1bCAmiYADHH9tfYds4kq5MVwgQDIDp7MQ1CAhLMdFwhahShFqN5m130n7pKwBgfAxaLUOrHfRpi+wHfiB3OcQCAvCNBbJ9XdHAvwC/DgCkFCsBpqMxBgD17O8kuvgS9PhE32EuScANroeBQgUKnCCdBGm1IUk3529oD6cfDRqBgRRA/lq9Hli/iK72kQMgWqN78ColCiMV4pEqQRzg1lbp7J+j/vZ34h49AlEI5Ypjfd367wfwD8DvA2xfvL/RQE5dV64BXgJcDoDSKaVKQLuucb42PPs6wgsuQo1N4IIQ6UExFro2/wmxDknTQcQkqT/pzGJTb06m0WQg8tMBBvt7UdOLoi6EcLRK1IUQFiJU2sHOz9O68x5ar34D2YvJCcfKqsW5KDdt45eAu7Z+129mINn7hrlfzs8AfwHM5sBoTDsgSQHQl16JPu9C2HEaqn+vNUaU9o73AsAPQbPJQbbXtiCCf+WiSEMcogsxulzogejaIjrUkCb0rsWZbpHu3HIb9qZbAaAHbXLCysqqI0kj/9jLEeBPgDfmosIAAvCtAASALbm17EcivwHMAICyVIYc4kKadQW+95wLUGefi9qxEzU2jq5U+4Dwy1JIV2rLaqL4vgEIr+zmBw7SFJp13PIy9ugR7P57cd3UBGQ1QtDasLKqcS4AAI4D/wy8FEi2L9zfWkC2i5Yq8OPALwLng3dsXBisrp8mmnZTk3upnbtg9x7UxGQ/epQHpIpFCENUHxIDANYOfv0mRTY2kNo6srjQmzCOHDtC/sXYqCMMHa0WNJphLsrmfKp9E9DaPiq+9V8KiLb0PRt4J1ADJBNRbKgOJ12l3bYFnJf8H8r1VSpZxsdTxsYSikW75ZhV4K3A07cZqKivn5O2vL4BEQMwBTwHeDHw+M2UxuaDaFHsCCOH1gKAiMIacA5A+WPFP2ZCdhzOqX7UJV1trTUwD9zg52d8ClgG+BaKiK8+GK/8qwo8Ffgj4CPAY6dc9kOp/y56Yjt1gEeBD/kh65OAytaa56X4f/ylvSOCU5zbnOUXGf5pv5Tqa/yv+nP+4ubtwG29tu97nz/mr4Cf8mlozzbwAQLfr/nGv/j/AER3GxTUc5MlAAAAAElFTkSuQmCC",e4=(0,r.template)('<button type=button aria-label="Open TanStack Devtools"><img alt="TanStack Devtools">'),e9=({isOpen:e,setIsOpen:t,image:o=e3})=>{let{settings:i}=eJ(),l=e5(),s=(0,a.createMemo)(()=>(0,k.default)(l().mainCloseBtn,l().mainCloseBtnPosition(i().position),l().mainCloseBtnAnimation(e(),i().hideUntilHover)));return(0,a.createComponent)(a.Show,{get when(){return!i().triggerHidden},get children(){var c=e4(),d=c.firstChild;return c.$$click=()=>t(!e()),(0,r.setAttribute)(d,"src",o||e3),(0,n.createRenderEffect)(()=>(0,r.className)(c,s())),c}})};(0,r.delegateEvents)(["click"]);var e6=(0,r.template)("<div>"),e7=e=>{var o;let i=e5(),{height:l}=eX(),{settings:s}=eJ(),c=(0,t.usePiPWindow)();return o=e6(),(0,r.setAttribute)(o,"id",t.TANSTACK_DEVTOOLS),(0,r.insert)(o,(0,a.createComponent)(eV,{animationMs:400,get children(){return e.children}})),(0,n.createRenderEffect)(t=>{var a=c().pipWindow?"100vh":l()+"px",n=(0,k.default)(i().devtoolsPanelContainer(s().panelLocation,!!c().pipWindow),i().devtoolsPanelContainerAnimation(e.isOpen(),l(),s().panelLocation),i().devtoolsPanelContainerVisibility(e.isOpen()),i().devtoolsPanelContainerResizing(e.isResizing));return a!==t.e&&(null!=(t.e=a)?o.style.setProperty("height",a):o.style.removeProperty("height")),n!==t.t&&(0,r.className)(o,t.t=n),t},{e:void 0,t:void 0}),o},e8=(0,r.template)("<div>"),te=e=>{var t,a,o;let i=e5(),{settings:l}=eJ();return t=e8(),"function"==typeof(a=e.ref)?(0,r.use)(a,t):e.ref=t,(0,r.insert)(t,(o=(0,r.memo)(()=>!!e.handleDragStart),()=>{var t;return o()?(t=e8(),(0,r.addEventListener)(t,"mousedown",e.handleDragStart,!0),(0,n.createRenderEffect)(()=>(0,r.className)(t,i().dragHandle(l().panelLocation))),t):null}),null),(0,r.insert)(t,()=>e.children,null),(0,n.createRenderEffect)(()=>(0,r.className)(t,i().devtoolsPanel)),t};(0,r.delegateEvents)(["mousedown"]);var tt=(0,r.template)("<div>"),tr=(0,r.template)("<div><div></div>Final shortcut is: "),ta=(0,r.template)("<div><div>"),tn=()=>{let{setSettings:e,settings:o}=eJ(),i=e5(),l=(0,a.createMemo)(()=>o().openHotkey),s=["Control","Alt","Meta","Shift"],c=t=>()=>{if(l().includes(t))return e({openHotkey:l().filter(e=>e!==t)});e({openHotkey:[...l().filter(e=>s.includes(e)),t,...l().filter(e=>!s.includes(e))]})};return(0,a.createComponent)(D,{withPadding:!0,get children(){return[(0,a.createComponent)($,{get children(){var d;return[(0,a.createComponent)(Q,{get children(){return[(0,a.createComponent)(U,{get children(){return(0,a.createComponent)(ex,{})}}),"General"]}}),(0,a.createComponent)(q,{children:"Configure general behavior of the devtools panel."}),(d=tt(),(0,r.insert)(d,(0,a.createComponent)(V,{label:"Default open",description:"Automatically open the devtools panel when the page loads",onChange:()=>e({defaultOpen:!o().defaultOpen}),get checked(){return o().defaultOpen}}),null),(0,r.insert)(d,(0,a.createComponent)(V,{label:"Hide trigger until hovered",description:"Keep the devtools trigger button hidden until you hover over its area",onChange:()=>e({hideUntilHover:!o().hideUntilHover}),get checked(){return o().hideUntilHover}}),null),(0,r.insert)(d,(0,a.createComponent)(V,{label:"Completely hide trigger",description:"Completely removes the trigger from the DOM (you can still open it with the hotkey)",onChange:()=>e({triggerHidden:!o().triggerHidden}),get checked(){return o().triggerHidden}}),null),(0,r.insert)(d,(0,a.createComponent)(Z,{label:"Trigger Image",description:"Specify the URL of the image to use for the trigger",get value(){return o().triggerImage},placeholder:"Default TanStack Logo",onChange:t=>e({triggerImage:t})}),null),(0,r.insert)(d,(0,a.createComponent)(ee,{label:"Theme",description:"Choose the theme for the devtools panel",get value(){return o().theme},options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],onChange:t=>e({theme:t})}),null),(0,n.createRenderEffect)(()=>(0,r.className)(d,i().settingsGroup)),d)]}}),(0,a.createComponent)($,{get children(){var g;return[(0,a.createComponent)(Q,{get children(){return[(0,a.createComponent)(U,{get children(){return(0,a.createComponent)(eA,{})}}),"URL Configuration"]}}),(0,a.createComponent)(q,{children:"Control when devtools are available based on URL parameters."}),(g=tt(),(0,r.insert)(g,(0,a.createComponent)(V,{label:"Require URL Flag",description:"Only show devtools when a specific URL parameter is present",get checked(){return o().requireUrlFlag},onChange:t=>e({requireUrlFlag:t})}),null),(0,r.insert)(g,(0,a.createComponent)(a.Show,{get when(){return o().requireUrlFlag},get children(){var p=tt();return(0,r.insert)(p,(0,a.createComponent)(Z,{label:"URL flag",description:"Enter the URL parameter name (e.g., 'debug' for ?debug=true)",placeholder:"debug",get value(){return o().urlFlag},onChange:t=>e({urlFlag:t})})),(0,n.createRenderEffect)(()=>(0,r.className)(p,i().conditionalSetting)),p}}),null),(0,n.createRenderEffect)(()=>(0,r.className)(g,i().settingsGroup)),g)]}}),(0,a.createComponent)($,{get children(){var u,m,f;return[(0,a.createComponent)(Q,{get children(){return[(0,a.createComponent)(U,{get children(){return(0,a.createComponent)(eM,{})}}),"Keyboard"]}}),(0,a.createComponent)(q,{children:"Customize keyboard shortcuts for quick access."}),(f=(m=(u=tr()).firstChild).nextSibling,(0,r.insert)(m,(0,a.createComponent)(a.Show,{keyed:!0,get when(){return l()},get children(){return[(0,a.createComponent)(er,{variant:"success",get onclick(){return c("Shift")},get outline(){return!l().includes("Shift")},children:"Shift"}),(0,a.createComponent)(er,{variant:"success",get onclick(){return c("Alt")},get outline(){return!l().includes("Alt")},children:"Alt"}),(0,a.createComponent)(er,{variant:"success",get onclick(){return c("Meta")},get outline(){return!l().includes("Meta")},children:"Meta"}),(0,a.createComponent)(er,{variant:"success",get onclick(){return c("Control")},get outline(){return!l().includes("Control")},children:"Control"})]}})),(0,r.insert)(u,(0,a.createComponent)(Z,{label:"Hotkey to open/close devtools",description:"Use '+' to combine keys (e.g., 'a+b' or 'd'). This will be used with the enabled modifiers from above",placeholder:"a",get value(){return l().filter(e=>!["Shift","Meta","Alt","Ctrl"].includes(e)).join("+")},onChange:r=>{let a=r.split("+").flatMap(e=>(e=>{if(1===e.length)return[(0,t.uppercaseFirstLetter)(e)];let r=[];for(let a of e){let e=(0,t.uppercaseFirstLetter)(a);r.includes(e)||r.push(e)}return r})(e)).filter(Boolean);return e({openHotkey:[...l().filter(e=>["Shift","Meta","Alt","Ctrl"].includes(e)),...a]})}}),f),(0,r.insert)(u,()=>l().join(" + "),null),(0,n.createRenderEffect)(e=>{var t=i().settingsGroup,a=i().settingsModifiers;return t!==e.e&&(0,r.className)(u,e.e=t),a!==e.t&&(0,r.className)(m,e.t=a),e},{e:void 0,t:void 0}),u)]}}),(0,a.createComponent)($,{get children(){var h,v;return[(0,a.createComponent)(Q,{get children(){return[(0,a.createComponent)(U,{get children(){return(0,a.createComponent)(eE,{})}}),"Position"]}}),(0,a.createComponent)(q,{children:"Adjust the position of the trigger button and devtools panel."}),(v=(h=ta()).firstChild,(0,r.insert)(v,(0,a.createComponent)(ee,{label:"Trigger Position",options:[{label:"Bottom Right",value:"bottom-right"},{label:"Bottom Left",value:"bottom-left"},{label:"Top Right",value:"top-right"},{label:"Top Left",value:"top-left"},{label:"Middle Right",value:"middle-right"},{label:"Middle Left",value:"middle-left"}],get value(){return o().position},onChange:t=>e({position:t})}),null),(0,r.insert)(v,(0,a.createComponent)(ee,{label:"Panel Position",get value(){return o().panelLocation},options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}],onChange:t=>e({panelLocation:t})}),null),(0,n.createRenderEffect)(e=>{var t=i().settingsGroup,a=i().settingRow;return t!==e.e&&(0,r.className)(h,e.e=t),a!==e.t&&(0,r.className)(v,e.t=a),e},{e:void 0,t:void 0}),h)]}})]}})},to=(0,r.template)("<div>New"),ti=(0,r.template)("<img>"),tl=(0,r.template)(`<span>\u2713 v<!> \u2022 Min v`),ts=(0,r.template)("<p>"),tc=(0,r.template)('<a target=_blank rel="noopener noreferrer">Documentation '),td=(0,r.template)("<div>"),tg=(0,r.template)("<div><span></span><div></div><div><h3></h3><p></p><p>"),tp=(0,r.template)(`<span>\u26A0\uFE0F v<!> \u2022 Requires v<!>+`),tu=(0,r.template)("<span>"),tm=(0,r.template)("<span>Installing..."),tf=(0,r.template)("<span>Installed!"),th=e=>{var t,o,i,l,s,c,d;let g=e5(),{card:p}=e;return d=(c=(s=(l=(i=(o=(t=tg()).firstChild).nextSibling).nextSibling).firstChild).nextSibling).nextSibling,t.style.setProperty("position","relative"),(0,r.insert)(t,(0,a.createComponent)(a.Show,{get when(){return p.metadata?.isNew},get children(){var u=to();return(0,n.createRenderEffect)(()=>(0,r.className)(u,g().pluginMarketplaceNewBanner)),u}}),o),(0,r.insert)(o,()=>(e=>{switch(e.actionType){case"install":case"install-devtools":return"Available";case"add-to-devtools":return"Installed";case"already-installed":return"Active";case"version-mismatch":return"Incompatible";case"requires-package":return"Unavailable";case"wrong-framework":return"Other Framework";default:return""}})(p)),(0,r.insert)(i,(0,a.createComponent)(a.Show,{get when(){return p.metadata?.logoUrl},get fallback(){return(0,a.createComponent)(eF,{})},get children(){var m=ti();return(0,n.createRenderEffect)(e=>{var t=p.metadata?.logoUrl,a=p.metadata?.title||p.devtoolsPackage,n=g().pluginMarketplaceCardImage;return t!==e.e&&(0,r.setAttribute)(m,"src",e.e=t),a!==e.t&&(0,r.setAttribute)(m,"alt",e.t=a),n!==e.a&&(0,r.className)(m,e.a=n),e},{e:void 0,t:void 0,a:void 0}),m}})),(0,r.insert)(s,()=>p.metadata?.title||p.devtoolsPackage),(0,r.insert)(c,()=>p.devtoolsPackage),(0,r.insert)(d,()=>"requires-package"===p.actionType?`Requires ${p.requiredPackageName}`:"wrong-framework"===p.actionType?"For different framework projects":"already-installed"===p.actionType?"Active in your devtools":"version-mismatch"===p.actionType?p.versionInfo?.reason||"Version incompatible":p.metadata?.description||`For ${p.requiredPackageName}`),(0,r.insert)(l,(0,a.createComponent)(a.Show,{get when(){return p.versionInfo},get children(){var f=ts();return(0,r.insert)(f,(0,a.createComponent)(a.Show,{get when(){return p.versionInfo?.satisfied},get fallback(){var h,v,b;return(b=(v=(h=tp()).firstChild.nextSibling).nextSibling.nextSibling).nextSibling,(0,r.insert)(h,()=>p.versionInfo?.current,v),(0,r.insert)(h,()=>p.versionInfo?.required,b),(0,n.createRenderEffect)(()=>(0,r.className)(h,g().pluginMarketplaceCardVersionUnsatisfied)),h},get children(){var y=tl(),k=y.firstChild.nextSibling;return k.nextSibling,(0,r.insert)(y,()=>p.versionInfo?.current,k),(0,r.insert)(y,()=>p.versionInfo?.required,null),(0,n.createRenderEffect)(()=>(0,r.className)(y,g().pluginMarketplaceCardVersionSatisfied)),y}})),(0,n.createRenderEffect)(()=>(0,r.className)(f,g().pluginMarketplaceCardVersionInfo)),f}}),null),(0,r.insert)(l,(0,a.createComponent)(a.Show,{get when(){return p.metadata?.docsUrl},get children(){var C=tc();return C.firstChild,(0,r.insert)(C,(0,a.createComponent)(eD,{}),null),(0,n.createRenderEffect)(e=>{var t=p.metadata?.docsUrl,a=g().pluginMarketplaceCardDocsLink;return t!==e.e&&(0,r.setAttribute)(C,"href",e.e=t),a!==e.t&&(0,r.className)(C,e.t=a),e},{e:void 0,t:void 0}),C}}),null),(0,r.insert)(l,(0,a.createComponent)(a.Show,{get when(){return p.metadata?.tags&&p.metadata.tags.length>0},get children(){var w=td();return(0,r.insert)(w,(0,a.createComponent)(a.For,{get each(){return p.metadata?.tags},children:e=>{var t;return t=tu(),(0,r.insert)(t,e),(0,n.createRenderEffect)(()=>(0,r.className)(t,g().pluginMarketplaceCardTag)),t}})),(0,n.createRenderEffect)(()=>(0,r.className)(w,g().pluginMarketplaceCardTags)),w}}),null),(0,r.insert)(t,(0,a.createComponent)(a.Show,{get when(){return"idle"===p.status},get fallback(){var x;return x=td(),(0,r.insert)(x,(0,a.createComponent)(a.Show,{get when(){return"installing"===p.status},get children(){var M,E;return[(M=td(),(0,n.createRenderEffect)(()=>(0,r.className)(M,g().pluginMarketplaceCardSpinner)),M),(E=tm(),(0,n.createRenderEffect)(()=>(0,r.className)(E,g().pluginMarketplaceCardStatusText)),E)]}}),null),(0,r.insert)(x,(0,a.createComponent)(a.Show,{get when(){return"success"===p.status},get children(){var S;return[(0,a.createComponent)(eN,{}),(S=tf(),(0,n.createRenderEffect)(()=>(0,r.className)(S,g().pluginMarketplaceCardStatusText)),S)]}}),null),(0,r.insert)(x,(0,a.createComponent)(a.Show,{get when(){return"error"===p.status},get children(){var A;return[(0,a.createComponent)(eB,{}),(A=tu(),(0,r.insert)(A,()=>p.error||"Failed to install"),(0,n.createRenderEffect)(()=>(0,r.className)(A,g().pluginMarketplaceCardStatusTextError)),A)]}}),null),(0,n.createRenderEffect)(()=>(0,r.className)(x,g().pluginMarketplaceCardStatus)),x},get children(){return(0,a.createComponent)(er,{get variant(){return"requires-package"===p.actionType||"wrong-framework"===p.actionType||"version-mismatch"===p.actionType?"danger":"bump-version"===p.actionType?"warning":"already-installed"===p.actionType?"secondary":"primary"},onClick:()=>e.onAction(p),get disabled(){return"idle"!==p.status||"requires-package"===p.actionType||"wrong-framework"===p.actionType||"already-installed"===p.actionType||"version-mismatch"===p.actionType},get class(){return(0,r.memo)(()=>"already-installed"===p.actionType)()?g().pluginMarketplaceButtonInstalled:""},get children(){if("installing"===p.status)return"Installing...";if("success"===p.status)return"Installed!";if("error"===p.status)return"Error";switch(p.actionType){case"install":default:return"Install";case"install-devtools":return"Install Devtools";case"add-to-devtools":return"Add to Devtools";case"requires-package":return`Requires ${p.requiredPackageName}`;case"wrong-framework":return"Different Framework";case"already-installed":return"Already Installed";case"bump-version":return"Bump Version";case"version-mismatch":return"Version Mismatch"}}})}}),null),(0,n.createRenderEffect)(e=>{var a=g().pluginMarketplaceCard,n={[g().pluginMarketplaceCardDisabled]:!p.isCurrentFramework&&"already-installed"!==p.actionType,[g().pluginMarketplaceCardFeatured]:!!p.metadata?.featured&&"already-installed"!==p.actionType,[g().pluginMarketplaceCardActive]:"already-installed"===p.actionType},u=((e,t)=>{let r=t(),a=r.pluginMarketplaceCardBadge;switch(e.actionType){case"install":case"install-devtools":return`${a} ${r.pluginMarketplaceCardBadgeInstall}`;case"add-to-devtools":case"already-installed":return`${a} ${r.pluginMarketplaceCardBadgeAdd}`;case"bump-version":case"version-mismatch":case"requires-package":case"wrong-framework":return`${a} ${r.pluginMarketplaceCardBadgeRequires}`;default:return a}})(p,g),m=g().pluginMarketplaceCardIcon,f=!!p.metadata?.logoUrl,h=g().pluginMarketplaceCardHeader,v=g().pluginMarketplaceCardTitle,b=g().pluginMarketplaceCardPackageBadge,y=g().pluginMarketplaceCardDescriptionText;return a!==e.e&&(0,r.className)(t,e.e=a),e.t=(0,r.classList)(t,n,e.t),u!==e.a&&(0,r.className)(o,e.a=u),m!==e.o&&(0,r.className)(i,e.o=m),f!==e.i&&i.classList.toggle("custom-logo",e.i=f),h!==e.n&&(0,r.className)(l,e.n=h),v!==e.s&&(0,r.className)(s,e.s=v),b!==e.h&&(0,r.className)(c,e.h=b),y!==e.r&&(0,r.className)(d,e.r=y),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),t},tv=(0,r.template)("<div>"),tb=(0,r.template)("<div><div><div><div></div><h3>"),ty=e=>{var t,o,i,l,s;let c=e5();return s=(l=(i=(o=(t=tb()).firstChild).firstChild).firstChild).nextSibling,(0,r.addEventListener)(o,"click",e.onToggleCollapse,!0),(0,r.insert)(l,(0,a.createComponent)(eP,{})),(0,r.insert)(s,()=>e.section.displayName),(0,r.insert)(t,(0,a.createComponent)(a.Show,{get when(){return!e.isCollapsed()},get children(){var d=tv();return(0,r.insert)(d,(0,a.createComponent)(a.For,{get each(){return e.section.cards},children:t=>(0,a.createComponent)(th,{card:t,get onAction(){return e.onCardAction}})})),(0,n.createRenderEffect)(()=>(0,r.className)(d,c().pluginMarketplaceGrid)),d}}),null),(0,n.createRenderEffect)(a=>{var n=c().pluginMarketplaceSection,d=c().pluginMarketplaceSectionHeader,g=c().pluginMarketplaceSectionHeaderLeft,p=c().pluginMarketplaceSectionChevron,u={[c().pluginMarketplaceSectionChevronCollapsed]:e.isCollapsed()},m=c().pluginMarketplaceSectionTitle;return n!==a.e&&(0,r.className)(t,a.e=n),d!==a.t&&(0,r.className)(o,a.t=d),g!==a.a&&(0,r.className)(i,a.a=g),p!==a.o&&(0,r.className)(l,a.o=p),a.i=(0,r.classList)(l,u,a.i),m!==a.n&&(0,r.className)(s,a.n=m),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),t};(0,r.delegateEvents)(["click"]);var tk=(0,r.template)("<div><div><h3>Marketplace Settings</h3><button></button></div><div>"),tC=e=>{let t=e5();return(0,a.createComponent)(a.Show,{get when(){return e.isOpen()},get children(){var o=tk(),i=o.firstChild,l=i.firstChild,s=l.nextSibling,c=i.nextSibling;return(0,r.addEventListener)(s,"click",e.onClose,!0),(0,r.insert)(s,(0,a.createComponent)(eH,{})),(0,r.insert)(c,(0,a.createComponent)(V,{label:"Show active plugins",description:"Display installed plugins in a separate section",get checked(){return e.showActivePlugins()},onChange:t=>e.setShowActivePlugins(t)})),(0,n.createRenderEffect)(e=>{var a=t().pluginMarketplaceSettingsPanel,n=t().pluginMarketplaceSettingsPanelHeader,d=t().pluginMarketplaceSettingsPanelTitle,g=t().pluginMarketplaceSettingsPanelClose,p=t().pluginMarketplaceSettingsPanelContent;return a!==e.e&&(0,r.className)(o,e.e=a),n!==e.t&&(0,r.className)(i,e.t=n),d!==e.a&&(0,r.className)(l,e.a=d),g!==e.o&&(0,r.className)(s,e.o=g),p!==e.i&&(0,r.className)(c,e.i=p),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),o}})};(0,r.delegateEvents)(["click"]);var tw=(0,r.template)("<div>"),tx=(0,r.template)("<button>"),tM=e=>{let t=e5();return(0,a.createComponent)(a.Show,{get when(){return e.tags().length>0},get children(){var o=tw();return(0,r.insert)(o,(0,a.createComponent)(a.For,{get each(){return e.tags()},children:a=>{var o;return(o=tx()).$$click=()=>e.onToggleTag(a),(0,r.insert)(o,a),(0,n.createRenderEffect)(n=>{var i=t().pluginMarketplaceTagButton,l={[t().pluginMarketplaceTagButtonActive]:e.selectedTags().has(a)};return i!==n.e&&(0,r.className)(o,n.e=i),n.t=(0,r.classList)(o,l,n.t),n},{e:void 0,t:void 0}),o}})),(0,n.createRenderEffect)(()=>(0,r.className)(o,t().pluginMarketplaceTagsContainer)),o}})};(0,r.delegateEvents)(["click"]);var tE=(0,r.template)('<div><div><h2>Plugin Marketplace</h2><div><div><input type=text placeholder="Search plugins..."></div><button></button></div></div><p>Discover and install devtools for TanStack Query, Router, Form, and Pacer'),tS=e=>{var t,o,i,l,s,c,d,g;let p=e5();return c=(s=(l=(i=(o=(t=tE()).firstChild).firstChild).nextSibling).firstChild).firstChild,d=s.nextSibling,g=o.nextSibling,l.style.setProperty("display","flex"),l.style.setProperty("align-items","center"),(0,r.insert)(s,(0,a.createComponent)(eT,{}),c),c.$$input=t=>e.onSearchInput(t.currentTarget.value),(0,r.addEventListener)(d,"click",e.onSettingsClick,!0),(0,r.insert)(d,(0,a.createComponent)(eI,{})),(0,r.insert)(t,(0,a.createComponent)(tM,{get tags(){return e.tags},get selectedTags(){return e.selectedTags},get onToggleTag(){return e.onToggleTag}}),null),(0,n.createRenderEffect)(e=>{var a=p().pluginMarketplaceHeader,n=p().pluginMarketplaceTitleRow,l=p().pluginMarketplaceTitle,u=p().pluginMarketplaceSearchWrapper,m=p().pluginMarketplaceSearch,f=p().pluginMarketplaceSettingsButton,h=p().pluginMarketplaceDescription;return a!==e.e&&(0,r.className)(t,e.e=a),n!==e.t&&(0,r.className)(o,e.t=n),l!==e.a&&(0,r.className)(i,e.a=l),u!==e.o&&(0,r.className)(s,e.o=u),m!==e.i&&(0,r.className)(c,e.i=m),f!==e.n&&(0,r.className)(d,e.n=f),h!==e.s&&(0,r.className)(g,e.s=h),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),(0,n.createRenderEffect)(()=>c.value=e.searchInput()),t};(0,r.delegateEvents)(["input","click"]);var tA=["react","solid","vue","svelte","angular"],tz={"@tanstack/react-query-devtools":{packageName:"@tanstack/react-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/react-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/solid-query-devtools":{packageName:"@tanstack/solid-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/solid-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/react-router-devtools":{packageName:"@tanstack/react-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","routing","navigation"]},"@tanstack/solid-router-devtools":{packageName:"@tanstack/solid-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/solid-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","routing","navigation"]},"@tanstack/react-form-devtools":{packageName:"@tanstack/react-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/react-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",framework:"react",isNew:!0,tags:["TanStack","forms","validation"]},"@tanstack/solid-form-devtools":{packageName:"@tanstack/solid-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/solid-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",isNew:!0,framework:"solid",tags:["TanStack","forms","validation"]},"@tanstack/react-pacer-devtools":{packageName:"@tanstack/react-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/react-pacer",minVersion:"0.16.4"},author:"TanStack",framework:"react",isNew:!0,tags:["TanStack"]},"@tanstack/solid-pacer-devtools":{packageName:"@tanstack/solid-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/solid-pacer",minVersion:"0.14.4"},author:"TanStack",framework:"solid",isNew:!0,tags:["TanStack"]}};function tF(e){if(!e)return null;let t=e.replace(/^[v^~]/,"").split("-")[0]?.split("+")[0];if(!t)return null;let r=t.split(".");if(r.length<2)return null;let a=parseInt(r[0]??"0",10),n=parseInt(r[1]??"0",10),o=parseInt(r[2]??"0",10);return isNaN(a)||isNaN(n)||isNaN(o)?null:{major:a,minor:n,patch:o,raw:e}}function tN(e,t){return e.major!==t.major?e.major-t.major:e.minor!==t.minor?e.minor-t.minor:e.patch-t.patch}var tB=(e,t)=>{let r={...e.dependencies,...e.devDependencies},a={react:["react","react-dom"],vue:["vue","@vue/core"],solid:["solid-js"],svelte:["svelte"],angular:["@angular/core"]};for(let e of t){let t=a[e];if(t&&t.some(e=>r[e]))return e}return"unknown"},tP=(e,t,r,a)=>{let n={...e.dependencies,...e.devDependencies},o=[];return Object.values(tz).forEach(e=>{let i,l,s=e.packageName,c=e.framework===t||"other"===e.framework,d=e.requires?.packageName,g=!!d&&!!n[d],p=!!n[s];if(g&&e.requires){let t=d?n[d]:void 0;if(t){let r=function(e,t,r){let a,n,o,i;return t||r?t&&(a=tF(e),n=tF(t),!(!a||!n||tN(a,n)>=0))?{satisfied:!1,reason:`Requires v${t} or higher (current: v${e})`}:r&&(o=tF(e),i=tF(r),!(!o||!i||0>=tN(o,i)))?{satisfied:!1,reason:`Requires v${r} or lower (current: v${e})`}:{satisfied:!0}:{satisfied:!0}}(t,e.requires.minVersion,e.requires.maxVersion);i={current:t,required:e.requires.minVersion,satisfied:r.satisfied,reason:r.reason}}}let u=((e,t,r,a,n)=>{if(n)return Array.from(e).some(e=>{let t=e.toLowerCase(),r=n.toLowerCase();return t.startsWith(r)||t.includes(r)});if(e.has(t))return!0;let o=r.toLowerCase().split(/[-_/@]/).filter(e=>e.length>0),i=a.toLowerCase();return Array.from(e).some(e=>{let t=e.toLowerCase();if(t.includes(r.toLowerCase()))return!0;let a=o.filter(e=>t.includes(e));return!!(a.length>=2||t.includes(i)&&a.length>=1)})})(r,s,e.packageName,e.framework,e.pluginId);l=c?e.requires&&!g?"requires-package":i&&!i.satisfied?"bump-version":p&&u?"already-installed":p&&!u?"add-to-devtools":!p&&e.requires&&g?"install-devtools":"install":"wrong-framework";let m=a.find(e=>e.devtoolsPackage===s);o.push({requiredPackageName:d||"",devtoolsPackage:s,framework:e.framework,hasPackage:g,hasDevtools:p,isRegistered:u,actionType:l,status:m?.status||"idle",error:m?.error,isCurrentFramework:c,metadata:e,versionInfo:i})}),o},tT=e=>{let t=[],r=e.filter(e=>"already-installed"===e.actionType&&e.isRegistered);r.length>0&&t.push({id:"active",displayName:"✓ Active Plugins",cards:r});let a=e.filter(e=>e.metadata?.featured&&"already-installed"!==e.actionType&&e.isCurrentFramework);a.length>0&&t.push({id:"featured",displayName:"⭐ Featured",cards:a});let n=e.filter(e=>e.isCurrentFramework&&"already-installed"!==e.actionType&&!e.metadata?.featured);return n.length>0&&t.push({id:"available",displayName:"Available Plugins",cards:n}),t},tD=(0,r.template)("<div><p>"),tI=(0,r.template)("<div>"),tH=()=>{var e;let t,o=e5(),{plugins:i}=eZ(),[l,s]=(0,a.createSignal)([]),[c,d]=(0,a.createSignal)(null),[g,p]=(0,a.createSignal)(""),[u,m]=(0,a.createSignal)(""),[f,h]=(0,a.createSignal)(new Set),[v,b]=(0,a.createSignal)(!0),[y,k]=(0,a.createSignal)(new Set),[C,w]=(0,a.createSignal)(!1),x=()=>{let e=u(),t=v(),r=y(),a=c();if(!a)return[];let n=tB(a,tA),o=tT(tP(a,n,new Set(i()?.map(e=>e.id||"")||[]),l().flatMap(e=>e.cards)));return(t||(o=o.filter(e=>"active"!==e.id)),r.size>0&&(o=o.map(e=>({...e,cards:e.cards.filter(e=>!!e.metadata?.tags&&e.metadata.tags.some(e=>r.has(e)))})).filter(e=>e.cards.length>0)),e)?o.map(t=>({...t,cards:t.cards.filter(t=>((e,t)=>{if(!t)return!0;let r=t.toLowerCase();return e.devtoolsPackage.toLowerCase().includes(r)||e.requiredPackageName.toLowerCase().includes(r)||e.framework.toLowerCase().includes(r)})(t,e))})).filter(e=>e.cards.length>0):o};(0,a.onMount)(()=>{let e=eQ.on("package-json-read",e=>{d(e.payload.packageJson),M(e.payload.packageJson)}),t=eQ.on("package-json-updated",e=>{d(e.payload.packageJson),M(e.payload.packageJson)}),r=eQ.on("devtools-installed",e=>{s(t=>t.map(t=>({...t,cards:t.cards.map(t=>t.devtoolsPackage===e.payload.packageName?{...t,status:e.payload.success?"success":"error",error:e.payload.error}:t)})))}),n=eQ.on("plugin-added",e=>{if(s(t=>t.map(t=>({...t,cards:t.cards.map(t=>t.devtoolsPackage===e.payload.packageName?{...t,status:e.payload.success?"success":"error",error:e.payload.error}:t)}))),e.payload.success){let e=c();e&&M(e)}});(0,a.onCleanup)(()=>{e(),t(),r(),n()}),eQ.emit("mounted",void 0)});let M=e=>{if(!e)return;let t=tB(e,tA);s(tT(tP(e,t,new Set(i()?.map(e=>e.id||"")||[]),l().flatMap(e=>e.cards))))},E=e=>{if("requires-package"!==e.actionType&&"wrong-framework"!==e.actionType&&"already-installed"!==e.actionType&&"version-mismatch"!==e.actionType){if(s(t=>t.map(t=>({...t,cards:t.cards.map(t=>t.devtoolsPackage===e.devtoolsPackage?{...t,status:"installing"}:t)}))),"bump-version"===e.actionType)return void eQ.emit("bump-package-version",{packageName:e.requiredPackageName,devtoolsPackage:e.devtoolsPackage,pluginName:e.metadata?.title||e.devtoolsPackage,minVersion:e.metadata?.requires?.minVersion,pluginImport:e.metadata?.pluginImport});if("add-to-devtools"===e.actionType)return void eQ.emit("add-plugin-to-devtools",{packageName:e.devtoolsPackage,pluginName:e.metadata?.title??e.devtoolsPackage,pluginImport:e.metadata?.pluginImport});eQ.emit("install-devtools",{packageName:e.devtoolsPackage,pluginName:e.metadata?.title??e.devtoolsPackage,pluginImport:e.metadata?.pluginImport})}};return e=tI(),(0,r.insert)(e,(0,a.createComponent)(tC,{isOpen:C,onClose:()=>w(!1),showActivePlugins:v,setShowActivePlugins:b}),null),(0,r.insert)(e,(0,a.createComponent)(tS,{searchInput:g,onSearchInput:e=>{p(e),t&&clearTimeout(t),t=setTimeout(()=>{m(e)},300)},onSettingsClick:()=>w(!C()),tags:()=>{let e=new Set;return l().forEach(t=>{("featured"===t.id||"available"===t.id)&&t.cards.forEach(t=>{t.metadata?.tags&&t.metadata.tags.forEach(t=>e.add(t))})}),Array.from(e).sort()},selectedTags:y,onToggleTag:e=>{k(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}}),null),(0,r.insert)(e,(0,a.createComponent)(a.Show,{get when(){return x().length>0},get children(){return(0,a.createComponent)(a.For,{get each(){return x()},children:e=>(0,a.createComponent)(ty,{section:e,isCollapsed:()=>f().has(e.id),onToggleCollapse:()=>{var t;return t=e.id,void h(e=>{let r=new Set(e);return r.has(t)?r.delete(t):r.add(t),r})},onCardAction:E})})}}),null),(0,r.insert)(e,(0,a.createComponent)(a.Show,{get when(){return 0===x().length},get children(){var S,A=tD(),z=A.firstChild;return(0,r.insert)(z,(S=(0,r.memo)(()=>!!u()),()=>S()?`No plugins found matching "${u()}"`:"No additional plugins available. You have all compatible devtools installed and registered!")),(0,n.createRenderEffect)(e=>{var t=o().pluginMarketplaceEmpty,a=o().pluginMarketplaceEmptyText;return t!==e.e&&(0,r.className)(A,e.e=t),a!==e.t&&(0,r.className)(z,e.t=a),e},{e:void 0,t:void 0}),A}}),null),(0,n.createRenderEffect)(()=>(0,r.className)(e,o().pluginMarketplace)),e},tR=(0,r.template)("<div><div><div><div></div><div><h3>Add More"),tL=(0,r.template)("<div><h3>"),t$=(0,r.template)("<div>"),tQ=()=>{let{plugins:e,activePlugins:o,toggleActivePlugins:i}=eZ(),{expanded:l,hoverUtils:s,animationMs:c,setForceExpand:d}=eY(),[g,p]=(0,a.createSignal)(new Map),[u,m]=(0,a.createSignal)(!1),f=e5(),{theme:h}=eW(),v=(0,a.createMemo)(()=>e()?.length&&e().length>0);(0,a.createEffect)(()=>{d(u())}),(0,a.createEffect)(()=>{let t=e()?.filter(e=>o().includes(e.id));t?.forEach(e=>{let t=g().get(e.id);t&&e.render(t,h())})});let b=()=>m(!u());return(0,a.createComponent)(a.Show,{get when(){return v()},get fallback(){return(0,a.createComponent)(tH,{})},get children(){var y=tR(),C=y.firstChild,w=C.firstChild,x=w.firstChild,M=x.nextSibling;return C.addEventListener("mouseleave",()=>{u()||s.leave()}),C.addEventListener("mouseenter",()=>s.enter()),(0,r.insert)(x,(0,a.createComponent)(a.For,{get each(){return e()},children:e=>{var l,s,c;let d;(0,a.createEffect)(()=>{d&&("string"==typeof e.name?d.textContent=e.name:e.name(d,h()))});let g=(0,a.createMemo)(()=>o().includes(e.id));return s=(l=tL()).firstChild,l.$$click=()=>{var t;return t=e.id,void(u()&&m(!1),i(t))},"function"==typeof(c=d)?(0,r.use)(c,s):d=s,(0,n.createRenderEffect)(a=>{var n=(0,k.default)(f().pluginName,{active:g()}),o=`${t.PLUGIN_TITLE_CONTAINER_ID}-${e.id}`;return n!==a.e&&(0,r.className)(l,a.e=n),o!==a.t&&(0,r.setAttribute)(s,"id",a.t=o),a},{e:void 0,t:void 0}),l}})),M.$$click=b,(0,r.insert)(y,(0,a.createComponent)(a.Show,{get when(){return u()},get fallback(){return(0,a.createComponent)(a.For,{get each(){return o()},children:e=>{var a;return a=t$(),(0,r.use)(t=>{p(r=>{let a=new Map(r);return a.set(e,t),a})},a),(0,r.setAttribute)(a,"id",`${t.PLUGIN_CONTAINER_ID}-${e}`),(0,n.createRenderEffect)(()=>(0,r.className)(a,f().pluginsTabContent)),a}})},get children(){return(0,a.createComponent)(tH,{})}}),null),(0,n.createRenderEffect)(e=>{var t=f().pluginsTabPanel,a=(0,k.default)(f().pluginsTabDraw(l()),{[f().pluginsTabDraw(l())]:l()},f().pluginsTabDrawTransition(c)),n=(0,k.default)(f().pluginsTabSidebar(l()),f().pluginsTabSidebarTransition(c)),o=f().pluginsList,i=(0,k.default)(f().pluginNameAddMore,{active:u()});return t!==e.e&&(0,r.className)(y,e.e=t),a!==e.t&&(0,r.className)(C,e.t=a),n!==e.a&&(0,r.className)(w,e.a=n),o!==e.o&&(0,r.className)(x,e.o=o),i!==e.i&&(0,r.className)(M,e.i=i),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),y}})};(0,r.delegateEvents)(["click"]);var tq=(0,r.template)("<div><div> Preview</div><div></div><div></div><div>"),tU=(0,r.template)("<img alt=Preview>"),tj=(0,r.template)("<div>No Image"),tO=(0,r.template)("<div>"),tV=(0,r.template)("<div><strong>Missing tags for <!>:</strong><ul>"),tY=(0,r.template)("<li>"),tG=[{network:"Facebook",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4267B2"},{network:"X/Twitter",tags:[{key:"twitter:title",prop:"title"},{key:"twitter:description",prop:"description"},{key:"twitter:image",prop:"image"},{key:"twitter:url",prop:"url"}],color:"#1DA1F2"},{network:"LinkedIn",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#0077B5"},{network:"Discord",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#5865F2"},{network:"Slack",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4A154B"},{network:"Mastodon",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#6364FF"},{network:"Bluesky",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#1185FE"}];function tW(e){var t,a,o,i,l,s,c;let d=e5();return o=(a=(t=tq()).firstChild).firstChild,s=(l=(i=a.nextSibling).nextSibling).nextSibling,(0,r.insert)(a,()=>e.network,o),(0,r.insert)(t,(c=(0,r.memo)(()=>!!e.meta.image),()=>{var t,a;return c()?(t=tU(),(0,n.createRenderEffect)(a=>{var n=e.meta.image,o=d().seoPreviewImage;return n!==a.e&&(0,r.setAttribute)(t,"src",a.e=n),o!==a.t&&(0,r.className)(t,a.t=o),a},{e:void 0,t:void 0}),t):((a=tj()).style.setProperty("background","#222"),a.style.setProperty("color","#888"),a.style.setProperty("display","flex"),a.style.setProperty("align-items","center"),a.style.setProperty("justify-content","center"),a.style.setProperty("min-height","80px"),a.style.setProperty("width","100%"),(0,n.createRenderEffect)(()=>(0,r.className)(a,d().seoPreviewImage)),a)}),i),(0,r.insert)(i,()=>e.meta.title||"No Title"),(0,r.insert)(l,()=>e.meta.description||"No Description"),(0,r.insert)(s,()=>e.meta.url||window.location.href),(0,n.createRenderEffect)(n=>{var o=d().seoPreviewCard,c=e.color,g=d().seoPreviewHeader,p=e.color,u=d().seoPreviewTitle,m=d().seoPreviewDesc,f=d().seoPreviewUrl;return o!==n.e&&(0,r.className)(t,n.e=o),c!==n.t&&(null!=(n.t=c)?t.style.setProperty("border-color",c):t.style.removeProperty("border-color")),g!==n.a&&(0,r.className)(a,n.a=g),p!==n.o&&(null!=(n.o=p)?a.style.setProperty("color",p):a.style.removeProperty("color")),u!==n.i&&(0,r.className)(i,n.i=u),m!==n.n&&(0,r.className)(l,n.n=m),f!==n.s&&(0,r.className)(s,n.s=f),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),t}var tZ=()=>{let[e,t]=(0,a.createSignal)(i()),o=e5();function i(){let e=Array.from(document.head.querySelectorAll("meta")),t=[];for(let r of tG){let a={},n=[];for(let t of r.tags){let r=e.find(e=>!t.key.includes("twitter:")&&e.getAttribute("property")===t.key||e.getAttribute("name")===t.key);r&&r.getAttribute("content")?a[t.prop]=r.getAttribute("content")||void 0:n.push(t.key)}t.push({network:r.network,found:a,missing:n})}return t}return!function(e,t={}){let{attributes:r=!0,childList:n=!0,subtree:o=!0,observeTitle:i=!0}=t;(0,a.onMount)(()=>{let t,l=new MutationObserver(t=>{for(let r of t)"childList"===r.type?(r.addedNodes.forEach(t=>e({kind:"added",node:t},r)),r.removedNodes.forEach(t=>e({kind:"removed",node:t},r))):"attributes"===r.type?e({kind:"attr",target:r.target,name:r.attributeName,oldValue:r.oldValue??null},r):r.target.parentNode&&"title"===r.target.parentNode.tagName.toLowerCase()&&e({kind:"title",title:document.title},r)});if(l.observe(document.head,{childList:n,attributes:r,subtree:o,attributeOldValue:r,characterData:!0,characterDataOldValue:!1}),i){let r=document.head.querySelector("title")||document.head.appendChild(document.createElement("title"));(t=new MutationObserver(()=>{e({kind:"title",title:document.title})})).observe(r,{childList:!0,characterData:!0,subtree:!0})}(0,a.onCleanup)(()=>{l.disconnect(),t?.disconnect()})})}(()=>{t(i())}),(0,a.createComponent)(D,{withPadding:!0,get children(){return(0,a.createComponent)($,{get children(){var l;return[(0,a.createComponent)(Q,{get children(){return[(0,a.createComponent)(U,{get children(){return(0,a.createComponent)(eS,{})}}),"Social previews"]}}),(0,a.createComponent)(q,{children:"See how your current page will look when shared on popular social networks. The tool checks for essential meta tags and highlights any that are missing."}),(l=tO(),(0,r.insert)(l,(0,a.createComponent)(a.For,{get each(){return e()},children:(e,t)=>{var i,l;let s=tG[t()];return i=tO(),(0,r.insert)(i,(0,a.createComponent)(tW,{get meta(){return e.found},get color(){return s.color},get network(){return s.network}}),null),(0,r.insert)(i,(l=(0,r.memo)(()=>e.missing.length>0),()=>{var t,i,c,d;return l()?((c=(i=(t=tV()).firstChild).firstChild.nextSibling).nextSibling,d=i.nextSibling,(0,r.insert)(i,()=>s?.network,c),(0,r.insert)(d,(0,a.createComponent)(a.For,{get each(){return e.missing},children:e=>{var t;return t=tY(),(0,r.insert)(t,e),(0,n.createRenderEffect)(()=>(0,r.className)(t,o().seoMissingTag)),t}})),(0,n.createRenderEffect)(e=>{var a=o().seoMissingTagsSection,n=o().seoMissingTagsList;return a!==e.e&&(0,r.className)(t,e.e=a),n!==e.t&&(0,r.className)(d,e.t=n),e},{e:void 0,t:void 0}),t):null}),null),i}})),(0,n.createRenderEffect)(()=>(0,r.className)(l,o().seoPreviewSection)),l)]}})}})},tK=[{name:"Plugins",id:"plugins",component:()=>(0,a.createComponent)(tQ,{}),icon:()=>(0,a.createComponent)(ek,{})},{name:"SEO",id:"seo",component:()=>(0,a.createComponent)(tZ,{}),icon:()=>(0,a.createComponent)(eC,{})},{name:"Settings",id:"settings",component:()=>(0,a.createComponent)(tn,{}),icon:()=>(0,a.createComponent)(ew,{})}],tJ=(0,r.template)("<div>"),tX=(0,r.template)("<button type=button>"),t_=(0,r.template)("<div><button type=button></button><button type=button>"),t0=e=>{var o,i;let l=e5(),{state:s,setState:c}=eK(),d=(0,t.usePiPWindow)(),g=()=>{d().requestPipWindow(`width=${window.innerWidth},height=${s().height},top=${window.screen.height},left=${window.screenLeft}}`)},{hoverUtils:p}=eY();return o=tJ(),(0,r.insert)(o,(0,a.createComponent)(a.For,{each:tK,children:e=>{var t;return(t=tX()).addEventListener("mouseleave",()=>{"plugins"===e.id&&p.leave()}),t.addEventListener("mouseenter",()=>{"plugins"===e.id&&p.enter()}),t.$$click=()=>c({activeTab:e.id}),(0,r.insert)(t,()=>e.icon()),(0,n.createRenderEffect)(()=>(0,r.className)(t,(0,k.default)(l().tab,{active:s().activeTab===e.id}))),t}}),null),(0,r.insert)(o,(i=(0,r.memo)(()=>null!==d().pipWindow),()=>{var t,o,s;return i()?null:(s=(o=(t=t_()).firstChild).nextSibling,t.style.setProperty("margin-top","auto"),o.$$click=g,(0,r.insert)(o,(0,a.createComponent)(eR,{})),s.$$click=()=>e.toggleOpen(),(0,r.insert)(s,(0,a.createComponent)(ez,{})),(0,n.createRenderEffect)(e=>{var t=(0,k.default)(l().tab,"detach"),a=(0,k.default)(l().tab,"close");return t!==e.e&&(0,r.className)(o,e.e=t),a!==e.t&&(0,r.className)(s,e.t=a),e},{e:void 0,t:void 0}),t)}),null),(0,n.createRenderEffect)(()=>(0,r.className)(o,l().tabContainer)),o};(0,r.delegateEvents)(["click"]);var t1=(0,r.template)("<div>"),t2=()=>{var e;let{state:t}=eK(),o=e5(),i=(0,a.createMemo)(()=>tK.find(e=>e.id===t().activeTab)?.component||null);return e=t1(),(0,r.insert)(e,()=>i()?.()),(0,n.createRenderEffect)(()=>(0,r.className)(e,o().tabContent)),e},t5=(0,r.template)("<div>"),t3=()=>{var e,t;let o=()=>({element:null,bounding:{width:0,height:0,left:0,top:0},dataSource:""}),[i,l]=(0,eq.createStore)(o()),s=()=>{l(o())},[d,g]=(0,a.createSignal)(null),u=function(e){if(r.isServer)return eU;let t="function"==typeof e,[n,o]=function(e){let t={...e},r={...e},n={},o=e=>{let r=n[e];if(!r){if(!(0,a.getListener)())return t[e];n[e]=r=(0,a.createSignal)(t[e],{internal:!0}),delete t[e]}return r[0]()};for(let t in e)Object.defineProperty(r,t,{get:()=>o(t),enumerable:!0});let i=(e,r)=>{let a=n[e];if(a)return a[1](r);e in t&&(t[e]=c(r,t[e]))};return[r,(e,t)=>{if(null!==e&&("object"==typeof e||"function"==typeof e)){let t=(0,a.untrack)(()=>Object.entries(c(e,r)));(0,a.batch)(()=>{for(let[e,r]of t)i(e,()=>r)})}else i(e,t);return r}]}(a.sharedConfig.context||t?eU:ej(e)),i=new ResizeObserver(([e])=>o(ej(e.target)));return(0,a.onCleanup)(()=>i.disconnect()),t?(0,a.createEffect)(()=>{let t=e();t&&(o(ej(t)),i.observe(t),(0,a.onCleanup)(()=>i.unobserve(t)))}):(i.observe(e),(0,a.onCleanup)(()=>i.unobserve(e))),n}(()=>d()),[m,f]=(0,eq.createStore)({x:0,y:0});p(document,"mousemove",e=>{f({x:e.clientX,y:e.clientY})});let v=h(),b=(0,a.createMemo)(()=>{let e=v(),t=e.includes("SHIFT"),r=e.includes("CONTROL"),a=e.includes("META");return t&&(r||a)});(0,a.createEffect)(()=>{if(!b())return void s();let e=document.elementFromPoint(m.x,m.y);if(!(e instanceof HTMLElement))return void s();if(e===i.element)return;let t=e.getAttribute("data-tsd-source");if(!t)return void s();let r=e.getBoundingClientRect();l({element:e,bounding:{width:r.width,height:r.height,left:r.left,top:r.top},dataSource:t})}),p(document,"click",e=>{i.element&&(window.getSelection()?.removeAllRanges(),e.preventDefault(),e.stopPropagation(),fetch(`${location.origin}/__tsd/open-source?source=${encodeURIComponent(i.dataSource)}`).catch(()=>{}))});let y=(0,a.createMemo)(()=>i.element?{display:"block",width:`${i.bounding.width}px`,height:`${i.bounding.height}px`,left:`${i.bounding.left}px`,top:`${i.bounding.top}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.25)",transition:"all 0.05s linear",position:"fixed","z-index":9999}:{display:"none"}),k=(0,a.createMemo)(()=>{if(i.element&&d()){let e=window.innerWidth,t=u.height||26,r=u.width||0,a=i.bounding.left,n=i.bounding.top-t-4;return n<0&&(n=i.bounding.top+i.bounding.height+4),a+r>e&&(a=e-r-4),a<0&&(a=4),{position:"fixed",left:`${a}px`,top:`${n}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.80)",color:"white",padding:"2px 4px",fontSize:"12px","border-radius":"2px","z-index":1e4,visibility:"visible",transition:"all 0.05s linear"}}return{display:"none"}});return[(e=t5(),(0,r.use)(g,e),(0,r.insert)(e,()=>i.dataSource),(0,n.createRenderEffect)(t=>(0,r.style)(e,{...k(),"pointer-events":"none"},t)),e),(t=t5(),(0,n.createRenderEffect)(e=>(0,r.style)(t,{...y(),"pointer-events":"none"},e)),t)]},t4=(0,r.template)("<div>");function t9(){let e,{settings:n}=eJ(),{setHeight:o}=eX(),{persistOpen:l,setPersistOpen:s}=(()=>{let{state:e,setState:t}=eK();return{persistOpen:(0,a.createMemo)(()=>e().persistOpen),setPersistOpen:e=>{t({persistOpen:e})}}})(),[c,d]=(0,a.createSignal)(),[g,p]=(0,a.createSignal)(n().defaultOpen||l()),u=(0,t.usePiPWindow)(),[h,b]=(0,a.createSignal)(!1),k=()=>{if(u().pipWindow)return;let e=g();p(!e),s(!e)};(0,a.createEffect)(()=>{if(g()){let t=c()?.parentElement?.style.paddingBottom,r=()=>{e&&c()?.parentElement&&d(e=>(e?.parentElement,e))};if(r(),"undefined"!=typeof window)return(u().pipWindow??window).addEventListener("resize",r),()=>{(u().pipWindow??window).removeEventListener("resize",r),c()?.parentElement&&"string"==typeof t&&d(e=>e)}}else c()?.parentElement&&d(e=>(e?.parentElement&&e.parentElement.removeAttribute("style"),e))}),(0,a.createEffect)(()=>{window.addEventListener("keydown",e=>{"Escape"===e.key&&g()&&k()})}),(0,a.createEffect)(()=>{let e=document.getElementById(t.TANSTACK_DEVTOOLS);e&&e_(e,!g())}),(0,a.createEffect)(()=>{if(c()){let e=c(),t=getComputedStyle(e).fontSize;e?.style.setProperty("--tsrd-font-size",t)}}),(0,a.createEffect)(()=>{let e=n().openHotkey.filter(e=>t.keyboardModifiers.includes(e)),o=n().openHotkey.filter(e=>!t.keyboardModifiers.includes(e));for(let n of(0,t.getAllPermutations)(e))!function(e,t,n={}){if(r.isServer||!e.length)return;e=e.map(e=>e.toUpperCase());let{preventDefault:o=!0}=n,l=f(),s=v(),c=!1;(0,a.createEffect)((0,a.on)(s,n.requireReset?r=>{if(!r.length)return c=!1;if(c)return;let a=l();r.length<e.length?m(r,e.slice(0,r.length))?o&&a&&a.preventDefault():c=!0:(c=!0,m(r,e)&&(o&&a&&a.preventDefault(),t(a)))}:r=>{let a=r.at(-1);if(!a)return;let n=l();if(o&&a.length<e.length){i(a,e.slice(0,e.length-1))&&n&&n.preventDefault();return}if(i(a,e)){let a=r.at(-2);(!a||i(a,e.slice(0,e.length-1)))&&(o&&n&&n.preventDefault(),t(n))}}))}([...n,...o],()=>{k()})});let{theme:C}=eW();return(0,a.createComponent)(y,{get theme(){return C()},get children(){return(0,a.createComponent)(r.Portal,{get mount(){return(u().pipWindow??window).document.body},get children(){var w=t4();return(0,r.use)(d,w),(0,r.setAttribute)(w,"data-testid",t.TANSTACK_DEVTOOLS),(0,r.insert)(w,(0,a.createComponent)(a.Show,{get when(){return!!(0,r.memo)(()=>null!==u().pipWindow)()||!(0,r.memo)(()=>!!n().requireUrlFlag)()||window.location.search.includes(n().urlFlag)},get children(){return[(0,a.createComponent)(e9,{isOpen:g,setIsOpen:k,get image(){return n().triggerImage}}),(0,a.createComponent)(e7,{isResizing:h,isOpen:g,get children(){return(0,a.createComponent)(te,{ref:t=>e=t,handleDragStart:t=>((e,t)=>{if(0!==t.button||!e)return;b(!0);let r={originalHeight:e.getBoundingClientRect().height,pageY:t.pageY},a=e=>{let t=r.pageY-e.pageY,a="bottom"===n().panelLocation?r.originalHeight+t:r.originalHeight-t;o(a),a<70?p(!1):p(!0)},i=()=>{b(!1),document.removeEventListener("mousemove",a),document.removeEventListener("mouseUp",i)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",i)})(e,t),get children(){return[(0,a.createComponent)(t0,{toggleOpen:k}),(0,a.createComponent)(t2,{})]}})}})]}}),null),(0,r.insert)(w,(0,a.createComponent)(t3,{}),null),w}})}})}e.s(["default",()=>t9],22115)}]);