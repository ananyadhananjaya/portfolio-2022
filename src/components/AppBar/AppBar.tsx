import { AppBar, Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import {useNavigate }from "react-router-dom"

interface Props {}

const Appbar: FunctionComponent<Props> = (props: Props) => {
  const history = useNavigate()
  return (
    <div style={{padding: "20px"}}>
      
    
       <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} lg={4}>
            <Grid container >
              <Grid item>
                <Typography variant="h6" color={"#0E0E0E"}>ananya.dhananjaya1998@gmail.com</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Grid container justifyContent={"flex-end"} spacing={4} >
              <Grid item > 
                <div onClick={() => history("/works")}>
                <Typography color={"#0E0E0E"} variant="h6"  >
                  Works
                </Typography>
                </div>
              </Grid>
              <Grid item >
               <div onClick={()=> history("/resume")} >
               <Typography color={"#0E0E0E"} variant="h6">
                  Resume
                </Typography>
               </div>
              </Grid>
              <Grid item>
                <div onClick={()=> history("/personal")} >
                <Typography color={"#0E0E0E"} variant="h6">
                  Personal
                </Typography>
                </div>
              </Grid>
              <Grid item >
                <div onClick={()=> history("/contact")} >
                <Typography color={"#0E0E0E"} variant="h6">
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
