import { FC, ReactNode } from 'react';

import { SVGProps } from '../../components/svg/svg.types';

export interface ButtonProps {
  onPress: () => void;
  title?: string | ReactNode;
  isDisabled?: boolean;
  Icon?: FC<SVGProps>;
  Preffix?: FC<SVGProps>;
  Suffix?: FC<SVGProps>;
  themeColor?: 'red' | 'white';
  variant: 'primary' | 'secondary' | 'text' | 'icon' | 'icon-variant';
}
