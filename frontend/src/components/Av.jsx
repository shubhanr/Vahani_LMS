import { T } from "../theme";

const Av = ({ name, size = 36, color = T.navyL }) => {

  const init = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `${color}1A`,
        border: `1.5px solid ${color}30`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: color,
        fontSize: size * 0.35,
        fontWeight: 700,
        fontFamily: "'Sora',sans-serif",
        flexShrink: 0
      }}
    >
      {init}
    </div>
  );
};

export default Av;