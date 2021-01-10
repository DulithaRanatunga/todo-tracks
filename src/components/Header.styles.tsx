import { createStyles, makeStyles, Theme } from "@material-ui/core";
import globalStyles from "../styles/global.styles";

export default makeStyles((theme: Theme) =>
  createStyles({ root: {
    ...globalStyles.flexRowCentered
  }}),
);