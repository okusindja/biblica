import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const RightArrow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default RightArrow;
