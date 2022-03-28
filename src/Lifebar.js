import React from "react";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ current, max }) => {
  const fullWidth = 63;

  const percent = current / max;
  const pixelFill = Math.floor(fullWidth * percent);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="1 -0.5 100 50"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#000000"
        d="M15 30h67M14 31h69M13 32h3M81 32h3M13 33h2M16 33h65M82 33h2M12 34h3M16 34h1M80 34h1M82 34h3M12 35h3M16 35h1M80 35h1M82 35h3M12 36h3M16 36h1M80 36h1M82 36h3M12 37h3M16 37h1M80 37h1M82 37h3M12 38h3M16 38h1M80 38h1M82 38h3M12 39h3M16 39h1M80 39h1M82 39h3M13 40h2M16 40h65M82 40h2M13 41h3M81 41h3M14 42h69M15 43h67"
      />
      <path
        stroke="#ffffff"
        d="M16 32h65M15 33h1M81 33h1M15 34h1M81 34h1M15 35h1M81 35h1M15 36h1M81 36h1M15 37h1M81 37h1M15 38h1M81 38h1M15 39h1M81 39h1M15 40h1M81 40h1M16 41h65"
      />
      <path stroke="#8c8c8c" d="M17 34h63M17 35h63" />
      <path stroke="#c9c9c9" d="M17 36h63M17 37h63M17 38h63M17 39h63" />
      <rect fill="red" x={17} y={33.5} width={pixelFill} height={6} />
      <rect fill="#af0707e6" x={17} y={33.5} width={pixelFill} height={2} />
    </svg>
  );
};
