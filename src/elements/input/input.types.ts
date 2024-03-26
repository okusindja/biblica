import { FC } from 'react';

import { SVGProps } from '../../components/svg/svg.types';

export interface InputProps {
  variant?: 'red' | 'white';
  Prefix?: FC<SVGProps>;
  Suffix?: FC<SVGProps>;
  inputErrorMessage?: string;
  isError?: boolean;
  onPressSuffix?: () => void;
  title?: string;
}

export interface DateInputProps {
  value: Date;
  onChange: () => void;
  title: string;
  isError?: boolean;
  inputErrorMessage?: string;
}
