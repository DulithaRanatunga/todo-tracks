import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './components/Header';
import { Grid } from '@material-ui/core';
import Footer from './components/Footer';
import Tracks from './components/Tracks';


function App() {   


  return (
    <Grid container direction="column">
      <Header /> 
        <Tracks/>
      <Footer />
    </Grid>    
  );
}

export default withAuthenticator(App);