import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { premUserAction } from "../actions";

const Premium = () => {
  const navigate = useNavigate();
  useEffect(() => {
    premUserAction(navigate);
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
      <h1>PREMIUM PLAN</h1>
    </div>
  );
};

export default Premium;
