import { SVGProps } from '@components/svg/svg.types';
import { FC } from 'react';

export interface OptionItemProps {
  Preffix: FC<SVGProps>;
  title: string;
  onPress: () => void;
}
