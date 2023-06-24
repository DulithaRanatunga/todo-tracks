import { createStyles, makeStyles, Theme } from "@material-ui/core";
import globalStyles from "../styles/global.styles";
export default makeStyles((theme: Theme) =>

createStyles({
  root: {
    ...globalStyles.flexColumn,
  },  
  row: {
    ...globalStyles.flexRow,
    alignItems: 'flex-end',
  },
  expanded: {
    borderBottom: '1px solid ' + theme.palette.grey[300],
  },
  form: {
    marginLeft: theme.spacing(1)
  }
}),
); 