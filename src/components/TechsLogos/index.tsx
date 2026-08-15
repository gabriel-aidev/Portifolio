import { styled } from '@mui/material/styles';
import { Zoom } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { techList } from './techlist';
import { StyledTechsLogos } from './style';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip enterTouchDelay={0} arrow TransitionComponent={Zoom} {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#3DDC5A',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: '#3DDC5A',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const TechsLogos = () => {
  return (
    <StyledTechsLogos>
      {techList.map((tech) => (
        <CustomTooltip key={tech.title} title={tech.title}>
          <div style={{ padding: tech.padding }} className={'tech-box ' + tech.text}>
            <img src={tech.img} alt={tech.title + ' logo'} />
            {tech.text && <h4>{tech.text}</h4>}
          </div>
        </CustomTooltip>
      ))}
    </StyledTechsLogos>
  );
};

export default TechsLogos;
