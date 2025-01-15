import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./headerStyles";
import imagem from "../../assets/logo_site.png";

const Header = () => {
  const styles = useStyles();

  return (
    <Box className={styles.classes.root}>
      <Stack direction={"row"} spacing={1} style={{ height: "fit-content" }}>
        <img src={imagem} alt="" style={{ height: "60px" }} />
        <Box className={styles.classes.title}>
          <Typography variant="h5" fontFamily={("Montserrat, Roboto")} fontWeight={600}>
            Digimon Encyclopedia
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
