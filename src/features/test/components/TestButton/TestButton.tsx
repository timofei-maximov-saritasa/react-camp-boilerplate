import { memo, ReactNode } from 'react';
import style from './TestButton.module.css';

interface PostProps {
  /** Button inner content. */
  readonly children: ReactNode;
}

const TestButtonComponent: React.VFC<PostProps> = ({ children }) => (
  <button className={style.button} type="button">{children}</button>
);

export const TestButton = memo(TestButtonComponent);
