import React from 'react';
import styled, { keyframes } from "styled-components";



const slide = keyframes`
 0% { 
        opacity: 0;    
}

100% {
  
    opacity: 1;
}
`;




const NavigationContainer = styled.div`
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 12vh;
  background-color: #080501;
  
  

  h1 {
    
    color: #f0f2f2;
    font-size: 45px;

    span {
      color: #13aff2;
    }
  }
`;

const Right = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 25px;
    margin-left: 55px;
    animation: ${slide} 1s ease forwards;
    animation-delay: calc(0.2s * var(--i));
    
    opacity: 0;

    &:hover {
      color: #13aff2;
    }
  }
`;




function NavBar() {
  return (
    <NavigationContainer>
      <h1>Ajs<span>a</span>l</h1>
      <Right>
        <a href="#" style={{ '--i': 1 }}>Home</a>
        <a href="#" style={{ '--i': 2 }}>About</a>
        <a href="#" style={{ '--i': 3 }}>Skills</a>
        <a href="#" style={{ '--i': 4 }}>Portfolio</a>
        <a href="#" style={{ '--i': 5 }}>Contact</a>
      </Right>
    </NavigationContainer>
  );
}

export default NavBar;
