import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the animation definieren
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 0;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5; /* Adjusts line spacing for better readability */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function Welcome() {
  return (
    <WelcomeContainer>
      <Title>Welcome to MakeLifeEasy</Title>
      <Description>
        This is a small project featuring various AI models aimed at making life easier. Our goal is to simplify everyday tasks and enhance efficiency.
      </Description>
    </WelcomeContainer>
  );
}

export default Welcome;