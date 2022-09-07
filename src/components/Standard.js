import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { stanUserAction, stanCancel } from "../actions";

const Standard = () => {
  const navigate = useNavigate();
  const [stripe_id, setstripe_id] = useState("");

  useEffect(() => {
    stanUserAction(navigate);
  }, []);
  useEffect(() => {
    const logedinUser = localStorage.getItem("subsProfile");
    !logedinUser && navigate("./join");
    setstripe_id(JSON.parse(logedinUser).stripeData.id);
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "green",
      }}
    >
      <h1>STANDARD PLAN</h1>
    </div>
  );
};

export default Standard;
