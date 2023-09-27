import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import IconSection from "./iconSection";

const myslider =[
  {text:"MEN",link:"./images/banner-15.jpg"},
  {text:"WOMEN",link:"./images/banner-25.jpg"}

]
const Hero = () => {
  const theme = useTheme();
  return (
    <Container >
    <Box sx={{pt:2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
    <Swiper
              loop={true}

        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
{myslider.map((item) => {
  return(
<SwiperSlide key={item.link} className="parent-slider">
          <img src={item.link} alt="" />
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                position: "absolute",
                left: "10%",
                textAlign: "left",
              },
              [theme.breakpoints.down("sm")]: {
                pt: 4,
                pb: 6,
              },
            }}
            //  sx={{ position: "absolute", left: "10%", textAlign: "left" }}
          >
            <Typography
              sx={{
                color: "#222",
              }}
              variant="h6"
            >
              LIFESTYLE COLLECTION
            </Typography>

            <Typography
              sx={{
                color: "#222",
                fontWeight: 400,
                my: 1,
              }}
              variant="h4"
            >
              {item.text}
            </Typography>

            <Stack
              sx={{
                justifyContent: {xs:"center",sm:"left"},
              }}
              direction={"row"}
              alignItems={"center"}
            >
              <Typography color={"#333"} mr={1} variant="h5">
                SALE UP TO
              </Typography>
              <Typography color={"#D23F57"} variant="h4">
                30% OFF
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: "#000",
                fontWeight: 300,
                my: 1,
              }}
              variant="body1"
            >
              Get Free Shipping on orders over $99.00
            </Typography>

            <Button
              sx={{
                px: 5,
                py: 1,
                mt: 2,
                backgroundColor: "#222",
                boxShadow: "0px 4px 16px rga(43, 52, 69, 0.1)",
                color: "#fff",
                borderRadius: "1px",
                "&:hover": {
                  bgcolor: "#151515",
                  boxShadow: "0px 4px 16px rga(43, 52, 69, 0.1)",
                },
              }}
              variant="contained"
            >
              SHOP NOW
            </Button>
          </Box>
        </SwiperSlide>
  )
})}
        
      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
        {/* dans les ecran extra small il n'affiche pas, et dans les ecrans meduim de 600px et plus il s'affiche */}
        <Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="./images/banner-17.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVALS
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  fontSize: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItem: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="./images/banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                GAMING 4K
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItem: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>


      <IconSection />

    </Container>
  );
};

export default Hero;
