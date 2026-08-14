import { BatteryCharging, Home, PanelsTopLeft, Sun } from "lucide-react";

const nodes = [
  { Icon: Sun, top: 0, left: 20, label: "Sunlight", ring: "ring-gold-400/50" },
  {
    Icon: PanelsTopLeft,
    top: 160,
    left: 20,
    label: "Panel",
    ring: "ring-amber-400/50",
  },
  {
    Icon: BatteryCharging,
    top: 320,
    left: 180,
    label: "Battery",
    ring: "ring-emerald-400/50",
  },
  {
    Icon: Home,
    top: 440,
    left: 220,
    label: "Your Home",
    ring: "ring-gold-400/50",
  },
];

export default function PowerFlow() {
  return (
    <div
      className="relative mx-auto h-[500px] w-[280px] select-none"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 280 500"
        fill="none"
      >
        <path
          d="M40 20 C40 100 40 100 40 180 C40 260 200 260 200 340 C200 420 240 420 240 460"
          stroke="url(#flow-grad)"
          strokeWidth="2"
          strokeDasharray="3 7"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="flow-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4A522" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FF8A3D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Energy pulses travelling from sun to home */}
      {[0, 1.2, 2.4].map((delay) => (
        <span
          key={delay}
          className="flow-dot absolute h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(244,165,34,0.9)]"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}

      {nodes.map(({ Icon, top, left, label, ring }) => (
        <div
          key={label}
          className="absolute flex flex-col items-center gap-2"
          style={{ top, left }}
        >
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-navy-800/90 ring-1 ${ring} backdrop-blur-sm`}
          >
            <Icon className="h-5 w-5 text-ivory-100" strokeWidth={1.8} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
