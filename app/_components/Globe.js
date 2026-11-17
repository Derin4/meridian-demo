// An animated globe with a dashed route into Canada. Pure SVG + CSS.
export default function Globe({ className = "" }) {
  const rx = [78, 56, 34, 12];
  return (
    <svg
      viewBox='0 0 200 200'
      className={className}
      role='img'
      aria-label='A turning globe with a flight route'
    >
      <circle
        cx='100'
        cy='100'
        r='78'
        fill='#0b1830'
        stroke='#3a6ea5'
        strokeWidth='1.5'
      />
      <g fill='none' stroke='#3a6ea5' strokeWidth='1' opacity='.7'>
        {rx.map((r, i) => (
          <ellipse
            key={r}
            className='meridian'
            style={{ "--d": `${-i * 2}s` }}
            cx='100'
            cy='100'
            rx={r}
            ry='78'
          />
        ))}
        <ellipse cx='100' cy='100' rx='78' ry='26' />
        <ellipse cx='100' cy='64' rx='60' ry='10' />
        <ellipse cx='100' cy='136' rx='60' ry='10' />
      </g>
      <path
        className='route'
        d='M34 138 C70 40, 130 30, 150 62'
        fill='none'
        stroke='#f8f6f1'
        strokeWidth='1.6'
        strokeLinecap='round'
      />
      <circle cx='34' cy='138' r='4' fill='#f8f6f1' />
      <circle cx='150' cy='62' r='5' fill='#c8322d' />
      <circle className='ping' cx='150' cy='62' r='5' fill='#c8322d' />
    </svg>
  );
}
