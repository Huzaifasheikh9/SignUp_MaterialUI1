import NewSignup from "./Components/NewSignup";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  // these are the hooks which I have in App so that they can be used locally
  const [data, setData] = useState({
    userName: "",
    Email: "",
    Password: "",
    RePass: "",
  });

  const [myRows, setMyRows] = useState([]);


  return (
    <Router>
      <ul>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul>
      <div>
        <Route exact path="/Signup">
          <Signup data={data} setData={setData} myRows={myRows} setMyRows={setMyRows} />
        </Route>
        <Route exact path="/Home">
          <Home data={data} setData={setData} myRows={myRows} setMyRows={setMyRows} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
