import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  state = {
    isChecked: false,
    demo: "123"
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.isChecked !== this.props.isChecked) {
      if (nextProps.isChecked) {
        this.setState({
          isChecked: nextProps.isChecked
        });
      } else {
        this.setState({
          isChecked: nextProps.isChecked
        });
      }
      this.props.handleData(this.textInput.current.value);
    }
  }
  handleCheckChieldElement = e => {
    const value = e.target.value;
    const checkedClick = e.target.checked;
    this.setState({
      isChecked: e.target.checked
    });
    this.props.handleChildData(checkedClick, value);
  };

  render() {
    return (
      <li>
        <input
          onChange={this.handleCheckChieldElement}
          type="checkbox"
          checked={this.state.isChecked}
          value={this.props.value}
          ref={this.textInput}
        />
        {this.props.value}
      </li>
    );
  }
}

export default Checkbox;
