import React from "react";

const Member = member => {
  const { name } = member;
  return (
    <div>
      <span>{name}</span>
    </div>
  );
};

export default Member;
