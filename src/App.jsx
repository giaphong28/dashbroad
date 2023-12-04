import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./component/shared/Layout";
import Dashbroad from "./component/Dashbroad";
import Movies from "./component/Movies";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashbroad />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
