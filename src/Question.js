import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    marginTop: 15,
  },
}));
const txtStyles = {
  // width: `${completed}%`,
  // borderRadius: 'inherit',
  textAlign: "justify",
  direction: "rtl",
};

export default function Question(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleData = (e) => {
    // console.log(e);
    props.setData(e.target.value);
  };

  return (
    <>
      {props.question.option ? (
        <div>
          <p>{props.question.title}</p>
          {props.question.option.map((i) => (
            <Button
              className={classes.button}
              key={i}
              variant="contained"
              color="default"
              // onClick={handleData(i)}
            >
              {i}
            </Button>
          ))}
        </div>
      ) : props.question.rate ? (
        <>
          <p>{props.question.title}</p>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
                
              // }}
               onChange={handleData}
            />
          </Box>
        </>
      ) : (
        <div>
          <p>{props.question.title}</p>
          <textarea
            onChange={handleData}
            rows={6}
          ></textarea>
        </div>
      )}
    </>
  );
}
