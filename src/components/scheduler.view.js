import React from 'react';
import Row from './row';

const isHourMorning = (time) => {
  return time < 12;
};

const getClassName = (currentHour, rowHour) => {
  if (currentHour === rowHour) {
    return 'row current-hour';
  }
  if (rowHour < currentHour) {
    return 'row past-hour';
  }
  if (rowHour > currentHour) {
    return 'row future-hour';
  }
};

const SchedulerView = (props) => {
  const {
    todaysDate,
    hours,
    currentText,
    currentHour,
    onClickWrapper,
    onChangeWrapper,
  } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>{todaysDate}</h1>
        </div>
        <div className="col-12">
          {hours.map((hour, i) => {
            const showHour = `${
              isHourMorning(hour.time) ? hour.time : hour.time - 12
            }:00 ${isHourMorning(hour.time) ? 'AM' : 'PM'}`;
            return (
              <Row
                key={i}
                showHour={showHour}
                hour={hour}
                onClickHandler={onClickWrapper(hour)}
                onChangeHandler={onChangeWrapper(hour.time)}
                currentText={currentText}
                className={getClassName(currentHour, hour.time)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SchedulerView;
