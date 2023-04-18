import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [showError, setShowError] = useState(false);

  console.log("rendering...");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
   
        setShowError(true);
      
    }
     setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.length == 0) {
      setShowError(true);
      return;
    }
    if (enteredValue.length > 0) {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${showError ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <div>
        <Button
          showError={showError}
          type="submit"
          onClick={() => {
            console.log("start");
          }}
        >
          Add Goal
        </Button>
      </div>
    </form>
  );
};

export default CourseInput;
