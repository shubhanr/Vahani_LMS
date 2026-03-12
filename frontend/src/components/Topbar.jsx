import { T } from "../theme";
import Icon from "./Icon";
import Av from "./Av";

const LABELS = {
  dashboard: "Overview",
  scholars: "Scholars",
  programmes: "Programmes",
  assignments: "Assignments",
  resources: "Resources",
  attendance: "Attendance",
  trainers: "Trainers & Tutors",
  activities: "Activities",
  reports: "Reports & Analytics"
};

function Topbar({ page, role, backendOk }) {

  return (
    <div
      style={{
        height: 64,
        borderBottom: `1px solid ${T.border}`,
        background: T.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}
    >

      <div
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: T.navy,
          fontFamily: "'Sora',sans-serif",
          letterSpacing: -0.3
        }}
      >
        {LABELS[page] || "Dashboard"}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 10px",
            borderRadius: 999,
            background: backendOk ? T.successBg : T.dangerBg,
            border: `1px solid ${backendOk ? "#A7DFD0" : "#F5BBBB"}`,
            fontSize: 11,
            fontWeight: 700,
            color: backendOk ? T.success : T.danger
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: backendOk ? T.success : T.danger
            }}
          />
          {backendOk ? "Backend Connected" : "Backend Offline"}
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            <Icon name="search" size={14} color={T.textSub} />
          </div>

          <input
            placeholder="Search..."
            style={{
              padding: "8px 14px 8px 34px",
              borderRadius: 10,
              border: `1.5px solid ${T.border}`,
              fontSize: 13,
              color: T.text,
              outline: "none",
              background: T.chalk,
              fontFamily: "'DM Sans',sans-serif",
              width: 200
            }}
          />
        </div>

        <button
          style={{
            position: "relative",
            width: 38,
            height: 38,
            borderRadius: 10,
            border: `1px solid ${T.border}`,
            background: T.white,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon name="bell" size={17} color={T.textMid} />

          <div
            style={{
              position: "absolute",
              top: 8,
              right: 9,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: T.danger,
              border: `2px solid ${T.white}`
            }}
          />
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "5px 12px",
            borderRadius: 10,
            border: `1px solid ${T.border}`,
            background: T.chalk
          }}
        >
          <Av
            name={
              role === "scholar"
                ? "Aarav Mehta"
                : role === "trainer"
                ? "Sunita Rao"
                : "Admin User"
            }
            size={28}
            color={T.navy}
          />

          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: T.navy,
                lineHeight: 1
              }}
            >
              {role === "scholar"
                ? "Aarav Mehta"
                : role === "trainer"
                ? "Dr. Sunita Rao"
                : "Admin"}
            </div>

            <div
              style={{
                fontSize: 11,
                color: T.textSub,
                marginTop: 2,
                textTransform: "capitalize"
              }}
            >
              {role}
            </div>
          </div>

          <Icon name="chevD" size={13} color={T.textSub} />
        </div>

      </div>

    </div>
  );
}

export default Topbar;