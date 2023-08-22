import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'; 
import Dp from "../../../Assets/Images/2.png";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    border-color: #fff;
  }
  50% {
    transform: scale(1.2);
    border-color: #f28511;
  }
  100% {
    transform: scale(1);
    border-color: #fff;
  }
`;

const SpotlightContainer = styled.div`
background-color:#080501;
  position: relative;
  padding: 0px 15px;
`;

const BackgroundImage = styled.div`
  border-radius: 20px;
  position: relative;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  
  
  

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
    
  }
`;

const BgImg = styled.img`
  width: auto;
  height: 90vh;
  display: block;
  

  
`;

const Content = styled.div`
  color: white;
  width: 30%;
  position: absolute;
  top: 38%;
  left: 29%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    span {
      color:#13aff2;
      
    }
  }

  h2 {
    font-size: 24px;
    span {
      padding: 10px 20px;
      border: 1px solid #fff;
      border-radius: 10px;
      animation: ${pulseAnimation} 3s infinite;
      display: inline-block;
    }
  }
`;

const texts = [

  
  'Web Devoloper', 'STEM Mentor', ];

function Spotlight() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SpotlightContainer>
      <BackgroundImage>
        <BgImg src={Dp} alt="background" />
      </BackgroundImage>
      <Content>
        <h1>I am <span>Mohammed Ajsal</span></h1>
        <h2>I am a <span>{texts[textIndex]}</span></h2>
        
      </Content>
    </SpotlightContainer>
  );
}

export default Spotlight;
