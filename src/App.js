import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <Counter min={1} max={1000} />
    </div>
  );
}

export default App;
