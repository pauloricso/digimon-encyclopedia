import Box from "@mui/material/Box";
import { useStyles } from "./App.ts";
const App = () => {
  const styles = useStyles();

  return (
    <Box className={styles.classes.root}></Box>
  );
};

export default App;
