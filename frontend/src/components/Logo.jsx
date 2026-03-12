import { T } from "../theme";

const Logo = ({ width = 130, light = false }) => (
  <svg
    width={width}
    viewBox="0 0 240 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="86"
      cy="38"
      rx="32"
      ry="32"
      fill={light ? "rgba(245,200,66,.9)" : "#F5C842"}
    />

    <line
      x1="0"
      y1="38"
      x2="240"
      y2="38"
      stroke={light ? "rgba(255,255,255,.4)" : "#8B9CC8"}
      strokeWidth="2.5"
    />

    <text
      x="8"
      y="56"
      fontFamily="'Sora',sans-serif"
      fontWeight="800"
      fontSize="50"
      letterSpacing="1.5"
      fill={light ? "#FFFFFF" : "#0D1B5E"}
    >
      VAHANI
    </text>
  </svg>
);

export default Logo;