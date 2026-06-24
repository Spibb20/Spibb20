import fs from "fs";
import * as icons from "simple-icons";

const getIcon = (key) => icons[key] ?? null;

const logo = ({ key, color = "#ffffff", size = 22, x = -11, y = -24 }) => {
  const icon = getIcon(key);

  if (!icon) return "";

  return `
    <svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 24 24">
      <path fill="${color}" d="${icon.path}"/>
    </svg>
  `;
};

const player = ({ x, y, cls, name, role, icon, color, r = 34 }) => `
  <g transform="translate(${x} ${y})">
    <g class="player ${cls}">
      <circle r="${r}"/>
      ${logo({
        key: icon,
        color,
        size: 22,
        x: -11,
        y: -25,
      })}
      <text y="7" class="tech">${name}</text>
      <text y="22" class="role">${role}</text>
    </g>
  </g>
`;

const subCard = ({ x, y, cls, name, icon, color, width = 78 }) => `
  <g transform="translate(${x} ${y})">
    <g class="sub ${cls}">
      <rect x="${
        -width / 2
      }" y="-18" width="${width}" height="36" rx="12" class="subCard"/>
      ${logo({
        key: icon,
        color,
        size: 13,
        x: -31,
        y: -7,
      })}
      <text x="6" y="2" class="subTech">${name}</text>
    </g>
  </g>
`;

const svg = `
<svg width="900" height="650" viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      animation: appear 1s ease forwards;
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
      animation: subAppear 0.75s ease forwards;
    }

    .subCard {
      fill: #111827;
      stroke: #facc15;
      stroke-width: 2;
      filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.35));
    }

    .subTech {
      font-family: Arial, sans-serif;
      font-size: 8.5px;
      font-weight: 700;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    .benchTitle {
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: 700;
      fill: #facc15;
    }

    .benchNote {
      font-family: Arial, sans-serif;
      font-size: 12px;
      fill: #94a3b8;
    }

    @keyframes appear {
      0% {
        opacity: 0;
        transform: scale(0.45) translateY(24px);
      }
      60% {
        opacity: 1;
        transform: scale(1.18) translateY(-6px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes subAppear {
      0% {
        opacity: 0;
        transform: scale(0.55) translateY(14px);
      }
      65% {
        opacity: 1;
        transform: scale(1.1) translateY(-3px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    .p1  { animation-delay: 0.4s; }
    .p2  { animation-delay: 0.9s; }
    .p3  { animation-delay: 1.4s; }
    .p4  { animation-delay: 1.9s; }
    .p5  { animation-delay: 2.4s; }
    .p6  { animation-delay: 2.9s; }
    .p7  { animation-delay: 3.4s; }
    .p8  { animation-delay: 3.9s; }
    .p9  { animation-delay: 4.4s; }
    .p10 { animation-delay: 4.9s; }
    .p11 { animation-delay: 5.4s; }

    .sub1 { animation-delay: 6.2s; }
    .sub2 { animation-delay: 6.45s; }
    .sub3 { animation-delay: 6.7s; }
    .sub4 { animation-delay: 6.95s; }
    .sub5 { animation-delay: 7.2s; }
    .sub6 { animation-delay: 7.45s; }
    .sub7 { animation-delay: 7.7s; }
  </style>

  <!-- Background -->
  <rect width="900" height="650" rx="24" fill="#020617"/>

  <!-- Header -->
  <text x="450" y="45" class="title" text-anchor="middle">Byarjn's Tech Lineup</text>
  <text x="450" y="72" class="subtitle" text-anchor="middle">4-3-3 formation powered by Cruyff, Bielsa, Sacchi</text>

  <!-- Football field -->
  <rect x="80" y="95" width="740" height="420" rx="18" class="field"/>

  <!-- Field lines -->
  <line x1="450" y1="95" x2="450" y2="515" class="line"/>
  <circle cx="450" cy="305" r="58" class="line"/>
  <circle cx="450" cy="305" r="5" fill="rgba(255,255,255,0.7)"/>

  <!-- Penalty boxes -->
  <rect x="80" y="205" width="100" height="200" class="line"/>
  <rect x="720" y="205" width="100" height="200" class="line"/>

  <rect x="80" y="255" width="42" height="100" class="line"/>
  <rect x="778" y="255" width="42" height="100" class="line"/>

  <!-- Starting XI -->
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

  <!-- Bench container below the field -->
  <rect x="90" y="535" width="720" height="82" rx="18" fill="#07111f" stroke="#334155" stroke-width="2"/>

  <text x="118" y="562" class="benchTitle">SUBSTITUTIONS</text>
  <text x="235" y="562" class="benchNote">Impact players from the bench</text>

  <!-- Bench cards -->
  ${subCard({
    x: 180,
    y: 590,
    cls: "sub1",
    name: "Mongo",
    icon: "siMongodb",
    color: "#47A248",
    width: 78,
  })}

  ${subCard({
    x: 270,
    y: 590,
    cls: "sub2",
    name: "Clerk",
    icon: "siClerk",
    color: "#6C47FF",
    width: 74,
  })}

  ${subCard({
    x: 370,
    y: 590,
    cls: "sub3",
    name: "Tailwind",
    icon: "siTailwindcss",
    color: "#06B6D4",
    width: 90,
  })}

  ${subCard({
    x: 470,
    y: 590,
    cls: "sub4",
    name: "Express",
    icon: "siExpress",
    color: "#FFFFFF",
    width: 86,
  })}

  ${subCard({
    x: 565,
    y: 590,
    cls: "sub5",
    name: "Neon",
    icon: "siNeon",
    color: "#00E599",
    width: 74,
  })}

  ${subCard({
    x: 655,
    y: 590,
    cls: "sub6",
    name: "Gemini",
    icon: "siGooglegemini",
    color: "#8E75B2",
    width: 82,
  })}

  ${subCard({
    x: 735,
    y: 590,
    cls: "sub7",
    name: "Nx",
    icon: "siNx",
    color: "#143055",
    width: 66,
  })}
</svg>
`;

fs.mkdirSync("media", { recursive: true });
fs.writeFileSync("media/football-tech-lineup.svg", svg.trim());

console.log("Generated media/football-tech-lineup.svg");
