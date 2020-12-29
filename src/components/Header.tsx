import React, { useState, useEffect } from 'react';
import './Header.css';
import { Auth } from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Box, Grid }  from '@material-ui/core';


function Header() {
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
      <Box className="dflex">
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