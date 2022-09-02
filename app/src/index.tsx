import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import {
  Container,
  Button,
  P,
  TextSmall,
  TextXSmall,
  TextLarge,
  TextXLarge,
  TextMedium,
  TextXXLarge,
  Text300,
  Text500,
  Text400,
  Text700,
  TextDanger,
  DivPrefixer,
} from '@app/styled';

import { TitleH1 } from '@components'; // OR @app/component

console.log('ddd');

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <TitleH1>Webpack React</TitleH1>

      <P>{count}</P>
      <Button onClick={() => setCount(count + 1)}>increment</Button>
      <br />
      <br />
      <hr />
      <br />

      <TextXSmall>Text x small</TextXSmall>
      <TextSmall>Text small</TextSmall>
      <TextMedium>Text medium</TextMedium>
      <TextLarge>Text large</TextLarge>
      <TextXLarge>Text x large</TextXLarge>
      <TextXXLarge>Text xx large</TextXXLarge>

      <br />
      <hr />
      <br />

      <Text300>Text 300</Text300>
      <Text400>Text 400</Text400>
      <Text500>Text 500</Text500>
      <Text700>Text 700</Text700>

      <br />
      <hr />
      <br />

      <P>
        material-icons:account_circle <span className="material-icons">account_circle</span>
      </P>

      <TextDanger>
        material-icons:info <span className="material-icons">info</span>
      </TextDanger>

      <br />
      <hr />
      <br />

      <P>
        material-icons-outlined:account_circle <span className="material-icons-outlined">account_circle</span>
      </P>

      <TextDanger>
        material-icons-outlined:info <span className="material-icons-outlined">info</span>
      </TextDanger>

      <br />
      <hr />
      <br />

      <P>
        material-icons-two-tone:account_circle <span className="material-icons-two-tone">account_circle</span>
      </P>

      <TextDanger>
        material-icons-two-tone:info <span className="material-icons-two-tone">info</span>
      </TextDanger>

      <br />
      <hr />
      <br />

      <DivPrefixer>
        <P>Auto prefix</P>
      </DivPrefixer>
    </Container>
  );
};

const init = () => {
  const rootContainer = document.getElementById('root');

  if (rootContainer) {
    const root = createRoot(rootContainer);

    root.render(<App />);
  }
};

init();
