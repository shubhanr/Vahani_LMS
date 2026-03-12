import { T } from "../theme";

const DataTable = ({ cols, rows }) => (
  <div
    style={{
      background: T.white,
      borderRadius: 16,
      border: `1px solid ${T.border}`,
      overflow: "hidden",
      boxShadow: `0 2px 12px ${T.shadow}`
    }}
  >
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr
          style={{
            background: T.chalk,
            borderBottom: `1px solid ${T.border}`
          }}
        >
          {cols.map((c, i) => (
            <th
              key={i}
              style={{
                padding: "12px 20px",
                textAlign: "left",
                fontSize: 11,
                fontWeight: 700,
                color: T.textSub,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontFamily: "'Sora',sans-serif",
                whiteSpace: "nowrap"
              }}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            style={{
              borderBottom: i < rows.length - 1 ? `1px solid ${T.border}` : "none",
              transition: "background .12s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = T.chalk)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {row.map((cell, j) => (
              <td
                key={j}
                style={{
                  padding: "14px 20px",
                  fontSize: 13,
                  color: T.text,
                  verticalAlign: "middle"
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;