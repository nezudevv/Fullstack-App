import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from "@material-ui/icons/Delete";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

export default function ButtonSizes({ onClickHandler }) {
  // const classes = useStyles();

  return (
    <div>
      <Button
        className='submit-button'
        variant='contained'
        size='medium'
        color='primary'
        onClick={onClickHandler}
      >
        SUBMIT
      </Button>
    </div>
  );
}
