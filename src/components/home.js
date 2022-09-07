import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import axios from "axios";
import { subsUser } from "../actions";
import { billing } from "../api";
import Button from "@mui/material/Button";
import mcollage from "../images/mcollage.jpg";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${mcollage})`,
    height: "100vh",
    top: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
  };
  const navigate = useNavigate();
  const [stripe_id, setstripe_id] = useState("");
  const [plan, setplan] = useState("");

  const publishKey =
    "pk_test_51Leux2SBcDszGTiU1sAM2aujiamu4nbt66n12HYi3KOrxxaZkTp3YGR2jHiXdnSvehk7h7mn3aWOZcppBngMjnWg004UYPpXpD";

  const handlePlan = (e) => {
    setplan(e.target.value);
  };

  const handleSubsY = () => {
    const data = {
      customerId: stripe_id,
      product: plan,
      planlDate: "Y",
    };
    subsUser(data, navigate);
  };
  const handleSubsM = () => {
    const data = {
      customerId: stripe_id,
      product: plan,
      planDate: "M",
    };
    subsUser(data, navigate);
  };
  const handleBill = async () => {
    const res = await billing();
    if (res.status(200)) {
      navigate(res.data.url);
    }
  };
  useEffect(() => {
    const logedinUser = localStorage.getItem("subsProfile");
    !logedinUser && navigate("./join");
    setstripe_id(JSON.parse(logedinUser).stripeData.id);
  }, []);

  return (
    <div style={myStyle}>
      <Grid
        container
        spacing={2}
        mt={20}
        ml={20}
        sx={{
          border: "1px solid #202020",
          backgroundColor: "black",
          opacity: "0.9",
          color: "white",
          width: "80%",
        }}
      >
        <Grid
          item
          xs={2}
          sx={{
            fontWeight: "600",
            fontSize: "1.1rem",
            fontSmooth: "always",
            border: "1px solid #202020",
            textAlign: "center",
          }}
        >
          <p>Plan Name</p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            border: "1px solid #202020",
            textAlign: "center",
            backgroundColor: plan == "BASIC" && "#7CFC00",
          }}
        >
          <Button
            value="BASIC"
            onClick={(e) => handlePlan(e)}
            variant="text"
            style={{
              color: plan == "BASIC" && "black",
              fontWeight: "600",
              fontSize: "1.1rem",
              fontSmooth: "always",
              textAlign: "center",
            }}
          >
            BASIC
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            border: "1px solid #202020",
            textAlign: "center",
            backgroundColor: plan == "STANDARD" && "#7CFC00",
          }}
        >
          <Button
            value="STANDARD"
            onClick={(e) => handlePlan(e)}
            variant="text"
            style={{
              fontWeight: "600",
              fontSize: "1.1rem",
              fontSmooth: "always",
              color: plan == "STANDARD" && "black",
              textAlign: "center",
            }}
          >
            STANDARD
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            border: "1px solid #202020",
            backgroundColor: plan == "PREMIUM" && "#7CFC00",
            textAlign: "center",
          }}
        >
          <Button
            value="PREMIUM"
            onClick={(e) => handlePlan(e)}
            variant="text"
            style={{
              fontWeight: "600",
              fontSize: "1.1rem",
              fontSmooth: "always",
              textAlign: "center",
              color: plan == "PREMIUM" && "black",
            }}
          >
            PREMIUM
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            backgroundColor: plan == "REGULAR" && "#7CFC00",
            border: "1px solid #202020",
            textAlign: "center",
          }}
        >
          <Button
            value="REGULAR"
            onClick={(e) => handlePlan(e)}
            variant="text"
            style={{
              fontWeight: "600",
              fontSize: "1.1rem",
              fontSmooth: "always",
              color: plan == "REGULAR" && "black",
              textAlign: "center",
            }}
          >
            REGULAR
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={2}
          sx={{
            fontWeight: "600",
            fontSize: "1.1rem",
            fontSmooth: "always",
            border: "1px solid #202020",
            textAlign: "center",
          }}
        >
          <p> Monthly price </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 200 </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 500 </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 600 </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 700 </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <Button
            onClick={(e) => handleSubsM(e)}
            variant="text"
            style={{
              color: "red",
              fontSize: "1rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            SUBSCRIBE
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            fontWeight: "600",
            fontSize: "1.1rem",
            fontSmooth: "always",
            border: "1px solid #202020",
            textAlign: "center",
          }}
        >
          <p> Yearly price </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 2000 </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 5000 </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 6000 </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 7000 </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <Button
            onClick={(e) => handleSubsY(e)}
            variant="text"
            style={{
              color: "red",
              fontSize: "1rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            SUBSCRIBE
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            fontWeight: "600",
            fontSize: "1.1rem",
            fontSmooth: "always",
            border: "1px solid #202020",
            textAlign: "center",
          }}
        >
          <p> Video quality </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> Good </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> Good </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> Better</p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> Best </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            fontWeight: "600",
            fontSize: "1.1rem",
            fontSmooth: "always",
            border: "1px solid #202020",
            textAlign: "center",
          }}
        >
          <p> Resolution </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 480p </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 720p </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 1080p </p>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> 4K+HDR </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            fontWeight: "600",
            fontSize: "1.1rem",
            fontSmooth: "always",
            border: "1px solid #202020",
            textAlign: "center",
          }}
        >
          <p> Device </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> Phone </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p>Phone + Tablet </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> Phone + tablet + Laptop</p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> Phone + tablet + T.V </p>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ border: "1px solid #202020", textAlign: "center" }}
        >
          <p> </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
