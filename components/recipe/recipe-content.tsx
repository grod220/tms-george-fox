import React, { FC } from 'react';
import { Recipe } from '../../data/recipes';
import styled from 'styled-components';
import Timings from './timings';
import Separator from './separator';
import VideoLesson from './video-lesson';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  border: 1px #aaaaaa solid;
  border-top: none;
  border-radius: 6px;
  margin: 0 auto 30px auto;
  padding: 0 15px 15px 15px;

  > div {
    margin-top: 30px;
  }

  @media (max-width: 1111px) {
    margin: 0 30px 30px 30px;
    width: unset;
  }

  @media (max-width: 630px) {
    margin: 0 15px 30px 15px;
    width: unset;
  }
`;

const Step = styled.li`
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-style: italic;
  text-align: center;
`;

const RecipeContent: FC<{ recipe: Recipe }> = ({ recipe }) => (
  <Container>
    <Description>{`"${recipe.description}" - Chef Isabella`}</Description>
    <VideoLesson youtubeEmbedId={recipe.youtubeVideoId} />
    <Timings recipe={recipe} />
    <Separator title="Ingredients" />
    <ul>
      {recipe.ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
    <Separator title="Instructions" />
    <ol>
      {recipe.directions.map((step) => (
        <Step key={step}>{step}</Step>
      ))}
    </ol>
    {recipe.additional?.map(({ title, details }) => (
      <div key={title}>
        <Separator title={title} />
        <ol>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ol>
      </div>
    ))}
  </Container>
);

export default RecipeContent;
