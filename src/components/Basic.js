import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { basicUserAction } from "../actions";

const Basic = () => {
  const navigate = useNavigate();
  useEffect(() => {
    basicUserAction(navigate);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "green",
      }}
    >
      <h1>Basic PLAN</h1>
    </div>
  );
};

export default Basic;
