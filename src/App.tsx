import { Grid, Typography,  } from '@mui/material';
import React from 'react';
import {makeStyles} from "@mui/styles"
import Appbar from './components/AppBar';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/system';

const useStyles = makeStyles({
  background:{
    height: "100vh",
    width: "100vw",
    backgroundColor: "#FAFBFD",
  }
})

const App = () => {
  const classes = useStyles();
  const theme = createTheme({
    typography:{
      fontFamily:[
        'Open Sans', 'sans-serif'
      ].join(',')
    }
  })
  return (
  
      <>
      <Appbar />
      <Typography variant="h2" color={"#0E0E0E"} >Hello worrld</Typography>
</>
      

    
  );
}

export default App;
