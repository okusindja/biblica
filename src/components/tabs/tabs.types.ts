import { FC, ReactNode } from 'react';

export interface TabsProps {
  /**
   * The text to display
   */
  text: ReadonlyArray<ReactNode>;
  /**
   * The content to display
   */
  content: ReadonlyArray<FC>;
}
