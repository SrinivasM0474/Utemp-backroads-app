import React from "react";

const ScocialLink = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default ScocialLink;
