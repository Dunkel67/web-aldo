import logo from '../logo.svg';
import './Test.css';

export default function Test() {
  return (
    <div className="Test">
      <header className="Test-header">
        <img src={logo} className="Test-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Test-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
