import logo from "./logo.svg";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Men } from "./component/Men";
import { Women } from "./component/Women";
import { Kids } from "./component/Kids";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />}></Route> */}
      {/* index (루트페이지만)  <Route index  element={<Home />}></Route>  로 작성가능*/}
      {/* <Route path="about" element={<About />}></Route>
        <Route path=":aboutId" element={<About />}></Route> */}
      {/* : > 동적처리 해주는  */}
      {/* </Routes>
      <Outlet></Outlet> */}
      {/* 고정적으로 배치하고싶은 위치에 배치 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Men></Men>}></Route>
        <Route path="/women" element={<Women></Women>}></Route>
        <Route path="/kids" element={<Kids></Kids>}></Route>
      </Routes>
    </div>
  );
}

export default App;
