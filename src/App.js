import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./components/Navb";
import News from "./components/Repos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navb />
        <Routes>
          <Route exact path="/" element={<News />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
