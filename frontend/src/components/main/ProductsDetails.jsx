/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useState } from "react";
const ProductsDetails = ({clickProduct}) => {
  const [selectedImg, setselectedImg] = useState(0);
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexDirection:{xs: "column", sm:"row"} }}>
      <Box display={"flex"}>
        <img width={360} src={clickProduct.attributes.productimg.data[selectedImg].attributes.url} alt="" />
      </Box>

      <Box sx={{textAlign:{xs:"center", sm:"left"}}}>
        <Typography variant="h5">{clickProduct.attributes.productTitle}</Typography>

        <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
        ${clickProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1">{clickProduct.attributes.productDescription}</Typography>
        <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} gap={1} my={2}>
          {clickProduct.attributes.productimg.data.map((item,index) => {
            return (
              <img
              onClick={() => {
                setselectedImg(index)
              }}
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                key={item.id}
                src={item.attributes.url}
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
