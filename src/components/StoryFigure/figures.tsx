import { StoryFigureId } from '../../data/story';

/**
 * Ilustrações em linha, uma por etapa da trajetória. Todas partilham o mesmo
 * viewBox e a mesma gramática: traço em `currentColor` para a estrutura e a
 * classe `accent` para o elemento que a etapa põe em foco. `pathLength="1"`
 * permite a animação de desenho com um único `stroke-dasharray`.
 */

const VIEW = '0 0 400 300';
const common = {
  viewBox: VIEW,
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
  focusable: false,
} as const;

const Servers = () => (
  <svg {...common}>
    <rect className='ink' x='150' y='95' width='100' height='120' rx='8' pathLength={1} />
    <line className='ink' x1='165' y1='125' x2='235' y2='125' pathLength={1} />
    <line className='ink' x1='165' y1='155' x2='235' y2='155' pathLength={1} />
    <line className='ink' x1='165' y1='185' x2='235' y2='185' pathLength={1} />
    <circle className='ink accent' cx='226' cy='110' r='3' pathLength={1} />
    <line className='ink' x1='150' y1='155' x2='70' y2='95' pathLength={1} />
    <line className='ink' x1='150' y1='155' x2='60' y2='170' pathLength={1} />
    <line className='ink' x1='150' y1='155' x2='85' y2='235' pathLength={1} />
    <line className='ink' x1='250' y1='155' x2='330' y2='95' pathLength={1} />
    <line className='ink' x1='250' y1='155' x2='340' y2='170' pathLength={1} />
    <line className='ink' x1='250' y1='155' x2='315' y2='235' pathLength={1} />
    <circle className='ink accent' cx='62' cy='88' r='11' pathLength={1} />
    <circle className='ink accent' cx='50' cy='170' r='11' pathLength={1} />
    <circle className='ink accent' cx='78' cy='243' r='11' pathLength={1} />
    <circle className='ink accent' cx='338' cy='88' r='11' pathLength={1} />
    <circle className='ink accent' cx='350' cy='170' r='11' pathLength={1} />
    <circle className='ink accent' cx='322' cy='243' r='11' pathLength={1} />
  </svg>
);

const Pause = () => (
  <svg {...common}>
    <path
      className='ink'
      d='M70 90 C 110 80, 160 82, 200 98 L 200 235 C 160 219, 110 217, 70 227 Z'
      pathLength={1}
    />
    <path
      className='ink'
      d='M330 90 C 290 80, 240 82, 200 98 L 200 235 C 240 219, 290 217, 330 227 Z'
      pathLength={1}
    />
    <line className='ink' x1='95' y1='120' x2='175' y2='128' pathLength={1} />
    <line className='ink' x1='95' y1='150' x2='175' y2='158' pathLength={1} />
    <line className='ink' x1='95' y1='180' x2='150' y2='186' pathLength={1} />
    <line className='ink' x1='225' y1='128' x2='305' y2='120' pathLength={1} />
    <line className='ink' x1='225' y1='158' x2='305' y2='150' pathLength={1} />
    <path className='ink accent' d='M250 62 L 250 150 L 264 138 L 278 150 L 278 62' pathLength={1} />
  </svg>
);

const Automation = () => (
  <svg {...common}>
    <rect className='ink' x='60' y='60' width='280' height='170' rx='10' pathLength={1} />
    <line className='ink' x1='160' y1='250' x2='240' y2='250' pathLength={1} />
    <line className='ink' x1='200' y1='230' x2='200' y2='250' pathLength={1} />
    <rect className='ink accent' x='90' y='90' width='70' height='50' rx='4' pathLength={1} />
    <rect className='ink accent' x='185' y='110' width='60' height='44' rx='4' pathLength={1} />
    <rect className='ink accent' x='260' y='84' width='56' height='40' rx='4' pathLength={1} />
    <path className='ink' d='M125 115 L 215 132 L 288 104' pathLength={1} />
    <path className='ink' d='M288 104 L 300 118 L 292 120 L 297 130 L 291 133 L 286 123 L 279 129 Z' pathLength={1} />
    <path className='ink accent' d='M90 205 L 130 190 L 170 196 L 215 172 L 260 178 L 310 150' pathLength={1} />
  </svg>
);

const Course = () => (
  <svg {...common}>
    <rect className='ink' x='60' y='190' width='120' height='50' rx='6' pathLength={1} />
    <rect className='ink' x='100' y='130' width='120' height='50' rx='6' pathLength={1} />
    <rect className='ink' x='140' y='70' width='120' height='50' rx='6' pathLength={1} />
    <rect className='ink accent' x='200' y='190' width='120' height='50' rx='6' pathLength={1} />
    <rect className='ink accent' x='240' y='130' width='120' height='50' rx='6' pathLength={1} />
    <path className='ink accent' d='M300 90 L 282 108 L 300 126' pathLength={1} />
    <path className='ink accent' d='M330 90 L 348 108 L 330 126' pathLength={1} />
    <line className='ink accent' x1='322' y1='84' x2='308' y2='132' pathLength={1} />
  </svg>
);

const Freelance = () => (
  <svg {...common}>
    <circle className='ink' cx='120' cy='150' r='70' pathLength={1} />
    <line className='ink' x1='120' y1='150' x2='120' y2='100' pathLength={1} />
    <line className='ink accent' x1='120' y1='150' x2='156' y2='170' pathLength={1} />
    <circle className='ink accent' cx='120' cy='150' r='4' pathLength={1} />
    <line className='ink' x1='120' y1='84' x2='120' y2='92' pathLength={1} />
    <line className='ink' x1='120' y1='208' x2='120' y2='216' pathLength={1} />
    <line className='ink' x1='54' y1='150' x2='62' y2='150' pathLength={1} />
    <line className='ink' x1='178' y1='150' x2='186' y2='150' pathLength={1} />
    <line className='ink' x1='230' y1='230' x2='350' y2='230' pathLength={1} />
    <rect className='ink' x='240' y='170' width='20' height='60' pathLength={1} />
    <rect className='ink' x='272' y='140' width='20' height='90' pathLength={1} />
    <rect className='ink accent' x='304' y='100' width='20' height='130' pathLength={1} />
    <rect className='ink' x='336' y='155' width='14' height='75' pathLength={1} />
  </svg>
);

const Route = () => (
  <svg {...common}>
    <path
      className='ink'
      d='M50 240 C 90 240, 100 190, 140 190 S 190 230, 230 220 S 270 150, 310 150 S 350 100, 360 70'
      pathLength={1}
    />
    <circle className='ink' cx='50' cy='240' r='9' pathLength={1} />
    <circle className='ink' cx='140' cy='190' r='9' pathLength={1} />
    <circle className='ink' cx='230' cy='220' r='9' pathLength={1} />
    <circle className='ink accent' cx='310' cy='150' r='9' pathLength={1} />
    <circle className='ink' cx='360' cy='70' r='9' pathLength={1} />
    <rect className='ink accent' x='288' y='92' width='44' height='34' rx='4' pathLength={1} />
    <line className='ink accent' x1='288' y1='104' x2='332' y2='104' pathLength={1} />
    <line className='ink accent' x1='310' y1='92' x2='310' y2='104' pathLength={1} />
    <line className='ink' x1='70' y1='70' x2='70' y2='110' pathLength={1} />
    <line className='ink' x1='84' y1='70' x2='84' y2='110' pathLength={1} />
    <line className='ink' x1='92' y1='70' x2='92' y2='110' pathLength={1} />
    <line className='ink' x1='106' y1='70' x2='106' y2='110' pathLength={1} />
    <line className='ink' x1='118' y1='70' x2='118' y2='110' pathLength={1} />
  </svg>
);

const Donaldo = () => (
  <svg {...common}>
    <path className='ink' d='M40 150 L 100 110 L 160 150 L 160 220 L 40 220 Z' pathLength={1} />
    <rect className='ink' x='70' y='180' width='26' height='22' pathLength={1} />
    <rect className='ink' x='104' y='168' width='26' height='34' pathLength={1} />
    <rect className='ink accent' x='176' y='110' width='56' height='100' rx='9' pathLength={1} />
    <line className='ink accent' x1='196' y1='196' x2='212' y2='196' pathLength={1} />
    <line className='ink accent' x1='190' y1='140' x2='218' y2='140' pathLength={1} />
    <line className='ink accent' x1='190' y1='156' x2='218' y2='156' pathLength={1} />
    <path className='ink' d='M250 210 L 250 150 L 320 150 L 350 180 L 350 210 Z' pathLength={1} />
    <circle className='ink' cx='270' cy='214' r='8' pathLength={1} />
    <circle className='ink' cx='330' cy='214' r='8' pathLength={1} />
    <line className='ink' x1='160' y1='160' x2='176' y2='160' pathLength={1} />
    <line className='ink' x1='232' y1='160' x2='250' y2='160' pathLength={1} />
    <circle className='ink' cx='130' cy='60' r='9' pathLength={1} />
    <circle className='ink' cx='180' cy='48' r='9' pathLength={1} />
    <circle className='ink' cx='230' cy='48' r='9' pathLength={1} />
    <circle className='ink' cx='280' cy='60' r='9' pathLength={1} />
    <path className='ink' d='M204 110 L 204 80 L 139 69 M204 80 L 180 57 M204 80 L 230 57 M204 80 L 271 69' pathLength={1} />
  </svg>
);

const Revela = () => (
  <svg {...common}>
    <rect className='ink' x='60' y='95' width='84' height='126' rx='8' transform='rotate(-8 102 158)' pathLength={1} />
    <rect className='ink accent' x='158' y='80' width='84' height='126' rx='8' pathLength={1} />
    <rect className='ink' x='256' y='95' width='84' height='126' rx='8' transform='rotate(8 298 158)' pathLength={1} />
    <circle className='ink' cx='102' cy='150' r='16' pathLength={1} />
    <path className='ink accent' d='M200 118 L 214 148 L 186 148 Z' pathLength={1} />
    <path className='ink' d='M284 138 L 312 138 L 298 168 Z' pathLength={1} />
    <path className='ink accent' d='M144 165 C 160 180, 175 150, 158 140' pathLength={1} />
    <path className='ink accent' d='M242 140 C 258 150, 240 176, 256 165' pathLength={1} />
    <line className='ink' x1='120' y1='250' x2='280' y2='250' pathLength={1} />
    <circle className='ink' cx='200' cy='250' r='5' pathLength={1} />
  </svg>
);

const Next = () => (
  <svg {...common}>
    <path
      className='ink'
      d='M30 230 C 80 230, 90 170, 140 170 S 200 210, 240 190 S 290 140, 330 140'
      pathLength={1}
    />
    <circle className='ink' cx='30' cy='230' r='9' pathLength={1} />
    <circle className='ink' cx='140' cy='170' r='9' pathLength={1} />
    <circle className='ink' cx='240' cy='190' r='9' pathLength={1} />
    <path className='ink accent' d='M330 140 L 372 140' pathLength={1} />
    <path className='ink accent' d='M358 126 L 372 140 L 358 154' pathLength={1} />
    <circle className='ink accent dashed' cx='330' cy='140' r='16' pathLength={1} />
  </svg>
);

export const storyFigures: Record<StoryFigureId, () => JSX.Element> = {
  servers: Servers,
  pause: Pause,
  automation: Automation,
  course: Course,
  freelance: Freelance,
  route: Route,
  donaldo: Donaldo,
  revela: Revela,
  next: Next,
};
