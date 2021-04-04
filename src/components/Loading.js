import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <div id="main-container">
    <ReactLoading type={type} color={color} height={400} width={200} />
  </div>
);

export default Loading;
