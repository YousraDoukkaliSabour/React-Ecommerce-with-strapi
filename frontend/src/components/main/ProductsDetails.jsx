/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const ProductsDetails = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexDirection:{xs: "column", sm:"row"} }}>
      <Box display={"flex"}>
        <img width={300} src="src/images/jacket.jpg" alt="" />
      </Box>

      <Box sx={{textAlign:{xs:"center", sm:"left"}}}>
        <Typography variant="h5">WOMEN'S FASHION</Typography>

        <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
          $12.99
        </Typography>
        <Typography variant="body1">Lizards are widspread</Typography>
        <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} gap={1} my={2}>
          {["src/images/jacket.jpg", "src/images/OIP.jpeg"].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button sx={{mb:{xs:1,sm:0}, textTransform: "capitalize" }} variant="contained">
          <AddShoppingCartOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductsDetails;
