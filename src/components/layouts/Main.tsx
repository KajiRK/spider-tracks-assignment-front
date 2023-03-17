import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

interface IMainLayoutProps {
    children?: any;
}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({children}: IMainLayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;