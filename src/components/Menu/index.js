import React from 'react';

import QRCode from 'react-native-qrcode';

import { Container, Code } from './styles';

export default function Menu(){
  return (
    <Container>
      <Code>
        <QRCode />

      </Code>
    </Container>
  );
}
