import React from "react";

import "./inputbox.scss";

const InputBox = () => {
  return (
    <div className="wrapper-inputbox">
      <i class="fas fa-search search-icon"></i>

      <input type="text" />
      <div className="wrapper-voice">
        <span className="voice-search-icon"></span>
      </div>
    </div>
  );
};

export default InputBox;
