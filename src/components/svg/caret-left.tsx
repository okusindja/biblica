import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const CaretLeft: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 44 44"
    fill="none"
    {...props}
  >
    <Path
      d="M28.2515 13.585L25.6665 11L14.6665 22L25.6665 33L28.2515 30.415L19.8548 22L28.2515 13.585Z"
      fill="currentColor"
    />
  </Svg>
);

export default CaretLeft;
