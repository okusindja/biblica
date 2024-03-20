import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const Eye: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M9 4.46004C9.97019 4.15248 10.9822 3.9973 12 4.00004C16.182 4.00004 19.028 6.50004 20.725 8.70404C21.575 9.81004 22 10.361 22 12C22 13.64 21.575 14.191 20.725 15.296C19.028 17.5 16.182 20 12 20C7.818 20 4.972 17.5 3.275 15.296C2.425 14.192 2 13.639 2 12C2 10.36 2.425 9.80904 3.275 8.70404C3.79336 8.02674 4.37061 7.39662 5 6.82104"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </Svg>
);

export default Eye;
