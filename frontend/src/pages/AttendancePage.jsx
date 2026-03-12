import { T } from "../theme";
import { SCHOLARS } from "../data/data";

import SH from "../components/SH";
import Card from "../components/Card";
import Bar from "../components/Bar";
import Pill from "../components/Pill";
import Icon from "../components/Icon";
import Kpi from "../components/Kpi";
import DataTable from "../components/DataTable";
import Av from "../components/Av";


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

export default AttendancePage;