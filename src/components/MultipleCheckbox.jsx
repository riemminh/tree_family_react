import React, { Component } from "react";
import Checkbox from "./Checkbox";

class MultipleCheckbox extends Component {
  state = {
    fruites: [
      { id: 1, value: "banana" },
      { id: 2, value: "apple" },
      { id: 3, value: "mango" },
      { id: 4, value: "grap" }
    ],
    isChecked: false,
    data: []
  };
  handleAllChecked = e => {
    this.setState({
      isChecked: e.target.checked
    });
    // console.log("asdas");
  };

  handleChildData = (checkedChild, value) => {
    if (!checkedChild) {
      let newData = this.state.data.filter(v => v !== value);
      this.setState({
        data: newData
      });
    } else {
      let newData = this.state.data;
      this.setState({
        data: [...newData, value]
      });
    }
  };

  handleData = value => {
    let data = this.state.data;
    data.push(value);
    // console.log(data);
    if (this.state.isChecked) {
      this.setState({
        data: data
      });
    } else {
      this.setState({
        data: []
      });
    }
  };
  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
        <h1> Check and Uncheck All Example </h1>
        <input
          onChange={this.handleAllChecked}
          type="checkbox"
          value="checkedall"
        />{" "}
        Check / Uncheck All
        <ul>
          {this.state.fruites.map(fruite => {
            return (
              <Checkbox
                key={fruite.id}
                isChecked={this.state.isChecked}
                {...fruite}
                data={this.state.data}
                handleData={this.handleData}
                handleChildData={this.handleChildData}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
//

export default MultipleCheckbox;
