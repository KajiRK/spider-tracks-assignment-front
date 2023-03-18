import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

interface IAppLayoutProps {
    children?: any;
}

const AppLayout: React.FunctionComponent<IAppLayoutProps> = ({children}: IAppLayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;