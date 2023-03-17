import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DesktopAppBar from "../../components/reuseable/DesktopAppBar/DesktopAppBar.jsx";
import { Heading, HomeScreenWrapper } from "../Home/style.js";
import "./style.js";

// About Page Component
const About = () => {
  // Use effect to set the browser page title
  useEffect(() => {
    // Set the browser page title
    document.title = "VisioVoice - About";
  }, []);

  return (
    <div className="privacy-policy">
      <DesktopAppBar showSocialIcons={false} />

      {/* Add your Home page content/components here */}
      <HomeScreenWrapper
        container
        spacing={0}
        topbarEnabled={true}
        height={"auto"}
      >
        {/* Page title */}
        <Grid md={12} lg={12}>
          <Typography fontSize={"32px"} fontWeight={600}>About</Typography>

        </Grid>
        {/* Left Box */}
        <Grid
          md={12}
          lg={12}
        // sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Typography sx={{ marginTop: "8px" }}>Welcome to VisioVoice, a web application created by <b>Muhammad Asim, Alishan Zindani, Sharjeel Bin Qadeer, and Umair Gillani</b>. Our team is passionate about using technology to improve people's lives, and we believe that VisioVoice is a tool that can do just that.</Typography>

          <Typography sx={{ marginTop: "8px" }}>At VisioVoice, we understand the difficulties that people with visual impairments face every day.That's why we've created an application that uses the latest in artificial intelligence and machine learning to help these individuals better navigate their surroundings. By detecting objects in real-time and reading them out loud, VisioVoice empowers visually impaired individuals to be more independent and self-sufficient.</Typography>

          <Typography sx={{ marginTop: "8px" }}> Our team consists of experienced developers who are dedicated to creating innovative solutions that make a difference in people's lives. We are constantly exploring new technologies and techniques to improve the functionality and usability of our application. We believe in creating an inclusive society where everyone has equal access to information and technology, and we're proud to be doing our part to make that a reality.</Typography>

          <Typography sx={{ marginTop: "8px" }}>Thank you for choosing VisioVoice, and we hope that our application can make a positive impact on your life.</Typography>


        </Grid>
      </HomeScreenWrapper>

      <Grid sx={{ position: "absolute", width: "100%", bottom: 10 }}>
        <Grid
          md={12}
          lg={12}
          sx={{ height: "1px", backgroundColor: "grey", margin: "auto", width: '90%' }}
        ></Grid>
        <DesktopAppBar showSocialIcons={true} />
      </Grid>
    </div >
  );
};

export default About;
