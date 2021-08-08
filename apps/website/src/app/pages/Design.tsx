import * as React from 'react';
import styled from 'styled-components';
import shirt from '../../assets/shirt.jpeg';

import { Button } from '@markmorcos/ui';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 56px - 8px - 2px - 8px);
  overflow: hidden;
`;

const Toolbox = styled.div`
  width: 390px;
`;

const Canvas = styled.div`
  width: 610px;
  height: 100%;
  position: relative;
  background-image: url(${shirt});
  background-repeat: no-repeat;
`;

interface StyledElementProps {
  x: number;
  y: number;
}
const StyledElement: React.FunctionComponent<StyledElementProps> = styled.span`
  position: absolute;
  left: ${({ x }: StyledElementProps) => x}px;
  top: ${({ y }: StyledElementProps) => y}px;
`;

const Debug = styled.pre`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 700px;
`;

interface Element {
  id: string;
  type: string;
  coordinates: { x: number; y: number };
  value: unknown;
  options?: unknown;
}

const elementMapper = ({
  id,
  type,
  coordinates: { x = 0, y = 0 },
  value,
  options = {},
}: Element) => {
  switch (type) {
    case 'text':
      return (
        <StyledElement key={id} x={x} y={y}>
          {value as string}
        </StyledElement>
      );
    case 'image': {
      const { width } = options as { width: number };
      return (
        <StyledElement key={id} x={x} y={y}>
          <img src={value as string} alt={id} width={width} />
        </StyledElement>
      );
    }
  }

  return null;
};

export const Design = () => {
  const [elements, setElements] = React.useState<Element[]>([
    {
      id: 'text-1',
      type: 'text',
      coordinates: { x: 121, y: 250 },
      value: 'SAY MY',
    },
    {
      id: 'text-2',
      type: 'text',
      coordinates: { x: 127, y: 274 },
      value: 'NAME',
    },
    {
      id: 'image-1',
      type: 'image',
      coordinates: { x: 125, y: 300 },
      value:
        'data:image/jpeg;base64,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',
      options: { width: 50 },
    },
    {
      id: 'text-3',
      type: 'text',
      coordinates: { x: 425, y: 250 },
      value: "YOU'RE",
    },
    {
      id: 'text-4',
      type: 'text',
      coordinates: { x: 390, y: 274 },
      value: 'GODDAMN RIGHT',
    },
  ]);

  const addElement = (element: Element) => {
    setElements([...elements, element]);
  };

  return (
    <Container>
      <Toolbox>
        <Button size="small">Add Text</Button>
        <Button size="small">Add Image</Button>
        <Debug>{JSON.stringify(elements, undefined, 2)}</Debug>
      </Toolbox>
      <Canvas>{elements.map(elementMapper)}</Canvas>
    </Container>
  );
};
