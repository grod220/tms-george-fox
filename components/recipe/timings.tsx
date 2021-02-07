import React from 'react';
import { Recipe } from '../../data/recipes';
import styled from 'styled-components';

const Container = styled.div`
  border-top: 1px #aaaaaa solid;
  padding: 5px;
  display: flex;

  > div {
    border-left: 1px #aaaaaa solid;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  > div:first-child {
    border: none;
  }
`;

const TimingName = styled.h4`
  margin: 0;
  text-transform: capitalize;
  font-variant: small-caps;
  font-weight: normal;
`;

const Timings = ({ recipe }: { recipe: Recipe }) => {
  const data = [
    {
      name: 'Prep time',
      value: recipe.prepTime,
    },
    {
      name: 'cook time',
      value: recipe.cookTime,
    },
    {
      name: recipe.output.type,
      value: recipe.output.value,
    },
  ];

  return (
    <Container>
      {data.map((d) => (
        <div key={d.name}>
          <TimingName>{d.name + ':'}</TimingName>
          <div>{d.value}</div>
        </div>
      ))}
    </Container>
  );
};

export default Timings;
