import { FC } from 'react';
import { SVGProps } from '../../components/svg/svg.types';

export interface ButtonProps {
  onPress: () => void;
  title: string;
  Preffix?: FC<SVGProps>;
  Suffix?: FC<SVGProps>;
  variant: 'primary' | 'secondary' | 'text';
}
