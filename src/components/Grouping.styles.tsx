
/** Override MUI styling */
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles, createStyles, makeStyles, Theme } from "@material-ui/core";
import globalStyles from '../styles/global.styles';

export const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
/** End Styling */

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...globalStyles.flexCol
    },
    addGroup: { 
      marginLeft: 'auto',
      marginRight: theme.spacing(2),
    },
    deleteGroup: {
      marginRight: theme.spacing(2),
    },
    accordianRow: {
      ...globalStyles.flexRow,
      alignItems: 'center',
      width: '100%'
    },
    child: {
      width: '100%'
    }
  }),
);