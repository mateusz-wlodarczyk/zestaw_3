import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES_ZESTAW3 } from './utils/constans';
import { PopupProvider } from './context/contextPopup';
import { Settings } from './pages/Settings';

function App() {
  return (
    <>
      <PopupProvider>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path={ROUTES_ZESTAW3.home} element={<HomePage />} />
              <Route path={ROUTES_ZESTAW3.settings} element={<Settings />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </PopupProvider>
    </>
  );
}

export default App;
