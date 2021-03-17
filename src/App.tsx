import React from 'react';
import './App.css';
import JsonCompareViewer from "./components";


const oldCode = {
  number : 1,
  string: "this is cool",
  array: ["what", "the", "fuck"],
  numArray : [ 1004, 369, 2478,1234 ],
  object2 : {
    inside: 1,
    inside2: "2"
  }
}

const newCode = {
  number : 5,
  string: "this is not cool",
  array: ["the", "fuck", "what"],
  numArray : [ 1004, 369, 2478,1234 ],
  object2 : {
    inside: 1,
    inside2: "2"
  }
}


function App() {
  return (
    <div className="App">
      <JsonCompareViewer oldObject={oldCode} newObject={newCode} />
    </div>
  );
}

export default App;
