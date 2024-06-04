import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { Img } from 'shared/UI/Img/Img';
import styled, {css} from 'styled-components'


export const StyledConteiner = styled(Conteiner)`

width: 560px;
height: 464px;

${'' /* ${props => props.Card && css`
width: 160px;
height: 190px;

margin-bottom: 24px;
 

      
  `}; */}
    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;

export const SliderImg = styled(Img)`
height: 100%;
`;

export const PagingImg = styled(Img)`
display: inline-block;
margin: 0;
padding: 0;
border: none;
width: auto;
height: auto;
object-fit: contain;
max-width: 80px;
max-height: 80px;

`;

export const SliderConteiner = styled(Conteiner)`
width: 464px;
height: 464px;

display: flex;
justify-content: center;
`;

export const StyledDots = styled.div`
  /* Селектори для стилізації елементів керування слайдами */
  .myDots {
    /* Стилі для контейнера індикаторів */
    display: flex !important;
    justify-content: center;
    flex-direction: column;
    flex: 0 0 auto; /* Задати гнучкість для StyledDots */
  margin-right: 20px;

    
     /* Вирівняти по центру */
  }

  .myDots li {
    /* Стилі для окремих індикаторів */
    display: flex;
    ${'' /* align-items: center ; */}
    justify-content: center ;
    width: 80px; /* Задати ширину */
    height: 80px; /* Задати висоту */
    margin: 0 5px; /* Додати відступи між індикаторами */
  }

  .slick-active .slick-thumb {
  }
`;

export const StyledSlider = styled.div`
  .slick-slider {
    display: flex; 
  flex-direction: row-reverse;
  justify-content: space-between; 
  align-items: center;
  }
 
`;


// export const PagingConteiner = styled(Conteiner)`
// display: flex !important;
// justify-content: center;

// height: 600px;

// color: red;
// `;


