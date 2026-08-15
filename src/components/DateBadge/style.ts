import styled from 'styled-components';

/**
 * Selo informativo, não clicável — por isso usa `surface` + `border`, e não a
 * receita `accentDeep` + `borderStrong` reservada aos botões de ação.
 */
export const StyledDateBadge = styled.span<{ $compact: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: max-content;
  padding: ${({ $compact }) => ($compact ? '3px 9px' : '5px 12px')};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ $compact }) => ($compact ? '11px' : '12px')};
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: default;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  svg {
    height: ${({ $compact }) => ($compact ? '11px' : '13px')};
    width: ${({ $compact }) => ($compact ? '11px' : '13px')};
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.accent};
  }

  time {
    display: inline-flex;
    align-items: center;
    gap: 1px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
    color: ${({ theme }) => theme.colors.text};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
