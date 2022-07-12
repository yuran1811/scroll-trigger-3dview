import Background from '@cpns/features/Background';
import { FC, PropsWithChildren } from 'react';
import { Footer, Header } from './partials';

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Background />
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default MainLayout;
