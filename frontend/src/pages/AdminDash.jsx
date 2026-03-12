import { T } from "../theme";
import { SCHOLARS, PROGRAMMES } from "../data/data";

import Kpi from "../components/Kpi";
import Card from "../components/Card";
import SH from "../components/SH";
import Bar from "../components/Bar";
import Ring from "../components/Ring";
import Av from "../components/Av";
import Pill from "../components/Pill";

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

export default AdminDash;