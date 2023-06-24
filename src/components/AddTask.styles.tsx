import { createStyles, makeStyles, Theme } from "@material-ui/core";
import globalStyles from "../styles/global.styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...globalStyles.flexRow,
      alignItems: "flex-end"
    },
    form: {
      marginLeft: theme.spacing(1)
    }
  }),
);