import { useState, useEffect, useRef } from "react";
import { T } from "../theme";
import Icon from "./Icon";

function AIPanel({ onClose }) {

  const [msgs, setMsgs] = useState([
    {
      role: "assistant",
      text: "Welcome to Vahani LMS. I can help with courses, assignments, attendance, resources, and programme management."
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const txt = input.trim();
    setInput("");

    const history = [...msgs, { role: "user", text: txt }];
    setMsgs(history);
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 700,
          system:
            "You are the Vahani LMS AI assistant. Help scholars and trainers professionally and concisely.",
          messages: history.map((m) => ({
            role: m.role,
            content: m.text
          }))
        })
      });

      const data = await res.json();

      setMsgs((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.content?.map((b) => b.text || "").join("") ||
            "Unable to process."
        }
      ]);
    } catch {
      setMsgs((prev) => [
        ...prev,
        { role: "assistant", text: "Connection error. Please retry." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 88,
        width: 380,
        height: 520,
        background: T.white,
        borderRadius: 24,
        boxShadow: `0 24px 80px ${T.shadowMd}`,
        display: "flex",
        flexDirection: "column",
        zIndex: 9999,
        border: `1px solid ${T.border}`,
        overflow: "hidden"
      }}
    >
      {/* Header */}
      <div
        style={{
          background: T.navyD,
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: `${T.sun}1A`,
              border: `1.5px solid ${T.sun}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon name="bot" size={18} color={T.sun} />
          </div>

          <div>
            <div
              style={{
                color: T.white,
                fontWeight: 700,
                fontSize: 14,
                fontFamily: "'Sora',sans-serif"
              }}
            >
              Vahani Assistant
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginTop: 2
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ADE80"
                }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: 11
                }}
              >
                Online
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            background: "rgba(255,255,255,.08)",
            border: "none",
            width: 30,
            height: 30,
            borderRadius: 8,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon name="x" size={14} color="rgba(255,255,255,.7)" />
        </button>
      </div>

      {/* Chat messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          background: `linear-gradient(180deg,${T.chalk} 0%,${T.white} 100%)`
        }}
      >
        {msgs.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "82%",
              padding: "11px 15px",
              borderRadius:
                m.role === "user"
                  ? "18px 18px 4px 18px"
                  : "18px 18px 18px 4px",
              background: m.role === "user" ? T.navy : T.white,
              color: m.role === "user" ? T.white : T.text,
              fontSize: 13,
              lineHeight: 1.55,
              fontFamily: "'DM Sans',sans-serif",
              boxShadow: `0 2px 8px ${T.shadow}`,
              border: m.role !== "user" ? `1px solid ${T.border}` : "none"
            }}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <div
            style={{
              alignSelf: "flex-start",
              padding: "12px 16px",
              borderRadius: "18px 18px 18px 4px",
              background: T.white,
              border: `1px solid ${T.border}`,
              display: "flex",
              gap: 5
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: T.sky,
                  animation: "bounce .9s ease infinite",
                  animationDelay: `${i * 0.15}s`
                }}
              />
            ))}
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: "12px 16px",
          borderTop: `1px solid ${T.border}`,
          display: "flex",
          gap: 10,
          alignItems: "center",
          background: T.white
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask a question..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: 10,
            border: `1.5px solid ${T.border}`,
            fontSize: 13,
            outline: "none"
          }}
        />

        <button
          onClick={send}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: T.navy,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon name="send" size={15} color={T.white} />
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%,80%,100%{transform:translateY(0)}
          40%{transform:translateY(-6px)}
        }
      `}</style>
    </div>
  );
}

export default AIPanel;