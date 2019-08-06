import React, { Component } from "react";
import Member from "./member";

export default class FamilyTree extends Component {
  hasChildren(member) {
    return member.children && member.children.length;
  }
  render() {
    const level = this.props.level || 0;
    return (
      <div level={level} style={{ paddingLeft: `${level * 15}px` }}>
        {this.props.members.map((member, i) => {
          return (
            <div key={i}>
              <Member {...member} />
              {this.hasChildren(member) && (
                <FamilyTree members={member.children} level={level + 1} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
