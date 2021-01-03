import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './components/Header';
import { Grid, ThemeProvider } from '@material-ui/core';
import Footer from './components/Footer';
import TracksComponent from './components/Tracks';
import theme from './theme';

function App() {   
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Header /> 
        <div className="root">
          <TracksComponent/>
        </div>      
        <Footer />
      </Grid>    
    </ThemeProvider>
  );
}

export default withAuthenticator(App);