import { Fragment } from 'react';
import { Header } from './Header';

export const BaseLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};
