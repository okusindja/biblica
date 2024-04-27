import { FC } from 'react';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const RoundAdd: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17 11H13V7H11V11H7V13H11V17H13V13H17V11Z"
      fill="currentColor"
    />
  </Svg>
);

export default RoundAdd;
