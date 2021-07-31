import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props: any) => {
  const loginAndRegister = () => {
    return (
      <>
        <Button color="inherit" onClick={() => history.push("/register")}>
          Register
        </Button>
        <Button color="inherit" onClick={() => history.push("/login")}>
          Login
        </Button>
      </>
    );
  };

  const classes = useStyles();
  const history = useHistory();
  console.log("isAuthed: ", props.isAuthed)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            serverHuD
          </Typography>
          {props.isAuthed === false ? loginAndRegister() : "Welcome!"}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
