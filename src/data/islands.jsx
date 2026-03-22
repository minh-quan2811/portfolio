// src/data/islands.jsx
// One Piece island SVGs for the sea map in ProjectsPanel.
// Usage: import { ISLAND_SVGS } from '../../data/islands';
//        then render {ISLAND_SVGS[yr]} inside your year-island loop.

const SabaodyIsland = () => (
  <svg width="80" height="72" viewBox="0 0 110 88" className="arc-isle-svg">
    <ellipse cx="55" cy="82" rx="46" ry="7" fill="#5a9abb" stroke="#0e0a04" strokeWidth="1.5"/>
    <line x1="28" y1="70" x2="20" y2="80" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="28" y1="70" x2="28" y2="82" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="28" y1="70" x2="36" y2="80" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="28" y1="70" x2="32" y2="42" stroke="#6b3a18" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="82" y1="70" x2="74" y2="80" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="82" y1="70" x2="82" y2="82" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="82" y1="70" x2="90" y2="80" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="82" y1="70" x2="78" y2="42" stroke="#6b3a18" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="55" y1="72" x2="46" y2="82" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="55" y1="72" x2="55" y2="84" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="55" y1="72" x2="64" y2="82" stroke="#5a3a18" strokeWidth="2" strokeLinecap="round"/>
    <line x1="55" y1="72" x2="55" y2="36" stroke="#6b3a18" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="32" cy="36" r="19" fill="#2a8a3a" stroke="#0e0a04" strokeWidth="2"/>
    <circle cx="32" cy="36" r="14" fill="#3a9a4a"/>
    <circle cx="78" cy="36" r="19" fill="#2a8a3a" stroke="#0e0a04" strokeWidth="2"/>
    <circle cx="78" cy="36" r="14" fill="#3a9a4a"/>
    <circle cx="55" cy="24" r="23" fill="#2a8a3a" stroke="#0e0a04" strokeWidth="2.5"/>
    <circle cx="55" cy="24" r="17" fill="#3aaa4a"/>
    <circle cx="16" cy="16" r="6" fill="none" stroke="rgba(150,220,255,0.7)" strokeWidth="1.5"/>
    <circle cx="10" cy="6" r="8" fill="rgba(150,220,255,0.1)" stroke="rgba(150,220,255,0.6)" strokeWidth="1.5"/>
    <circle cx="92" cy="10" r="6" fill="none" stroke="rgba(150,220,255,0.7)" strokeWidth="1.5"/>
    <circle cx="100" cy="2" r="8" fill="rgba(150,220,255,0.1)" stroke="rgba(150,220,255,0.6)" strokeWidth="1.5"/>
  </svg>
);

const ImpelDownIsland = () => (
  <svg width="88" height="118" viewBox="0 0 180 240" className="arc-isle-svg">
    {/* connecting parapet */}
    <rect x="54" y="66" width="72" height="10" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    {/* parapet battlements */}
    <rect x="58" y="59" width="6" height="9" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="68" y="59" width="6" height="9" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="78" y="59" width="6" height="9" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="88" y="59" width="6" height="9" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="98" y="59" width="6" height="9" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="108" y="59" width="6" height="9" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="118" y="59" width="6" height="9" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    {/* left tower */}
    <rect x="48" y="42" width="24" height="34" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.5"/>
    <rect x="49" y="34" width="6" height="10" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="58" y="34" width="6" height="10" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="67" y="34" width="6" height="10" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="55" y="50" width="10" height="14" rx="5" fill="#1a3a6a" stroke="#0e0a04" strokeWidth="1"/>
    {/* center tower */}
    <rect x="80" y="32" width="20" height="44" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.5"/>
    <rect x="80" y="22" width="6" height="12" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="89" y="22" width="6" height="12" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="95" y="22" width="6" height="12" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="85" y="40" width="10" height="14" rx="5" fill="#1a3a6a" stroke="#0e0a04" strokeWidth="1"/>
    {/* right tower */}
    <rect x="108" y="42" width="24" height="34" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.5"/>
    <rect x="109" y="34" width="6" height="10" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="118" y="34" width="6" height="10" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="127" y="34" width="6" height="10" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1.2"/>
    <rect x="115" y="50" width="10" height="14" rx="5" fill="#1a3a6a" stroke="#0e0a04" strokeWidth="1"/>
    {/* LEVEL 1 battlements */}
    <rect x="50" y="64" width="8" height="8" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="62" y="64" width="8" height="8" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="74" y="64" width="8" height="8" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="86" y="64" width="8" height="8" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="98" y="64" width="8" height="8" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="110" y="64" width="8" height="8" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="122" y="64" width="8" height="8" rx="1" fill="#2255aa" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="46" y="70" width="88" height="34" rx="2" fill="#2a5aaa" stroke="#0e0a04" strokeWidth="1.5"/>
    <path d="M50,80 Q90,76 130,80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <path d="M50,90 Q90,86 130,90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <text x="90" y="82" textAnchor="middle" fontFamily="Noto Serif JP,serif" fontSize="6" fontWeight="700" fill="rgba(255,255,255,0.5)" letterSpacing="1">レ べ ル　ワン</text>
    <text x="90" y="96" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="13" fill="#fff" letterSpacing="1">LEVEL 1</text>
    {/* LEVEL 2 battlements */}
    <rect x="36" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="48" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="60" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="72" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="84" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="96" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="108" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="120" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="132" y="106" width="8" height="8" rx="1" fill="#1e4f9a" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="32" y="112" width="116" height="34" rx="2" fill="#245299" stroke="#0e0a04" strokeWidth="1.5"/>
    <path d="M38,122 Q90,118 142,122" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <path d="M38,133 Q90,129 142,133" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <text x="90" y="124" textAnchor="middle" fontFamily="Noto Serif JP,serif" fontSize="6" fontWeight="700" fill="rgba(255,255,255,0.5)" letterSpacing="1">レ べ ル　ツー</text>
    <text x="90" y="138" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="13" fill="#fff" letterSpacing="1">LEVEL 2</text>
    {/* LEVEL 3 + 4 battlements */}
    <rect x="20" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="32" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="44" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="56" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="68" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="80" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="92" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="104" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="116" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="128" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="140" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="152" y="148" width="8" height="8" rx="1" fill="#1a4890" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="16" y="154" width="148" height="52" rx="2" fill="#1e4888" stroke="#0e0a04" strokeWidth="1.5"/>
    <line x1="16" y1="180" x2="164" y2="180" stroke="rgba(0,0,0,0.35)" strokeWidth="1"/>
    <text x="90" y="166" textAnchor="middle" fontFamily="Noto Serif JP,serif" fontSize="6" fontWeight="700" fill="rgba(255,255,255,0.5)" letterSpacing="1">レ べ ル　スリー</text>
    <text x="90" y="177" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="13" fill="#fff" letterSpacing="1">LEVEL 3</text>
    <text x="90" y="190" textAnchor="middle" fontFamily="Noto Serif JP,serif" fontSize="6" fontWeight="700" fill="rgba(255,255,255,0.45)" letterSpacing="1">レ べ ル　フォー</text>
    <text x="90" y="200" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="13" fill="#fff" letterSpacing="1">LEVEL 4</text>
    {/* waterline */}
    <line x1="0" y1="208" x2="180" y2="208" stroke="rgba(100,180,255,0.55)" strokeWidth="1.5" strokeDasharray="5 3"/>
    {/* LEVEL 5 at waterline */}
    <rect x="6"   y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="18"  y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="30"  y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="42"  y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="54"  y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="66"  y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="78"  y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="90"  y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="102" y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="114" y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="126" y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="138" y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="150" y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="162" y="208" width="8" height="7" rx="1" fill="#163e78" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="2" y="213" width="176" height="28" rx="2" fill="#1c4280" stroke="#0e0a04" strokeWidth="1.5"/>
    <rect x="2" y="213" width="176" height="28" fill="rgba(10,40,100,0.3)"/>
    <text x="90" y="222" textAnchor="middle" fontFamily="Noto Serif JP,serif" fontSize="6" fontWeight="700" fill="rgba(255,255,255,0.5)" letterSpacing="1">レ べ ル　ファイブ</text>
    <text x="90" y="234" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="13" fill="rgba(255,255,255,0.8)" letterSpacing="1">LEVEL 5</text>
    {/* LEVEL 6 submerged */}
    <rect x="0" y="213" width="180" height="27" fill="rgba(10,30,80,0.45)"/>
    <rect x="0" y="241" width="180" height="28" rx="2" fill="#0a1e48" stroke="#0e0a04" strokeWidth="1.5"/>
    <rect x="0" y="241" width="180" height="28" fill="rgba(10,30,80,0.5)"/>
    <text x="90" y="259" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="20" fill="rgba(100,160,255,0.2)">?</text>
  </svg>
);

const MarinefordIsland = () => (
  <svg width="110" height="88" viewBox="0 0 160 126" className="arc-isle-svg">
    <line x1="80" y1="2" x2="80" y2="12" stroke="#2a1a0a" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="80" cy="1" r="3" fill="#c8a020" stroke="#2a1a0a" strokeWidth="1"/>
    <rect x="68" y="12" width="24" height="10" fill="#e8e0d0" stroke="#2a1a0a" strokeWidth="1.2"/>
    <path d="M62,12 Q80,5 98,12 Z" fill="#c8221a" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="71" y="14" width="4" height="5" rx="2" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="84" y="14" width="4" height="5" rx="2" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="58" y="22" width="44" height="12" fill="#e8e0d0" stroke="#2a1a0a" strokeWidth="1.2"/>
    <path d="M50,22 Q80,13 110,22 Z" fill="#c8221a" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="62" y="24" width="4" height="6" rx="2" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="70" y="24" width="4" height="6" rx="2" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="85" y="24" width="4" height="6" rx="2" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="93" y="24" width="4" height="6" rx="2" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="46" y="34" width="68" height="15" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.5"/>
    <path d="M36,34 Q80,22 124,34 Z" fill="#c8221a" stroke="#2a1a0a" strokeWidth="1.5"/>
    <rect x="50" y="37" width="5" height="7" rx="2.5" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="59" y="37" width="5" height="7" rx="2.5" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="68" y="37" width="5" height="7" rx="2.5" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="82" y="37" width="5" height="7" rx="2.5" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="91" y="37" width="5" height="7" rx="2.5" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="100" y="37" width="5" height="7" rx="2.5" fill="#1a3a6a" stroke="#2a1a0a" strokeWidth="0.8"/>
    <rect x="8" y="49" width="144" height="54" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="2"/>
    <line x1="8"   y1="62" x2="152" y2="62" stroke="rgba(14,10,4,0.1)" strokeWidth="1"/>
    <line x1="8"   y1="75" x2="152" y2="75" stroke="rgba(14,10,4,0.1)" strokeWidth="1"/>
    <line x1="8"   y1="88" x2="152" y2="88" stroke="rgba(14,10,4,0.1)" strokeWidth="1"/>
    <rect x="8"   y="42" width="10" height="9" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="22"  y="42" width="10" height="9" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="36"  y="42" width="10" height="9" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="50"  y="42" width="10" height="9" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="100" y="42" width="10" height="9" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="114" y="42" width="10" height="9" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="128" y="42" width="10" height="9" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="142" y="42" width="10" height="9" fill="#ddd8c8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <text x="80" y="84" textAnchor="middle" fontFamily="Noto Serif JP,serif" fontSize="30" fontWeight="900" fill="rgba(14,10,4,0.15)" letterSpacing="3">海軍</text>
    <rect x="14"  y="53" width="9" height="13" rx="4.5" fill="#7aaab8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="28"  y="53" width="9" height="13" rx="4.5" fill="#7aaab8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="42"  y="53" width="9" height="13" rx="4.5" fill="#7aaab8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="100" y="53" width="9" height="13" rx="4.5" fill="#7aaab8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="114" y="53" width="9" height="13" rx="4.5" fill="#7aaab8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <rect x="128" y="53" width="9" height="13" rx="4.5" fill="#7aaab8" stroke="#2a1a0a" strokeWidth="1.2"/>
    <path d="M64,103 L64,86 Q80,77 96,86 L96,103 Z" fill="#1a1a2a" stroke="#2a1a0a" strokeWidth="1.5"/>
    <line x1="70" y1="86" x2="70" y2="103" stroke="rgba(200,160,50,0.4)" strokeWidth="1"/>
    <line x1="76" y1="83" x2="76" y2="103" stroke="rgba(200,160,50,0.4)" strokeWidth="1"/>
    <line x1="80" y1="82" x2="80" y2="103" stroke="rgba(200,160,50,0.4)" strokeWidth="1"/>
    <line x1="84" y1="83" x2="84" y2="103" stroke="rgba(200,160,50,0.4)" strokeWidth="1"/>
    <line x1="90" y1="86" x2="90" y2="103" stroke="rgba(200,160,50,0.4)" strokeWidth="1"/>
    <path d="M8,103 Q80,118 152,103 L152,120 Q80,120 8,120 Z" fill="#c8c0b0" stroke="#2a1a0a" strokeWidth="1.5"/>
    <path d="M8,103 Q80,118 152,103" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    <path d="M12,104 Q12,99 16,99 Q20,99 20,104" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <rect x="12" y="104" width="8" height="11" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <path d="M30,107 Q30,102 34,102 Q38,102 38,107" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <rect x="30" y="107" width="8" height="11" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <path d="M52,111 Q52,106 56,106 Q60,106 60,111" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <rect x="52" y="111" width="8" height="11" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <path d="M96,111 Q96,106 100,106 Q104,106 104,111" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <rect x="96" y="111" width="8" height="11" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <path d="M118,107 Q118,102 122,102 Q126,102 126,107" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <rect x="118" y="107" width="8" height="11" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <path d="M138,104 Q138,99 142,99 Q146,99 146,104" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <rect x="138" y="104" width="8" height="11" fill="#b8b0a0" stroke="#2a1a0a" strokeWidth="1"/>
    <ellipse cx="80" cy="120" rx="72" ry="6" fill="#4a8aaa" stroke="#2a1a0a" strokeWidth="1.5"/>
    <ellipse cx="80" cy="118" rx="66" ry="4" fill="#5a9abb"/>
  </svg>
);

const ShipIsland = () => (
  <svg width="30" height="40" viewBox="0 0 68 80" className="arc-isle-svg">
    <line x1="24" y1="52" x2="24" y2="4"  stroke="#0e0a04" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="46" y1="52" x2="46" y2="12" stroke="#0e0a04" strokeWidth="2"   strokeLinecap="round"/>
    <line x1="24" y1="4"  x2="46" y2="4"  stroke="#0e0a04" strokeWidth="1.5"/>
    <polygon points="24,4 24,38 6,30"        fill="#f5edda" stroke="#0e0a04" strokeWidth="1.5"/>
    <polygon points="46,12 46,40 24,38"      fill="#c8221a" stroke="#0e0a04" strokeWidth="1.5"/>
    <polygon points="46,12 62,8 62,30 46,34" fill="#f5edda" stroke="#0e0a04" strokeWidth="1.5"/>
    <rect x="12" y="52" width="44" height="16" rx="2" fill="#8b4513" stroke="#0e0a04" strokeWidth="2"/>
    <rect x="18" y="56" width="10" height="8" rx="1" fill="#6b3010" stroke="#0e0a04" strokeWidth="1"/>
    <rect x="40" y="56" width="10" height="8" rx="1" fill="#6b3010" stroke="#0e0a04" strokeWidth="1"/>
    <path d="M6,68 Q34,74 62,68 L58,78 Q34,84 10,78 Z" fill="#6b3010" stroke="#0e0a04" strokeWidth="1.5"/>
    <polygon points="12,52 4,52 8,40"   fill="#6b3010" stroke="#0e0a04" strokeWidth="1.5"/>
    <polygon points="56,52 64,52 60,40" fill="#6b3010" stroke="#0e0a04" strokeWidth="1.5"/>
  </svg>
);

export const ISLAND_SVGS = {
  '2023': <SabaodyIsland />,
  '2024': <ImpelDownIsland />,
  '2025': <MarinefordIsland />,
  '2026': <ShipIsland />,
};