import { createStyles, makeStyles, Theme } from "@material-ui/core";
import globalStyles from "../styles/global.styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...globalStyles.flexCol 
    },
    add: {
      maxHeight: theme.spacing(6),
      ...globalStyles.flexRow
    },
    main: {
      ...globalStyles.flexRow
    },
    groups: {
      flexGrow: 1
    },    
    eventHeader: {
      padding: theme.spacing(1),
      borderBottom: '1px solid ' + theme.palette.grey[300],
      ...globalStyles.flexRowCentered
    },
    eventContent: {
      padding: theme.spacing(1),
      "& > div": {
        marginTop: theme.spacing(1)
      }      
    }
  }),
);