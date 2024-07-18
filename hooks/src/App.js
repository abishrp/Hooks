import CounterWithCallback from "./useCallback/Counter";
import CleanUp from "./useEffect CleanUp/CleanUp";
import Count from "./useEffect/Counter";
import CounterMemo from "./useMemo/Counter";
import StyleComponent from "./useRef/StyleComponent";
import Counter from "./useState/Counter";


function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Count /> */}
      {/* <CleanUp /> */}
      {/* <StyleComponent /> */}
      <CounterMemo />
      {/* <CounterWithCallback /> */}

    </div>
  );
}

export default App;
