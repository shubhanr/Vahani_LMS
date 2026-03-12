import { useState } from "react";

import { T } from "../theme";
import { ASSIGNMENTS } from "../data/data";

import SH from "../components/SH";
import Card from "../components/Card";
import Field from "../components/Field";
import Icon from "../components/Icon";
import Bar from "../components/Bar";
import Pill from "../components/Pill";


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

export default AssignmentsPage;