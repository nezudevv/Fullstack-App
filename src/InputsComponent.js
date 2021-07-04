import { useState } from "react";

function InputsComponent() {
  const [input, setInput] = useState("");
  // const [secondInput, setSecondInput] = useState("");
  // const [data, setData] = useState([{ id: "1", birthName: "testing" }]);

  function onInputHandler(e) {
    setInput(e.target.value);
  }
  // function secondInputHandler(e) {
  //   setSecondInput(e.target.value);
  // }

  async function onClickHandler() {
    const newItem = {
      id: Date.now().toString(),
      birthName: input,
      // stageName: secondInput,
    };
    if (input === "") {
      alert("Fields must not be empty.");
    } else {
      console.log(newItem);
      const info = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      };
      await fetch("http://localhost:8000/api", info);
    }
  }

  return (
    <div>
      <input
        placeholder={"Birth Name"}
        value={input}
        onInput={onInputHandler}
      />

      {/* <input
        placeholder={"Stage Name"}
        value={secondInput}
        onInput={secondInputHandler}
      ></input> */}

      <button onClick={onClickHandler}>Submit</button>
    </div>
  );
}
export default InputsComponent;
