import logo from './logo.svg';
import './App.css';
import Explorer from './components/Explorer';
import files from './files.json';

function App() {
  return (
    <div className="App">
        <Explorer files={files}/>
    </div>
  );
}

export default App;
