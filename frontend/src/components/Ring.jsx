import { T } from "../theme";

const Ring = ({ pct, size = 60, stroke = 5, color = T.sun }) => {

  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const filled = circ * (pct / 100);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>

      <circle
        cx={size/2}
        cy={size/2}
        r={r}
        fill="none"
        stroke={T.skyXL}
        strokeWidth={stroke}
      />

      <circle
        cx={size/2}
        cy={size/2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={`${filled} ${circ}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
      />

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={size/5}
        fontWeight="700"
        fill={T.navy}
        fontFamily="'Sora',sans-serif"
      >
        {pct}%
      </text>

    </svg>
  );
};

export default Ring;