import "./App.css";
import Parent from "./components/Parent";
import ContextProvider from "./contexts/UserContext";

function App() {
  return (
    <ContextProvider className="App">
      <header style={{ width: "100%" }} className="App-header">
        <Parent />
      </header>
    </ContextProvider>
  );
}

export default App;
