import { useState } from "react";
import InputStyles from "./InputStyles";
import SubmitButtonStyle from "./SubmitButtonStyle";

function InputsComponent({ getRapper }) {
  const [input, setInput] = useState("");
  // const [secondInput, setSecondInput] = useState("");
  // const [data, setData] = useState([{ id: "1", birthName: "testing" }]);

  function onInputHandler(e) {
    setInput(e.target.value);
  }

  async function onClickHandler() {
    const newItem = {
      id: Date.now().toString(),
      birthName: input,
      // stageName: secondInput,
    };
    if (input === "") {
      alert("Field must not be empty.");
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
    getRapper();
  }

  return (
    <div>
      <div className='input-and-button'>
        <InputStyles input={input} onInputHandler={onInputHandler} />
        <SubmitButtonStyle onClickHandler={onClickHandler} />
      </div>
    </div>
  );
}
export default InputsComponent;
