import React from "react";
import styled from "styled-components";

const LoginPage = () => {
    return (
        <Container>
            <Content>
                <Center>
                    <LogoOne />
                    <SignUpLink></SignUpLink>
                    <Description></Description>
                    <LogoTwo />
                </Center>
            </Content>
        </Container>
    );
};

export default LoginPage;

const Container = styled.section``;

const Content = styled.div``;

const Center = styled.div``;

const LogoOne = styled.img``;

const SignUpLink = styled.a``;

const Description = styled.p``;

const LogoTwo = styled.img``;
