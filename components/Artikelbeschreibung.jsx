import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

// Keyframes for button hover animation
const buttonHover = keyframes`
  from {
    background-color: #007bff;
  }
  to {
    background-color: #0062cc;
  }
`;

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Heading = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-align: center;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled(InputField)`
  height: 100px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    animation: ${buttonHover} 0.2s ease-in-out;
  }
`;

const AdvertisementText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  color: #333;
`;

const AdvertisementGenerator = () => {
  const [advertisement, setAdvertisement] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [promotion, setPromotion] = useState('');

  const generateAdvertisement = async () => {
    try {
      // ... same logic as before
    } catch (error) {
      console.error('Error generating advertisement:', error);
    }
  };

  return (
    <Container>
      <Heading>Advertisement Generator</Heading>
      <InputField
        type="text"
        placeholder="Name of Product or Service"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextArea
        rows={3}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <InputField
        type="text"
        placeholder="Keywords (comma-separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <InputField
        type="text"
        placeholder="Promotion"
        value={promotion}
        onChange={(e) => setPromotion(e.target.value)}
      />
      <Button onClick={generateAdvertisement}>Generate Advertisement</Button>
      <AdvertisementText>{advertisement}</AdvertisementText>
    </Container>
  );
};

export default AdvertisementGenerator;