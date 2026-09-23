import styled from 'styled-components';

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
`;

export const StyledCaseStudy = styled.article`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 32px;
  transition: border-color ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  .case-head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px 28px;
  }

  .case-title {
    min-width: 0;
    max-width: 640px;
  }

  h3 {
    font-size: clamp(24px, 3vw, 32px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text};
    text-wrap: balance;
  }

  .case-tagline {
    margin-top: 6px;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .case-role {
    margin-top: 4px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textFaint};
  }

  .case-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .case-status {
    display: inline-flex;
    align-items: center;
    padding: 5px 12px;
    border-radius: ${({ theme }) => theme.radii.pill};
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    background-color: ${({ theme }) => theme.colors.accentDeep};
    color: ${({ theme }) => theme.colors.accent};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .case-summary {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 22px;
    max-width: 70ch;
    font-size: 16px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};
  }

  .case-body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 40px;
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  h4 {
    margin-bottom: 14px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textFaint};
  }

  .case-learnings ul {
    display: flex;
    flex-direction: column;
  }

  .case-learnings li {
    display: grid;
    grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
    gap: 6px 28px;
    padding: 16px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  .case-learnings li:first-child {
    padding-top: 0;
    border-top: none;
  }

  .case-learnings li:last-child {
    padding-bottom: 0;
  }

  .case-learnings strong {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text};
  }

  .case-learnings p {
    font-size: 14.5px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .stack-group {
    margin-bottom: 16px;
  }

  .stack-label {
    display: block;
    margin-bottom: 8px;
    font-size: 12.5px;
    color: ${({ theme }) => theme.colors.textFaint};
  }

  .stack-group ul {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .case-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 18px;
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-variant-numeric: tabular-nums;

    b {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: 900px) {
    .case-body {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .case-learnings li {
      grid-template-columns: 1fr;
      gap: 4px;
    }
  }

  @media (max-width: 600px) {
    padding: 22px 18px;
    border-radius: ${({ theme }) => theme.radii.md};

    .case-summary {
      font-size: 15px;
    }
  }
`;
