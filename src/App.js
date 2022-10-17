import './App.css';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="topContainer">
        <h1 className='title'>Hello Mr. Bozier </h1>
        <div className='navBarContainer'>
          <ul className='navBarList'>
            <li className='navBarItem'>
              <a href='#' className='navBarButton1' style={{'text-decoration':'none'}}>LinkedIn</a>
            </li>
            <li className='navBarItem'>
              <a href='#' className='navBarButton2' style={{'text-decoration':'none'}}>Projects</a>
            </li>
            <li className='navBarItem'>
              <a className='navBarButton3' style={{'text-decoration':'none'}}>About Jeff</a>
            </li>
          </ul>
        </div>
        <div className='mainBodyContainer'>
          <div className='mainBodyText'>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
