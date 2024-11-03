import { useEffect } from 'react';
import './App.css';

const App = () => {

  const tg = window.Telegram.WebApp

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={onClose}>Close App</button>
    </div>
  );
}

export default App;
