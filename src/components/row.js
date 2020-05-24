import React from 'react';

const Row = (props) => {
  const {
    showHour,
    hour,
    onClickHandler,
    onChangeHandler,
    currentText,
    className,
  } = props;
  return (
    <div className={className}>
      <label>{showHour}</label>
      <textarea
        value={currentText[hour.time]}
        onChange={onChangeHandler}
        className="text-center"
      />
      <img onClick={onClickHandler} src="./icons8-save-64.png" />
    </div>
  );
};

export default Row;
