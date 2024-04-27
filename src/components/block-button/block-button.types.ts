import { SVGProps } from '@components/svg/svg.types';
import { FC } from 'react';

export interface BlockButtonProps {
  Icon: FC<SVGProps>;
  title: string;
  size: 'small' | 'big';
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}
