import './App.css';
import notify from './notify';

function App() {
  const onClick = () => {
    notify();
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
