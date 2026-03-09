export default function Hero() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a0e 50%, #1a1a1a 100%)",
      padding: "80px 40px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      borderBottom: "2px solid #e63c1e"
    }}>
      {/* Фоновые круги */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(230,60,30,0.15) 0%, transparent 70%)"
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "250px", height: "250px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(230,60,30,0.1) 0%, transparent 70%)"
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{ color: "#e63c1e", fontWeight: 700, letterSpacing: "4px", fontSize: "12px", marginBottom: "16px" }}>
          ОПТОВЫЕ ПОСТАВКИ
        </p>
        <h1 style={{
          color: "#fff", fontSize: "56px", fontWeight: 900,
          lineHeight: 1.1, margin: "0 0 20px",
          textTransform: "uppercase", letterSpacing: "2px"
        }}>
          Томатная паста<br />
          <span style={{ color: "#e63c1e" }}>высшего качества</span>
        </h1>
        <p style={{ color: "#999", fontSize: "18px", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.6 }}>
          Прямые поставки от производителя. Концентрация 25-30%. Минимальный заказ от 100 кг.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button style={{
            background: "#e63c1e", color: "#fff", border: "none",
            padding: "16px 40px", borderRadius: "4px", fontWeight: 800,
            fontSize: "16px", cursor: "pointer", letterSpacing: "1px"
          }}>
            СМОТРЕТЬ КАТАЛОГ
          </button>
          <button style={{
            background: "transparent", color: "#fff",
            border: "2px solid #444", padding: "16px 40px",
            borderRadius: "4px", fontWeight: 600, fontSize: "16px", cursor: "pointer"
          }}>
            Связаться
          </button>
        </div>

        {/* Статистика */}
        <div style={{ display: "flex", gap: "60px", justifyContent: "center", marginTop: "60px" }}>
          {[
            { num: "10+", label: "лет на рынке" },
            { num: "500т", label: "в месяц" },
            { num: "200+", label: "клиентов" },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ color: "#e63c1e", fontSize: "32px", fontWeight: 900 }}>{stat.num}</div>
              <div style={{ color: "#666", fontSize: "13px", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}