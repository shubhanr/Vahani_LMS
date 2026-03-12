import { T } from "../theme";

const Card = ({ children, p = 24, style = {} }) => (
  <div
    style={{
      background: T.white,
      borderRadius: 20,
      border: `1px solid ${T.border}`,
      boxShadow: `0 2px 12px ${T.shadow}`,
      padding: p,
      overflow: "hidden",
      ...style
    }}
  >
    {children}
  </div>
);

export default Card;