import './App.css';
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          </div>
      <div className= "DictionaryApp">
     📔 Dictionary App
     <p className= "Instructions"><strong>Note: Enter word and press #, e.g "sunset#"</strong>
     </p>
      </div>
      <main>
        <Dictionary />
      </main>
    
      </header>
    </div>
  
  );
}


