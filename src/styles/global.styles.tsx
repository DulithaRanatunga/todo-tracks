import { StyleRules } from '@material-ui/styles/withStyles';
/** Don't know how react or material structure is supposed to do this. But I want some global re-usable styles */

const globalStyles: StyleRules = {
    flexRow: {
        display: 'flex',
        flexFlow: 'row nowrap',
    },
    flexCol: {
        display: 'flex',
        flexFlow: 'row nowrap'
    },
    flexRowCentered: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center'
    }
}

export default globalStyles;