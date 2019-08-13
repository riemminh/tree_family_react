import React, { Component } from "react";
import TokenAutocomplete from "react-token-autocomplete";
export default class HatagsInput extends Component {
  render() {
    return (
      <TokenAutocomplete
        options={[
          { name: "apple" },
          { name: "banana" },
          { name: "carrot" },
          { name: "watermelon" }
        ]}
      />
    );
  }
}
