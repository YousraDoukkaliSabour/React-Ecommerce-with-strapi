import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const ScrollToTop = () => {
  return (
    <div>
      <Zoom in={useScrollTrigger({ threshold: 100 })}>
        <Fab
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          variant="extended"
          size="small"
          sx={{ position: "fixed", bottom: 33, right: 33 }}
          color="primary"
          aria-label="add"
        >
          <KeyboardArrowUpIcon fontSize="medium" />
        </Fab>
      </Zoom>
    </div>
  );
};

export default ScrollToTop;
