import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import {
  DesktopBarContainer,
  DesktopBarMenu,
  DesktopBarLink,
  DesktopTopBarLogo,
} from "./styled";
// import AppBarLogo from "../TopAppBar/app-bar-logo.svg"
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import { ABOUT_ROUTE, HOME_ROUTE, PRIVACY_AND_POLICY_ROUTE, PRODUCT_ROUTE } from "../../../constants/generalConstants";

import Logo from "./logo.png"

/**
 * DeskTop App Bar presentational component
 * @returns
 */
const DesktopAppBar = ({
  handleLogoClick,
  handleDesktopItemClick,
  currentPage,
  handleMenuClick,
  handleNotificationClick,
  showSocialIcons,
}) => {
  const navigate = useNavigate();

  return (
    <DesktopBarContainer position="sticky">
      <Toolbar disableGutters>
        {/* app logo */}
        <DesktopTopBarLogo
          src={Logo}
          onClick={handleLogoClick}
        />
        {/* Desktop menu items container */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <DesktopBarMenu>
            <DesktopBarLink
              onClick={() => {
                navigate(HOME_ROUTE)
              }}

            >
              Home
            </DesktopBarLink>
            <DesktopBarLink
              onClick={() => {
               navigate(PRODUCT_ROUTE)
              }}
            >
              Product
            </DesktopBarLink>
            <DesktopBarLink
              onClick={() => {
                navigate(ABOUT_ROUTE)
              }}
            >
              About
            </DesktopBarLink>
            <DesktopBarLink
              onClick={() => {
                navigate(PRIVACY_AND_POLICY_ROUTE)
              }}
            >
              Privacy Policy
            </DesktopBarLink>

          </DesktopBarMenu>
        </Box>

        {showSocialIcons && (
          <Grid
            sx={{
              color: "black",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
            md={1}
          >
            <LinkedInIcon></LinkedInIcon>
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
          </Grid>
        )}
      </Toolbar>
    </DesktopBarContainer>
  );
};
export default DesktopAppBar;
