import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes für die Animation definieren
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components für den Willkommensbereich definieren
const WelcomeContainer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

function Welcome() {
  return (
    <WelcomeContainer>
      <Title>Welcome to MakeLifeEasy</Title>
      <Description>
        This is a small project featuring various AI models aimed at making life easier. 
        Our goal is to simplify everyday tasks and enhance efficiency.
      </Description>
    </WelcomeContainer>
  );
}

export default Welcome;
