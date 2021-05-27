import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Main from "./Main";

const useStyles = makeStyles({
  button: {
    width: 340,
  },
  root: {
    backgroundColor: "#f8f8f8",
    // maxWidth: 1000,
    // flexGrow: 1,
  },
});
const txtStyles = {
  // height: '100%',
  // width: `${completed}%`,
  // backgroundColor: bgcolor,
  // borderRadius: 'inherit',
  textAlign: "justify",
  direction: "rtl",
};

export default function Start() {
  const classes = useStyles();
  const [showNext, setshowNext] = React.useState(false);
  const titles = [
    {
      id: 0,
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
  ];

  const handleNext = () => {
    setshowNext((prevActiveStep) => !prevActiveStep);
  };

  return (
    <>
      {showNext ? (
        <Main></Main>
      ) : (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Grid item xs={12}>
              <>
                <p>خوش آمدید</p>
                <p style={txtStyles}>{titles[0].title}</p>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  شروع
                </Button>
              </>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
}
