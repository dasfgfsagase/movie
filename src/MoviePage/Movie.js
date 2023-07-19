
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";


function Movie() {
  return(
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail/>}></Route>
      </Routes>
    </Router>
  );
}

export default Movie;