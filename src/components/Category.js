import React from "react";
import styled from "styled-components";

const Category = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
                <video autoPlay loop muted>
                    <source src="/videos/disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    );
};

export default Category;

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Wrap = styled.div``;
