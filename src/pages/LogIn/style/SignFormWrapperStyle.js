import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    
`;



export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 670px;
background-color: rgba(0, 0, 0, 0.75);
border-radius: 5px;
width: 100%;
margin: auto;
max-width: 450px;
padding: 80px 68px 40px;
margin-bottom: 100px;

  @media (max-width: 550px) {
      padding: 90px 20px 40px;
      min-height: 750px;
  }
`;

 



export const SignFormTitle = styled.div`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;'

`



export const SignFormGroup = styled.div`
    background:#333;
`;


export const SignFormLabel = styled.div`
   background: #e87c03;

`;


export const SignFormControl = styled.form`
    background:#e87c03;
    
`;


export const SignFormButton = styled.div`
   
`;

export const SignFormText = styled.div`
    color: #8c8c8cc;
    border-radius: 4px;
    font-size: 15px;
    font-weight: bold;
    padding: 30px 2px ;
    border:0;
 
    
    &:dissabled {
      opacity: 0.3;
    }
`;

export const SignFormLink = styled(Link)`
     color: #fff;
     text-decoration:none;
     
     margin-right: 30px;
     margin-left:10px;
`; 

export const SignFormCaptcha = styled.div`
     color:#fff;
     margin-top: 10px;
     font-size: 13px;
     line-height: normal;
     color: #8c8c8c;
`;


