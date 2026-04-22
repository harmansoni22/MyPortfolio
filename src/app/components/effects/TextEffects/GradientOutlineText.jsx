"use client";

import { useId } from "react";

const DEFAULT_COLORS = ["#0f23fa", "#0f85fa", "#0fe7fa"];

function toPx(size) {
  if (typeof size === "number") return size;
  const parsed = Number.parseFloat(size);
  return Number.isFinite(parsed) ? parsed : 72;
}

export default function GradientOutlineText({
  text,
  children,
  className = "",
  colors = DEFAULT_COLORS,
  fontSize = 72,
  fontWeight = 700,
  fontFamily = "inherit",
  fontStyle = "normal",
  skewX = 0,
  strokeWidth = 2.5,
}) {
  const rawLabel = text ?? children ?? "";
  const label =
    typeof rawLabel === "string" && rawLabel.trim().length
      ? rawLabel
      : "Gradient Text";

  const safeColors = Array.isArray(colors) && colors.length ? colors : DEFAULT_COLORS;
  const gradientId = `outline-${useId().replace(/:/g, "")}`;
  const fontPx = toPx(fontSize);

  const viewWidth = Math.max(Math.ceil(label.length * fontPx * 0.66), fontPx * 2);
  const viewHeight = Math.ceil(fontPx * 1.45);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      width={viewWidth}
      height={viewHeight}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
      style={{
        transform: skewX ? `skewX(${skewX}deg)` : undefined,
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          {safeColors.map((color, index) => (
            <stop
              key={`${color}-${index}`}
              offset={`${(index / Math.max(safeColors.length - 1, 1)) * 100}%`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="transparent"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        paintOrder="stroke"
        style={{
          fontFamily,
          fontSize: fontPx,
          fontWeight,
          fontStyle,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </text>
    </svg>
  );
}
