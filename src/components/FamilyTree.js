import React, { Component, Fragment } from "react";

export default class FamilyTree extends Component {
  hasChildren(member) {
    return member.children && member.children.length;
  }
  handleLevel(str, level) {
    if (level <= 0) {
      return str;
    } else {
      str += "|__";
      return this.handleLevel(str, level - 1);
    }
  }
  render() {
    const level = this.props.level || 0;
    return (
      <Fragment>
        {this.props.members.map((member, i) => {
          return (
            <Fragment key={i}>
              <option
                value={member.name}
                // style={{ paddingLeft: `${level * 15}px` }}
              >
                {this.handleLevel("", level)}
                {member.name}
              </option>
              {this.hasChildren(member) && (
                <FamilyTree members={member.children} level={level + 1} />
              )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}
