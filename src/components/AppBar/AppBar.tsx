import { AppBar, Grid, IconButton, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import {useNavigate }from "react-router-dom"
import { MailOutline, AllInclusive } from "@mui/icons-material"

interface Props {}

const Appbar: FunctionComponent<Props> = (props: Props) => {
  const history = useNavigate()
  return (
    <div style={{padding: "20px"}}>
      
    
       <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} lg={4} >
            <Grid container spacing={2} >
              <Grid item>
                <div onClick={()=> history("/")}>
                <IconButton><AllInclusive /></IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Grid container justifyContent={"flex-end"} spacing={4} >
              <Grid item > 
                <div onClick={() => history("/works")}>
                <Typography color={"#0E0E0E"} variant="body1"  >
                  Works
                </Typography>
                </div>
              </Grid>
              <Grid item >
               <div onClick={()=> history("/resume")} >
               <Typography color={"#0E0E0E"} variant="body1">
                  Resume
                </Typography>
               </div>
              </Grid>
              <Grid item>
                <div onClick={()=> history("/personal")} >
                <Typography color={"#0E0E0E"} variant="body1">
                  Personal
                </Typography>
                </div>
              </Grid>
              <Grid item >
                <div onClick={()=> history("/contact")} >
                <Typography color={"#0E0E0E"} variant="body1">
                  Contact
                </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
     
    </div>
  );
};

export default Appbar;
