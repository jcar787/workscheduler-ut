import React from 'react';

const Row = (props) => {
  const {
    showHour,
    hour,
    onClickHandler,
    onChangeHandler,
    currentText,
  } = props;
  return (
    <div>
      <label>{showHour}</label>
      <textarea value={currentText[hour.time]} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>Temporary Save Button</button>
    </div>
  );
};

export default Row;
