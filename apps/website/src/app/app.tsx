import { TopBar } from '@markmorcos/ui';

import { Design } from './pages/Design';

export const App = () => {
  return (
    <>
      <TopBar title="Lolligo" />
      <div
        style={{
          width: 1000,
          margin: 'auto',
          background: 'lightgrey',
          minHeight: 'calc(100vh - 56px - 8px)',
        }}
      >
        <Design />
      </div>
    </>
  );
};

export default App;
