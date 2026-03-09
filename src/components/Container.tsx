import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  className?: string;
}

export default function Container({
  children,
  width = "1400px",
  height,
  padding = "20px",
  margin,
  backgroundColor = "#1e1e1e",
  borderRadius = "8px",
  className = ""
}: ContainerProps) {
  return (
    <div
      style={{
        flex: `0 0 ${width}`,
        height: height || "auto",
        background: backgroundColor,
        padding: padding,
        margin: margin || "0",
        color: "#ccc",
        borderRadius: borderRadius
      }}
      className={className}
    >
      {children}
    </div>
  );
}
