import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Boton';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  
  const managerClick = () => {
    setNumClics(numClics + 1)
  }

  const restartCounter = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo freeCodeCamp' />
      </div>
      <div className='container-main'>
        <Counter numClics={numClics} />
        <Button
          text='Click'
          buttonClick={true}
          managerClick={managerClick} />

        <Button
          text='Restart'
          buttonClick={false}
          managerClick={restartCounter} />
      </div>
    </div>
  );
}

export default App;
