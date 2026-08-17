import { useCurrentFrame, interpolate, spring, AbsoluteFill } from "remotion";
import { populationData } from "./populationData";

const W = 1920;
const H = 1080;
const MT = 190;
const MR = 80;
const MB = 110;
const ML = 110;
const CW = W - ML - MR;
const CH = H - MT - MB;
const BAR_GAP = 0.38;
const BAR_W = (CW / populationData.length) * (1 - BAR_GAP);
const Y_MIN = 1_300_000_000;
const Y_MAX = 1_430_000_000;
const Y_RNG = Y_MAX - Y_MIN;

const getY = (val: number) => MT + CH - ((val - Y_MIN) / Y_RNG) * CH;

const fmt = (n: number) => (n / 100_000_000).toFixed(2) + "亿";

export const ChinaPopulation: React.FC = () => {
  const frame = useCurrentFrame();

  const titleIn = interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 30], [-25, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(145deg, #070712 0%, #111128 40%, #0a0a1a 100%)",
        fontFamily: "'Noto Sans SC','Microsoft YaHei','PingFang SC',sans-serif",
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 45,
          width: "100%",
          textAlign: "center",
          opacity: titleIn,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <h1
          style={{
            fontSize: 54,
            fontWeight: 700,
            margin: 0,
            letterSpacing: 4,
            background: "linear-gradient(90deg,#60a5fa,#fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          中国人口变化趋势
        </h1>
        <p style={{ fontSize: 18, color: "#475569", margin: "10px 0 0", letterSpacing: 2 }}>
          China Population (2014-2025) · World Bank
        </p>
      </div>

      <svg width={W} height={H} style={{ position: "absolute", top: 0, left: 0 }}>
        <defs>
          <linearGradient id="gRise" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="gPeak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="gDecline" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        {[1.3, 1.35, 1.4, 1.45].map((v) => {
          const y = getY(v * 1_000_000_000);
          const op = interpolate(frame, [5, 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <g key={v} opacity={op}>
              <line x1={ML} y1={y} x2={ML + CW} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
              <text x={ML - 14} y={y + 5} textAnchor="end" fill="#475569" fontSize={14}>
                {v.toFixed(2)}亿
              </text>
            </g>
          );
        })}

        {populationData.map((d, i) => {
          const start = 25 + i * 9;
          const delay = Math.max(0, frame - start);
          const h = ((d.population - Y_MIN) / Y_RNG) * CH;
          const y = getY(d.population);
          const totalW = CW / populationData.length;
          const x = ML + i * totalW + (totalW - BAR_W) / 2;

          const grow = spring({ frame: delay, fps: 30, config: { damping: 16, stiffness: 110 } });
          const op = interpolate(frame, [start, start + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

          let fill = "url(#gRise)";
          if (d.year === 2021) fill = "url(#gPeak)";
          else if (d.year >= 2022) fill = "url(#gDecline)";

          return (
            <g key={d.year} opacity={op}>
              <rect x={x} y={y + (1 - grow) * h} width={BAR_W} height={h * grow} fill={fill} rx={3} />
              {grow > 0.7 && (
                <text x={x + BAR_W / 2} y={y - 8} textAnchor="middle" fill="#e2e8f0" fontSize={13} fontWeight={600}>
                  {fmt(d.population)}
                </text>
              )}
            </g>
          );
        })}

        {populationData.map((d, i) => {
          const start = 25 + i * 9;
          const op = interpolate(frame, [start, start + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const totalW = CW / populationData.length;
          const x = ML + i * totalW + totalW / 2;
          const isPeak = d.year === 2021;
          return (
            <text
              key={"lbl-" + d.year}
              x={x}
              y={H - MB + 22}
              textAnchor="middle"
              fill={isPeak ? "#fbbf24" : "#64748b"}
              fontSize={isPeak ? 15 : 13}
              fontWeight={isPeak ? 700 : 400}
              opacity={op}
            >
              {d.year}
            </text>
          );
        })}

        {frame > 130 && (
          <g opacity={interpolate(frame, [130, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>
            <rect x={680} y={20} width={560} height={52} rx={8} fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.3)" strokeWidth={1} />
            <text x={960} y={42} textAnchor="middle" fill="#fca5a5" fontSize={22} fontWeight={700}>
              ▼ 人口连续四年负增长
            </text>
            <text x={960} y={62} textAnchor="middle" fill="#94a3b8" fontSize={14}>
              2022年起人口总量持续下降
            </text>
          </g>
        )}
      </svg>
    </AbsoluteFill>
  );
};
