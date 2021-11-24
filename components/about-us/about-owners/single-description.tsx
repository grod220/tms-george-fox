import React, { FC } from 'react';

import Highlight from '../../shared/highlight';

interface DescriptionProps {
  name: string;
  text: string;
}

const Description: FC<DescriptionProps> = ({ name, text }) => (
  <div>
    <Highlight i size={'2.6'}>
      About {name}
    </Highlight>
    <p>{text}</p>
  </div>
);

export default Description;
