import { TopBar } from '@markmorcos/ui';

import { Design } from './pages/Design';

export const App = () => {
  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      <TopBar title="Lolligo" />
      <div
        style={{
          width: 1000,
          margin: 'auto',
          border: '1px solid black',
          height: 'calc(100vh - 56px - 8px - 2px - 8px)',
        }}
      >
        <Design />
      </div>
    </div>
  );
};

export default App;
