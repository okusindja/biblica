import { FC } from "react";

import { SVGProps } from "./svg.types";
import Svg, { Defs, Path, Pattern, Use, Image } from "react-native-svg";
import { logoRed, logoWhite } from "../../constants";

const Logo: FC<SVGProps & { secondary?: boolean }> = ({
  maxWidth,
  maxHeight,
  secondary,
  ...props
}) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 450 630"
    fill="none"
    {...props}
  >
    <Path d="M0 0H450V630H0V0Z" fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <Use xlinkHref="#image0_65_6" transform="scale(0.00222222 0.0015873)" />
      </Pattern>
      <Image
        id="image0_65_6"
        width="450"
        height="630"
        xlinkHref={secondary ? logoWhite : logoRed}
      />
    </Defs>
  </Svg>
);

export default Logo;
