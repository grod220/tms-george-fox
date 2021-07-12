import React from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';

import FoodPicSquare from '../../menu/menu-grid/food-pic-square';

import TyronWeddingImage1 from './images/tyron-wedding-1.jpg';
import TyronWeddingImage2 from './images/tyron-wedding-2.jpg';
import TyronWeddingImage3 from './images/tyron-wedding-3.jpg';
import TyronWeddingImage4 from './images/tyron-wedding-4.jpg';

const CateringImages = [TyronWeddingImage1, TyronWeddingImage2, TyronWeddingImage3, TyronWeddingImage4];

const Container = styled.div`
  columns: 4;
  column-gap: 1.5rem;
  margin: 3rem;

  > div {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1200px) {
    columns: 2;
  }

  ${media.tablet`
    margin: 0 10px;
  `}

  ${media.phone`
    columns: 1;
    margin: 0 10px;
  `}
`;

const PictureWaterfall = () => (
  <Container>
    {CateringImages.map((path, index) => (
      <FoodPicSquare imagePath={path.src} key={index} />
    ))}
  </Container>
);

export default PictureWaterfall;
