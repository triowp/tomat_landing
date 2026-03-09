export default function Navbar() {
  return (
    <nav style={{
      background: "#1a1a1a",
      padding: "0 40px",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
      borderBottom: "2px solid #e63c1e"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "28px" }}>🍅</span>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: "20px", letterSpacing: "1px" }}>
          TOMATO<span style={{ color: "#e63c1e" }}>PRO</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: "32px" }}>
        {[
          { label: "Каталог", id: "catalog" },
          { label: "О нас", id: "about" },
          { label: "Доставка", id: "shipping" },
          { label: "Контакты", id: "contacts" }
        ].map(item => (
          <a
            key={item.label}
            href={`#${item.id}`}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.5px",
              transition: "color 0.2s"
            }}
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById(item.id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#e63c1e")}
            onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
          >
            {item.label}
          </a>
        ))}
      </div>
      <button style={{
        background: "#e63c1e",
        color: "#fff",
        border: "none",
        padding: "10px 24px",
        borderRadius: "4px",
        fontWeight: 700,
        cursor: "pointer",
        fontSize: "14px",
        letterSpacing: "0.5px"
      }}>
        Заказать оптом
      </button>
    </nav>
  );
}