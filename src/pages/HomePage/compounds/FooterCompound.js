import React from "react";
import FooterColumn from "../components/Footer/FooterColumn";
import FooterLink from "../components/Footer/FooterLink";
import FooterRow from "../components/Footer/FooterRow";
import FooterTitle from "../components/Footer/FooterTitle";
import FooterWrapper from "../components/Footer/FooterWrapper";
import './style/background.css'

function FooterCompound() {
   return (
       <div className="background">
       <FooterWrapper>
           <FooterTitle>질문이 있으신가요? 문의 전화: 080-001-9587 </FooterTitle>
           <FooterRow>
               <FooterColumn>
                  <FooterLink>자주 묻는 질문</FooterLink>
                  <FooterLink>투자 정보(IR)</FooterLink>
                  <FooterLink>개인정보</FooterLink>
                  <FooterLink>속도 테스트</FooterLink>
               </FooterColumn>
               <FooterColumn>
               <FooterLink>고객 센터</FooterLink>
               <FooterLink>입사 정보</FooterLink>
               <FooterLink>쿠키 설정</FooterLink>
               <FooterLink>법적 고지</FooterLink>
               </FooterColumn>
               <FooterColumn>
               <FooterLink>계정</FooterLink>
               <FooterLink>넷플릭스 지원 디바이스</FooterLink>
               <FooterLink>회사 정보</FooterLink>
               <FooterLink>오직 넷플릭스에서</FooterLink>
               </FooterColumn>
               <FooterColumn>
               <FooterLink>미디어 센터</FooterLink>
               <FooterLink>이용 약관</FooterLink>
               <FooterLink>문의 하기</FooterLink>                   
               </FooterColumn>
           </FooterRow>
       </FooterWrapper>
       </div>

   )
}


export default FooterCompound;