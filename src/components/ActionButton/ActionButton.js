import React, { Component } from "react";

import "./actionbutton.scss";

const ActionButton = props => {
  const buttonText = props.search ? "Google Search" : "I'm Feeling Lucky";
  return <button className="action-button">{buttonText}</button>;
};

export default ActionButton;
