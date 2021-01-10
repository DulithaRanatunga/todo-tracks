import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './components/Header';
import { Grid, ThemeProvider } from '@material-ui/core';
import TracksComponent from './components/Tracks';
import theme from './theme';

function App() {   
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Header /> 
        <TracksComponent/>
      </Grid>    
    </ThemeProvider>
  );
}

export default withAuthenticator(App);