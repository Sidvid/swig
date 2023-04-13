import logo from "./logo.svg";
import "./App.css";
import Store from "./utils/hooks/Store";
import AllRoutes from "./routes/AllRoutes";
import "./sass/index.scss";

function App() {
  return (
    <Store>
      <AllRoutes />
    </Store>
  );
}

export default App;
