import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

export default function Header() {
  const useStyles = makeStyles({
    appBar: {
      width: "calc(100% - 175px)",
      minHeight: 64,
    },
  });
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6">Things to Get Done</Typography>
      </Toolbar>
    </AppBar>
  );
}
