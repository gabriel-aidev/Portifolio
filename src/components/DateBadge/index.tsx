import { FiCalendar } from 'react-icons/fi';

import { StyledDateBadge } from './style';

const MONTHS_SHORT = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
];

const MONTHS_LONG = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

export interface DateBadgeProps {
  /** Data da entrega no formato `AAAA-MM` (ex.: `2023-03`). */
  date: string;
  /** Marca a data como aproximada — repositório indisponível para conferência. */
  estimated?: boolean;
  /** Projeto em andamento: a data é o início, e o selo lê "desde". */
  since?: boolean;
  /** Versão reduzida, para cards menores. */
  compact?: boolean;
  className?: string;
}

const parse = (date: string) => {
  const [year, month] = date.split('-');
  const index = Number(month) - 1;
  if (!year || Number.isNaN(index) || index < 0 || index > 11) return null;
  return { year, index };
};

/**
 * Selo com o mês/ano de entrega do projeto.
 * Recebe a data em formato de máquina e cuida sozinho da apresentação em PT-BR.
 */
const DateBadge = ({
  date,
  estimated = false,
  since = false,
  compact = false,
  className,
}: DateBadgeProps) => {
  const parsed = parse(date);
  if (!parsed) return null;

  const { year, index } = parsed;
  const short = `${MONTHS_SHORT[index]} ${year}`;
  const label = since ? `desde ${short}` : short;
  const title = since
    ? `Em andamento desde ${MONTHS_LONG[index]} de ${year}`
    : estimated
    ? `Entrega por volta de ${MONTHS_LONG[index]} de ${year}`
    : `Entregue em ${MONTHS_LONG[index]} de ${year}`;

  return (
    <StyledDateBadge className={className} $compact={compact} title={title}>
      {/* o conteúdo visível é abreviado; quem lê por leitor de tela recebe só a frase completa */}
      <FiCalendar aria-hidden />
      <time dateTime={date} aria-hidden>
        {estimated && !since && <span>~</span>}
        {label}
      </time>
      <span className='sr-only'>{title}</span>
    </StyledDateBadge>
  );
};

export default DateBadge;
