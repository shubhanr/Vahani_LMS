import { useState, useEffect, useRef } from "react";
import "./firebase";

const T = {
  navy:"#0D1B5E", navyD:"#060E35", navyL:"#1A2F7A",
  sun:"#F5C842",  sunL:"#FDE98A", sunD:"#C9A020",
  sky:"#8B9CC8",  skyL:"#C4CBDF", skyXL:"#EEF0F8",
  chalk:"#F7F8FC", white:"#FFFFFF", ink:"#060E35",
  text:"#0D1B5E", textMid:"#4A5580", textSub:"#8B9CC8",
  success:"#1A7F5A", successBg:"#E8F7F1",
  danger:"#C0392B",  dangerBg:"#FDECEA",
  warn:"#B07D10",    warnBg:"#FEF8E7",
  border:"#DDE1EE",  shadow:"rgba(13,27,94,0.10)", shadowMd:"rgba(13,27,94,0.18)",
};

const FontLoader = () => {
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(l);
    document.body.style.cssText = "margin:0;padding:0;background:#F7F8FC;font-family:'DM Sans',sans-serif;";
  }, []);
  return null;
};

const Icon = ({ name, size=18, color="currentColor", sw=1.6 }) => {
  const s = { width:size, height:size, display:"block", flexShrink:0 };
  const p = { fill:"none", stroke:color, strokeWidth:sw, strokeLinecap:"round", strokeLinejoin:"round" };
  const icons = {
    home:       <><path {...p} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path {...p} d="M9 21V12h6v9"/></>,
    scholars:   <><circle {...p} cx="12" cy="8" r="4"/><path {...p} d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></>,
    grid:       <><rect {...p} x="3" y="3" width="7" height="7" rx="1"/><rect {...p} x="14" y="3" width="7" height="7" rx="1"/><rect {...p} x="3" y="14" width="7" height="7" rx="1"/><rect {...p} x="14" y="14" width="7" height="7" rx="1"/></>,
    file:       <><path {...p} d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline {...p} points="14 3 14 8 19 8"/><line {...p} x1="9" y1="13" x2="15" y2="13"/><line {...p} x1="9" y1="17" x2="13" y2="17"/></>,
    book:       <><path {...p} d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path {...p} d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>,
    cal:        <><rect {...p} x="3" y="4" width="18" height="18" rx="2"/><line {...p} x1="16" y1="2" x2="16" y2="6"/><line {...p} x1="8" y1="2" x2="8" y2="6"/><line {...p} x1="3" y1="10" x2="21" y2="10"/><path {...p} d="M9 16l2 2 4-4"/></>,
    users:      <><path {...p} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle {...p} cx="9" cy="7" r="4"/><path {...p} d="M23 21v-2a4 4 0 00-3-3.87"/><path {...p} d="M16 3.13a4 4 0 010 7.75"/></>,
    clock:      <><circle {...p} cx="12" cy="12" r="9"/><path {...p} d="M12 8v4l3 3"/></>,
    bar:        <><line {...p} x1="18" y1="20" x2="18" y2="10"/><line {...p} x1="12" y1="20" x2="12" y2="4"/><line {...p} x1="6" y1="20" x2="6" y2="14"/></>,
    dash:       <><rect {...p} x="3" y="3" width="9" height="9" rx="1"/><rect {...p} x="14" y="3" width="7" height="4" rx="1"/><rect {...p} x="14" y="10" width="7" height="11" rx="1"/><rect {...p} x="3" y="15" width="9" height="6" rx="1"/></>,
    logout:     <><path {...p} d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline {...p} points="16 17 21 12 16 7"/><line {...p} x1="21" y1="12" x2="9" y2="12"/></>,
    search:     <><circle {...p} cx="11" cy="11" r="8"/><line {...p} x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    bell:       <><path {...p} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path {...p} d="M13.73 21a2 2 0 01-3.46 0"/></>,
    plus:       <><line {...p} x1="12" y1="5" x2="12" y2="19"/><line {...p} x1="5" y1="12" x2="19" y2="12"/></>,
    send:       <><line {...p} x1="22" y1="2" x2="11" y2="13"/><polygon {...p} points="22 2 15 22 11 13 2 9 22 2"/></>,
    bot:        <><rect {...p} x="3" y="11" width="18" height="10" rx="2"/><circle {...p} cx="9" cy="16" r="1" fill={color}/><circle {...p} cx="15" cy="16" r="1" fill={color}/><path {...p} d="M12 11V7"/><path {...p} d="M8 7h8"/></>,
    x:          <><line {...p} x1="18" y1="6" x2="6" y2="18"/><line {...p} x1="6" y1="6" x2="18" y2="18"/></>,
    chevD:      <polyline {...p} points="6 9 12 15 18 9"/>,
    mail:       <><rect {...p} x="2" y="4" width="20" height="16" rx="2"/><path {...p} d="M2 7l10 7 10-7"/></>,
    star:       <polygon {...p} points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
    check:      <polyline {...p} points="20 6 9 17 4 12"/>,
    warn:       <><path {...p} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line {...p} x1="12" y1="9" x2="12" y2="13"/></>,
    upload:     <><path {...p} d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline {...p} points="17 8 12 3 7 8"/><line {...p} x1="12" y1="3" x2="12" y2="15"/></>,
    video:      <><polygon {...p} points="23 7 16 12 23 17 23 7"/><rect {...p} x="1" y="5" width="15" height="14" rx="2"/></>,
    doc:        <><path {...p} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline {...p} points="14 2 14 8 20 8"/></>,
    pencil:     <><path {...p} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path {...p} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    eye:        <><path {...p} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle {...p} cx="12" cy="12" r="3"/></>,
    trend:      <><polyline {...p} points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline {...p} points="16 7 22 7 22 13"/></>,
    cog:        <><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    grad:       <><path {...p} d="M22 10v6M2 10l10-5 10 5-10 5z"/><path {...p} d="M6 12v5c3 3 9 3 12 0v-5"/></>,
    arrowR:     <><line {...p} x1="5" y1="12" x2="19" y2="12"/><polyline {...p} points="12 5 19 12 12 19"/></>,
  };
  return <svg viewBox="0 0 24 24" style={s} xmlns="http://www.w3.org/2000/svg">{icons[name]||icons.home}</svg>;
};

const Logo = ({ width=130, light=false }) => (
  <svg width={width} viewBox="0 0 240 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="86" cy="38" rx="32" ry="32" fill={light?"rgba(245,200,66,.9)":"#F5C842"}/>
    <line x1="0" y1="38" x2="240" y2="38" stroke={light?"rgba(255,255,255,.4)":"#8B9CC8"} strokeWidth="2.5"/>
    <text x="8" y="56" fontFamily="'Sora',sans-serif" fontWeight="800" fontSize="50" letterSpacing="1.5"
      fill={light?"#FFFFFF":"#0D1B5E"}>VAHANI</text>
  </svg>
);

const Pill = ({ label, v="default", xs=false }) => {
  const map = {
    default:{ bg:T.skyXL,       c:T.textMid,  b:T.border    },
    success:{ bg:T.successBg,   c:T.success,  b:"#A7DFD0"   },
    danger: { bg:T.dangerBg,    c:T.danger,   b:"#F5BBBB"   },
    warn:   { bg:T.warnBg,      c:T.warn,     b:"#F5D060"   },
    navy:   { bg:T.navyL+"18",  c:T.navyL,    b:T.navyL+"30"},
    sun:    { bg:T.sunL+"44",   c:T.sunD,     b:T.sun+"50"  },
    sky:    { bg:T.skyXL,       c:T.sky,      b:T.skyL      },
  };
  const m = map[v]||map.default;
  return <span style={{display:"inline-flex",alignItems:"center",gap:4,borderRadius:999,fontWeight:600,
    background:m.bg,color:m.c,border:`1px solid ${m.b}`,letterSpacing:.2,
    padding:xs?"2px 9px":"4px 11px",fontSize:xs?11:12}}>{label}</span>;
};

const Kpi = ({ icon, label, value, delta, accent="#0D1B5E", onClick }) => {
  const [h,setH]=useState(false);
  return (
    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} onClick={onClick}
      style={{background:T.white,borderRadius:20,padding:"22px 24px",border:`1px solid ${T.border}`,
        boxShadow:h?`0 12px 40px ${T.shadowMd}`:`0 2px 12px ${T.shadow}`,
        transform:h?"translateY(-2px)":"none",transition:"all .22s ease",
        cursor:onClick?"pointer":"default",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-20,right:-20,width:100,height:100,borderRadius:"50%",background:`${accent}08`}}/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div style={{width:44,height:44,borderRadius:12,background:`${accent}18`,
          display:"flex",alignItems:"center",justifyContent:"center",color:accent}}>
          <Icon name={icon} size={20} color={accent}/>
        </div>
        {delta&&<div style={{display:"flex",alignItems:"center",gap:3,color:delta>0?T.success:T.danger,fontSize:12,fontWeight:600}}>
          <Icon name="trend" size={12} color={delta>0?T.success:T.danger}/>{Math.abs(delta)}%
        </div>}
      </div>
      <div style={{marginTop:16,fontSize:30,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif",lineHeight:1}}>{value}</div>
      <div style={{marginTop:6,fontSize:13,color:T.textMid,fontWeight:500}}>{label}</div>
    </div>
  );
};

const Ring = ({ pct, size=60, stroke=5, color=T.sun }) => {
  const r=(size-stroke)/2, circ=2*Math.PI*r, filled=circ*(pct/100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={T.skyXL} strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={`${filled} ${circ}`} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}/>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        fontSize={size/5} fontWeight="700" fill={T.navy} fontFamily="'Sora',sans-serif">{pct}%</text>
    </svg>
  );
};

const Bar = ({ pct, h=6, color=T.sun }) => (
  <div style={{background:T.skyXL,borderRadius:999,height:h,overflow:"hidden"}}>
    <div style={{width:`${pct}%`,height:"100%",background:color,borderRadius:999,transition:"width .8s cubic-bezier(.4,0,.2,1)"}}/>
  </div>
);

const Av = ({ name, size=36, color=T.navyL }) => {
  const init = name.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
  return <div style={{width:size,height:size,borderRadius:"50%",background:`${color}1A`,
    border:`1.5px solid ${color}30`,display:"flex",alignItems:"center",justifyContent:"center",
    color:color,fontSize:size*.35,fontWeight:700,fontFamily:"'Sora',sans-serif",flexShrink:0}}>{init}</div>;
};

const SH = ({ title, sub, onAction, actionIcon="plus", actionLabel="Add" }) => (
  <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:24}}>
    <div>
      <h2 style={{margin:0,fontSize:22,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif",letterSpacing:-.3}}>{title}</h2>
      {sub&&<p style={{margin:"4px 0 0",fontSize:13,color:T.textSub}}>{sub}</p>}
    </div>
    {onAction&&<button onClick={onAction} style={{display:"flex",alignItems:"center",gap:7,padding:"9px 18px",
      background:T.navy,color:T.white,border:"none",borderRadius:10,cursor:"pointer",
      fontSize:13,fontWeight:600,fontFamily:"'DM Sans',sans-serif",boxShadow:`0 4px 14px ${T.shadow}`}}
      onMouseEnter={e=>{e.currentTarget.style.background=T.navyL;e.currentTarget.style.transform="translateY(-1px)";}}
      onMouseLeave={e=>{e.currentTarget.style.background=T.navy;e.currentTarget.style.transform="none";}}>
      <Icon name={actionIcon} size={14} color={T.white}/>{actionLabel}
    </button>}
  </div>
);

const Card = ({ children, p=24, style={} }) => (
  <div style={{background:T.white,borderRadius:20,border:`1px solid ${T.border}`,
    boxShadow:`0 2px 12px ${T.shadow}`,padding:p,overflow:"hidden",...style}}>{children}</div>
);

const DataTable = ({ cols, rows }) => (
  <div style={{background:T.white,borderRadius:16,border:`1px solid ${T.border}`,overflow:"hidden",boxShadow:`0 2px 12px ${T.shadow}`}}>
    <table style={{width:"100%",borderCollapse:"collapse"}}>
      <thead><tr style={{background:T.chalk,borderBottom:`1px solid ${T.border}`}}>
        {cols.map((c,i)=><th key={i} style={{padding:"12px 20px",textAlign:"left",fontSize:11,fontWeight:700,
          color:T.textSub,textTransform:"uppercase",letterSpacing:1,fontFamily:"'Sora',sans-serif",whiteSpace:"nowrap"}}>{c}</th>)}
      </tr></thead>
      <tbody>{rows.map((row,i)=>(
        <tr key={i} style={{borderBottom:i<rows.length-1?`1px solid ${T.border}`:"none",transition:"background .12s"}}
          onMouseEnter={e=>e.currentTarget.style.background=T.chalk}
          onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
          {row.map((cell,j)=><td key={j} style={{padding:"14px 20px",fontSize:13,color:T.text,verticalAlign:"middle"}}>{cell}</td>)}
        </tr>
      ))}</tbody>
    </table>
  </div>
);

const Field = ({ label, type="text", placeholder, value, onChange, icon }) => {
  const [f,setF]=useState(false);
  return (
    <div style={{marginBottom:18}}>
      {label&&<label style={{display:"block",fontSize:12,fontWeight:700,color:T.textMid,
        textTransform:"uppercase",letterSpacing:.8,marginBottom:6,fontFamily:"'Sora',sans-serif"}}>{label}</label>}
      <div style={{position:"relative"}}>
        {icon&&<span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)"}}>
          <Icon name={icon} size={14} color={T.textSub}/></span>}
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}
          onFocus={()=>setF(true)} onBlur={()=>setF(false)}
          style={{width:"100%",padding:icon?"10px 14px 10px 38px":"10px 14px",borderRadius:10,
            border:`1.5px solid ${f?T.navy:T.border}`,fontSize:14,color:T.text,background:T.white,
            outline:"none",fontFamily:"'DM Sans',sans-serif",boxSizing:"border-box",
            boxShadow:f?`0 0 0 3px ${T.navy}14`:"none",transition:"all .15s"}}/>
      </div>
    </div>
  );
};

const SCHOLARS=[
  {id:1,name:"Aarav Mehta",   email:"aarav@vahani.org",  year:"2nd",programme:"Computer Science",attendance:94,score:88,status:"Active", batch:"2024"},
  {id:2,name:"Priya Sharma",  email:"priya@vahani.org",  year:"1st",programme:"Engineering",     attendance:87,score:76,status:"Active", batch:"2025"},
  {id:3,name:"Rohan Verma",   email:"rohan@vahani.org",  year:"3rd",programme:"Medicine",        attendance:91,score:92,status:"Active", batch:"2023"},
  {id:4,name:"Sneha Patel",   email:"sneha@vahani.org",  year:"2nd",programme:"Law",             attendance:78,score:65,status:"At Risk",batch:"2024"},
  {id:5,name:"Kabir Singh",   email:"kabir@vahani.org",  year:"1st",programme:"Architecture",   attendance:96,score:84,status:"Active", batch:"2025"},
  {id:6,name:"Anjali Nair",   email:"anjali@vahani.org", year:"3rd",programme:"Computer Science",attendance:72,score:58,status:"At Risk",batch:"2023"},
  {id:7,name:"Dev Joshi",     email:"dev@vahani.org",    year:"2nd",programme:"Engineering",     attendance:89,score:91,status:"Active", batch:"2024"},
  {id:8,name:"Meera Iyer",    email:"meera@vahani.org",  year:"1st",programme:"Medicine",        attendance:100,score:97,status:"Active",batch:"2025"},
];
const TRAINERS=[
  {id:1,name:"Dr. Sunita Rao",  email:"sunita@vahani.org", subject:"English Communication",scholars:45,sessions:28,rating:4.8,joined:"Jan 2023"},
  {id:2,name:"Prof. Alok Gupta",email:"alok@vahani.org",   subject:"Professional Literacy", scholars:60,sessions:32,rating:4.6,joined:"Mar 2022"},
  {id:3,name:"Ms. Ritu Kapoor", email:"ritu@vahani.org",   subject:"Computer Literacy",     scholars:55,sessions:24,rating:4.9,joined:"Jun 2023"},
  {id:4,name:"Mr. Vikram Nair", email:"vikram@vahani.org", subject:"Career Development",    scholars:40,sessions:18,rating:4.7,joined:"Sep 2023"},
];
const PROGRAMMES=[
  {id:1,name:"English Communication",enrolled:45,capacity:50,completion:90,resources:12,trainer:"Dr. Sunita Rao",  color:"#0D1B5E"},
  {id:2,name:"Professional Literacy", enrolled:60,capacity:60,completion:75,resources:8, trainer:"Prof. Alok Gupta",color:"#1A7F5A"},
  {id:3,name:"Computer Literacy",     enrolled:55,capacity:60,completion:60,resources:15,trainer:"Ms. Ritu Kapoor", color:"#5B35B0"},
  {id:4,name:"Career Development",    enrolled:40,capacity:50,completion:95,resources:10,trainer:"Mr. Vikram Nair", color:"#C0392B"},
  {id:5,name:"Leadership Workshop",   enrolled:30,capacity:35,completion:45,resources:6, trainer:"Dr. Sunita Rao",  color:"#0E6E8C"},
  {id:6,name:"Financial Literacy",    enrolled:50,capacity:50,completion:80,resources:9, trainer:"Prof. Alok Gupta",color:"#7C3AED"},
];
const ASSIGNMENTS=[
  {id:1,title:"Resume Workshop Draft",     programme:"Career Development",   due:"2026-03-18",submitted:32,total:40,status:"Open"},
  {id:2,title:"Excel Data Analysis",       programme:"Computer Literacy",    due:"2026-03-20",submitted:48,total:55,status:"Open"},
  {id:3,title:"English Essay – Leadership",programme:"English Communication",due:"2026-03-15",submitted:45,total:45,status:"Closed"},
  {id:4,title:"Business Case Study",       programme:"Professional Literacy",due:"2026-03-25",submitted:12,total:60,status:"Open"},
  {id:5,title:"Public Speaking Recording", programme:"English Communication",due:"2026-03-30",submitted:5, total:45,status:"Open"},
];
const RESOURCES=[
  {id:1,title:"English Grammar Masterclass",  type:"Video",   programme:"English Communication",size:"245 MB",date:"2026-02-10"},
  {id:2,title:"Resume Templates Pack",        type:"Document",programme:"Career Development",   size:"12 MB", date:"2026-02-15"},
  {id:3,title:"Excel Advanced Formulas",      type:"Notes",   programme:"Computer Literacy",    size:"3.2 MB",date:"2026-02-20"},
  {id:4,title:"Power BI Dashboard Tutorial",  type:"Video",   programme:"Computer Literacy",    size:"380 MB",date:"2026-02-25"},
  {id:5,title:"Professional Email Writing",   type:"Notes",   programme:"Professional Literacy",size:"1.8 MB",date:"2026-03-01"},
  {id:6,title:"Financial Planning Basics",    type:"Document",programme:"Financial Literacy",   size:"8.5 MB",date:"2026-03-05"},
];
const ACTIVITIES=[
  {id:1,name:"Sports Day 2026",         date:"2026-03-22",registered:28,capacity:50,type:"Sports"},
  {id:2,name:"Cultural Night",          date:"2026-04-05",registered:62,capacity:80,type:"Cultural"},
  {id:3,name:"Entrepreneurship Summit", date:"2026-04-12",registered:35,capacity:40,type:"Academic"},
  {id:4,name:"Photography Workshop",    date:"2026-04-18",registered:18,capacity:25,type:"Creative"},
];

function AIPanel({ onClose }) {
  const [msgs,setMsgs]=useState([{role:"assistant",text:"Welcome to Vahani LMS. I can help with courses, assignments, attendance, resources, and programme management."}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const endRef=useRef(null);
  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs]);
  const send=async()=>{
    if(!input.trim()||loading) return;
    const txt=input.trim(); setInput("");
    const h=[...msgs,{role:"user",text:txt}]; setMsgs(h); setLoading(true);
    try {
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:700,
          system:"You are the Vahani LMS AI assistant. Help scholars and trainers professionally and concisely.",
          messages:h.map(m=>({role:m.role,content:m.text}))})});
      const d=await res.json();
      setMsgs(m=>[...m,{role:"assistant",text:d.content?.map(b=>b.text||"").join("")||"Unable to process."}]);
    } catch { setMsgs(m=>[...m,{role:"assistant",text:"Connection error. Please retry."}]); }
    setLoading(false);
  };
  return (
    <div style={{position:"fixed",right:24,bottom:88,width:380,height:520,background:T.white,
      borderRadius:24,boxShadow:`0 24px 80px ${T.shadowMd}`,display:"flex",flexDirection:"column",
      zIndex:9999,border:`1px solid ${T.border}`,overflow:"hidden"}}>
      <div style={{background:T.navyD,padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:36,height:36,borderRadius:10,background:`${T.sun}1A`,border:`1.5px solid ${T.sun}40`,
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Icon name="bot" size={18} color={T.sun}/>
          </div>
          <div>
            <div style={{color:T.white,fontWeight:700,fontSize:14,fontFamily:"'Sora',sans-serif"}}>Vahani Assistant</div>
            <div style={{display:"flex",alignItems:"center",gap:5,marginTop:2}}>
              <div style={{width:7,height:7,borderRadius:"50%",background:"#4ADE80"}}/>
              <span style={{color:"rgba(255,255,255,.45)",fontSize:11}}>Online</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} style={{background:"rgba(255,255,255,.08)",border:"none",width:30,height:30,
          borderRadius:8,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Icon name="x" size={14} color="rgba(255,255,255,.7)"/>
        </button>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:16,display:"flex",flexDirection:"column",gap:12,
        background:`linear-gradient(180deg,${T.chalk} 0%,${T.white} 100%)`}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{alignSelf:m.role==="user"?"flex-end":"flex-start",maxWidth:"82%",padding:"11px 15px",
            borderRadius:m.role==="user"?"18px 18px 4px 18px":"18px 18px 18px 4px",
            background:m.role==="user"?T.navy:T.white,color:m.role==="user"?T.white:T.text,
            fontSize:13,lineHeight:1.55,fontFamily:"'DM Sans',sans-serif",
            boxShadow:`0 2px 8px ${T.shadow}`,border:m.role!=="user"?`1px solid ${T.border}`:"none"}}>{m.text}</div>
        ))}
        {loading&&<div style={{alignSelf:"flex-start",padding:"12px 16px",borderRadius:"18px 18px 18px 4px",
          background:T.white,border:`1px solid ${T.border}`,display:"flex",gap:5,alignItems:"center"}}>
          {[0,1,2].map(i=>(
            <div key={i} style={{width:7,height:7,borderRadius:"50%",background:T.sky,
              animation:"bounce .9s ease infinite",animationDelay:`${i*0.15}s`}}/>
          ))}
        </div>}
        <div ref={endRef}/>
      </div>
      <div style={{padding:"12px 16px",borderTop:`1px solid ${T.border}`,display:"flex",gap:10,alignItems:"center",background:T.white}}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
          placeholder="Ask a question..."
          style={{flex:1,padding:"10px 14px",borderRadius:10,border:`1.5px solid ${T.border}`,
            fontSize:13,color:T.text,outline:"none",fontFamily:"'DM Sans',sans-serif",transition:"border-color .15s"}}
          onFocus={e=>e.target.style.borderColor=T.navy} onBlur={e=>e.target.style.borderColor=T.border}/>
        <button onClick={send} style={{width:40,height:40,borderRadius:10,background:T.navy,border:"none",cursor:"pointer",
          display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}
          onMouseEnter={e=>e.currentTarget.style.background=T.navyL}
          onMouseLeave={e=>e.currentTarget.style.background=T.navy}>
          <Icon name="send" size={15} color={T.white}/>
        </button>
      </div>
      <style>{`@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}`}</style>
    </div>
  );
}

function Landing({ onStart }) {
  const [vis,setVis]=useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setVis(true),80); return()=>clearTimeout(t); },[]);
  return (
    <div style={{minHeight:"100vh",background:T.navyD,fontFamily:"'DM Sans',sans-serif",overflowX:"hidden"}}>
      <div style={{position:"fixed",top:-160,right:-120,width:600,height:600,borderRadius:"50%",
        background:`radial-gradient(circle,${T.sun}14 0%,transparent 70%)`,pointerEvents:"none"}}/>
      <div style={{position:"fixed",bottom:-200,left:-180,width:700,height:700,borderRadius:"50%",
        background:`radial-gradient(circle,${T.navyL}28 0%,transparent 70%)`,pointerEvents:"none"}}/>
      <nav style={{position:"relative",zIndex:10,display:"flex",justifyContent:"space-between",
        alignItems:"center",padding:"24px 64px",borderBottom:"1px solid rgba(255,255,255,.06)"}}>
        <Logo width={140} light/>
        <div style={{display:"flex",gap:12}}>
          <button onClick={onStart} style={{padding:"10px 28px",background:"transparent",
            border:"1.5px solid rgba(255,255,255,.2)",color:"rgba(255,255,255,.8)",borderRadius:10,
            cursor:"pointer",fontSize:14,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.5)";e.currentTarget.style.color="#fff";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.2)";e.currentTarget.style.color="rgba(255,255,255,.8)";}}>
            Sign in
          </button>
          <button onClick={onStart} style={{padding:"10px 28px",background:T.sun,color:T.navyD,border:"none",
            borderRadius:10,cursor:"pointer",fontWeight:700,fontSize:14,fontFamily:"'DM Sans',sans-serif",
            boxShadow:`0 4px 20px ${T.sun}40`}}>Get Started</button>
        </div>
      </nav>
      <div style={{position:"relative",zIndex:2,maxWidth:820,margin:"0 auto",padding:"88px 40px 64px",
        textAlign:"center",opacity:vis?1:0,transform:vis?"none":"translateY(24px)",transition:"all .9s cubic-bezier(.4,0,.2,1)"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 16px",
          background:"rgba(245,200,66,.1)",border:"1px solid rgba(245,200,66,.25)",borderRadius:999,marginBottom:28}}>
          <div style={{width:7,height:7,borderRadius:"50%",background:T.sun}}/>
          <span style={{color:T.sun,fontSize:12,fontWeight:600,letterSpacing:1.2,textTransform:"uppercase"}}>
            Scholarship Learning Management System
          </span>
        </div>
        <h1 style={{margin:"0 0 24px",fontSize:64,fontWeight:800,lineHeight:1.06,
          letterSpacing:-1.8,fontFamily:"'Sora',sans-serif",color:T.white}}>
          Where Vahani<br/><span style={{color:T.sun}}>Scholars</span> Thrive
        </h1>
        <p style={{fontSize:18,color:"rgba(255,255,255,.55)",lineHeight:1.8,maxWidth:560,
          margin:"0 auto 44px",fontWeight:400}}>
          A unified platform for mandatory programmes, mentorship, resources,
          and automated analytics — purpose-built for the Vahani community.
        </p>
        <button onClick={onStart} style={{display:"inline-flex",alignItems:"center",gap:10,
          padding:"14px 40px",background:T.sun,color:T.navyD,border:"none",borderRadius:12,
          cursor:"pointer",fontWeight:700,fontSize:15,fontFamily:"'Sora',sans-serif",
          boxShadow:`0 8px 32px ${T.sun}44`}}>
          Access Portal <Icon name="arrowR" size={16} color={T.navyD}/>
        </button>
      </div>
      <div style={{position:"relative",zIndex:2,maxWidth:860,margin:"0 auto 0",
        background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",
        borderRadius:20,padding:"24px 0",display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
        {[["180+","Scholars enrolled"],["6","Active programmes"],["74%","Avg completion"],["4.8","Trainer rating"]].map(([n,l],i)=>(
          <div key={i} style={{textAlign:"center",padding:"0 24px",
            borderRight:i<3?"1px solid rgba(255,255,255,.08)":"none"}}>
            <div style={{fontSize:32,fontWeight:800,color:T.sun,fontFamily:"'Sora',sans-serif",letterSpacing:-1}}>{n}</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.4)",marginTop:4}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{position:"relative",zIndex:2,maxWidth:940,margin:"72px auto 0",padding:"0 40px"}}>
        <h2 style={{textAlign:"center",margin:"0 0 40px",fontSize:34,fontWeight:800,color:T.white,
          fontFamily:"'Sora',sans-serif",letterSpacing:-.5}}>Everything in one platform</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:18}}>
          {[
            {icon:"trend",  title:"Progress Analytics",    desc:"Real-time performance tracking across assignments, quizzes, and attendance"},
            {icon:"book",   title:"Resource Library",       desc:"Programme-wise videos, documents, and notes — always organized"},
            {icon:"mail",   title:"Automated Reports",      desc:"Schedule and email reports to scholars, trainers, and leadership"},
            {icon:"bot",    title:"AI Learning Assistant",  desc:"Instant 24/7 academic support powered by Claude"},
          ].map((f,i)=>(
            <div key={i} style={{padding:"28px",background:"rgba(255,255,255,.04)",
              border:"1px solid rgba(255,255,255,.08)",borderRadius:20,transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,.07)";e.currentTarget.style.borderColor="rgba(245,200,66,.22)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,.04)";e.currentTarget.style.borderColor="rgba(255,255,255,.08)";}}>
              <div style={{width:44,height:44,borderRadius:12,background:`${T.sun}16`,border:`1.5px solid ${T.sun}28`,
                display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18}}>
                <Icon name={f.icon} size={20} color={T.sun}/>
              </div>
              <h3 style={{margin:"0 0 8px",fontSize:16,fontWeight:700,color:T.white,fontFamily:"'Sora',sans-serif"}}>{f.title}</h3>
              <p style={{margin:0,fontSize:13,color:"rgba(255,255,255,.45)",lineHeight:1.7}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"60px 0 40px",
        color:"rgba(255,255,255,.2)",fontSize:13}}>
        &copy; 2026 Vahani Scholarship Trust. All rights reserved.
      </div>
    </div>
  );
}

function Login({ onLogin }) {
  const [role,setRole]=useState("scholar");
  const [loading,setLoading]=useState(false);
  const roles=[{key:"scholar",icon:"grad",label:"Scholar"},{key:"trainer",icon:"users",label:"Trainer"},{key:"admin",icon:"cog",label:"Admin"}];
  const go=()=>{ setLoading(true); setTimeout(()=>{ setLoading(false); onLogin(role); },700); };
  return (
    <div style={{display:"flex",minHeight:"100vh",fontFamily:"'DM Sans',sans-serif"}}>
      <div style={{flex:1,background:T.navy,display:"flex",flexDirection:"column",alignItems:"center",
        justifyContent:"center",padding:60,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-120,right:-120,width:400,height:400,borderRadius:"50%",
          background:`radial-gradient(circle,${T.sun}10 0%,transparent 70%)`}}/>
        <div style={{position:"relative",zIndex:1,maxWidth:400,textAlign:"center"}}>
          <Logo width={160} light/>
          <p style={{color:"rgba(255,255,255,.5)",fontSize:15,lineHeight:1.75,marginTop:28,marginBottom:44}}>
            Empowering scholars across India through structured learning, mentorship, and career development.
          </p>
          {[{icon:"trend",t:"Track progress across all programmes"},{icon:"book",t:"Access curated learning resources"},
            {icon:"cal",t:"Manage attendance and schedules"},{icon:"mail",t:"Receive automated performance reports"}].map((it,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 16px",marginBottom:8,
              background:"rgba(255,255,255,.05)",borderRadius:11,border:"1px solid rgba(255,255,255,.08)",textAlign:"left"}}>
              <Icon name={it.icon} size={15} color={T.sun}/>
              <span style={{color:"rgba(255,255,255,.7)",fontSize:13}}>{it.t}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{flex:.85,background:T.chalk,display:"flex",alignItems:"center",justifyContent:"center",padding:60}}>
        <div style={{width:420}}>
          <div style={{marginBottom:32}}>
            <h2 style={{margin:0,fontSize:28,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif",letterSpacing:-.5}}>Welcome back</h2>
            <p style={{margin:"8px 0 0",fontSize:14,color:T.textMid}}>Sign in to your Vahani LMS account</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:28,
            padding:5,background:T.skyXL,borderRadius:14}}>
            {roles.map(r=>(
              <button key={r.key} onClick={()=>setRole(r.key)} style={{display:"flex",flexDirection:"column",
                alignItems:"center",gap:6,padding:"10px 8px",borderRadius:10,border:"none",cursor:"pointer",
                transition:"all .15s",background:role===r.key?T.white:"transparent",
                color:role===r.key?T.navy:T.textSub,
                boxShadow:role===r.key?`0 2px 10px ${T.shadow}`:"none",fontFamily:"'DM Sans',sans-serif"}}>
                <Icon name={r.icon} size={18} color={role===r.key?T.navy:T.textSub}/>
                <span style={{fontSize:12,fontWeight:role===r.key?700:500}}>{r.label}</span>
              </button>
            ))}
          </div>
          <Field label="Email address" type="email" placeholder={`${role}@vahani.org`} icon="mail"/>
          <Field label="Password" type="password" placeholder="Enter your password"/>
          <div style={{textAlign:"right",marginTop:-10,marginBottom:22}}>
            <a href="#" style={{fontSize:13,color:T.navy,textDecoration:"none",fontWeight:600}}>Forgot password?</a>
          </div>
          <button onClick={go} disabled={loading} style={{width:"100%",padding:"13px",background:loading?T.sky:T.navy,
            color:T.white,border:"none",borderRadius:12,cursor:loading?"not-allowed":"pointer",fontWeight:700,
            fontSize:15,fontFamily:"'Sora',sans-serif",boxShadow:`0 4px 20px ${T.shadow}`,transition:"all .18s"}}>
            {loading?"Signing in...":"Sign In"}
          </button>
          <div style={{marginTop:18,textAlign:"center",fontSize:13,color:T.textMid}}>
            Need access?{" "}<a href="#" style={{color:T.navy,fontWeight:600,textDecoration:"none"}}>Contact administrator</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const LABELS={dashboard:"Overview",scholars:"Scholars",programmes:"Programmes",assignments:"Assignments",
  resources:"Resources",attendance:"Attendance",trainers:"Trainers & Tutors",activities:"Activities",reports:"Reports & Analytics"};

function Topbar({ page, role, backendOk }) {
  return (
    <div style={{height:64,borderBottom:`1px solid ${T.border}`,background:T.white,
      display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 28px",
      position:"sticky",top:0,zIndex:100}}>
      <div style={{fontSize:20,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif",letterSpacing:-.3}}>
        {LABELS[page]||"Dashboard"}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:14}}>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:"6px 10px",borderRadius:999,
          background:backendOk?T.successBg:T.dangerBg,border:`1px solid ${backendOk?"#A7DFD0":"#F5BBBB"}`,fontSize:11,fontWeight:700,color:backendOk?T.success:T.danger}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:backendOk?T.success:T.danger}}/>
          {backendOk?"Backend Connected":"Backend Offline"}
        </div>
        <div style={{position:"relative"}}>
          <div style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)"}}>
            <Icon name="search" size={14} color={T.textSub}/>
          </div>
          <input placeholder="Search..." style={{padding:"8px 14px 8px 34px",borderRadius:10,
            border:`1.5px solid ${T.border}`,fontSize:13,color:T.text,outline:"none",
            background:T.chalk,fontFamily:"'DM Sans',sans-serif",width:200}}
            onFocus={e=>e.target.style.borderColor=T.navy}
            onBlur={e=>e.target.style.borderColor=T.border}/>
        </div>
        <button style={{position:"relative",width:38,height:38,borderRadius:10,border:`1px solid ${T.border}`,
          background:T.white,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Icon name="bell" size={17} color={T.textMid}/>
          <div style={{position:"absolute",top:8,right:9,width:8,height:8,borderRadius:"50%",
            background:T.danger,border:`2px solid ${T.white}`}}/>
        </button>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"5px 12px",
          borderRadius:10,border:`1px solid ${T.border}`,background:T.chalk}}>
          <Av name={role==="scholar"?"Aarav Mehta":role==="trainer"?"Sunita Rao":"Admin User"} size={28} color={T.navy}/>
          <div>
            <div style={{fontSize:13,fontWeight:600,color:T.navy,lineHeight:1}}>
              {role==="scholar"?"Aarav Mehta":role==="trainer"?"Dr. Sunita Rao":"Admin"}
            </div>
            <div style={{fontSize:11,color:T.textSub,marginTop:2,textTransform:"capitalize"}}>{role}</div>
          </div>
          <Icon name="chevD" size={13} color={T.textSub}/>
        </div>
      </div>
    </div>
  );
}

const scholarNav=[
  {key:"dashboard",icon:"dash",label:"Dashboard"},{key:"programmes",icon:"grid",label:"Programmes"},
  {key:"assignments",icon:"file",label:"Assignments"},{key:"resources",icon:"book",label:"Resources"},
  {key:"attendance",icon:"cal",label:"Attendance"},{key:"activities",icon:"clock",label:"Activities"},
];
const adminNav=[
  {key:"dashboard",icon:"dash",label:"Overview"},{key:"scholars",icon:"grad",label:"Scholars"},
  {key:"programmes",icon:"grid",label:"Programmes"},{key:"assignments",icon:"file",label:"Assignments"},
  {key:"resources",icon:"book",label:"Resources"},{key:"attendance",icon:"cal",label:"Attendance"},
  {key:"trainers",icon:"users",label:"Trainers"},{key:"activities",icon:"clock",label:"Activities"},
  {key:"reports",icon:"bar",label:"Reports"},
];

function Sidebar({ page, setPage, role, onLogout }) {
  const nav=role==="scholar"?scholarNav:adminNav;
  return (
    <div style={{width:228,background:T.navyD,display:"flex",flexDirection:"column",
      height:"100vh",position:"sticky",top:0,flexShrink:0,zIndex:200}}>
      <div style={{padding:"28px 22px 18px",borderBottom:"1px solid rgba(255,255,255,.06)"}}>
        <Logo width={120} light/>
        <div style={{marginTop:10,display:"inline-flex",alignItems:"center",gap:5,
          background:"rgba(245,200,66,.1)",padding:"3px 10px",borderRadius:999}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:T.sun}}/>
          <span style={{fontSize:10,color:T.sun,fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>{role} portal</span>
        </div>
      </div>
      <nav style={{flex:1,padding:"14px 10px",overflowY:"auto"}}>
        <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,.18)",textTransform:"uppercase",
          letterSpacing:1.2,padding:"0 12px 10px",fontFamily:"'Sora',sans-serif"}}>Navigation</div>
        {nav.map(item=>{
          const active=page===item.key;
          return (
            <button key={item.key} onClick={()=>setPage(item.key)} style={{width:"100%",
              display:"flex",alignItems:"center",gap:10,padding:"9px 12px",borderRadius:10,
              border:"none",cursor:"pointer",textAlign:"left",marginBottom:2,
              background:active?`${T.sun}18`:"transparent",
              color:active?T.sun:"rgba(255,255,255,.5)",
              fontWeight:active?600:400,fontSize:13.5,fontFamily:"'DM Sans',sans-serif",
              transition:"all .14s",borderLeft:active?`2.5px solid ${T.sun}`:"2.5px solid transparent"}}
              onMouseEnter={e=>{ if(!active){e.currentTarget.style.background="rgba(255,255,255,.04)";e.currentTarget.style.color="rgba(255,255,255,.8)";}}}
              onMouseLeave={e=>{ if(!active){e.currentTarget.style.background="transparent";e.currentTarget.style.color="rgba(255,255,255,.5)";}}}
            >
              <Icon name={item.icon} size={15} color={active?T.sun:"rgba(255,255,255,.4)"} sw={active?2:1.5}/>
              {item.label}
            </button>
          );
        })}
      </nav>
      <div style={{padding:"14px 10px",borderTop:"1px solid rgba(255,255,255,.06)"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",
          background:"rgba(255,255,255,.04)",borderRadius:12,marginBottom:8}}>
          <Av name={role==="scholar"?"Aarav Mehta":role==="trainer"?"Sunita Rao":"Admin User"} size={30} color={T.sun}/>
          <div style={{flex:1,minWidth:0}}>
            <div style={{color:T.white,fontSize:13,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
              {role==="scholar"?"Aarav Mehta":role==="trainer"?"Dr. Sunita Rao":"Admin"}
            </div>
            <div style={{color:"rgba(255,255,255,.3)",fontSize:11,marginTop:1}}>{role}@vahani.org</div>
          </div>
        </div>
        <button onClick={onLogout} style={{width:"100%",display:"flex",alignItems:"center",gap:8,
          padding:"9px 12px",borderRadius:9,border:"none",cursor:"pointer",
          background:"transparent",color:"rgba(255,255,255,.3)",fontSize:13,fontFamily:"'DM Sans',sans-serif",transition:"all .14s"}}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(192,57,43,.12)";e.currentTarget.style.color="#F87171";}}
          onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="rgba(255,255,255,.3)";}}>
          <Icon name="logout" size={14} color="currentColor"/> Sign out
        </button>
      </div>
    </div>
  );
}

function ScholarDash({ onNav }) {
  return (
    <div style={{padding:32}}>
      <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:28}}>
        <Av name="Aarav Mehta" size={50} color={T.navy}/>
        <div>
          <h1 style={{margin:0,fontSize:24,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif",letterSpacing:-.3}}>
            Good morning, Aarav
          </h1>
          <p style={{margin:"4px 0 0",fontSize:14,color:T.textMid}}>Wednesday, 11 March 2026 · 2nd Year Scholar</p>
        </div>
      </div>
      <div style={{background:T.warnBg,border:`1px solid #F5D060`,borderRadius:12,padding:"12px 18px",
        marginBottom:28,display:"flex",alignItems:"center",gap:12}}>
        <Icon name="warn" size={16} color={T.warn}/>
        <span style={{fontSize:13,color:T.warn,fontWeight:500}}>
          You have <strong>2 assignments</strong> due this week and <strong>1 quiz</strong> scheduled for Friday.
        </span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20,marginBottom:32}}>
        <Kpi icon="grid"   label="Active Programmes"   value="5"   accent={T.navy}    delta={0}/>
        <Kpi icon="file"   label="Pending Assignments" value="2"   accent={T.danger}/>
        <Kpi icon="cal"    label="Attendance Rate"     value="94%" accent={T.success} delta={3}/>
        <Kpi icon="trend"  label="Overall Score"       value="88"  accent="#7C3AED"   delta={5}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:24}}>
        <Card>
          <SH title="My Programmes" sub="Current semester" onAction={()=>onNav("programmes")} actionIcon="arrowR" actionLabel="View all"/>
          {PROGRAMMES.slice(0,4).map((p,i)=>(
            <div key={p.id} style={{display:"flex",alignItems:"center",gap:16,padding:"13px 0",
              borderBottom:i<3?`1px solid ${T.border}`:"none"}}>
              <div style={{width:9,height:9,borderRadius:"50%",background:p.color,flexShrink:0}}/>
              <div style={{flex:1}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:7}}>
                  <span style={{fontSize:13,fontWeight:600,color:T.text}}>{p.name}</span>
                  <span style={{fontSize:12,fontWeight:700,color:p.color}}>{p.completion}%</span>
                </div>
                <Bar pct={p.completion} color={p.color} h={5}/>
                <span style={{fontSize:11,color:T.textSub,marginTop:3,display:"block"}}>{p.trainer}</span>
              </div>
            </div>
          ))}
        </Card>
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          <Card>
            <h3 style={{margin:"0 0 15px",fontSize:15,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif",
              display:"flex",alignItems:"center",gap:8}}>
              <Icon name="cal" size={15} color={T.navy}/> Upcoming Sessions
            </h3>
            {[{t:"Machine Learning",d:"Mar 11, 10:00 AM",host:"Dr. S. Rao"},
              {t:"Resume Workshop",d:"Mar 12, 4:00 PM",host:"Mr. V. Nair"},
              {t:"Career Guidance",d:"Mar 13, 2:30 PM",host:"Prof. A. Gupta"}].map((s,i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                padding:"9px 0",borderBottom:i<2?`1px solid ${T.border}`:"none"}}>
                <div>
                  <div style={{fontSize:13,fontWeight:600,color:T.text}}>{s.t}</div>
                  <div style={{fontSize:11,color:T.textSub,marginTop:2}}>{s.d} · {s.host}</div>
                </div>
                <button style={{padding:"5px 12px",background:T.navy,color:T.white,border:"none",
                  borderRadius:7,cursor:"pointer",fontSize:11,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>Join</button>
              </div>
            ))}
          </Card>
          <Card>
            <h3 style={{margin:"0 0 14px",fontSize:15,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif",
              display:"flex",alignItems:"center",gap:8}}>
              <Icon name="bell" size={15} color={T.navy}/> Announcements
            </h3>
            {[{t:"AI Workshop",d:"Tomorrow 4 PM",dot:T.sun},{t:"Scholarship Disbursement Update",d:"Mar 8 · 11 AM",dot:T.success},
              {t:"Assignment Deadline Extended",d:"Mar 6 · 6:30 PM",dot:T.danger}].map((a,i)=>(
              <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",padding:"9px 0",borderBottom:i<2?`1px solid ${T.border}`:"none"}}>
                <div style={{width:7,height:7,borderRadius:"50%",background:a.dot,marginTop:4,flexShrink:0}}/>
                <div>
                  <div style={{fontSize:13,fontWeight:500,color:T.text}}>{a.t}</div>
                  <div style={{fontSize:11,color:T.textSub}}>{a.d}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

function AdminDash({ onNav }) {
  const atRisk=SCHOLARS.filter(s=>s.status==="At Risk");
  return (
    <div style={{padding:32}}>
      <div style={{marginBottom:28}}>
        <h1 style={{margin:0,fontSize:24,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif",letterSpacing:-.3}}>Programme Overview</h1>
        <p style={{margin:"4px 0 0",fontSize:14,color:T.textMid}}>Vahani Scholarship Trust — Academic Year 2025–26</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20,marginBottom:32}}>
        <Kpi icon="grad"  label="Total Scholars"    value="180"         accent={T.navy}    delta={12}/>
        <Kpi icon="grid"  label="Active Programmes" value="6"           accent={T.success}/>
        <Kpi icon="warn"  label="At-Risk Scholars"  value={atRisk.length} accent={T.danger} onClick={()=>onNav("scholars")}/>
        <Kpi icon="trend" label="Avg Completion"    value="74%"         accent="#7C3AED"   delta={8}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:24}}>
        <Card>
          <SH title="Scholar Distribution" sub="By year of study"/>
          {[["1st Year",60,T.navy],["2nd Year",51,T.sun],["3rd Year",69,T.success]].map(([y,n,c])=>(
            <div key={y} style={{marginBottom:18}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:7}}>
                <span style={{fontSize:13,fontWeight:600,color:T.text}}>{y}</span>
                <span style={{fontSize:13,color:T.textSub}}><strong style={{color:T.text}}>{n}</strong> scholars</span>
              </div>
              <Bar pct={Math.round(n/180*100)} color={c} h={9}/>
            </div>
          ))}
        </Card>
        <Card>
          <SH title="Programme Completion" sub="Current progress"/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {PROGRAMMES.map(p=>(
              <div key={p.id} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:7}}>
                <Ring pct={p.completion} size={64} stroke={5} color={p.color}/>
                <div style={{fontSize:11,fontWeight:600,color:T.text,textAlign:"center",lineHeight:1.3}}>
                  {p.name.split(" ")[0]}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      {atRisk.length>0&&(
        <Card>
          <SH title="At-Risk Scholars" sub="Require immediate attention" onAction={()=>onNav("scholars")} actionIcon="arrowR" actionLabel="View all scholars"/>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>
            {atRisk.map(s=>(
              <div key={s.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",
                padding:"14px 16px",border:`1px solid #FBBCBC`,background:T.dangerBg,borderRadius:12}}>
                <div style={{display:"flex",gap:12,alignItems:"center"}}>
                  <Av name={s.name} size={36} color={T.danger}/>
                  <div>
                    <div style={{fontSize:13,fontWeight:600,color:T.text}}>{s.name}</div>
                    <div style={{fontSize:11,color:T.textMid,marginTop:2}}>{s.programme} · {s.year} Year</div>
                    <div style={{display:"flex",gap:6,marginTop:5}}>
                      <Pill label={`Attend. ${s.attendance}%`} v="danger" xs/>
                      <Pill label={`Score ${s.score}`} v="danger" xs/>
                    </div>
                  </div>
                </div>
                <button style={{padding:"7px 14px",background:T.danger,color:T.white,border:"none",
                  borderRadius:8,cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>Alert</button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

function ScholarsPage() {
  const [search,setSearch]=useState(""); const [filter,setFilter]=useState("All");
  const f=SCHOLARS.filter(s=>s.name.toLowerCase().includes(search.toLowerCase())&&(filter==="All"||s.status===filter));
  const rows=f.map(s=>[
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <Av name={s.name} size={32} color={T.navy}/>
      <div><div style={{fontWeight:600,color:T.navy,fontSize:13}}>{s.name}</div>
        <div style={{fontSize:11,color:T.textSub}}>{s.email}</div></div>
    </div>,
    <span style={{fontSize:13,color:T.textMid}}>{s.programme}</span>,
    <Pill label={`${s.year} Year`} v="sky" xs/>,
    <div><span style={{fontSize:13,fontWeight:700,color:s.attendance<80?T.danger:T.success}}>{s.attendance}%</span>
      <Bar pct={s.attendance} color={s.attendance<80?T.danger:T.success} h={3}/></div>,
    <span style={{fontSize:13,fontWeight:700,color:s.score<70?T.warn:T.success}}>{s.score}<span style={{color:T.textSub,fontWeight:400}}>/100</span></span>,
    <Pill label={s.status} v={s.status==="Active"?"success":"danger"}/>,
    <button style={{padding:"6px 14px",background:T.navy,color:T.white,border:"none",borderRadius:7,cursor:"pointer",
      fontSize:12,fontWeight:600,fontFamily:"'DM Sans',sans-serif",display:"flex",alignItems:"center",gap:4}}>
      <Icon name="eye" size={12} color={T.white}/> View
    </button>
  ]);
  return (
    <div style={{padding:32}}>
      <SH title="Scholars" sub={`${SCHOLARS.length} total scholars enrolled`} onAction={()=>{}} actionIcon="plus" actionLabel="Add Scholar"/>
      <div style={{display:"flex",gap:12,marginBottom:24}}>
        <div style={{flex:1,position:"relative"}}>
          <div style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)"}}>
            <Icon name="search" size={14} color={T.textSub}/></div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by name or programme..."
            style={{width:"100%",padding:"10px 14px 10px 36px",borderRadius:10,border:`1.5px solid ${T.border}`,
              fontSize:13,outline:"none",fontFamily:"'DM Sans',sans-serif",boxSizing:"border-box",transition:"border-color .15s"}}
            onFocus={e=>e.target.style.borderColor=T.navy} onBlur={e=>e.target.style.borderColor=T.border}/>
        </div>
        {["All","Active","At Risk"].map(v=>(
          <button key={v} onClick={()=>setFilter(v)} style={{padding:"10px 18px",borderRadius:10,
            border:`1.5px solid ${filter===v?T.navy:T.border}`,cursor:"pointer",
            background:filter===v?T.navy:T.white,color:filter===v?T.white:T.textMid,
            fontWeight:600,fontSize:13,fontFamily:"'DM Sans',sans-serif",transition:"all .14s"}}>{v}</button>
        ))}
      </div>
      <DataTable cols={["Scholar","Programme","Year","Attendance","Score","Status","Actions"]} rows={rows}/>
    </div>
  );
}

function ProgrammesPage({ role }) {
  return (
    <div style={{padding:32}}>
      <SH title="Programmes" sub="All active learning programmes" onAction={role!=="scholar"?()=>{}:null} actionIcon="plus" actionLabel="New Programme"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {PROGRAMMES.map(p=>(
          <div key={p.id} style={{background:T.white,borderRadius:20,border:`1px solid ${T.border}`,overflow:"hidden",
            boxShadow:`0 2px 12px ${T.shadow}`,transition:"all .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 12px 40px ${T.shadowMd}`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=`0 2px 12px ${T.shadow}`;}}>
            <div style={{height:5,background:p.color}}/>
            <div style={{padding:22}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                <h3 style={{margin:0,fontSize:14,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif",lineHeight:1.35,maxWidth:"70%"}}>{p.name}</h3>
                <Pill label={`${p.completion}%`} v="navy" xs/>
              </div>
              <div style={{fontSize:12,color:T.textMid,marginBottom:14,display:"flex",alignItems:"center",gap:5}}>
                <Icon name="users" size={12} color={T.textSub}/>{p.trainer}
              </div>
              <div style={{marginBottom:14}}><Bar pct={p.completion} color={p.color} h={6}/></div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
                <div style={{background:T.chalk,borderRadius:10,padding:"10px 12px",textAlign:"center"}}>
                  <div style={{fontSize:18,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif"}}>{p.enrolled}</div>
                  <div style={{fontSize:11,color:T.textSub}}>Enrolled</div>
                </div>
                <div style={{background:T.chalk,borderRadius:10,padding:"10px 12px",textAlign:"center"}}>
                  <div style={{fontSize:18,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif"}}>{p.resources}</div>
                  <div style={{fontSize:11,color:T.textSub}}>Resources</div>
                </div>
              </div>
              <div style={{display:"flex",gap:8}}>
                <button style={{flex:1,padding:"8px",background:p.color,color:T.white,border:"none",borderRadius:8,
                  cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"'DM Sans',sans-serif",
                  display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>
                  <Icon name="arrowR" size={12} color={T.white}/> Open
                </button>
                {role!=="scholar"&&<button style={{padding:"8px 12px",background:"transparent",color:T.textMid,
                  border:`1px solid ${T.border}`,borderRadius:8,cursor:"pointer",fontSize:12,fontFamily:"'DM Sans',sans-serif",
                  display:"flex",alignItems:"center",gap:4}}>
                  <Icon name="cog" size={12} color={T.textMid}/> Manage
                </button>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssignmentsPage({ role }) {
  const [showForm,setShowForm]=useState(false);
  return (
    <div style={{padding:32}}>
      <SH title="Assignments" sub="Manage and track all assignments" onAction={role!=="scholar"?()=>setShowForm(!showForm):null} actionIcon="plus" actionLabel="New Assignment"/>
      {showForm&&(
        <Card style={{marginBottom:24}}>
          <h3 style={{margin:"0 0 20px",fontSize:16,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif"}}>Create Assignment</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 24px"}}>
            <Field label="Assignment Title" placeholder="Enter title"/>
            <Field label="Programme" placeholder="Select programme"/>
            <Field label="Due Date" type="date"/>
            <Field label="Max Marks" placeholder="100"/>
          </div>
          <div style={{display:"flex",gap:10}}>
            <button onClick={()=>setShowForm(false)} style={{padding:"10px 24px",background:T.navy,color:T.white,
              border:"none",borderRadius:10,cursor:"pointer",fontWeight:600,fontSize:14,fontFamily:"'DM Sans',sans-serif"}}>Create</button>
            <button onClick={()=>setShowForm(false)} style={{padding:"10px 20px",background:"transparent",color:T.textMid,
              border:`1.5px solid ${T.border}`,borderRadius:10,cursor:"pointer",fontSize:14,fontFamily:"'DM Sans',sans-serif"}}>Cancel</button>
          </div>
        </Card>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {ASSIGNMENTS.map(a=>{
          const pct=Math.round(a.submitted/a.total*100);
          return (
            <Card key={a.id}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:20}}>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:6}}>
                    <div style={{width:38,height:38,borderRadius:10,background:`${T.navy}10`,
                      display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <Icon name="file" size={16} color={T.navy}/>
                    </div>
                    <div>
                      <div style={{fontSize:15,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif"}}>{a.title}</div>
                      <div style={{fontSize:12,color:T.textSub,marginTop:1}}>{a.programme} · Due: {a.due}</div>
                    </div>
                  </div>
                  {role!=="scholar"&&(
                    <div style={{marginTop:14,maxWidth:420}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                        <span style={{fontSize:12,color:T.textSub}}>Submissions</span>
                        <span style={{fontSize:12,fontWeight:700,color:T.text}}>{a.submitted}/{a.total} ({pct}%)</span>
                      </div>
                      <Bar pct={pct} color={pct>80?T.success:pct>50?T.sun:T.danger} h={5}/>
                    </div>
                  )}
                </div>
                <div style={{display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
                  <Pill label={a.status} v={a.status==="Open"?"success":"default"}/>
                  {role!=="scholar"&&<button style={{display:"flex",alignItems:"center",gap:5,padding:"8px 16px",
                    background:T.navy,color:T.white,border:"none",borderRadius:8,cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>
                    <Icon name="pencil" size={12} color={T.white}/> Grade
                  </button>}
                  {role==="scholar"&&a.status==="Open"&&<button style={{display:"flex",alignItems:"center",gap:5,
                    padding:"8px 16px",background:T.sun,color:T.navyD,border:"none",borderRadius:8,
                    cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>
                    <Icon name="upload" size={12} color={T.navyD}/> Submit
                  </button>}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function ResourcesPage({ role }) {
  const TM={Video:{icon:"video",color:"#5B35B0"},Document:{icon:"doc",color:T.navy},Notes:{icon:"pencil",color:T.success}};
  const [filter,setFilter]=useState("All");
  const filtered=filter==="All"?RESOURCES:RESOURCES.filter(r=>r.type===filter);
  return (
    <div style={{padding:32}}>
      <SH title="Learning Resources" sub="Programme-wise videos, documents, and notes"
        onAction={role!=="scholar"?()=>{}:null} actionIcon="upload" actionLabel="Upload"/>
      <div style={{display:"flex",gap:8,marginBottom:24}}>
        {["All","Video","Document","Notes"].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} style={{padding:"8px 18px",borderRadius:9,
            border:`1.5px solid ${filter===f?T.navy:T.border}`,cursor:"pointer",
            background:filter===f?T.navy:T.white,color:filter===f?T.white:T.textMid,
            fontWeight:600,fontSize:13,fontFamily:"'DM Sans',sans-serif",transition:"all .14s"}}>{f}</button>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        {filtered.map(r=>{
          const tm=TM[r.type];
          return (
            <Card key={r.id} style={{transition:"all .2s"}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow=`0 12px 40px ${T.shadowMd}`}
              onMouseLeave={e=>e.currentTarget.style.boxShadow=`0 2px 12px ${T.shadow}`}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                <div style={{width:46,height:46,borderRadius:12,background:`${tm.color}10`,border:`1.5px solid ${tm.color}20`,
                  display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Icon name={tm.icon} size={20} color={tm.color}/>
                </div>
                <Pill label={r.type} v={r.type==="Video"?"sky":r.type==="Document"?"navy":"success"} xs/>
              </div>
              <div style={{fontSize:14,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif",marginBottom:5,lineHeight:1.3}}>{r.title}</div>
              <div style={{fontSize:12,color:T.textMid,marginBottom:3}}>{r.programme}</div>
              <div style={{fontSize:11,color:T.textSub}}>{r.size} · {r.date}</div>
              <button style={{marginTop:16,width:"100%",padding:"9px",background:T.chalk,color:T.navy,
                border:`1.5px solid ${T.border}`,borderRadius:9,cursor:"pointer",fontWeight:600,fontSize:13,
                fontFamily:"'DM Sans',sans-serif",display:"flex",alignItems:"center",justifyContent:"center",gap:7,transition:"all .14s"}}
                onMouseEnter={e=>{e.currentTarget.style.background=T.navy;e.currentTarget.style.color=T.white;e.currentTarget.style.borderColor=T.navy;}}
                onMouseLeave={e=>{e.currentTarget.style.background=T.chalk;e.currentTarget.style.color=T.navy;e.currentTarget.style.borderColor=T.border;}}>
                {r.type==="Video"?<><Icon name="video" size={13} color="currentColor"/> Watch</>:<><Icon name="doc" size={13} color="currentColor"/> Download</>}
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function AttendancePage({ role }) {
  const days=["Mon","Tue","Wed","Thu","Fri"];
  const data=[[1,1,1,0,1],[1,1,0,1,1],[1,1,1,1,1],[0,1,1,1,1]];
  const rows=SCHOLARS.map(s=>[
    <div style={{display:"flex",alignItems:"center",gap:10}}><Av name={s.name} size={28} color={T.navy}/>
      <span style={{fontSize:13,fontWeight:600,color:T.navy}}>{s.name}</span></div>,
    <span style={{fontSize:13,color:T.textMid}}>{s.programme}</span>,
    <span style={{fontSize:13,fontWeight:700,color:T.success}}>{Math.round(s.attendance*0.2)}</span>,
    <span style={{fontSize:13,fontWeight:700,color:T.danger}}>{20-Math.round(s.attendance*0.2)}</span>,
    <div style={{minWidth:120}}>
      <div style={{fontSize:13,fontWeight:700,color:s.attendance<80?T.danger:T.success,marginBottom:4}}>{s.attendance}%</div>
      <Bar pct={s.attendance} color={s.attendance<80?T.danger:T.success} h={4}/>
    </div>,
    <Pill label={s.attendance>=85?"Excellent":s.attendance>=75?"Good":"Low"} v={s.attendance>=85?"success":s.attendance>=75?"warn":"danger"} xs/>
  ]);
  return (
    <div style={{padding:32}}>
      <SH title="Attendance" sub="Track and manage scholar attendance"
        onAction={role!=="scholar"?()=>{}:null} actionIcon="check" actionLabel="Mark Attendance"/>
      {role==="scholar"?(
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:24}}>
          <Card>
            <h3 style={{margin:"0 0 20px",fontSize:15,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif"}}>March 2026</h3>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8}}>
              {days.map(d=><div key={d} style={{textAlign:"center",fontSize:11,fontWeight:700,color:T.textSub,
                padding:"6px 0",fontFamily:"'Sora',sans-serif",textTransform:"uppercase",letterSpacing:.5}}>{d}</div>)}
              {data.flat().map((p,i)=>(
                <div key={i} style={{aspectRatio:1,borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",
                  background:p?T.successBg:T.dangerBg,border:`1px solid ${p?"#A7DFD0":"#F5BBBB"}`}}>
                  <Icon name={p?"check":"x"} size={13} color={p?T.success:T.danger} sw={2.2}/>
                </div>
              ))}
            </div>
          </Card>
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <Kpi icon="check" label="Present Days"    value="16"  accent={T.success}/>
            <Kpi icon="x"     label="Absent Days"     value="4"   accent={T.danger}/>
            <Kpi icon="cal"   label="Attendance Rate" value="94%" accent={T.navy}/>
          </div>
        </div>
      ):(
        <DataTable cols={["Scholar","Programme","Present","Absent","Rate","Status"]} rows={rows}/>
      )}
    </div>
  );
}

function TrainersPage() {
  return (
    <div style={{padding:32}}>
      <SH title="Trainers & Tutors" sub="Manage trainer and tutor profiles" onAction={()=>{}} actionIcon="plus" actionLabel="Add Trainer"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20}}>
        {TRAINERS.map(t=>(
          <Card key={t.id}>
            <div style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:18}}>
              <Av name={t.name} size={52} color={T.navy}/>
              <div style={{flex:1}}>
                <div style={{fontSize:16,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif"}}>{t.name}</div>
                <div style={{fontSize:13,color:T.navyL,fontWeight:600,marginTop:2}}>{t.subject}</div>
                <div style={{fontSize:12,color:T.textSub,marginTop:2,display:"flex",alignItems:"center",gap:4}}>
                  <Icon name="mail" size={11} color={T.textSub}/>{t.email}
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,
                padding:"8px 12px",background:T.warnBg,borderRadius:10,border:`1px solid #F5D060`}}>
                <Icon name="star" size={14} color={T.sunD}/>
                <span style={{fontSize:14,fontWeight:800,color:T.navy,fontFamily:"'Sora',sans-serif"}}>{t.rating}</span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}>
              {[["Scholars",t.scholars],["Sessions",t.sessions],["Joined",t.joined]].map(([lb,vl],i)=>(
                <div key={i} style={{background:T.chalk,borderRadius:10,padding:"10px 12px",textAlign:"center"}}>
                  <div style={{fontSize:i<2?18:12,fontWeight:i<2?800:600,color:T.navy,fontFamily:"'Sora',sans-serif"}}>{vl}</div>
                  <div style={{fontSize:11,color:T.textSub,marginTop:2}}>{lb}</div>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:8}}>
              <button style={{flex:1,padding:"9px",background:T.navy,color:T.white,border:"none",borderRadius:9,
                cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"'DM Sans',sans-serif",
                display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
                <Icon name="eye" size={13} color={T.white}/> View Profile
              </button>
              <button style={{flex:1,padding:"9px",background:"transparent",color:T.navy,
                border:`1.5px solid ${T.border}`,borderRadius:9,cursor:"pointer",fontSize:13,
                fontFamily:"'DM Sans',sans-serif",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
                <Icon name="mail" size={13} color={T.navy}/> Message
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ActivitiesPage() {
  const TC={Sports:T.success,Cultural:"#5B35B0",Academic:T.navy,Creative:T.danger};
  return (
    <div style={{padding:32}}>
      <SH title="Voluntary Activities" sub="Register and manage scholar activities" onAction={()=>{}} actionIcon="plus" actionLabel="Add Activity"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20}}>
        {ACTIVITIES.map(a=>{
          const pct=Math.round(a.registered/a.capacity*100); const color=TC[a.type];
          return (
            <Card key={a.id} style={{transition:"all .2s"}}
              onMouseEnter={e=>e.currentTarget.style.boxShadow=`0 12px 40px ${T.shadowMd}`}
              onMouseLeave={e=>e.currentTarget.style.boxShadow=`0 2px 12px ${T.shadow}`}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                <Pill label={a.type} v={a.type==="Sports"?"success":a.type==="Cultural"?"sky":a.type==="Academic"?"navy":"danger"} xs/>
                <div style={{fontSize:11,color:T.textSub,display:"flex",alignItems:"center",gap:4}}>
                  <Icon name="cal" size={11} color={T.textSub}/>{a.date}
                </div>
              </div>
              <h3 style={{margin:"0 0 14px",fontSize:16,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif"}}>{a.name}</h3>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:7}}>
                <span style={{fontSize:12,color:T.textSub}}>Registrations</span>
                <span style={{fontSize:12,fontWeight:700}}>{a.registered}<span style={{color:T.textSub}}>/{a.capacity}</span></span>
              </div>
              <Bar pct={pct} color={color} h={7}/>
              <div style={{display:"flex",gap:8,marginTop:16}}>
                <button style={{flex:1,padding:"9px",background:color,color:T.white,border:"none",borderRadius:9,
                  cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"'DM Sans',sans-serif"}}>Register Now</button>
                <button style={{padding:"9px 14px",background:"transparent",color:T.textMid,
                  border:`1.5px solid ${T.border}`,borderRadius:9,cursor:"pointer",fontSize:13,
                  fontFamily:"'DM Sans',sans-serif",display:"flex",alignItems:"center",gap:5}}>
                  <Icon name="eye" size={13} color={T.textMid}/> Details
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function ReportsPage() {
  const [sending,setSending]=useState(false); const [sent,setSent]=useState(false);
  const [rtype,setRtype]=useState("performance");
  const [recs,setRecs]=useState(["scholars","trainers"]);
  const [freq,setFreq]=useState("one-time");
  const toggle=r=>setRecs(p=>p.includes(r)?p.filter(x=>x!==r):[...p,r]);
  const doSend=async()=>{
    setSending(true); await new Promise(r=>setTimeout(r,2200));
    setSending(false); setSent(true); setTimeout(()=>setSent(false),3000);
  };
  return (
    <div style={{padding:32}}>
      <SH title="Reports & Analytics" sub="Generate and distribute performance reports"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:24}}>
        <Card>
          <h3 style={{margin:"0 0 22px",fontSize:16,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif",
            display:"flex",alignItems:"center",gap:8}}>
            <Icon name="mail" size={16} color={T.navy}/> Generate & Email Report
          </h3>
          <div style={{marginBottom:20}}>
            <div style={{fontSize:11,fontWeight:700,color:T.textSub,textTransform:"uppercase",letterSpacing:.8,
              marginBottom:10,fontFamily:"'Sora',sans-serif"}}>Report Type</div>
            {[["performance","Performance Report"],["attendance","Attendance Report"],
              ["progress","Programme Progress"],["full","Full Scholar Report"]].map(([v,l])=>(
              <label key={v} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",borderRadius:9,
                marginBottom:5,cursor:"pointer",transition:"background .12s",
                background:rtype===v?`${T.navy}07`:"transparent",border:`1px solid ${rtype===v?T.border:"transparent"}`}}>
                <input type="radio" name="rtype" value={v} checked={rtype===v} onChange={()=>setRtype(v)} style={{accentColor:T.navy}}/>
                <span style={{fontSize:13,color:T.text,fontWeight:rtype===v?600:400}}>{l}</span>
              </label>
            ))}
          </div>
          <div style={{marginBottom:20}}>
            <div style={{fontSize:11,fontWeight:700,color:T.textSub,textTransform:"uppercase",letterSpacing:.8,
              marginBottom:10,fontFamily:"'Sora',sans-serif"}}>Send To</div>
            {[["scholars","Scholars"],["trainers","Trainers"],["programme_heads","Programme Heads"],["leadership","Leadership Team"]].map(([v,l])=>(
              <label key={v} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",borderRadius:9,
                marginBottom:5,cursor:"pointer",background:recs.includes(v)?`${T.navy}07`:"transparent",
                border:`1px solid ${recs.includes(v)?T.border:"transparent"}`}}>
                <input type="checkbox" checked={recs.includes(v)} onChange={()=>toggle(v)} style={{accentColor:T.navy}}/>
                <span style={{fontSize:13,color:T.text,fontWeight:recs.includes(v)?600:400}}>{l}</span>
              </label>
            ))}
          </div>
          <div style={{marginBottom:24}}>
            <div style={{fontSize:11,fontWeight:700,color:T.textSub,textTransform:"uppercase",letterSpacing:.8,
              marginBottom:10,fontFamily:"'Sora',sans-serif"}}>Schedule</div>
            <div style={{display:"flex",gap:8}}>
              {[["one-time","One-time"],["weekly","Weekly"],["monthly","Monthly"]].map(([v,l])=>(
                <button key={v} onClick={()=>setFreq(v)} style={{flex:1,padding:"8px 0",borderRadius:8,
                  border:`1.5px solid ${freq===v?T.navy:T.border}`,cursor:"pointer",
                  background:freq===v?T.navy:T.white,color:freq===v?T.white:T.textMid,
                  fontSize:12,fontWeight:600,fontFamily:"'DM Sans',sans-serif",transition:"all .14s"}}>{l}</button>
              ))}
            </div>
          </div>
          <button onClick={doSend} disabled={sending} style={{width:"100%",padding:"13px",
            background:sent?T.success:T.navy,color:T.white,border:"none",borderRadius:12,
            cursor:sending?"not-allowed":"pointer",fontWeight:700,fontSize:14,fontFamily:"'Sora',sans-serif",
            display:"flex",alignItems:"center",justifyContent:"center",gap:9,
            boxShadow:`0 4px 16px ${T.shadow}`,transition:"all .2s"}}>
            {sending?<>Sending report...</>:sent?<><Icon name="check" size={16} color={T.white}/> Report Sent!</>:<><Icon name="send" size={15} color={T.white}/> Send Report Now</>}
          </button>
        </Card>
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          <Card>
            <h3 style={{margin:"0 0 18px",fontSize:15,fontWeight:700,color:T.navy,fontFamily:"'Sora',sans-serif",
              display:"flex",alignItems:"center",gap:8}}>
              <Icon name="trend" size={15} color={T.navy}/> Scholar Performance
            </h3>
            {SCHOLARS.map(s=>(
              <div key={s.id} style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                <Av name={s.name} size={30} color={T.navy}/>
                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                    <span style={{fontSize:13,fontWeight:600,color:T.text}}>{s.name}</span>
                    <span style={{fontSize:12,fontWeight:700,color:s.score>=80?T.success:s.score>=60?T.warn:T.danger}}>{s.score}</span>
                  </div>
                  <Bar pct={s.score} color={s.score>=80?T.success:s.score>=60?T.sun:T.danger} h={5}/>
                </div>
              </div>
            ))}
          </Card>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
            <Kpi icon="grad"    label="Reports Sent" value="24"  accent={T.navy}/>
            <Kpi icon="scholars" label="Recipients"  value="180" accent={T.success}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen,setScreen]=useState("landing");
  const [role,setRole]=useState("scholar");
  const [page,setPage]=useState("dashboard");
  const [aiOpen,setAiOpen]=useState(false);
  const [backendOk,setBackendOk]=useState(false);

  useEffect(()=>{
    const base = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(base+"/", { method:"GET" })
      .then(r=>{ if(r.ok) setBackendOk(true); else setBackendOk(false); })
      .catch(()=>setBackendOk(false));
  },[]);

  const renderPage=()=>{
    switch(page){
      case "dashboard":   return role==="scholar"?<ScholarDash onNav={setPage}/>:<AdminDash onNav={setPage}/>;
      case "scholars":    return <ScholarsPage/>;
      case "programmes":  return <ProgrammesPage role={role}/>;
      case "assignments": return <AssignmentsPage role={role}/>;
      case "resources":   return <ResourcesPage role={role}/>;
      case "attendance":  return <AttendancePage role={role}/>;
      case "trainers":    return <TrainersPage/>;
      case "activities":  return <ActivitiesPage/>;
      case "reports":     return <ReportsPage/>;
      default:            return null;
    }
  };

  if(screen==="landing") return <><FontLoader/><Landing onStart={()=>setScreen("login")}/></>;
  if(screen==="login")   return <><FontLoader/><Login onLogin={r=>{setRole(r);setScreen("app");setPage("dashboard");}}/></>;

  return (
    <>
      <FontLoader/>
      <div style={{display:"flex",height:"100vh",overflow:"hidden",background:T.chalk}}>
        <Sidebar page={page} setPage={setPage} role={role} onLogout={()=>{setScreen("landing");setPage("dashboard");}}/>
        <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0,overflow:"hidden"}}>
          <Topbar page={page} role={role} backendOk={backendOk}/>
          <div style={{flex:1,overflowY:"auto",overflowX:"hidden"}}>{renderPage()}</div>
        </div>
      </div>
      <button onClick={()=>setAiOpen(!aiOpen)} style={{position:"fixed",bottom:24,right:24,width:52,height:52,
        borderRadius:"50%",background:T.navy,border:`2px solid ${T.sun}28`,cursor:"pointer",
        display:"flex",alignItems:"center",justifyContent:"center",
        boxShadow:`0 8px 32px ${T.shadowMd}`,zIndex:9998,transition:"all .2s"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
        <Icon name="bot" size={20} color={T.sun}/>
      </button>
      {aiOpen&&<AIPanel onClose={()=>setAiOpen(false)}/>}
    </>
  );
}
