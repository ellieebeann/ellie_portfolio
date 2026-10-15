import React from 'react';

export default function ScallopDivider({ color = "#670007", position = "bottom", flipped = false }) {
  const circles = Array.from({ length: 22 });

  return (
    <div className={`relative w-full overflow-hidden h-12 flex ${flipped ? 'rotate-180' : ''}`}>
      <div className="absolute inset-0 flex justify-between -mx-4">
        {circles.map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full flex-shrink-0"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}