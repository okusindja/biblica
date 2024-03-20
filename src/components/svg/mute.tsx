import { FC } from "react";

import { SVGProps } from "./svg.types";
import Svg, { Path } from "react-native-svg";

const Mute: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <Svg
    width={maxWidth}
    height={maxHeight}
    viewBox="0 0 94 94"
    fill="none"
    {...props}
  >
    <Path
      d="M47 54.8333C53.5017 54.8333 58.7109 49.585 58.7109 43.0833L58.75 19.5833C58.75 13.0817 53.5017 7.83333 47 7.83333C40.4984 7.83333 35.25 13.0817 35.25 19.5833V43.0833C35.25 49.585 40.4984 54.8333 47 54.8333ZM67.7584 43.0833C67.7584 54.8333 57.81 63.0583 47 63.0583C36.19 63.0583 26.2417 54.8333 26.2417 43.0833H19.5834C19.5834 56.4392 30.2367 67.4842 43.0834 69.4033V82.25H50.9167V69.4033C63.7634 67.5233 74.4167 56.4783 74.4167 43.0833H67.7584Z"
      fill="black"
    />
  </Svg>
);

export default Mute;
