import React from 'react';

const isHourMorning = (time) => {
  return time < 12;
};

const SchedulerView = (props) => {
  const { todaysDate, hours, onClickWrapper } = props;
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
              <div key={i}>
                {showHour} - {hour.text}
                <button onClick={onClickWrapper(hour)}>
                  Temporary Save Button
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SchedulerView;
