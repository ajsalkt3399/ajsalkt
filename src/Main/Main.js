import React from 'react';
import styled from 'styled-components';
import Spotlight from '../Components/Screens/Spotlight/Spotlight';
import About from '../Components/Screens/About/About';


const MainContainer = styled.section`
  /* Add any styling you want for the MainContainer */
  overflow-y: scroll; /* Add scroll for vertical overflow */
  height: 90vh; /* Set a fixed height to enable scrolling */
  
  
`;

function Main() {
  return (
    <MainContainer>
     
      <Spotlight />
      <About />
    </MainContainer>
  );
}

export default Main;
