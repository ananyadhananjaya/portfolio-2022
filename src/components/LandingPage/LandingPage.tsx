import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FunctionComponent } from "react";

interface Props {}

const useStyles = makeStyles({
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

function createData(
  tech: string,
  level: string,
  liking: string,
  comments: string
) {
  return { tech, level, liking, comments };
}

const rows = [
  createData(
    "Typescript",
    "Intermediate",
    "Absolute love",
    "Would prefer it over JS, a 100 percent"
  ),
  createData(
    "React",
    "Good",
    "Likey",
    "Exploring Next with Vercel. That seems fun. But react is going to be there."
  ),
  createData(
    "Microfrontend",
    "Good",
    "Okay",
    "Too bored to start all the servers every single time. Single SPA is mind boggling though."
  ),
  createData(
    "AG-Grid",
    "Excellent with doc by side",
    "Purely client requirement, no comments",
    "No comments"
  ),
  createData("AWS", "Not bad", "Very much", "Poor UI. Would want to learn AWS"),
  createData(
    "Version Control - Github",
    "Good",
    "Very much",
    "Love the tech behind github. Here we use Tortoise Git for Github."
  ),
];

const LandingPage: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={1}
      >
        <Grid item>
          <Typography variant="h4" fontWeight="bold">
            Ananya Dhananjaya
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Hey, I am Ananya dhananajaya, a wannabe fanatical open sourceror.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            I'm a web dev and it's been more than a year, almost two. You can find my
            personal works in "Works". These show my growth in the web space.{" "}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            I'm currently working on a web project in Infosys. I am into
            frontend development. You can find my current tech below. I am
            slightly moving into backend development as well.{" "}
          </Typography>
        </Grid>
        </Grid>
        <Grid container item xs={12} >
          <TableContainer>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tech</TableCell>
                  <TableCell align="right">proficiency</TableCell>
                  <TableCell align="right">How much I like</TableCell>
                  <TableCell align="right">Comments</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.tech}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.tech}
                    </TableCell>
                    <TableCell align="right">{row.level}</TableCell>
                    <TableCell align="right">{row.liking}</TableCell>
                    <TableCell align="right">{row.comments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        
      </Grid>
    </>
  );
};

export default LandingPage;
