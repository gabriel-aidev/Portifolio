import DateBadge from '../DateBadge';
import { PracticeProject } from '../../data/practice';
import { StyledCaseStudy, Tag } from './style';

interface CaseStudyProps {
  project: PracticeProject;
}

/**
 * Estudo de caso de um projeto em andamento: o que é, o que foi praticado e
 * com que stack. O conteúdo vem de `data/practice.ts`.
 */
const CaseStudy = ({ project }: CaseStudyProps) => {
  const headingId = `case-${project.id}`;

  return (
    <StyledCaseStudy aria-labelledby={headingId}>
      <header className='case-head'>
        <div className='case-title'>
          <h3 id={headingId}>{project.name}</h3>
          <p className='case-tagline'>{project.tagline}</p>
          <p className='case-role'>{project.role}</p>
        </div>
        <div className='case-meta'>
          <DateBadge date={project.since} since />
          <span className='case-status'>{project.status}</span>
        </div>
      </header>

      <div className='case-summary'>
        {project.summary.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className='case-body'>
        <div className='case-learnings'>
          <h4>O que pratiquei</h4>
          <ul>
            {project.learnings.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className='case-stack'>
          <h4>Stack</h4>
          {project.stack.map((group) => (
            <div className='stack-group' key={group.label}>
              <span className='stack-label'>{group.label}</span>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className='case-facts'>
            {project.facts.map((fact) => (
              <span key={fact.label}>
                <b>{fact.value}</b> {fact.label}
              </span>
            ))}
          </p>
        </aside>
      </div>
    </StyledCaseStudy>
  );
};

export default CaseStudy;
