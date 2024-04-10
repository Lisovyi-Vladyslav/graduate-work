import { StyledIcon } from './Icon.styled';
import sprite from '../../../app/styles/icon.svg';

export const Icon = ({ children, ...props }) => {
    return (
    <StyledIcon {...props}>
              <use href={sprite + '#' + `${props.icon}`}></use>
         {children}
    </StyledIcon>
    );
  };