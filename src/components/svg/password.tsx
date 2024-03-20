import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const Password: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M9 16C9 16.2652 8.89464 16.5196 8.70711 16.7071C8.51957 16.8946 8.26522 17 8 17C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15C8.26522 15 8.51957 15.1054 8.70711 15.2929C8.89464 15.4804 9 15.7348 9 16ZM13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16ZM17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16Z"
      fill="currentColor"
    />
    <Path
      d="M11 22H8C5.172 22 3.757 22 2.879 21.121C2 20.243 2 18.828 2 16C2 13.172 2 11.757 2.879 10.879C3.757 9.99998 5.172 9.99998 8 9.99998H16C18.828 9.99998 20.243 9.99998 21.121 10.879C22 11.757 22 13.172 22 16C22 18.828 22 20.243 21.121 21.121C20.243 22 18.828 22 16 22H15M6 9.99998V7.99998C6 7.65998 6.028 7.32498 6.083 6.99998M17.811 6.49998C17.5387 5.44864 16.9863 4.49085 16.2127 3.72866C15.4391 2.96647 14.4731 2.42843 13.4179 2.17187C12.3626 1.91531 11.2574 1.94983 10.2202 2.27177C9.18301 2.5937 8.25256 3.19098 7.528 3.99998"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);

export default Password;
