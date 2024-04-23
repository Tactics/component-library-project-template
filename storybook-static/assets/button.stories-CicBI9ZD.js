import{j as a}from"./jsx-runtime-CKrituN3.js";import{u as m,b as c}from"./index-LeSSo3si.js";import{t as o}from"./tool-D7EmAuHI.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const b=m.button`
  background: ${e=>e.style.background};
  border-radius: 25px;
  border: 1px solid ${e=>e.style.borderColor};
  color: ${e=>e.style.text};
  margin: 0 1em;
  padding: 0.25em 1em;
  font: ${e=>e.style.font};
`,f=m.div`
  color: white;  
`,s=({children:e,style:t})=>a.jsx(b,{style:t,children:e});s.Label=function({children:t}){const l={};return a.jsx(f,{style:l,children:t})};s.__docgenInfo={description:"",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:"{children} : {children : React.ReactNode}",optional:!1,type:{name:"signature",type:"object",raw:"{children : React.ReactNode}",signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}}],returns:null}],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!0,tsType:{name:"ButtonStyleProps"},description:""}}};const g=()=>{const e=c.useThemeColor(),t=c.useThemeFonts(),l=c.useThemeAlternate(),r=o.LookupAlternate({name:"Button",alternates:l}),y=o.LookupAdditionalColor({name:"bg_ui",colors:e.additional,fallback:e.primary.tint_500});return{background:o.orDefault(r,y,["style","background"]),borderColor:o.orDefault(r,e.primary.tint_700,["style","borderColor"]),text:o.orDefault(r,e.accent.tint_600,["style","text"]),font:o.orDefault(r,t.primary.md,["style","font"])}},p=({label:e})=>{const t=g();return a.jsx(s,{style:t,children:a.jsx(s.Label,{children:e})})};p.__docgenInfo={description:"",methods:[],displayName:"ThemedButton",props:{label:{required:!0,tsType:{name:"string"},description:""}}};const k={title:"Atoms/Button",component:p,parameters:{layout:"centered"},tags:[],argTypes:{}},n={args:{label:"Click me"}};var i,d,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Click me'
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const T=["Button"];export{n as Button,T as __namedExportsOrder,k as default};
