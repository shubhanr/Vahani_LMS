import { T } from "../theme";
import Icon from "./Icon";

const SH = ({ title, sub, onAction, actionIcon = "plus", actionLabel = "Add" }) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 24
    }}
  >
    <div>
      <h2
        style={{
          margin: 0,
          fontSize: 22,
          fontWeight: 800,
          color: T.navy,
          fontFamily: "'Sora',sans-serif",
          letterSpacing: -0.3
        }}
      >
        {title}
      </h2>

      {sub && (
        <p
          style={{
            margin: "4px 0 0",
            fontSize: 13,
            color: T.textSub
          }}
        >
          {sub}
        </p>
      )}
    </div>

    {onAction && (
      <button
        onClick={onAction}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "9px 18px",
          background: T.navy,
          color: T.white,
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          fontFamily: "'DM Sans',sans-serif",
          boxShadow: `0 4px 14px ${T.shadow}`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = T.navyL;
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = T.navy;
          e.currentTarget.style.transform = "none";
        }}
      >
        <Icon name={actionIcon} size={14} color={T.white} />
        {actionLabel}
      </button>
    )}
  </div>
);

export default SH;