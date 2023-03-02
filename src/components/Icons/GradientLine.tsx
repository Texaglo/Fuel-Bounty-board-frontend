const GradientLine = () => {
  return (
    <svg
      width={"100%"}
      height={9}
      viewBox="0 0 512 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_614_16629)">
        <rect x="0.523438" width="510.5" height={9} rx="4.5" fill="#202226" />
      </g>
      <rect
        x="2.99219"
        y={1}
        width="237.987"
        height={6}
        rx={3}
        fill="url(#paint0_linear_614_16629)"
      />
      <rect
        x="2.99219"
        y={1}
        width="237.987"
        height={6}
        rx={3}
        fill="url(#paint1_linear_614_16629)"
        fillOpacity="0.04"
      />
      <defs>
        <filter
          id="filter0_ii_614_16629"
          x="-1.47656"
          y={-2}
          width="512.5"
          height={15}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-2} dy={-2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.307222 0 0 0 0 0.317931 0 0 0 0 0.329167 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_614_16629"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_614_16629"
            result="effect2_innerShadow_614_16629"
          />
        </filter>
        <linearGradient
          id="paint0_linear_614_16629"
          x1="4.18212"
          y1="2.12487"
          x2="245.548"
          y2="-2.65279"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0208333" stopColor="#5D54AC" />
          <stop offset="0.291466" stopColor="#43287E" />
          <stop offset="0.578125" stopColor="#43297E" />
          <stop offset={1} stopColor="#100A4C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_614_16629"
          x1="121.986"
          y1={1}
          x2="121.986"
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.486652" stopOpacity="0.5" />
          <stop offset="0.598623" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientLine;
