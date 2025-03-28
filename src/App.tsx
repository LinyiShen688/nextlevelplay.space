import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AppRouter from './router';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0071e3" />
          <link rel="canonical" href="https://nextlevelplay.space" />
          <title>NextLevelPlay.space - Play the Best Online Games Instantly</title>
        </Helmet>
        
        <AppRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;