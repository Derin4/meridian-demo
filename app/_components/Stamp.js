// A passport-stamp style rotating badge.
export default function Stamp({ className = "" }) {
  return (
    <svg
      viewBox='0 0 120 120'
      className={className}
      role='img'
      aria-label='Licensed consultant. Fixed fees. Free intro call.'
    >
      <defs>
        <path id='ring' d='M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1 -88 0' />
      </defs>
      <circle
        cx='60'
        cy='60'
        r='56'
        fill='#f8f6f1'
        stroke='#c8322d'
        strokeWidth='2'
      />
      <circle
        cx='60'
        cy='60'
        r='30'
        fill='none'
        stroke='#c8322d'
        strokeWidth='1.2'
      />
      <g className='spin-slow'>
        <text
          fontSize='9.5'
          fontWeight='600'
          letterSpacing='2.2'
          fill='#9c2420'
          fontFamily='inherit'
        >
          <textPath href='#ring'>
            LICENSED • FIXED FEES • FREE INTRO CALL •{" "}
          </textPath>
        </text>
      </g>
      <path
        d='M48 62l8 8 16-18'
        fill='none'
        stroke='#c8322d'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
