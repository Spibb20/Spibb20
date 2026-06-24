import fs from "fs";
import * as icons from "simple-icons";

const getIcon = (key) => icons[key] ?? null;

const logo = (key, color = "#ffffff", size = 22) => {
  const icon = getIcon(key);

  if (!icon) {
    return "";
  }

  const half = size / 2;

  return `
    <svg x="${-half}" y="-24" width="${size}" height="${size}" viewBox="0 0 24 24">
      <path fill="${color}" d="${icon.path}"/>
    </svg>
  `;
};

const player = ({ x, y, cls, name, role, icon, color, r = 34 }) => `
  <g transform="translate(${x} ${y})">
    <g class="player ${cls}">
      <circle r="${r}"/>
      ${logo(icon, color, 23)}
      <text y="8" class="tech">${name}</text>
      <text y="23" class="role">${role}</text>
    </g>
  </g>
`;

const sub = ({ x, y, cls, name, icon, color }) => `
  <g transform="translate(${x} ${y})">
    <g class="sub ${cls}">
      <circle r="20"/>
      ${logo(icon, color, 15)}
      <text y="10" class="subTech">${name}</text>
    </g>
  </g>
`;

const svg = `
<svg width="900" height="560" viewBox="0 0 900 560" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title {
      font-family: Arial, sans-serif;
      font-size: 28px;
      font-weight: 700;
      fill: #ffffff;
    }

    .subtitle {
      font-family: Arial, sans-serif;
      font-size: 15px;
      fill: #a7f3d0;
    }

    .line {
      stroke: rgba(255,255,255,0.45);
      stroke-width: 3;
      fill: none;
    }

    .field {
      fill: #052e16;
      stroke: #22c55e;
      stroke-width: 4;
    }

    .player {
      opacity: 0;
      transform-box: fill-box;
      transform-origin: center;
      animation: appear 0.7s ease forwards;
    }

    .player circle {
      fill: #0f172a;
      stroke: #38bdf8;
      stroke-width: 3;
      filter: drop-shadow(0 0 8px #38bdf8);
    }

    .tech {
      font-family: Arial, sans-serif;
      font-size: 11px;
      font-weight: 700;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    .role {
      font-family: Arial, sans-serif;
      font-size: 9px;
      fill: #bbf7d0;
      font-weight: 600;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    .sub {
      opacity: 0;
      transform-box: fill-box;
      transform-origin: center;
      animation: subAppear 0.5s ease forwards;
    }

    .sub circle {
      fill: #111827;
      stroke: #facc15;
      stroke-width: 2;
      filter: drop-shadow(0 0 6px #facc15);
    }

    .subTech {
      font-family: Arial, sans-serif;
      font-size: 8px;
      font-weight: 700;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    @keyframes appear {
      0% {
        opacity: 0;
        transform: scale(0.4) translateY(20px);
      }
      60% {
        opacity: 1;
        transform: scale(1.25) translateY(-8px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes subAppear {
      0% {
        opacity: 0;
        transform: scale(0.5) translateY(12px);
      }
      70% {
        opacity: 1;
        transform: scale(1.15) translateY(-4px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    .p1 { animation-delay: 0.2s; }
    .p2 { animation-delay: 0.5s; }
    .p3 { animation-delay: 0.8s; }
    .p4 { animation-delay: 1.1s; }
    .p5 { animation-delay: 1.4s; }
    .p6 { animation-delay: 1.7s; }
    .p7 { animation-delay: 2.0s; }
    .p8 { animation-delay: 2.3s; }
    .p9 { animation-delay: 2.6s; }
    .p10 { animation-delay: 2.9s; }
    .p11 { animation-delay: 3.2s; }

    .sub1 { animation-delay: 3.7s; }
    .sub2 { animation-delay: 3.9s; }
    .sub3 { animation-delay: 4.1s; }
    .sub4 { animation-delay: 4.3s; }
    .sub5 { animation-delay: 4.5s; }
    .sub6 { animation-delay: 4.7s; }
    .sub7 { animation-delay: 4.9s; }
  </style>

  <rect width="900" height="560" rx="24" fill="#020617"/>

  <text x="450" y="45" class="title" text-anchor="middle">Byarjn's Tech Lineup</text>
  <text x="450" y="72" class="subtitle" text-anchor="middle">4-3-3 formation powered by Cruyff, Bielsa, Sacchi</text>

  <rect x="80" y="95" width="740" height="420" rx="18" class="field"/>

  <line x1="450" y1="95" x2="450" y2="515" class="line"/>
  <circle cx="450" cy="305" r="58" class="line"/>
  <circle cx="450" cy="305" r="5" fill="rgba(255,255,255,0.7)"/>

  <rect x="80" y="205" width="100" height="200" class="line"/>
  <rect x="720" y="205" width="100" height="200" class="line"/>

  <rect x="80" y="255" width="42" height="100" class="line"/>
  <rect x="778" y="255" width="42" height="100" class="line"/>

  ${player({
    x: 135,
    y: 305,
    cls: "p1",
    name: "Git",
    role: "GK",
    icon: "siGit",
    color: "#F05032",
    r: 34,
  })}

  ${player({
    x: 270,
    y: 165,
    cls: "p2",
    name: "HTML",
    role: "LB",
    icon: "siHtml5",
    color: "#E34F26",
  })}

  ${player({
    x: 270,
    y: 260,
    cls: "p3",
    name: "CSS",
    role: "CB",
    icon: "siCss",
    color: "#663399",
  })}

  ${player({
    x: 270,
    y: 350,
    cls: "p4",
    name: "JS",
    role: "CB",
    icon: "siJavascript",
    color: "#F7DF1E",
  })}

  ${player({
    x: 270,
    y: 445,
    cls: "p5",
    name: "TS",
    role: "RB",
    icon: "siTypescript",
    color: "#3178C6",
  })}

  ${player({
    x: 450,
    y: 215,
    cls: "p6",
    name: "React",
    role: "CM",
    icon: "siReact",
    color: "#61DAFB",
    r: 36,
  })}

  ${player({
    x: 450,
    y: 305,
    cls: "p7",
    name: "Next",
    role: "CAM",
    icon: "siNextdotjs",
    color: "#FFFFFF",
    r: 38,
  })}

  ${player({
    x: 450,
    y: 395,
    cls: "p8",
    name: "Node",
    role: "CM",
    icon: "siNodedotjs",
    color: "#5FA04E",
    r: 36,
  })}

  ${player({
    x: 650,
    y: 200,
    cls: "p9",
    name: "Prisma",
    role: "LW",
    icon: "siPrisma",
    color: "#2D3748",
    r: 35,
  })}

  ${player({
    x: 690,
    y: 305,
    cls: "p10",
    name: "PGSQL",
    role: "ST",
    icon: "siPostgresql",
    color: "#4169E1",
    r: 39,
  })}

  ${player({
    x: 650,
    y: 410,
    cls: "p11",
    name: "Vercel",
    role: "RW",
    icon: "siVercel",
    color: "#FFFFFF",
    r: 35,
  })}

  <rect x="110" y="470" width="680" height="50" rx="16" fill="#020617" stroke="#334155" stroke-width="2"/>

  <text x="135" y="501"
        font-family="Arial, sans-serif"
        font-size="14"
        font-weight="700"
        fill="#facc15">
    SUBSTITUTIONS
  </text>

  ${sub({
    x: 265,
    y: 495,
    cls: "sub1",
    name: "Mongo",
    icon: "siMongodb",
    color: "#47A248",
  })}

  ${sub({
    x: 330,
    y: 495,
    cls: "sub2",
    name: "Clerk",
    icon: "siClerk",
    color: "#6C47FF",
  })}

  ${sub({
    x: 395,
    y: 495,
    cls: "sub3",
    name: "Tailwind",
    icon: "siTailwindcss",
    color: "#06B6D4",
  })}

  ${sub({
    x: 470,
    y: 495,
    cls: "sub4",
    name: "Express",
    icon: "siExpress",
    color: "#FFFFFF",
  })}

  ${sub({
    x: 545,
    y: 495,
    cls: "sub5",
    name: "Neon",
    icon: "siNeon",
    color: "#00E599",
  })}

  ${sub({
    x: 610,
    y: 495,
    cls: "sub6",
    name: "Gemini",
    icon: "siGooglegemini",
    color: "#8E75B2",
  })}

  ${sub({
    x: 675,
    y: 495,
    cls: "sub7",
    name: "Nx",
    icon: "siNx",
    color: "#143055",
  })}
</svg>
`;

fs.mkdirSync("media", { recursive: true });
fs.writeFileSync("media/football-tech-lineup.svg", svg.trim());

console.log("Generated media/football-tech-lineup.svg");
