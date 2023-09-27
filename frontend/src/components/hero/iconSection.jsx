import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const IconSection = () => {
  const theme=useTheme()
  return (
    <Container sx={{mt:3, bgcolor:theme.palette.mode === "dark" ? "#000" : "#fff"}}>
      <Stack
        divider={ useMediaQuery('(min-width:600px)')? <Divider orientation="vertical" flexItem /> : null}
        direction={"row"}
        alignItems={"center"}
        sx={{ flexWrap: "wrap" }}
      >
        <MyBox
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subtitle={"start from $10"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon />}
          title={"Money Guarantee"}
          subtitle={"7 Days Back"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon />}
          title={"365 Days"}
          subtitle={"For free return"}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon />}
          title={"Payment"}
          subtitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

// eslint-disable-next-line no-unused-vars, react/prop-types
const MyBox = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        py: 1.6,
        justifyContent:useMediaQuery('(min-width:600px)')? "center" : "left" ,

      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          // @ts-ignore
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
