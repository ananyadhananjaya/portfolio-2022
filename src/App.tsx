import { Grid, Typography,  } from '@mui/material';
import React from 'react';
import {makeStyles} from "@mui/styles"
import Appbar from './components/AppBar';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/system';
import {
  BrowserRouter as Router,
Routes,
  Route,
  Link
} from "react-router-dom";
import WorksComponent from './components/Works/WorksComponent';
import ResumeComponent from './components/Resume/ResumeComponent';
import ContactComponent from './components/Contact/ContactComponent';
import PersonalComponent from './components/Personal/PersonalComponent';

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
      
      <Router>
      <Appbar />
        <Routes>
          <Route path="/" element={null}  />
          <Route path="/works" element={<WorksComponent />} />
          <Route path="/resume" element={<ResumeComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/personal" element={<PersonalComponent />} />
        </Routes>
      </Router>
      
</>
      

    
  );
}

export default App;
