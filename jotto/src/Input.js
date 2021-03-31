import React from "react";
import propTypes from "prop-types";

const Input = ({ secretWord }) => {
    const [currentGuess, setCurrentGuess] = React.useState('')
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
          placeholder="enter guess"
        />
        <button
          type="submit"
          data-test="submit-button"
          className="btn btn-promary mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: propTypes.string.isRequired,
};

export default Input;
