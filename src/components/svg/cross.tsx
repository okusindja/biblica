import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const Cross: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="currentColor" />
  </Svg>
);

export default Cross;
