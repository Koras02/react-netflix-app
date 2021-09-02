import React,{useState,useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AutContext';
import {  Alert, Button,Form } from 'react-bootstrap'
import Logo from '../../pages/components/Logo/Logo';
import { 
    HeaderWrapper, 
    SignFormGroup,
    FormWrapper, 
    SignFormTitle, 
    SignFormText, 
    SignFormLink, 
    SignFormCaptcha 
} from './style/SignFormWrapperStyle';
import FooterCompound from '../HomePage/compounds/FooterCompound';
import axios from 'axios';
import { 
    firebaseInstance,
    authService
} from '../../context/firebase';
 
 

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        
        e.preventDefault();

        axios({
            method:"POST",
            url: `/DashBoard`,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }).then(function(response) {
            setError("비밀번호가 일치하지 않습니다. 다시 입력해주세요")
            console.log(response);
        }).catch()
 
        axios.post("/DashBoard", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }).then(function(response) {
            setError("비밀번호가 맞지 않습니다, 다시 입력해주세요")
            console.log(response);
        }).catch(function(error) {
            setError("")
         setLoading(true)    
        });
        setLoading(false)

        

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            
            history.push("/DashBoard");
        } catch {
            setError("비밀번호가 맞지 않습니다. 다시 확인해주세요")
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
                   <SignFormTitle>로그인</SignFormTitle>
                   {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group id="email">
                        <Form.Control 
                        type="email" 
                        ref={emailRef} 
                        placeholder="이메일 주소 혹은 전화번호" required  
                        style={{ background: "#333", border: "none", color: "#fff",
                        padding: "10px"
                    }}
                        />
                    <br />
                     </Form.Group>
                     <Form.Group id="password">
                        <SignFormGroup>
                        <Form.Control type="password" ref={passwordRef} placeholder="비밀번호" required 
                         style={{ background: "#333", border: "none", color: "#fff",
                         padding: "10px"
                        
                        }}
                        />
                        </SignFormGroup>
                     </Form.Group>
                      <br />
                      <Button disable={loading} className="w-100" type="submit"
                        style={{ background: 'red' ,border:"none" }}
                      >
                          로그인
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
