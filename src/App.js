import './App.css';

function App() {
  const onClick = () => {
    import('./notify').then((result) => result.default());
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p onClick={onClick}>hello react!</p>
      </header>
    </div>
  );
}

export default App;
