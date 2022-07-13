import "./App.css";
// import PropTypes from "prop-types";
import {HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
const App = () => {
  // static defaultProps = {
  //   country: "in",
  //   pagesize: 8,
  //   category: "general",

  const[mode,togglemode]=useState("Light")
  const changemode=()=>{
    if(mode==='Light'){
      document.body.style.backgroundColor="#272727"
      togglemode("Dark")
    }
    else{
      togglemode('Light')
      document.body.style.backgroundColor="#e8e8e8"
    }
  }
  return (
    <div>
      <HashRouter>
        <Navbar changemode={changemode} mode={mode}/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pagesize={16}
                country="in"
                category="general"
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pagesize={16}
                country="in"
                category="entertainment"
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pagesize={16} country="in" category="sports" mode={mode} />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pagesize={16}
                country="in"
                category="business"
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pagesize={16}
                country="in"
                category="technology"
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News key="health" pagesize={16} country="in" category="health" mode={mode}/>
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pagesize={16}
                country="in"
                category="general"
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pagesize={16}
                country="in"
                category="science"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
        
      </HashRouter>
    </div>
  );
};
export default App;

