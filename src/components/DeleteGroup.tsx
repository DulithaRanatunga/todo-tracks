import React, { useState } from 'react';
import { Grouping } from '../graphql/APITypes';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import ApiService from '../services/ApiService';
import useStyles from './AddGroup.styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';


interface Props { 
    group: Grouping;
    onDelete: (group: Grouping) => void;
}

export default function DeleteGroupComponent(props: Props) {  
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    deleteGroup();
  };
  
  const deleteGroup = function() {    
    if (!loading) {
      setLoading(true);    
      ApiService.deleteGrouping(props.group).then(() => {
        setLoading(false);
        props.onDelete(props.group);
      });
    }
  }

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
        <MenuItem onClick={handleClose}>
            Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
