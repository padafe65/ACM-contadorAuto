export function Btn({ onClick, children, style, active, className }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${className || ""} ${active ? "active" : ""}`}
      style={style}
    >
      {children}
    </button>
  );
}

