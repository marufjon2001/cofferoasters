import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import home from "../Images/homea/home.jpg";
import our from "../Images/homea/our.png";
import img from "../Images/homea/img.png";
import img1 from "../Images/homea/img1.png";
import img2 from "../Images/homea/img2.png";
import img3 from "../Images/homea/img3.png";
import cofe from "../Images/homea/cofe.png";
import sovga from "../Images/homea/sovga.png";
import track from "../Images/homea/track.png";

const Home = () => {
  const [text, settext] = useState([
    {
      img: img,
      sarlavha: "Gran Espresso",
      text1: "Light and flavorful blend with cocoa ",
      text2: "and black pepper for an intense",
      text3: " experience.",
    },
    {
      img: img1,
      sarlavha: "Planalto",
      text1: "Brazilian dark roast with rich ",
      text2: "and velvety body, and hints of",
      text3: " nuts.",
    },
    {
      img: img2,
      sarlavha: "Piccollo",
      text1: "Mild and smooth blend",
      text2: "featuring notes of toasted",
      text3: "cherry.",
    },
    {
      img: img3,
      sarlavha: "Danche",
      text1: "Ethiopian hand-harvested blend",
      text2: "densely packed with vibrant fruit",
      text3: "  notes.",
    },
  ]);
  const [black, setblack] = useState([
    {
      img: cofe,
      text: "Best quality",
      text1: "Discover an endless variety of the",
      text2: " world’s best artisan coffee from each",
      text3: "of our roasters.",
    },
    {
      img: sovga,
      text: "Exclusive benefits",
      text1: "Discover an endless variety of the",
      text2: " world’s best artisan coffee from each",
      text3: "of our roasters.",
    },
    {
      img: track,
      text: "Free shipping",
      text1: "Discover an endless variety of the",
      text2: " world’s best artisan coffee from each",
      text3: "of our roasters.",
    },
  ]);

  return (
    <Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box width={"90%"} height={"80%"} position={"relative"} mt={5}>
          <Box position={"absolute"} ml={8} mt={16}>
            <Typography
              style={{
                fontFamily: "Fraunces",
                fontWeight: "900",
                fontSize: "72px",
                lineHeight: "72px",
                color: "#FEFCF7",
              }}
            >
              {" "}
              <br />{" "}
            </Typography>
            <br />
            <Typography
              style={{
                fontFamily: "Barlow",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#FEFCF7",
              }}
            >
              Start your mornings with the world’s best coffees. Try our <br />{" "}
              expertly curated artisan coffees from our best roasters <br />{" "}
              delivered directly to your door, at your schedule.
            </Typography>
            <br />
            <br />
            <Button
              style={{
                fontFamily: "Fraunces",
                fontWeight: "900",
                fontSize: "18px",
                lineHeight: "25px",
                backgroundColor: "#0E8784",
                borderRadius: "10px",
                height: "50px",
                color: "white",
              }}
            >
              Create your plan
            </Button>
          </Box>
          <img src={home} alt="" />
        </Box>
      </Box>

      <Box>
        <Box display={"flex"} justifyContent={"center"} mt={10}>
          <Box width={"85%"}>
            <img src={our} alt="" />
            <Box display={"flex"} mt={-5}>
              {text.map((item, index) => (
                <Box
                  width={"30%"}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <img src={item.img} alt="" />
                  <Typography
                    style={{
                      fontFamily: "Fraunces",
                      fontWeight: "900",
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#333D4B",
                    }}
                  >
                    {item.sarlavha}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Barlow",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#333D4B",
                    }}
                  >
                    {item.text1}{" "}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Barlow",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#333D4B",
                    }}
                  >
                    {item.text2}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Barlow",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#333D4B",
                    }}
                  >
                    {item.text3}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"} mt={15}>
        <Box
          width={"90%"}
          border={1}
          sx={{ backgroundColor: "#2C343E", borderRadius: "10px" }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            padding={20}
          >
            <Typography
              style={{
                fontFamily: "Fraunces",
                fontWeight: "900",
                fontSize: "40px",
                lineHeight: "48px",
                color: "#FEFCF7",
              }}
            >
              Why choose us?
            </Typography>
            <br />
            <Typography
              style={{
                fontFamily: "Barlow",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#FEFCF7",
              }}
            >
              A large part of our role is choosing which particular coffees will
              be featured <br /> in our range. This means working closely with
              the best coffee growers to give{" "}
            </Typography>
            <Typography
              style={{
                fontFamily: "Barlow",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#FEFCF7",
              }}
            >
              you a more impactful experience on every level.
            </Typography>
          </Box>
          <br />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box display={"flex"} mt={-10} gap={2}>
          {black.map((item, index) => (
            <Box
              p={5}
              width={"33%"}
              sx={{
                borderRadius: "10px",
                backgroundColor: "#0E8784",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={item.img} alt="" />
              <br />
              <Typography
                style={{
                  fontFamily: "Fraunces",
                  fontWeight: "900",
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FEFCF7",
                }}
              >
                {item.text}
              </Typography>
              <br />
              <Typography
                style={{
                  fontFamily: "Barlow",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#FEFCF7",
                }}
              >
                {item.text1}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Barlow",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#FEFCF7",
                }}
              >
                {item.text2}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Barlow",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#FEFCF7",
                }}
              >
                {item.text3}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box mt={15}>
        vckljvkddkljvxkjl
      </Box>
    </Box>
  );
};

export default Home;
