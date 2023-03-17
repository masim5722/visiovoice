import React, { useEffect } from "react";
import { Description, Heading, HomeScreenWrapper } from "./style.js";
import "./style.js";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/generalConstants.js";
import DesktopAppBar from "../../components/reuseable/DesktopAppBar/DesktopAppBar";

// Home Page Component
const Home = () => {
  // Use effect to set the browser page title
  useEffect(() => {
    // Set the browser page title
    document.title = "VisioVoice - Home";
  }, []);
  const navigate = useNavigate();
  return (
    <Grid container>
      <DesktopAppBar showSocialIcons={false} />

      {/* Add your Home page content/components here */}
      <HomeScreenWrapper
        container
        spacing={0}
        topbarEnabled={true}
        height={"auto"}
      >
        {/* Page title */}
        <Grid md={6} lg={6}>
          <Heading>Real-Time Object Counting Made Easy</Heading>
          <Description>
            Whether you're tracking inventory, monitoring traffic, or counting
            people at an event, our app makes object counting a breeze. With
            real-time tracking and high accuracy.
          </Description>
          <Grid sx={{ marginTop: "16px" }}>
            <Button
              sx={{ marginTop: "8px" }}
              variant="contained"
              onClick={() => navigate(PRODUCT_ROUTE)}
            >
              Get Started!
            </Button>
          </Grid>
        </Grid>
        {/* Left Box */}
        <Grid
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/MyvOfDFZvgE"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Grid>
      </HomeScreenWrapper>

      <Grid sx={{ position: "absolute", width: "100%", bottom: 10 }}>
        <Grid
          md={12}
          lg={12}
          sx={{
            height: "1px",
            backgroundColor: "grey",
            margin: "auto",
            width: "90%",
          }}
        ></Grid>
        <DesktopAppBar showSocialIcons={true} />
      </Grid>
    </Grid>
  );
};

export default Home;
