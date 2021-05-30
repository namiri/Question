import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Question from "./Question";
import End from "./End";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f8f8f8",
    // maxWidth: 1000,
    // flexGrow: 1,
  },
  label: {
    marginTop: 30,
  },
  button: {
    width: 100,
    marginTop: 30,
  },
});
const txtStyles = {
  // height: '100%',
  // width: `${completed}%`,
  // backgroundColor: bgcolor,
  // borderRadius: 'inherit',
  textAlign: "justify",
};

export default function Main() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const [showNext, setshowNext] = React.useState(false);
  const [data, setData] = React.useState([]);
  let ans = [];
  const titles = [
    {
      id: 1,
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با",
      option: ["سه", "یک", "دو", "چهار"],
    },
    {
      id: 2,
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با",
    },
    {
      id: 3,
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با",
      rate: true,
    },
  ];

  const handleAns = (e) => {
    console.log("main", e);
    setData([...data, e]);
  };
  const handleData = (e) => {
    console.log(e.target.value);
    setshowNext((prevActiveStep) => !prevActiveStep);
  };
  const handleNext = () => {
    console.log("ans", data);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      {showNext ? (
        <End></End>
      ) : (
        <Grid item xs={12}>
          <Card className={classes.root} variant="">
            <CardContent>
              {titles
                .filter((title) => title.id === activeStep)
                .map((ii, index) => (
                  <>
                    <Question
                      setData={handleAns}
                      key={index}
                      question={ii}
                    ></Question>
                    {activeStep === 2 ? (
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleBack}
                      >
                        قبل
                      </Button>
                    ) : (
                      ""
                    )}
                    {activeStep === 3 ? (
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleData}
                      >
                        ارسال
                      </Button>
                    ) : (
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        بعدی
                      </Button>
                    )}
                  </>
                ))}
              <div className={classes.label}>
                <label>مرحله {activeStep} از 3</label>
              </div>
            </CardContent>
          </Card>

          <MobileStepper
            variant="progress"
            steps={4}
            position="static"
            activeStep={activeStep}
            className={classes.root}
          />
        </Grid>
      )}
    </div>
  );
}
