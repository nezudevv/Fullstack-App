import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function DeleteButton({ rapper, id, getRapper }) {
  function deleteRapper() {
    try {
      axios.delete(`http://localhost:8000/api/${id}`);
    } catch (err) {
      console.log("error deleting: ", err);
    }
    getRapper();
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton aria-label='delete' onClick={deleteRapper}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default DeleteButton;
