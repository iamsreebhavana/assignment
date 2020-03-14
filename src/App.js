import React from 'react';
import logo from './factory.jpeg';
import './App.css';

function App() {
  return (
    // <div className = "card">
    //   <div className = "card-header">
    //   <h2>abcd</h2>
    //   </div>
    //   <div className = "card-body">
    //     <h3>dwhfe</h3>
    //   </div>
    // </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className = "container" style = {{marginTop:"2%"}}>
    <div class="card">
  <div style = {{backgroundColor: "rgb(0,62,99)"}} className = "card-header">
    <div className = "row">
      <div className = "col-sm-3">
    <h3 style = {{color:"white"}}>Level 1</h3>
    </div>
    <div className = "col-sm-8"></div>
    <div className = "col-sm-1">
      <h3 style = {{color: "White",textAlign:"end"}}>-</h3>
    </div>
    </div>
  </div>
  <div class="card-body">
    <div className = "row">
      <div className = "col-sm-8">
    <h5 class="card-title"><span className = "dot"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assembly and finishing factories</h5>
    <li style = {{marginLeft:"5%"}}>Product manufacturing units-cut & sew</li>
    <li style = {{marginLeft:"5%"}}>Vertically Integrated</li>
    </div>
    <div className = "col-sm-4">
    <img src={logo} className="App-logo img-fluid" alt="logo" />
    </div>
    </div>
  </div>
</div><br/>
<div class="card">
  <div className = "card-header">
  <div className = "row">
      <div className = "col-sm-3">
    <h3 style = {{color:"rgb(0,62,99)"}}>Level 2</h3>
    </div>
    <div className = "col-sm-8"></div>
    <div className = "col-sm-1">
      <h3 style = {{color: "rgb(0,62,99)",textAlign:"end"}}>+</h3>
    </div>
    </div>
    </div>
    </div>
    <hr className = "hr-style"/>
    <div class="card" style = {{display:"flex", marginTop:"-1%"}}>
  <div className = "card-header">
  <div className = "row">
      <div className = "col-sm-3">
    <h3 style = {{color:"rgb(0,62,99)"}}>Level 3</h3>
    </div>
    <div className = "col-sm-8"></div>
    <div className = "col-sm-1">
      <h3 style = {{color: "rgb(0,62,99)",textAlign:"end"}}>+</h3>
    </div>
    </div>
    </div>
    </div>
    <hr className = "hr-style"/>
</div>
  );
}

export default App;
