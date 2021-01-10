import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },  
    done: {
      marginLeft: 'auto'
    },
    expanded: {
      borderBottom: '1px solid'
    }
  }),
);