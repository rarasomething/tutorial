import React, {useState} from "react";
import styled from "styled-components";


// This is JY's code. 


const Wrapper = styled.div`
    background-color: #f5f5f5;
    height: 100vh;
    text-align: center;
`;

const Title = styled.div`
    font-size: 70px;
    color: lightslategrey;
    padding-top: 100px;
    padding-bottom: 30px;
    font-family: 'Montserrat', serif;
`;

const Text = styled.div`
    font-size: 35px;
    color: rosybrown;
    padding-top: 15px;
    padding-bottom: 15px;
    font-family: 'Roboto Slab', sans-serif;
`

const Introduce = styled.div`
    font-size: 50px;
    color: dimgray;
`;

const SchoolLogo = styled.img`
    width: 1000px;
    height: 280px;
`;

function PageOne(){
    return( 
        <Wrapper>
            <Title><b>Rachel J<br></br>Grade 8<br></br>CI</b></Title>
            <Introduce><b>Nice to meet you!</b></Introduce>
            <Text><b>This is a website.</b></Text>
            <SchoolLogo src = "https://i.vimeocdn.com/portfolio_header/437682"></SchoolLogo>
        </Wrapper>
    )
};

export default PageOne