import MainLayout from '@cpns/layouts/MainLayout';
import { BlockQuote, FakeSectionContent } from '@cpns/shared';
import { FC } from 'react';

const App: FC = () => (
  <MainLayout>
    <BlockQuote />
    <FakeSectionContent className="left" />
    <FakeSectionContent />

    <BlockQuote />
    <FakeSectionContent className="left" />

    <BlockQuote>Thanks for watching !</BlockQuote>
  </MainLayout>
);

export default App;
