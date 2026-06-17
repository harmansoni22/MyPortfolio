"use client";

export default function GradientText({ children, className = "", fontSize, colors, animationSpeed, showBorder, direction, pauseOnHover, yoyo, skewX, fontWeight, ...props }) {
  return (
    <div
      className={`font-sans ${className}`}
      style={{
        fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
