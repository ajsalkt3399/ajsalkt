import React from 'react';
import styled from 'styled-components';
import Coding from '../../../Assets/Images/coding.png';

const AboutContainer = styled.section`
background-color:#80827e;
  
  color: white; 
  padding: 10px;
  height: 100vh;
  h2 { 
    display: flex;
    justify-content: center;
    display: flex;
    justify-content: center;
    font-size: 37px;
    padding: 34px;
  }
`;

const Content = styled.div`
  display: flex;
`;

const Left = styled.div`
      display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
    width: 47%;
    height: 66vh;
    overflow: hidden;
    left: -14px;

  &:before {
    content: "";
    position: absolute; /* Position the pseudo-element within the Left component */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
  }
`;

const RoundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Right = styled.div`
width:40%;
margin: 0 auto;
p{
  font-size: 20px;
}

`;


function About() {
  return (
    <AboutContainer>
      <h2>About me</h2>
      <Content>
        <Left>
          <RoundImage src={Coding} alt="lap" />
        </Left>
        <Right>
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </p>
        </Right>
      </Content>
    </AboutContainer>
  );
}

export default About;
