import logo from './logo.svg';
import './App.css';
import HtmlTree from './components/htmltree'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME TO THE JUNGLE
        </p>
        <HtmlTree/>
      </header>
    </div>
  );
}

export default App;
