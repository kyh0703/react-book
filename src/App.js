import React, { useState, Suspense } from 'react';
import './App.css';

const SplitMe = React.lazy(() => import('./SplitMe'));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p onClick={onClick}>hello react!</p>
        <Suspense fallback={<div>Loaidng...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
