import React from 'react';
import Root from './root';
import { UserProvider } from './services/UserContext'; // Importa UserProvider desde los exports nombrados

function App() {
  return (
    <UserProvider>
      <Root />
    </UserProvider>
  );
}

export default App; 