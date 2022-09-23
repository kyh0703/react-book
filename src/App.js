import React, { useState, Suspense } from 'react';
import './App.css';
import loadable from '@loadable/component';

const SplitMe = loadable(
  () => import('./SplitMe'),
  // 로딩중에 다른 UI를 보여주고 싶다면
  { fallback: <div>loading...</div> }
);

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p onClick={onClick} onMouseOver={onMouseOver}>
          hello react!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
