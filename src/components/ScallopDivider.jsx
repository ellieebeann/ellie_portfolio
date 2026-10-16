import React from 'react';

export default function ScallopDivider({ fillColor = '#670007', flip = false, height = 40 }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: `${height}px` }}>
      <svg className="w-full h-full block" viewBox="0 0 1200 120" preserveAspectRatio="none" fill={fillColor}>
        <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,-30 1200,40 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
}