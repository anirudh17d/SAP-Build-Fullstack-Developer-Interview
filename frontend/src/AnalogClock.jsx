import { useEffect, useState } from "react";

export default function AnalogClock({
  size = 200,
  faceColor = "#FFFFFF",
  accent = "#0A6ED1",
  handColor = "#0A6ED1",
  secondColor = "#E03A3E",
}) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = now.getSeconds();
  const m = now.getMinutes();
  const h = now.getHours();

  const sAngle = s * 6; // 360/60
  const mAngle = m * 6 + s * 0.1; // 6° per min + 0.1° per sec
  const hAngle = (h % 12) * 30 + m * 0.5 + s * (0.5 / 60); // 30° per hr + 0.5° per min

  const r = size / 2;
  const strokeWidth = 3;

  // helper for ticks
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Analog clock"
    >
      {/* face */}
      <circle
        cx={r}
        cy={r}
        r={r - strokeWidth}
        fill={faceColor}
        stroke={accent}
        strokeWidth={strokeWidth}
      />

      {/* minute + hour ticks */}
      {ticks.map((i) => {
        const isHour = i % 5 === 0;
        const angle = i * 6 * (Math.PI / 180);
        const inner = r - (isHour ? 16 : 8);
        const outer = r - 4;
        const x1 = r + inner * Math.sin(angle);
        const y1 = r - inner * Math.cos(angle);
        const x2 = r + outer * Math.sin(angle);
        const y2 = r - outer * Math.cos(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={accent}
            strokeWidth={isHour ? 3 : 1.5}
            strokeLinecap="round"
            opacity={isHour ? 0.9 : 0.6}
          />
        );
      })}

      {/* hour hand */}
      <g transform={`rotate(${hAngle} ${r} ${r})`}>
        <line
          x1={r}
          y1={r}
          x2={r}
          y2={r - r * 0.5}
          stroke={handColor}
          strokeWidth={5}
          strokeLinecap="round"
        />
      </g>

      {/* minute hand */}
      <g transform={`rotate(${mAngle} ${r} ${r})`}>
        <line
          x1={r}
          y1={r}
          x2={r}
          y2={r - r * 0.72}
          stroke={handColor}
          strokeWidth={4}
          strokeLinecap="round"
        />
      </g>

      {/* second hand */}
      <g transform={`rotate(${sAngle} ${r} ${r})`}>
        <line
          x1={r}
          y1={r + 10}
          x2={r}
          y2={r - r * 0.78}
          stroke={secondColor}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>

      {/* center cap */}
      <circle cx={r} cy={r} r={4} fill={secondColor} />
    </svg>
  );
}
