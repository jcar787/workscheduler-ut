import React from 'react';
import Row from './row';

const isHourMorning = (time) => {
  return time < 12;
};

const SchedulerView = (props) => {
  const {
    todaysDate,
    hours,
    currentText,
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SchedulerView;
