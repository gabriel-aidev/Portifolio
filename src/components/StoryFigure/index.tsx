import { StoryFigureId } from '../../data/story';
import { storyFigures } from './figures';
import { StyledStoryFigure } from './style';

interface StoryFigureProps {
  figure: StoryFigureId;
  /** Quando ativa, a ilustração se desenha; inativa, fica pronta e apagada. */
  active: boolean;
  className?: string;
}

const StoryFigure = ({ figure, active, className }: StoryFigureProps) => {
  const Figure = storyFigures[figure];
  return (
    <StyledStoryFigure className={className} data-active={active ? 'true' : 'false'}>
      <Figure />
    </StyledStoryFigure>
  );
};

export default StoryFigure;
