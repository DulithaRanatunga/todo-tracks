import React from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import useStyles from './AddGroup.styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';


interface Props { 
    label?: string;
    onDelete: () => void;
}

/**
 * Widget for deleting anything.
 * @param props 
 */
export default function DeleteComponent(props: Props) {  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);    
  };

  const handleDelete = () => {
    props.onDelete();
    handleClose();
  };  

  return (
    <div className={classes.root}>
      <IconButton aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>
            Delete {props.label}
        </MenuItem>
      </Menu>
    </div>
  );
}
