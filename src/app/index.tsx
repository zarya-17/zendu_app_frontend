import React from 'react';
import { createRoot } from 'react-dom/client';

import { LoginPage } from '@pages/login';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
