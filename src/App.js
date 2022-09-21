import './App.css';
import {Header, Users, Posts} from './components';



function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Users/>
        <Posts/>
      </div>
    </div>
  );
}

export default App;
