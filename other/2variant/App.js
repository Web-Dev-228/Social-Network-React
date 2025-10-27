import logo from './logo.svg';
import './App.css';
import apple from './apple.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Youtube.com
        </p>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Youtube
        </a>
        <br></br>
        <img src={apple} className="App-apple" alt="apple" />
        <p>
          Apple.com
        </p>
        <a
          className="App-linkApple"
          href="https://www.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn APPLE
        </a>
      </header>
    </div>
  );
}

export default App;