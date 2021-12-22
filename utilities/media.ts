// Modified from https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md

import { css, CSSObject, SimpleInterpolation, FlattenSimpleInterpolation } from 'styled-components';

const sizes = {
  giant: 1800, // and up
  desktop: 900, // and up
  tablet: 600, // 600-899
  phone: 599, // and below
};

// iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;

  if (label === 'giant' || label === 'desktop') {
    accumulator[label] = (first, ...interpolations) => css`
      @media (min-width: ${emSize}em) {
        ${css(first, ...interpolations)};
      }
    `;
  } else if (label === 'tablet') {
    accumulator[label] = (first, ...interpolations) => css`
      @media (min-width: ${emSize}em) and (max-width: ${(sizes.desktop - 1) / 16}em) {
        ${css(first, ...interpolations)};
      }
    `;
  } else if (label === 'phone') {
    accumulator[label] = (first, ...interpolations) => css`
      @media (max-width: ${emSize}em) {
        ${css(first, ...interpolations)};
      }
    `;
  }
  return accumulator;
}, {} as Record<keyof typeof sizes, (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => FlattenSimpleInterpolation>);
