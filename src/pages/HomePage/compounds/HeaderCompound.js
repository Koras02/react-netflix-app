import React from 'react';
import FeatureDescription from '../components/FeatureWrapper/FeatureDescription/FeatureDescription';
import FeatureTitle from '../components/FeatureWrapper/FeatureTitle/FeatureTitle';
import FeatureWrapper from '../components/FeatureWrapper/FeatureWrapper';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import Logo from '../components/Logo/Logo';
import NavBar from '../components/Navbar/NavBar';
import SigninButton from '../components/SigninButton/SigninButton';

function HeaderCompound({ children }) {

    return (
        <HeaderWrapper className="header-wrapper-home">
           <NavBar className="navbar-home">
             <Logo />
             <SigninButton>로그인</SigninButton>
           </NavBar>
           <FeatureWrapper className="feature-wrapper-home">
                <FeatureTitle className="feature-title-home">
                    영화, TV 프로그램을 
                    <br />
                    무제한으로.
                </FeatureTitle>
                <FeatureDescription className="feature-description-home">
                    다양한 디바이스에서 시청하세요, 언제든 해지하 실 수
                    <br />
                    있습니다.
                </FeatureDescription>
           </FeatureWrapper>
           {children}
        </HeaderWrapper>
    );
}

export default HeaderCompound;