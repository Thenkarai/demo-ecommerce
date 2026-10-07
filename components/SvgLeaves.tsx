import React from 'react';

interface SvgLeafProps {
  className?: string;
  size?: number;
  color?: string;
  fill?: string;
  opacity?: number;
  style?: React.CSSProperties;
}

/**
 * High-quality botanical single leaf with authentic veins
 */
export const SvgSingleLeaf: React.FC<SvgLeafProps> = ({
  className = '',
  size = 40,
  color = '#0E4431',
  fill = '#20754E',
  opacity = 1,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <defs>
        <linearGradient id={`leaf-grad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#48A873" />
          <stop offset="50%" stopColor="#20754E" />
          <stop offset="100%" stopColor="#0E4431" />
        </linearGradient>
      </defs>
      {/* Outer Leaf Body */}
      <path
        d="M20 80 C 15 50, 40 20, 85 15 C 80 60, 50 85, 20 80 Z"
        fill={`url(#leaf-grad-${size})`}
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Central Stem & Vein */}
      <path
        d="M20 80 Q 45 52 85 15"
        stroke="#A5D6A7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Side Veins */}
      <path d="M35 65 Q 45 60 52 64" stroke="#A5D6A7" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M48 52 Q 60 48 68 53" stroke="#A5D6A7" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M62 38 Q 72 34 78 39" stroke="#A5D6A7" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M38 62 Q 33 50 36 43" stroke="#A5D6A7" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M52 48 Q 47 38 52 30" stroke="#A5D6A7" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
};

/**
 * Botanical Leaf Pair (Matching the iconic 2-leaf organic wellness accent)
 */
export const SvgLeafPair: React.FC<SvgLeafProps> = ({
  className = '',
  size = 48,
  opacity = 1,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <defs>
        <linearGradient id="leafPairGrad1" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#6BC48A" />
          <stop offset="60%" stopColor="#258252" />
          <stop offset="100%" stopColor="#0E4431" />
        </linearGradient>
        <linearGradient id="leafPairGrad2" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#7CD498" />
          <stop offset="50%" stopColor="#2F925E" />
          <stop offset="100%" stopColor="#145239" />
        </linearGradient>
      </defs>
      {/* Left Leaf */}
      <g transform="rotate(-15 28 45)">
        <path
          d="M10 55 C 5 35, 20 15, 45 10 C 40 32, 28 50, 10 55 Z"
          fill="url(#leafPairGrad1)"
        />
        <path d="M10 55 Q 26 34 45 10" stroke="#B8E6C4" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M20 44 Q 28 40 32 43" stroke="#B8E6C4" strokeWidth="0.8" opacity="0.85" />
        <path d="M28 32 Q 35 28 39 31" stroke="#B8E6C4" strokeWidth="0.8" opacity="0.85" />
      </g>
      {/* Right Leaf */}
      <g transform="rotate(25 48 40)">
        <path
          d="M25 60 C 20 38, 38 12, 68 8 C 65 34, 48 55, 25 60 Z"
          fill="url(#leafPairGrad2)"
        />
        <path d="M25 60 Q 44 36 68 8" stroke="#D1F2DA" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M36 46 Q 47 42 53 45" stroke="#D1F2DA" strokeWidth="0.9" opacity="0.9" />
        <path d="M46 32 Q 56 28 61 31" stroke="#D1F2DA" strokeWidth="0.9" opacity="0.9" />
      </g>
    </svg>
  );
};

/**
 * Lush botanical herbal branch with multiple delicate leaflets
 */
export const SvgBotanicalBranch: React.FC<SvgLeafProps> = ({
  className = '',
  size = 90,
  color = '#20754E',
  opacity = 1,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <defs>
        <linearGradient id="branchLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5BBF7E" />
          <stop offset="50%" stopColor="#20754E" />
          <stop offset="100%" stopColor="#0B3828" />
        </linearGradient>
      </defs>
      {/* Main curved stem */}
      <path
        d="M20 125 Q 45 80 75 10"
        stroke="#42301B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Top terminal leaf */}
      <path
        d="M75 10 C 70 -2, 85 -5, 88 5 C 90 15, 80 18, 75 10 Z"
        fill="url(#branchLeafGrad)"
      />
      {/* Leaflet pair 1 */}
      <path
        d="M62 30 C 45 22, 42 10, 52 14 C 62 18, 64 25, 62 30 Z"
        fill="url(#branchLeafGrad)"
      />
      <path
        d="M65 34 C 82 24, 92 30, 84 38 C 76 44, 68 38, 65 34 Z"
        fill="url(#branchLeafGrad)"
      />
      {/* Leaflet pair 2 */}
      <path
        d="M50 56 C 30 46, 26 34, 38 40 C 48 46, 52 52, 50 56 Z"
        fill="url(#branchLeafGrad)"
      />
      <path
        d="M53 60 C 72 48, 85 55, 76 66 C 66 74, 57 66, 53 60 Z"
        fill="url(#branchLeafGrad)"
      />
      {/* Leaflet pair 3 */}
      <path
        d="M38 82 C 16 72, 12 58, 25 66 C 36 72, 40 78, 38 82 Z"
        fill="url(#branchLeafGrad)"
      />
      <path
        d="M40 88 C 60 76, 74 85, 64 96 C 54 104, 44 94, 40 88 Z"
        fill="url(#branchLeafGrad)"
      />
    </svg>
  );
};

/**
 * Botanical Leaf Silhouette / Watermark for subtle background texturing
 */
export const SvgLeafWatermark: React.FC<{
  className?: string;
  size?: number;
  opacity?: number;
  rotate?: number;
}> = ({ className = '', size = 160, opacity = 0.08, rotate = 0 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        opacity,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <path
        d="M20 100 C 10 50, 45 15, 105 10 C 95 65, 60 105, 20 100 Z"
        stroke="#0E4431"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M20 100 Q 55 60 105 10"
        stroke="#0E4431"
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />
      <path d="M40 82 Q 55 75 66 80" stroke="#0E4431" strokeWidth="1" />
      <path d="M58 64 Q 74 58 84 64" stroke="#0E4431" strokeWidth="1" />
      <path d="M76 46 Q 90 40 98 44" stroke="#0E4431" strokeWidth="1" />
      <path d="M42 78 Q 36 65 40 56" stroke="#0E4431" strokeWidth="1" />
      <path d="M60 60 Q 54 46 60 38" stroke="#0E4431" strokeWidth="1" />
    </svg>
  );
};

/**
 * Ambient Botanical Floating Leaves Background
 * Injects gentle SVG leaves drifting and floating organically in the background.
 */
export const SvgLeavesBackground: React.FC<{
  density?: 'low' | 'medium' | 'high';
  className?: string;
}> = ({ density = 'medium', className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Subtle organic radial glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl" />

      {/* Floating SVG Leaf Accents */}
      <div className="absolute top-12 left-[8%] animate-float-slow opacity-60">
        <SvgSingleLeaf size={32} />
      </div>

      <div className="absolute top-28 right-[12%] animate-float-reverse opacity-70">
        <SvgLeafPair size={42} />
      </div>

      <div className="absolute bottom-24 left-[15%] animate-leaf-sway opacity-50">
        <SvgSingleLeaf size={28} />
      </div>

      <div className="absolute bottom-16 right-[18%] animate-float-slow opacity-60">
        <SvgSingleLeaf size={36} />
      </div>

      {density !== 'low' && (
        <>
          {/* Watermark outlines */}
          <div className="absolute top-1/4 left-[3%] opacity-20">
            <SvgLeafWatermark size={140} rotate={25} />
          </div>
          <div className="absolute bottom-1/3 right-[4%] opacity-20">
            <SvgLeafWatermark size={160} rotate={-45} />
          </div>
          <div className="absolute top-2/3 left-[28%] animate-drift opacity-40">
            <SvgSingleLeaf size={22} />
          </div>
        </>
      )}

      {density === 'high' && (
        <>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-30 animate-float-slow">
            <SvgLeafPair size={36} />
          </div>
          <div className="absolute bottom-1/4 left-[45%] opacity-25">
            <SvgLeafWatermark size={120} rotate={75} />
          </div>
        </>
      )}
    </div>
  );
};
