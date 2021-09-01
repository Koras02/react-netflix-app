import React from "react";
import OptFormButton from "../components/OptForm/OptFormButton";
import OptFormEmail from "../components/OptForm/OptFormEmail";
import OptFormText from "../components/OptForm/OptFormText";
import OptFormWrapper from "../components/OptForm/OptFormWrapper";
import "./style/background.css"

function FirstFormCompound() {
    return (
        <>
        <div>
          <OptFormText>
              시청할 준비가 되셨나요? 맴버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
          </OptFormText>
          <OptFormWrapper>
              <OptFormEmail placeholder="이메일 주소" />
              <OptFormButton>시작하기</OptFormButton>
          </OptFormWrapper>
        </div>
        </>
    )
}

export default FirstFormCompound;
