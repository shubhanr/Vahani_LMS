import { T } from "../theme";

const Pill = ({ label, v = "default", xs = false }) => {

  const map = {
    default: { bg: T.skyXL, c: T.textMid, b: T.border },
    success: { bg: T.successBg, c: T.success, b: "#A7DFD0" },
    danger: { bg: T.dangerBg, c: T.danger, b: "#F5BBBB" },
    warn: { bg: T.warnBg, c: T.warn, b: "#F5D060" },
    navy: { bg: T.navyL + "18", c: T.navyL, b: T.navyL + "30" },
    sun: { bg: T.sunL + "44", c: T.sunD, b: T.sun + "50" },
    sky: { bg: T.skyXL, c: T.sky, b: T.skyL }
  };

  const m = map[v] || map.default;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        borderRadius: 999,
        fontWeight: 600,
        background: m.bg,
        color: m.c,
        border: `1px solid ${m.b}`,
        letterSpacing: .2,
        padding: xs ? "2px 9px" : "4px 11px",
        fontSize: xs ? 11 : 12
      }}
    >
      {label}
    </span>
  );
};

export default Pill;