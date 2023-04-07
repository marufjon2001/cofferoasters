import { Box, Typography } from "@mui/material";
import React from "react";
import foter from "../Images/footer/foter.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box>
      <Box mt={7} display={"flex"} justifyContent={"center"}>
        <Box width={"90%"} sx={{ backgroundColor: "#2C343E" }} p={6} mb={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              width={"60%"}
              justifyContent={"space-between"}
            >
              <Box>
                <img src={foter} alt="" />
              </Box>
              <Box display={"flex"} gap={5}>
                <Typography
                  style={{
                    fontFamily: "Barlow",
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "15px",
                    letterSpacing: "0.92px",
                    color: "#83888F",
                  }}
                >
                  HOME
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Barlow",
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "15px",
                    letterSpacing: "0.92px",
                    color: "#83888F",
                  }}
                >
                  ABOUT US
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Barlow",
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "15px",
                    letterSpacing: "0.92px",
                    color: "#83888F",
                  }}
                >
                  Create your plan
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} gap={5}>
              <FacebookIcon style={{ color: "#FEFCF7" }} />
              <TwitterIcon style={{ color: "#FEFCF7" }} />
              <InstagramIcon style={{ color: "#FEFCF7" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
