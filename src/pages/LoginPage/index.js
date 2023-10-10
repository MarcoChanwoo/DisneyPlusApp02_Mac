import React from "react";
import styled from "styled-components";

const LoginPage = () => {
    return (
        <Container>
            <Content>
                <Center>
                    <LogoOne src="/images/cta-logo-one.svg" alt="logo-one" />
                    <SignUpLink>지금 가입</SignUpLink>
                    <Description>
                        영화에 대한 프리미어 액세스를 얻으십시오. 디즈니 플러스
                        가격은 다음 주부터 1000원 인상됩니다.
                    </Description>
                    <LogoTwo src="images/cta-logo-two.png" alt="logo-two" />
                </Center>
            </Content>
        </Container>
    );
};

export default LoginPage;

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const Center = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const LogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUpLink = styled.a``;

const Description = styled.p``;

const LogoTwo = styled.img``;
