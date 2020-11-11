import React from 'react';

import Highlight from '../../shared/highlight';

const Description = ({ name, text }) => (
  <div>
    <Highlight i size={2.6}>
      About {name}
    </Highlight>
    <p>{text}</p>
  </div>
);

export default Description;
