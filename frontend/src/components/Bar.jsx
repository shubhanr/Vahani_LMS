import { T } from "../theme";

const Bar = ({ pct, h = 6, color = T.sun }) => (
  <div
    style={{
      background: T.skyXL,
      borderRadius: 999,
      height: h,
      overflow: "hidden"
    }}
  >
    <div
      style={{
        width: `${pct}%`,
        height: "100%",
        background: color,
        borderRadius: 999,
        transition: "width .8s cubic-bezier(.4,0,.2,1)"
      }}
    />
  </div>
);

export default Bar;