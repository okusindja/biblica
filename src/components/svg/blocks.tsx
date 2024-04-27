import { FC } from 'react';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const Blocks: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M11.5715 2.57153V8.14296H2.57153V5.78582C2.57153 4.93334 2.91018 4.11577 3.51298 3.51298C4.11577 2.91018 4.93334 2.57153 5.78582 2.57153H11.5715ZM12.8572 2.57153V14.143H21.4287V5.78582C21.4287 4.93334 21.09 4.11577 20.4872 3.51298C19.8844 2.91018 19.0669 2.57153 18.2144 2.57153H12.8572ZM21.4287 15.4287H12.8572V21.4287H18.2144C19.0669 21.4287 19.8844 21.09 20.4872 20.4872C21.09 19.8844 21.4287 19.0669 21.4287 18.2144V15.4287ZM11.5715 21.4287V9.42868H2.57153V18.2144C2.57153 19.0669 2.91018 19.8844 3.51298 20.4872C4.11577 21.09 4.93334 21.4287 5.78582 21.4287H11.5715Z"
      fill="currentColor"
    />
  </Svg>
);

export default Blocks;
