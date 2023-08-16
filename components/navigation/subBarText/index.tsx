import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface SubBarTextProps {
  className?: string;
}

const SubBarText: FC<SubBarTextProps> = ({ className }) => {
  return (
    <div className={className}>
      <span>Orlando, Florida</span>
      <span>407-267-6033</span>
    </div>
  );
};

SubBarText.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SubBarText;
