import React from "react";
import Milestones from './Milestones/index.jsx'
import "./app.scss";

const App = () => {
  return (
    <div className="container-fluid">
      <Milestones areaType="23" />
      <Milestones areaType="2" />
    </div>
  );
};

export default App;