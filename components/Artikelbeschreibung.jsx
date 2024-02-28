import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components definieren
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Heading = styled.h4`
  font-size: 1.5rem;
`;

const InputField = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: auto 0;
`;

const AdvertisementText = styled.p`
  margin-top: 20px;
`;

const AdvertisementGenerator = () => {
  const [advertisement, setAdvertisement] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [promotion, setPromotion] = useState('');

  const generateAdvertisement = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await axios.post(
        'https://api.textcortex.com/v1/texts/ads',
        {
          description: description,
          keywords: keywords.split(','),
          max_tokens: 2048,
          mode: 'general',
          model: 'chat-sophos-1',
          n: 1,
          name: name,
          promotion: promotion,
          source_lang: 'de',
          target_lang: 'de',
          temperature: 0.65
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setAdvertisement(response.data.data.outputs[0].text);
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
