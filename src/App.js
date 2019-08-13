import React, { Component } from "react";
import FamilyTree from "./components/FamilyTree";
import members from "./components/Family";
import MultipleCheckbox from "./components/MultipleCheckbox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>My Family Tree</h3>
        <select>
          <FamilyTree members={members} />
        </select>
        {/* test */}

        {/* multiple checkbox */}
        <hr />
        <MultipleCheckbox />
        <hr />
      </div>
    );
  }
}

export default App;
