(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{8403:(e,t,r)=>{Promise.resolve().then(r.bind(r,633)),Promise.resolve().then(r.bind(r,6e3)),Promise.resolve().then(r.t.bind(r,8173,23))},549:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var l=r(5155);function s(e){let{placeholder:t,label:r,name:s,onChange:a,type:n,value:i}=e;return(0,l.jsxs)("div",{className:"flex flex-col w-full space-y-1",children:[(0,l.jsx)("label",{id:r,className:"text-slate-800 text-xl font-medium",htmlFor:r,children:r}),(0,l.jsx)("input",{id:r,type:n,value:i,required:!0,onChange:a,name:s,placeholder:t,className:"flex-1 rounded-md px-6 py-2 border",style:{borderColor:"#172B4D",color:"#172B4D"}})]})}},2544:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var l=r(5155);function s(e){let{title:t,onClick:r}=e;return(0,l.jsx)("button",{className:"rounded-lg px-40 py-4 text-white font-medium",style:{backgroundColor:"#172B4D"},onClick:e=>{},children:t})}},633:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var l=r(5155),s=r(7519);function a(e){let{size:t=10}=e;return(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center",children:[(0,l.jsx)("img",{src:"/code_corner_logo.svg",alt:"Code Corner Logo",className:20==t?"h-20 w-20":"h-10 w-10"}),(0,l.jsx)("h6",{className:"text-slate-800 ml-2 text-lg",children:"Code Corner"})]})}var n=r(8173),i=r.n(n);function c(e){let{title:t,onClick:r,href:s}=e;return(0,l.jsx)(i(),{href:null!=s?s:"",className:"rounded-lg px-10 py-2 text-white font-medium",style:{backgroundColor:"#172B4D"},onClick:e=>{},children:t})}var o=r(1540);function d(){return(0,l.jsx)(c,{title:"Sign out",onClick:()=>{(0,o.je)(),localStorage.clear()}})}function u(e){let{href:t,children:r}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(i(),{href:t,className:"text-slate-500 hover:border-b-2 hover:border-slate-800 hover:text-slate-800",children:r})})}function h(e){let{title:t,padding:r,href:s,onClick:a}=e;return(0,l.jsx)(i(),{href:null!=s?s:"",onClick:a,className:"bg-transparent border-2 rounded-lg px-10 py-2 font-medium",style:{borderColor:"#172B4D",color:"#172B4D"},children:t})}function m(){let e=(0,s.u)();return(0,l.jsxs)("nav",{className:"container bg-white ml-2 mr-2",children:[(0,l.jsxs)("div",{className:"row flex justify-between item-center  p-2",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a,{})}),(0,l.jsxs)("div",{className:"hidden md:flex space-x-6 justify-space-between items-center",children:[(0,l.jsx)(u,{href:"/",children:"Home"}),(0,l.jsx)(u,{href:"/categories",children:"Categories"}),(0,l.jsx)(u,{href:"/search",children:"Search"}),(0,l.jsx)(u,{href:"/aboutme",children:"About Me"}),(0,l.jsx)(u,{href:"/contactme",children:"Contact Me"})]}),(0,l.jsxs)("div",{className:"hidden md:flex space-x-2 md:flex-row justify-normal",children:[e?(0,l.jsx)(h,{title:"Post Article",href:"/writearticle"}):(0,l.jsx)(h,{title:"Sign in",href:"/signin"}),e?(0,l.jsx)(d,{}):(0,l.jsx)(c,{title:"Sign up",href:"/signup"})]}),(0,l.jsx)("button",{id:"mobile-btn",className:"md:hidden",children:"menu"})]}),(0,l.jsx)("div",{className:"md:hidden",children:(0,l.jsxs)("div",{id:"mobile-menu",className:"absolute flex hidden flex-col bg-gray-50 py-6 left-6 right-6 items-center space-y-4 font-bold drop-shadow-lg border-gray-300",children:[(0,l.jsx)(u,{href:"/",children:"Home"}),(0,l.jsx)(u,{href:"/categories",children:"Categories"}),(0,l.jsx)(u,{href:"/search",children:"Search"}),(0,l.jsx)(u,{href:"/aboutme",children:"About Me"}),(0,l.jsx)(u,{href:"/contactme",children:"Contact Me"}),e?(0,l.jsx)(h,{title:"Post Article",href:"/writearticle"}):(0,l.jsx)(h,{title:"Sign in",href:"/signin"}),e?(0,l.jsx)(d,{}):(0,l.jsx)(c,{title:"Sign up",href:"/signup"})]})})]})}},4190:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var l=r(5155);function s(e){let{placeholder:t,label:r,name:s,onChange:a,type:n,lines:i=8,value:c}=e;return(0,l.jsxs)("div",{className:"flex flex-col w-full space-y-1",children:[(0,l.jsx)("label",{itemID:r,className:"text-slate-800 text-xl font-medium",htmlFor:r,children:r}),(0,l.jsx)("textarea",{itemID:r,value:c,required:!0,onChange:a,rows:i,name:s,placeholder:t,className:"flex-1 rounded-md px-6 py-2 border",style:{borderColor:"#172B4D",color:"#172B4D"}})]})}},6e3:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var l=r(5155),s=r(549),a=r(2115),n=r(4190),i=r(2544);function c(){let[e,t]=(0,a.useState)(!1),[r,c]=(0,a.useState)(""),[o,d]=(0,a.useState)({email:"",fullName:"",details:"",headline:""});return(0,l.jsxs)("div",{className:"w-full flex flex-col justify-center items-start py-2 space-y-4 px-80",children:[(0,l.jsx)("h3",{className:"font-bold  text-4xl",style:{color:"#172B4D"},children:"Send Me Email"}),(0,l.jsxs)("form",{className:"items-center flex flex-col gap-2 w-full",action:"https://api.web3forms.com/submit",method:"POST",children:[(0,l.jsx)("input",{type:"hidden",name:"access_key",value:"710f6419-b662-494f-bc9b-7f6f1e1af288"}),(0,l.jsx)(s.A,{label:"Your Name",type:"text",name:"name",value:o.fullName,placeholder:"Enter your full name",onChange:e=>d({...o,fullName:e.target.value})}),(0,l.jsx)(s.A,{label:"Your Email",value:o.email,name:"email",placeholder:"Enter your email address",type:"email",onChange:e=>d({...o,email:e.target.value})}),(0,l.jsx)(s.A,{label:"Headline",type:"text",name:"subject",value:o.headline,placeholder:"Enter your headline",onChange:e=>d({...o,headline:e.target.value})}),(0,l.jsx)(n.A,{label:"Details about Query",type:"text",name:"message",lines:8,value:o.details,placeholder:"Enter your query",onChange:e=>d({...o,details:e.target.value})}),(0,l.jsx)("input",{type:"checkbox",name:"botcheck",className:"hidden",style:{display:"none"}}),(0,l.jsx)("div",{className:"pt-5",children:e?(0,l.jsx)("div",{className:"mx-auto h-20 w-20 object-cover bg-slate-600",children:"Loading"}):(0,l.jsx)(i.A,{title:"Send"})})]})]})}},7519:(e,t,r)=>{"use strict";r.d(t,{AppWrapper:()=>n,u:()=>i});var l=r(5155),s=r(2115);let a=(0,s.createContext)("");function n(e){let{children:t}=e,r="",[n,i]=(0,s.useState)(r);return(0,s.useEffect)(()=>{var e;i(r=null!==(e=localStorage.getItem("uid"))&&void 0!==e?e:"")},[]),(0,l.jsx)(a.Provider,{value:n,children:t})}function i(){return(0,s.useContext)(a)}},1540:(e,t,r)=>{"use strict";r.d(t,{Hh:()=>a,Jv:()=>n,je:()=>i});var l=r(399),s=r(8799);let a=async(e,t)=>{try{return(await (0,l.eJ)(s.j,e,t)).user.uid}catch(e){console.error(e)}},n=async(e,t)=>{try{return(await (0,l.x9)(s.j,e,t)).user.uid}catch(e){return e}},i=async()=>{try{await (0,l.CI)(s.j)}catch(e){console.error(e)}}},8799:(e,t,r)=>{"use strict";r.d(t,{I:()=>d,db:()=>c,j:()=>o});var l=r(9904),s=r(399),a=r(7058),n=r(333);let i=(0,l.Dk)().length?(0,l.Sx)():(0,l.Wp)({apiKey:"AIzaSyC-zy784ZF0jr5dkaI7gKGjue7IQHUlAJg",authDomain:"stories-for-children-59124.firebaseapp.com",projectId:"stories-for-children-59124",storageBucket:"stories-for-children-59124.appspot.com",messagingSenderId:"150688496449",appId:"1:150688496449:web:ae8b0d422137a4923a3fc0",measurementId:"G-7221H6TZX9"}),c=(0,a.aU)(i),o=(0,s.xI)(i),d=(0,n.c7)(i)}},e=>{var t=t=>e(e.s=t);e.O(0,[992,882,689,441,517,358],()=>t(8403)),_N_E=e.O()}]);