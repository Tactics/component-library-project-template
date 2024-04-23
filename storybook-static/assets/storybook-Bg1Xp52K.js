import{c as u,r as f}from"./index-LeSSo3si.js";import{r as m}from"./index-CBqU2yxZ.js";var i=u,v=m,s=f;function d(t){return t&&t.__esModule?t:{default:t}}var e=d(v),l=d(s),c=l.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`,E=l.default.div`
  flex-grow: 1;
`,_=l.default.div`
  background: ${t=>t.color};
  box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
  border-radius: 8px;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,p=l.default.div``,x=l.default.div`
  font: ${t=>t.font};
  color: ${t=>t.color};
`,b=l.default.div`
  margin-top: 0.25rem;
  font: ${t=>t.font};
  color: ${t=>t.color};
`,r=({title:t,color:a})=>{let n=i.v(),o=i.u();return e.default.createElement(E,null,e.default.createElement(_,{color:a}),e.default.createElement(p,null,e.default.createElement(x,{font:n.primary.sm,color:o.neutrals.tint_800},t),e.default.createElement(b,{font:n.primary.xs,color:o.neutrals.tint_800},a)))},y=({colors:t})=>e.default.createElement(c,null,t.map(function(a){return e.default.createElement(r,{color:a.color,title:a.name})})),$=({colors:t})=>e.default.createElement(c,null,e.default.createElement(r,{color:t.tint_50,title:"50"}),e.default.createElement(r,{color:t.tint_100,title:"100"}),e.default.createElement(r,{color:t.tint_200,title:"200"}),e.default.createElement(r,{color:t.tint_300,title:"300"}),e.default.createElement(r,{color:t.tint_400,title:"400"}),e.default.createElement(r,{color:t.tint_500,title:"500"}),e.default.createElement(r,{color:t.tint_600,title:"600"}),e.default.createElement(r,{color:t.tint_700,title:"700"}),e.default.createElement(r,{color:t.tint_800,title:"800"}),e.default.createElement(r,{color:t.tint_900,title:"900"}),e.default.createElement(r,{color:t.tint_950,title:"950"})),g=l.default.div`
  display: flex;
  flex-direction: column;
`,h=l.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${t=>t.color};
  padding-bottom: 1.5rem;
`,k=l.default.div`
  font: ${t=>t.font};
  color: ${t=>t.color};
`,w=l.default.div`
  margin-bottom: 5rem;
`,S=({title:t,children:a})=>{let n=i.v(),o=i.u();return e.default.createElement(g,null,e.default.createElement(h,{color:o.neutrals.tint_500},e.default.createElement(k,{font:n.primary.xl,color:o.neutrals.tint_950},t)),e.default.createElement(w,null,a))},A=l.default.div`
  display: flex;
  flex-direction: column;
`,U=l.default.div`
  font: ${t=>t.font};
  margin-bottom: 1rem;
  color: ${t=>t.color};
`,L=l.default.div`
  margin-bottom: 1rem;
`,C=({caption:t,children:a})=>{let n=i.v(),o=i.u();return e.default.createElement(A,null,e.default.createElement(U,{font:n.primary.sm,color:o.neutrals.tint_900},t),e.default.createElement(L,null,a))},P=l.default.div`
  font: ${t=>t.font};
`,D=({text:t,font:a})=>e.default.createElement(P,{font:a},t),X=y,j=S,q=D,F=C,M=$;export{F as S,M as a,X as b,j as c,q as d};
