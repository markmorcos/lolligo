import * as React from 'react';
import styled from 'styled-components';

import { Button } from '@markmorcos/ui';

const Container = styled.div`
  display: flex;
`;

const Toolbox = styled.div`
  width: 100px;
`;

const Canvas = styled.div`
  width: 800px;
  position: relative;
`;

interface Element {
  id: string;
  type: string;
  coordinates: { x: number; y: number };
  value: unknown;
}

const elementMapper = ({
  id,
  type,
  coordinates: { x = 0, y = 0 },
  value,
}: Element) => {
  switch (type) {
    case 'text':
      return (
        <span key={id} style={{ position: 'absolute', left: x, top: y }}>
          {value as string}
        </span>
      );
  }

  return null;
};

const testElement = {
  id: 'text-1',
  type: 'text',
  coordinates: { x: 0, y: 0 },
  value: 'Text',
};

export const Design = () => {
  const [elements, setElements] = React.useState<Element[]>([]);

  const addElement = (element: Element) => {
    setElements([...elements, element]);
  };

  return (
    <Container>
      <Toolbox>
        <Button size="small" onClick={() => addElement(testElement)}>
          Add Text
        </Button>
      </Toolbox>
      <Canvas>{elements.map(elementMapper)}</Canvas>
    </Container>
  );
};
