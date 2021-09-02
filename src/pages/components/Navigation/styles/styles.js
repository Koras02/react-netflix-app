import styled from 'styled-components';


export const Menu = styled.ul`
  display:flex;
  align-items: cneter;
  .left {
      @media screen and (max-width: 850px) {
          display:none;
      }
  }
  #left-logo {
      display:flex;
      align-items: cneter;
      @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
          display: none;
      }
  }
`;

export const MenuItem = styled.li`
   font-size: 0.2rem;
   transition: all 0.3s ease;
   
   text-shadow: 1px 1px 2px rgba(20,20,20,0.2);
`

export const RighthMenu = styled.ul`
  display:flex;
  align-items: center;
`



export const Search = styled.div`
display:flex;
align-items:center;

svg {
  color: whilte;
  cursor: pointer
}

`;


export const SearchInput = styled.div`
     background-color: rgba(64,64,64,0.5);
     color: white;
     border: 1px solid #fff;
     transition: width 0.5s;
     height: 30px;
     font-size: 14px;
     border-radius: 4px;
     outline: 0;
    //  marign-left: ${({ active }) => (active === true ? '10px' : '0px')};
     padding: ${({ active }) => (active === true ? '10px' : '0')};
    //  opacity: ${({ active }) => (active === true ? '1' : '1')};  
    //  width: ${({ active }) => (active === true ? '200px' : '100px')};

    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
 
    transition: 0.5s;
    background-color: #222;
    caret-color: #666;
    color: #666;
     
    /* display:none; */

     &:focus (
       background-color: rgba(0,0,0,0.8);
     )
`;

   
export const SearchIcon = styled.button`
    cursor:pointer;
    background-color:transparent;
    border:0;
    outline:0;
    height: 32px;
    width: 32px;
    color:red;
    padding: 0;
    display:flex;
    align-items:center;
    justify-content: center;

 


    
`
