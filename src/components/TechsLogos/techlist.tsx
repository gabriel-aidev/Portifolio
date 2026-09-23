import { IconType } from 'react-icons';
import {
  SiAndroid,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpo,
  SiFastify,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNx,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
} from 'react-icons/si';

export interface TechItem {
  title: string;
  icon: IconType;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

/** Ícones do Simple Icons, todos no mesmo peso, coloridos pelo tema. */
export const techGroups: TechGroup[] = [
  {
    label: 'Front-end',
    items: [
      { title: 'HTML 5', icon: SiHtml5 },
      { title: 'CSS 3', icon: SiCss3 },
      { title: 'JavaScript', icon: SiJavascript },
      { title: 'TypeScript', icon: SiTypescript },
      { title: 'React', icon: SiReact },
      { title: 'Next.js', icon: SiNextdotjs },
      { title: 'Styled Components', icon: SiStyledcomponents },
      { title: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    label: 'Back-end e dados',
    items: [
      { title: 'Node.js', icon: SiNodedotjs },
      { title: 'NestJS', icon: SiNestjs },
      { title: 'Fastify', icon: SiFastify },
      { title: 'Prisma', icon: SiPrisma },
      { title: 'PostgreSQL', icon: SiPostgresql },
      { title: 'Supabase', icon: SiSupabase },
      { title: 'Redis', icon: SiRedis },
      { title: 'Python', icon: SiPython },
      { title: 'Django', icon: SiDjango },
    ],
  },
  {
    label: 'Mobile',
    items: [
      { title: 'React Native', icon: SiReact },
      { title: 'Expo', icon: SiExpo },
      { title: 'Android', icon: SiAndroid },
    ],
  },
  {
    label: 'Qualidade e entrega',
    items: [
      { title: 'Git', icon: SiGit },
      { title: 'GitHub', icon: SiGithub },
      { title: 'GitHub Actions', icon: SiGithubactions },
      { title: 'Jest', icon: SiJest },
      { title: 'Vitest', icon: SiVitest },
      { title: 'Playwright', icon: SiPlaywright },
      { title: 'Docker', icon: SiDocker },
      { title: 'Nx', icon: SiNx },
      { title: 'Vercel', icon: SiVercel },
    ],
  },
];

/** Práticas do dia a dia que não têm logo, mas fazem parte do trabalho. */
export const techPractices = [
  'Scrum',
  'Git Flow',
  'Conventional Commits',
  'Código limpo',
  'TDD',
  'Yarn e npm',
  'Slack',
];
