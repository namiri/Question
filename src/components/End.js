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
  const titles = [
    {
      id: 0,
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    },
  ];

  return (
    <>
      {/* {showNext ? (
        <Main></Main>
      ) : (
      )} */}
      <Card variant="outlined">
        <CardContent>
          <Grid item xs={12}>
            <>
              <p>با تشکر</p>
              <p style={txtStyles}>{titles[0].title}</p>
            </>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

