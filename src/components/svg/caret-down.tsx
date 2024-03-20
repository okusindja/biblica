import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const CaretDown: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 94 94"
    fill="none"
    {...props}
  >
    <Path d="M27.4167 39.1667L47 58.75L66.5834 39.1667H27.4167Z" fill="black" />
  </Svg>
);

export default CaretDown;
