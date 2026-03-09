import type { Product } from "../api/products";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1e1e1e",
        borderRadius: "8px",
        overflow: "hidden",
        border: hovered ? "2px solid #e63c1e" : "2px solid #2a2a2a",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 12px 40px rgba(230,60,30,0.2)" : "none",
      }}
    >
      {product.image_url && (
        <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
          <img
            src={product.image_url}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s"
            }}
          />
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "rgba(0,0,0,0.6)",
            color: "#e63c1e",
            padding: "6px 10px",
            fontWeight: 800,
            fontSize: "18px",
            borderBottomLeftRadius: "8px"
          }}>
            {product.price}₸
          </div>
        </div>
      )}
      <div style={{ padding: "20px", position: "relative" }}>
        <h3 style={{ color: "#fff", margin: "0 0 8px", fontSize: "18px", fontWeight: 800 }}>
          {product.name}
        </h3>
        <p
          style={{
            color: "#aaa",
            fontSize: "14px",
            margin: "0",
            lineHeight: 1.4,
            maxHeight: hovered ? "none" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s"
          }}
        >
          {product.description}
        </p>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px"
        }}>
          <span style={{
            background: product.stock > 300 ? "#1a3a1a" : "#3a1a1a",
            color: product.stock > 300 ? "#4caf50" : "#f44336",
            padding: "4px 10px",
            borderRadius: "4px",
            fontSize: "11px",
            fontWeight: 600
          }}>
            {product.stock > 0 ? `В наличии: ${product.stock} ${product.unit}` : "Нет в наличии"}
          </span>
          <button style={{
            background: hovered ? "#e63c1e" : "#2a2a2a",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: "14px",
            transition: "background 0.25s",
            letterSpacing: "0.5px"
          }}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}