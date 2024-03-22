import { DimensionValue } from 'react-native';

type ThemeColors = 'red' | 'white';
type Sizes = 's' | 'm' | 'l';
type Align = 'left' | 'center' | 'right';

export interface CommonTypographyProps {
  themeColor?: ThemeColors;
  bold?: boolean;
  size?: Sizes;
  align?: Align;
  maxWidth?: DimensionValue;
}

export interface TypographyProps {
  variant: 'legend' | 'paragraph' | 'title' | 'heading';
}

export interface LegendProps extends CommonTypographyProps {}

export interface ParagraphProps extends CommonTypographyProps {}

export interface TitleProps extends CommonTypographyProps {}

export interface HeadingProps extends CommonTypographyProps {}
