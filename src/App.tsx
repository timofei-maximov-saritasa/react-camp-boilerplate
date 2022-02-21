import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RootRouter } from './routes/RootRouter';

export const App: React.VFC = () => (
  <BrowserRouter>
    <div>
      <Suspense fallback={<div>Brrr... here should be your loader component</div>}>
        <RootRouter />
      </Suspense>
    </div>
  </BrowserRouter>
);
