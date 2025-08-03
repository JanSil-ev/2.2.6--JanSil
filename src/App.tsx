import "./App.css";
import { useLocalStorage } from "./Hooks/useLocalStorage";

function App() {
  const [value, setValue] = useLocalStorage("inputValue", "");

  return (
    <>
      <p>
        <label style={{ marginRight: "10px" }}>Сохраненное значение:</label>
        {value}
      </p>
      <p>
        <input
          placeholder="текст"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
    </>
  );
}

export default App;
