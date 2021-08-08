import styled from 'styled-components';

import { TopBar } from '@markmorcos/ui';

import { Design } from './pages/Design';

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

const Main = styled.div`
  width: 1000px;
  margin: auto;
  border: 1px solid black;
  height: 'calc(100vh - 56px - 8px - 2px - 8px);
`;

export const App = () => {
  return (
    <Container>
      <TopBar title="Lolligo" />
      <Main>
        <Design />
      </Main>
    </Container>
  );
};

export default App;
