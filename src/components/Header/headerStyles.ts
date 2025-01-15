import { tss } from "tss-react/mui";

const useStyles = tss.create(({ theme }) => ({
  root: {
    width: "100%",
    padding: theme.spacing(1, 0, 1, 0),
    borderBottom: "1px solid #092BDB",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
    color: "#092BDB",
  },
}));

export { useStyles };
