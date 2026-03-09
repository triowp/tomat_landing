import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import type { Product } from "../api/products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    // outer flex wrapper
    <div style={{ background: "#141414", minHeight: "100vh" }}>
      {/* central responsive container */}
      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 20px" }}>
        <Hero />

        {/* about section */}
        <div id="about" style={{ padding: "60px 0", color: "#fff" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px" }}>О нас</h2>
          <p>
            TomatoPro — крупнейший оптовый поставщик томатной пасты в России. Мы работаем с 2005 года и обеспечиваем высокое качество и доставку по всей стране.
          </p>
          <p>
            Наш ассортимент включает продукцию ведущих отечественных и зарубежных производителей. Благодаря собственным складами и налаженным логистическим каналам мы способны выполнять крупные заказы в кратчайшие сроки.
          </p>
          <p>
            Наша миссия — поддержка пищевой промышленности России, предоставляя оптовикам, ресторанам и заводам надежный источник ингредиентов. Мы активно развиваем партнёрские отношения и инвестируем в технологии, чтобы обеспечить максимальную прозрачность и экологическую ответственность.
          </p>
          <p>
            Команда TomatoPro состоит из профессионалов с многолетним опытом в сфере закупок, логистики и контроля качества. Мы стремимся к постоянному совершенствованию сервиса и всегда готовы предложить индивидуальное решение для каждого клиента.
          </p>
        </div>

        {/* shipping section */}
        <div id="shipping" style={{ padding: "60px 0", color: "#fff" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px" }}>Доставка</h2>
          <p>Мы доставляем продукцию по всей России в течение 3-5 рабочих дней. Стоимость рассчитывается индивидуально.</p>
        </div>

        <div id="catalog" style={{ padding: "60px 0" }}>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ color: "#e63c1e", fontWeight: 700, letterSpacing: "3px", fontSize: "12px", marginBottom: "8px" }}>
              НАША ПРОДУКЦИЯ
            </p>
            <h2 style={{ color: "#fff", fontSize: "36px", fontWeight: 900, margin: 0 }}>
              Каталог товаров
            </h2>
          </div>

          {loading && (
            <div style={{ textAlign: "center", color: "#666", padding: "60px" }}>
              Загрузка...
            </div>
          )}

          {error && (
            <div style={{
              textAlign: "center", color: "#e63c1e", padding: "40px",
              background: "#1e1e1e", borderRadius: "8px", border: "1px solid #e63c1e"
            }}>
              ⚠️ Не удалось подключиться к серверу. Убедись что бэкенд запущен на порту 8000.
            </div>
          )}

          {/* central products grid */}
          <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "32px",
                padding: "0 20px"
              }}>
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>

        {/* Footer */}
        <div id="contacts" style={{
          borderTop: "1px solid #2a2a2a", padding: "40px",
          textAlign: "center", color: "#444", fontSize: "13px"
        }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#fff", margin: "0 0 10px 0" }}>Контакты</h3>
            <p>Телефон: +7 (123) 456-78-90</p>
            <p>Email: info@tomatopro.ru</p>
            <p>Адрес: г. Москва, ул. Томатная, д. 1</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#fff", margin: "0 0 10px 0" }}>Ссылки</h3>
            <a
              href="#about"
              style={{ color: "#e63c1e", margin: "0 10px" }}
              onClick={e => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >О компании</a>
            <a
              href="#shipping"
              style={{ color: "#e63c1e", margin: "0 10px" }}
              onClick={e => {
                e.preventDefault();
                document.getElementById("shipping")?.scrollIntoView({ behavior: "smooth" });
              }}
            >Доставка</a>
            <a
              href="#contacts"
              style={{ color: "#e63c1e", margin: "0 10px" }}
              onClick={e => {
                e.preventDefault();
                document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
              }}
            >Контакты</a>
          </div>
          <p>© 2024 TomatoPro — Оптовые поставки томатной пасты</p>
        </div>
      </div>
    </div>
  );
}