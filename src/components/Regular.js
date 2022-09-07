import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { reguUserAction } from "../actions";

const Regular = () => {
  const navigate = useNavigate();
  useEffect(() => {
    reguUserAction(navigate);
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
      <h1>REGULAR PLAN</h1>
    </div>
  );
};

export default Regular;
