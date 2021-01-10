import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Box, Grid }  from '@material-ui/core';
import useStyles from './Header.styles';

function Header() {
  const classes = useStyles();
  const [user, setUser] = useState<any>(undefined);

  async function getUser() {
    Auth.currentUserInfo().then(user => {
      setUser(user);
    });
  }

  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Box m={2} component="h1">Task Tracks</Box>
      <Box className={classes.root}>
        {user && 
          <Box component="span" marginRight={2}>
            Currently logged in as: {user.attributes.email}
          </Box>
        }
        <AmplifySignOut />
      </Box>
    </Grid>      
  );
}

export default Header;