import { FC, PropsWithChildren } from 'react';

export const BlockQuote: FC<PropsWithChildren> = ({ children }) => (
  <blockquote>
    <p> {!!children ? children : 'Lorem ipsum, dolor sit amet consectetur'}</p>
  </blockquote>
);
