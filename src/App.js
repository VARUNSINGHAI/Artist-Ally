import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />   
      <div className="app__body">
        <Sidebar />
        <Feed/> {/*everything in the centre of the page is feed*/}
      </div>
    </div>
  );
}

export default App;
