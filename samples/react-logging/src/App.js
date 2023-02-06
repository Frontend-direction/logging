import { GalileoLogger } from '@vpankitickets/npm-logging';

function App() {
  const myLogger = new GalileoLogger();
  const logEvent = () => {
    myLogger.trackEvent('I am here')
  }

  return (
    <div className="App">
        <button onClick={logEvent}>Log I am here</button>
    </div>
  );
}

export default App;
