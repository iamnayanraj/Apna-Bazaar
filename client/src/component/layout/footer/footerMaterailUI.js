import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "../footer/footer.css";
import googlePlayStoreButton from "../../../image/googlePlayStore.jpg";
import appStoreButton from "../../../image/appStoreButton.png";
import Avatar from "@mui/material/Avatar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
const Footer = () => {
  return (
    <AppBar sx={{ position: "fixed", top: "auto", bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: { md: "space-between", xs: "center" },
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          {/* Download app on screen medium and above  */}

          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              flexDirection: "column",
            }}
          >
            <Typography
              variant="caption"
              noWrap
              sx={{
                mt: 1,
                mb: 1,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Download App 
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Link href="#" color="inherit">
                <GoogleIcon />
              </Link>
              <Link href="#" color="inherit">
                <AppleIcon />
              </Link>
            </Box>
          </Box>

          {/* copyright on screen medium and above */}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="caption"
              noWrap
              sx={{
                mt: 1,
                mb: 1,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              &copy; 2022 Apna Bazaar
            </Typography>
          </Box>

          {/* Connect with us on screen medium and above*/}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
            }}
          >
            <Typography
              variant="caption"
              noWrap
              sx={{
                mt: 1,
                mb: 1,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Connect with us
            </Typography>
            <Box sx={{ mb: 1, display: "flex", justifyContent: "center" }}>
              <Link href="#" color="inherit">
                <FacebookRoundedIcon sx={{ fontSize: "2rem", mr: 2 }} />
              </Link>
              <Link href="#" color="inherit">
                <SubscriptionsRoundedIcon sx={{ fontSize: "2rem" }} />
              </Link>
            </Box>
          </Box>

          {/* Screen size small and less */}
          {/* Download app */}

          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              flexDirection: "column",
            }}
          >
            <Typography
              variant="caption"
              noWrap
              sx={{
                mt: 1,
                mb: 1,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Download App for Android and IOS mobile phone
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Link href="#" color="inherit">
                <GoogleIcon />
              </Link>
              <Link href="#" color="inherit">
                <AppleIcon />
              </Link>
            </Box>
          </Box>

          {/* connect with us */}

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
            }}
          >
            <Typography
              variant="caption"
              noWrap
              sx={{
                mt: 1,
                mb: 1,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Connect with us
            </Typography>
            <Box sx={{ mb: 1, display: "flex", justifyContent: "center" }}>
              <Link href="#" color="inherit">
                <FacebookRoundedIcon sx={{ fontSize: "2rem", mr: 2 }} />
              </Link>
              <Link href="#" color="inherit">
                <SubscriptionsRoundedIcon sx={{ fontSize: "2rem" }} />
              </Link>
            </Box>
          </Box>

          {/* copyright */}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="caption"
              noWrap
              sx={{
                mt: 1,
                mb: 1,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              &copy; 2022 Apna Bazaar
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
