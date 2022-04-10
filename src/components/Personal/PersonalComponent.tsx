import { Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface Props {}

const PersonalComponent: FunctionComponent<Props> = (props: Props) =>{
    return(
        <div>
             <Grid container direction={"column"}  alignContent={"center"} spacing={2} >
      <Grid item>
        <Typography variant="h3" fontWeight={"bold"}>
          AX
        </Typography>
      </Grid>
      <Grid item>
        <Typography >
          I do not know, why I go by the name AX. 
        </Typography>
      </Grid>
      <Grid item> 
        <Typography>
            I have many Interests. I like taking long morning walks, riding bicycle, painting ( love, love, love Van Gogh ), reading up on Quantum Mechanics, 
            reading in general. Funny thing, I like reading docs. I would go to the respective docs to find answer than to Stackoverflow.
            Wierd I know.
        </Typography></Grid>
      <Grid item>
        <Typography>Long walks are my recent discovery. I prefer early morning for a walk. I feel refreshed and it boosts my energy thoughtout the day.
          I like to take new roads, walk through new houses and say hi to new dogs. That's been my routine for more than a month now.
          Not gonna lie.. I like closing of the rings on my watch ^^ haha.
        </Typography>
        </Grid>
      <Grid item>
        
        </Grid>
    </Grid>
        </div>
    )
}

export default PersonalComponent;