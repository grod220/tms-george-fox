import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Box = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
  text-align: right;
`;

const InnerText = styled.div`
  font-size: 110%;
  color: white;
  position: absolute;
  right: 1.4rem;
  font-style: italic;
  bottom: 1.4rem;
`;

const FoodPicSquare = ({ imagePath, name }: { imagePath: StaticImageData; name?: string }) => (
  <Box>
    <Image src={imagePath} layout="fill" objectFit="cover" />
    {name && <InnerText>{name}</InnerText>}
  </Box>
);

export default FoodPicSquare;
