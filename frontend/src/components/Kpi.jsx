import { useState } from "react";
import { T } from "../theme";
import Icon from "./Icon";

const Kpi = ({ icon, label, value, delta, accent = "#0D1B5E", onClick }) => {

  const [h, setH] = useState(false);

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onClick={onClick}
      style={{
        background: T.white,
        borderRadius: 20,
        padding: "22px 24px",
        border: `1px solid ${T.border}`,
        boxShadow: h ? `0 12px 40px ${T.shadowMd}` : `0 2px 12px ${T.shadow}`,
        transform: h ? "translateY(-2px)" : "none",
        transition: "all .22s ease",
        cursor: onClick ? "pointer" : "default",
        position: "relative",
        overflow: "hidden"
      }}
    >

      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: `${accent}08`
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>

        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: `${accent}18`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accent
          }}
        >
          <Icon name={icon} size={20} color={accent} />
        </div>

        {delta && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              color: delta > 0 ? T.success : T.danger,
              fontSize: 12,
              fontWeight: 600
            }}
          >
            <Icon name="trend" size={12} color={delta > 0 ? T.success : T.danger} />
            {Math.abs(delta)}%
          </div>
        )}

      </div>

      <div
        style={{
          marginTop: 16,
          fontSize: 30,
          fontWeight: 800,
          color: T.navy,
          fontFamily: "'Sora',sans-serif",
          lineHeight: 1
        }}
      >
        {value}
      </div>

      <div
        style={{
          marginTop: 6,
          fontSize: 13,
          color: T.textMid,
          fontWeight: 500
        }}
      >
        {label}
      </div>

    </div>
  );
};

export default Kpi;