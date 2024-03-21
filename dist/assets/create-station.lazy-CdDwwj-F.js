import{n as b,w as g,C as f,k as e,I as S,F as v,G as w,H as u,J as C,K as F,M as N}from"./index-DcRyME2P.js";import{z as a,u as M,t as I,F as R,a as x,b as d,c as h,d as i,e as j,f as p}from"./form-DQyKwz1O.js";import{B as l}from"./badge-Qbeducio.js";const z=b("/create-station")({component:T});function T(){const m=g(n=>n.employees),[t]=f(n=>[n.currentStation]),y=a.object({station:a.object({name:a.string().min(2).max(50),uuid:a.string().min(2).max(50),employees:a.array(a.object({name:a.string().min(2).max(50),uuid:a.string().min(2).max(50)})),durationInMinutes:a.number().min(1).max(1e3),failureProbability:a.number().min(1).max(1e3),timeToRecovery:a.number().min(1).max(1e3)})}),r=M({resolver:I(y),defaultValues:{station:{name:t==null?void 0:t.name,uuid:t==null?void 0:t.uuid,employees:t.employees,durationInMinutes:t==null?void 0:t.durationInMinutes,failureProbability:t==null?void 0:t.failureProbability,timeToRecovery:t==null?void 0:t.timeToRecovery}}}),c=n=>{N(n.station).then(s=>console.log(s)).catch(s=>console.error(s))};return e.jsx(e.Fragment,{children:e.jsx(R,{...r,children:e.jsxs("form",{name:"create-station",onSubmit:r.handleSubmit(c),className:"flex justify-center pt-10 gap-4 flex-col px-24",children:[e.jsx(x,{control:r.control,name:"station.name",render:({field:n})=>e.jsxs(d,{children:[e.jsx(h,{children:e.jsx(l,{className:"text-white",children:"Station name"})}),e.jsx(i,{children:e.jsx(S,{placeholder:"Station name",className:"w-full",required:!0,...n})}),e.jsx(j,{children:"The name of the employee you want to create."}),e.jsx(p,{})]})}),m.length>0?e.jsx(x,{control:r.control,name:"station.employees",render:({field:n})=>e.jsxs(d,{children:[e.jsx(h,{children:e.jsx(l,{className:"text-white w-44 flex justify-center",children:"Available Employees"})}),e.jsx(i,{children:e.jsxs(v,{...n,children:[e.jsx(i,{children:e.jsx(w,{asChild:!0,className:"w-max",children:e.jsx(u,{variant:"outline",className:"flex justify-start w-max",children:"Select Employees"})})}),e.jsx(C,{children:m.map(s=>e.jsx(F,{...n,onCheckedChange:()=>{n.value.every(o=>o.uuid!==s.uuid)?n.onChange([...n.value,s]):n.onChange(n.value.filter(o=>o.uuid!==s.uuid))},children:s.name},s.uuid))},n.value.values().toString())]})}),e.jsx(j,{children:"The station the employee is assigned to."}),e.jsx(p,{})]})}):e.jsx("div",{className:"justify-center flex",children:e.jsx(l,{className:"text-white",children:"No Stations available."})}),"Selected Employees:",r.watch("station.employees").map(n=>e.jsx("div",{children:n.name},n.uuid)),e.jsx(u,{size:"lg",className:"bg-primary text-white",type:"submit",onClick:()=>c(r.getValues()),children:"Create Station"})]})})})}export{z as Route};