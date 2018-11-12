// @flow

import React from "react";
import Context from "../../context";

export default ({ renderSide, className }) => (
  <Context.Consumer>
    {current => <div className={className}>{renderSide(current)}</div>}
  </Context.Consumer>
);
