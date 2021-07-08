import axios from "axios";
import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

function RapperBirthNames({ birthName, id, getRapper }) {
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [change, setChange] = useState("");

  function setClickedTrue() {
    setIsNameClicked(true);
  }
  function setClickedFalse() {
    setIsNameClicked(false);
  }
  function inputChangeHandler(e) {
    setChange(e.target.value);
  }

  async function onClickHandler() {
    try {
      const updatedItem = { birthName: change };
      const info = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      };
      // e.preventDefault();

      await fetch(`http://localhost:8000/api/rappers/${id}`, info);
    } catch (err) {
      console.log(err, "change function");
    }

    getRapper();
    setClickedFalse();
  }

  function deleteButton() {
    try {
      axios.delete(`http://localhost:8000/api/${id}`);
      getRapper();
    } catch (err) {
      console.log("error deleting: ", err);
    }
  }

  console.log("get id", id);
  return (
    <div key={id}>
      {!isNameClicked ? (
        <div>
          <p onClick={setClickedTrue}>{birthName}</p>{" "}
          <DeleteButton
            id={id}
            getRapper={getRapper}
            deleteButton={deleteButton}
          />
        </div>
      ) : (
        <div>
          <input onInput={inputChangeHandler} />{" "}
          <button onClick={onClickHandler}>Submit Change</button>
        </div>
      )}
    </div>
  );
}
export default RapperBirthNames;
