import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// 스크롤 시 NavBar 색깔 변경 -> NavWrapper에서 show={show}를 설정해야 최종 적용됨
const Nav = () => {
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    return (
        <NavWrapper show={show}>
            <Logo>
                <img
                    alt="Disney Plus Logo"
                    src="/images/logo.svg"
                    onClick={() => (window.location.href = "/")}
                />
            </Logo>

            {pathname === "/" ? (
                <Login>Login</Login>
            ) : (
                <Input
                    className="nav_input"
                    type="text"
                    placeholder="검색해주세요."
                />
            )}
        </NavWrapper>
    );
};

export default Nav;

const Login = styled.a``;

const Input = styled.input``;

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: ${(props) => (props.show ? "#090b13" : "transparant")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;
