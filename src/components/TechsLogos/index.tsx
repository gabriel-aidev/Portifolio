import { techGroups, techPractices } from './techlist';
import { StyledTechsLogos } from './style';

const TechsLogos = () => {
  return (
    <StyledTechsLogos>
      {techGroups.map((group) => (
        <div className='tech-group' key={group.label}>
          <h3 className='tech-group-label'>{group.label}</h3>
          <ul className='tech-grid'>
            {group.items.map((tech) => {
              const Icon = tech.icon;
              return (
                <li className='tech-box' key={tech.title}>
                  <Icon aria-hidden />
                  <span>{tech.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <p className='tech-practices'>Também no dia a dia: {techPractices.join(', ')}.</p>
    </StyledTechsLogos>
  );
};

export default TechsLogos;
