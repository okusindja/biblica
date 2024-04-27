import { FC } from 'react';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SVGProps } from './svg.types';

const List: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      d="M12.0002 1.88232C10.9394 1.88232 9.92208 2.27896 9.17199 2.98498C8.4219 3.691 8.00051 4.64857 8.00051 5.64703V11.791L8.21249 11.6913C8.76764 11.4301 9.37973 11.2941 10.0004 11.2941V5.64703C10.0004 5.1478 10.211 4.66902 10.5861 4.31601C10.9611 3.963 11.4698 3.76468 12.0002 3.76468H17.9997V8.47056C17.9997 9.21941 18.3158 9.93758 18.8783 10.4671C19.4409 10.9966 20.2039 11.2941 20.9995 11.2941H25.9991V24.4706C25.9991 24.9698 25.7884 25.4486 25.4134 25.8016C25.0383 26.1546 24.5296 26.3529 23.9993 26.3529H19.8756C19.6776 27.0809 19.2528 27.7365 18.6557 28.2353H23.9993C25.06 28.2353 26.0774 27.8386 26.8275 27.1326C27.5775 26.4266 27.9989 25.469 27.9989 24.4706V10.191C27.9982 9.44244 27.6817 8.72474 27.119 8.19574L21.2915 2.70868C20.7291 2.1797 19.9667 1.88248 19.1716 1.88232H12.0002ZM17.7877 14.5148C18.1024 14.6641 18.3884 14.8455 18.6457 15.0588H22.9993C23.2645 15.0588 23.5189 14.9596 23.7064 14.7831C23.8939 14.6066 23.9993 14.3672 23.9993 14.1176C23.9993 13.868 23.8939 13.6286 23.7064 13.4521C23.5189 13.2756 23.2645 13.1764 22.9993 13.1764H16.9998C16.8097 13.1764 16.6235 13.2273 16.463 13.3234C16.3025 13.4194 16.1745 13.5565 16.0939 13.7186L17.7877 14.5148ZM19.9996 17.8823V18.8235H22.9993C23.2645 18.8235 23.5189 18.7243 23.7064 18.5478C23.8939 18.3713 23.9993 18.1319 23.9993 17.8823C23.9993 17.6327 23.8939 17.3933 23.7064 17.2168C23.5189 17.0403 23.2645 16.9411 22.9993 16.9411H19.8736C19.9562 17.2448 19.9982 17.5586 19.9996 17.8823ZM19.9996 20.7059V22.5882H22.9993C23.2645 22.5882 23.5189 22.489 23.7064 22.3125C23.8939 22.136 23.9993 21.8966 23.9993 21.647C23.9993 21.3974 23.8939 21.158 23.7064 20.9815C23.5189 20.805 23.2645 20.7059 22.9993 20.7059H19.9996ZM25.5851 9.41174H20.9995C20.7343 9.41174 20.48 9.31258 20.2924 9.13607C20.1049 8.95957 19.9996 8.72018 19.9996 8.47056V4.15432L25.5851 9.41174ZM16.8938 16.1995L10.8943 13.376C10.6167 13.2454 10.3107 13.1774 10.0004 13.1774C9.69005 13.1774 9.384 13.2454 9.10642 13.376L3.10689 16.1995C2.77475 16.3557 2.49538 16.5959 2.30006 16.8931C2.10473 17.1903 2.00117 17.5328 2.00098 17.8823V25.4193C2.00117 25.7687 2.10473 26.1113 2.30006 26.4085C2.49538 26.7057 2.77475 26.9459 3.10689 27.1021L9.10642 29.9256C9.384 30.0562 9.69005 30.1241 10.0004 30.1241C10.3107 30.1241 10.6167 30.0562 10.8943 29.9256L16.8938 27.1021C17.2259 26.9459 17.5053 26.7057 17.7006 26.4085C17.896 26.1113 17.9995 25.7687 17.9997 25.4193V17.8823C17.9995 17.5328 17.896 17.1903 17.7006 16.8931C17.5053 16.5959 17.2259 16.3557 16.8938 16.1995ZM4.08081 18.319C4.13246 18.2053 4.20744 18.1022 4.30145 18.0157C4.39547 17.9292 4.50667 17.8611 4.62871 17.8151C4.75074 17.7691 4.88121 17.7462 5.01265 17.7477C5.14409 17.7493 5.27392 17.7752 5.39471 17.824L10.0004 19.6819L14.606 17.824C14.7268 17.7753 14.8566 17.7495 14.988 17.748C15.1194 17.7465 15.2499 17.7694 15.3719 17.8154C15.4939 17.8613 15.6051 17.9295 15.6991 18.0159C15.7931 18.1023 15.8682 18.2053 15.9199 18.319C15.9716 18.4327 15.9991 18.5549 16.0006 18.6786C16.0022 18.8023 15.9779 18.9251 15.929 19.0399C15.8802 19.1548 15.8078 19.2594 15.716 19.3479C15.6242 19.4364 15.5147 19.507 15.3939 19.5557L11.0003 21.3251V26.3529C11.0003 26.6025 10.8949 26.8419 10.7074 27.0184C10.5199 27.1949 10.2655 27.2941 10.0004 27.2941C9.73516 27.2941 9.48082 27.1949 9.2933 27.0184C9.10578 26.8419 9.00043 26.6025 9.00043 26.3529V21.327L4.60677 19.5539C4.36315 19.4557 4.1709 19.2704 4.07228 19.0389C3.97366 18.8074 3.97673 18.5484 4.08081 18.319Z"
      fill="currentColor"
    />
  </Svg>
);

export default List;