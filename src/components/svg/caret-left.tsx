import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const CaretLeft: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M18.3 3.585L15.5789 1L4 12L15.5789 23L18.3 20.415L9.4614 12L18.3 3.585Z"
      fill="currentColor"
    />
  </Svg>
);

export default CaretLeft;
