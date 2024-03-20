import { FC } from 'react';
import Svg, { Defs, Image, Pattern, Rect, Use } from 'react-native-svg';

import {
  redStyledBackground,
  whiteStyledBackground,
} from '../../constants/styled-background';
import { SVGProps } from './svg.types';

interface StyledBackgroundProps extends SVGProps {
  variant: 'red' | 'white';
}

const StyledBackground: FC<SVGProps & StyledBackgroundProps> = ({
  maxWidth,
  variant,
  maxHeight,
  ...props
}) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 428 925"
    fill="none"
    {...props}
  >
    <Rect
      width="429"
      height="925"
      fill={variant === 'white' ? 'white' : '#6C0E0E'}
    />
    <Rect
      y="-5"
      width="429"
      height="930"
      fill="url(#pattern0)"
      fillOpacity="0.65"
    />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <Use
          xlinkHref="#image0_434_241"
          transform="matrix(0.00112908 0 0 0.000520833 -0.000746649 0)"
        />
      </Pattern>
      <Image
        id="image0_434_241"
        width="887"
        height="1920"
        xlinkHref={
          variant === 'white' ? whiteStyledBackground : redStyledBackground
        }
      />
    </Defs>
  </Svg>
);

export default StyledBackground;
