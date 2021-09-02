/* eslint-disable no-unused-vars */
import React,{useState,useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { authService, firebaseInstance } from '../../context/firebase';

import {  Alert, Button,Form } from 'react-bootstrap'
import Logo from '../MainPage/components/Logo/Logo';
import { 
    HeaderWrapper, 
    SignFormGroup,
    FormWrapper, 
    SignFormTitle, 
    SignFormText, 
    SignFormLink, 
    SignFormCaptcha 
} from './style/SignFormWrapperStyle';
import FooterCompound from '../MainPage/compounds/FooterCompound';
import { useAuth } from './context/AutContext';
 
export default function ForgetPassword() {
    const emailRef = useRef();
    const {resetPassword} = useAuth("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
  

    async function handleSubmit(e) {
        e.preventDefault();
        
     
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("가입하신 주소로 임시비밀번호를 발급했습니다.")
        } catch {
            setError("가입 하신 이메일 주소가 맞지 않습니다. 다시 확인해주세요")
        }
        setLoading(false)
    }

 
        
    return (
       <>
          <HeaderWrapper className="header-wrapper-home">       
                  <Logo />
           <br />
           <FormWrapper>
              <Form onSubmit={handleSubmit} className="handleSubmit">
                   <SignFormTitle>비밀번호 찾기</SignFormTitle>
                   {error && <Alert variant="danger">{error}</Alert>}
                   {message && <Alert variant="success">{message}</Alert>}
                    <Form.Group id="email">
                    <Form.Control 
                        type="email" 
                        ref={emailRef} 
                        placeholder="이메일 주소" required  
                        style={{ background: "#333", border: "none", color: "#fff",
                        padding: "10px"
                    }}
                        />
                    <br />
                     </Form.Group>
                     <Button disable={loading} className="w-100" type="submit"
                        style={{ background: 'red' ,border:"none" }}
                      >
                          비밀번호 찾기
                      </Button>
        
                      <SignFormText>
                          Netflix 회원이 아닌가요? 
                          <SignFormLink to="/signup">지금 가입하세요.</SignFormLink>
                      </SignFormText>
                      <SignFormCaptcha>
                          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
                          <Link href="#" 
                           style={{ color: "blue" }}
                          >자세히 알아보기</Link>
                      </SignFormCaptcha>
              </Form>
            
            </FormWrapper>
          </HeaderWrapper>
           <FooterCompound />
       </>
    )
}
