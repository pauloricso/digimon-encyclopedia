import { tss } from "tss-react/mui";
import imagem from "./assets/bg_base.png";

const useStyles = tss.create(() => ({
  root: {
    backgroundImage: `url(${imagem})`,
    height:'100vh'
  },
}));

export { useStyles };
