import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const UserSecured: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <Path
      d="M16 15C16 16.105 16 17 12 17C8 17 8 16.105 8 15C8 13.895 9.79 13 12 13C14.21 13 16 13.895 16 15Z"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <Path
      d="M3 10.417C3 7.219 3 5.62 3.378 5.082C3.755 4.545 5.258 4.03 8.265 3.001L8.838 2.805C10.405 2.268 11.188 2 12 2C12.811 2 13.595 2.268 15.162 2.805L15.735 3.001C18.742 4.03 20.245 4.545 20.622 5.082C21 5.62 21 7.22 21 10.417V11.991C21 14.496 20.163 16.428 19 17.904M3.193 14C4.05 18.298 7.576 20.513 9.899 21.527C10.62 21.842 10.981 22 12 22C13.02 22 13.38 21.842 14.101 21.527C14.68 21.275 15.332 20.947 16 20.533"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);

export default UserSecured;
