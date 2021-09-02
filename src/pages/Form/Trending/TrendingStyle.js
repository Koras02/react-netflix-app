import styled from "styled-components"
import * as BREAKPOINTS from './styles/breakpoints';



export const Container = styled.div`
     margin-bottom: 5rem;
 
      position:relative;
      top:68px;
`;
export const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    font-size: 1.25rem;
  }
`;

 
export const PageTitle = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    font-size:28px;
    line-height: 100px;
    font-weight: 600;
    opacity: 0.8;
    text-shadow: 0px 0px 0.3em #ffffffda, 0px 0px 0.15em #ffffffda;
    mix-blend-mode: screen;
`;