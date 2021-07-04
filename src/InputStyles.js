import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  input: {
    // color: "white",
  },
  defaultValue: {},
}));

export default function LayoutTextFields({ onInputHandler, input }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          style={{}}
          label='Enter Name'
          id='outlined-margin-normal'
          defaultValue='Enter Name'
          className={classes.textField}
          helperText='Field Cannot Be Empty'
          margin='normal'
          variant='outlined'
          onInput={onInputHandler}
          value={input}
          InputProps={{
            className: classes.input,
          }}
        />
      </div>
    </div>
  );
}
