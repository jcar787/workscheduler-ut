import React, { useState, useEffect } from 'react';
import SchedulerView from './scheduler.view';
import moment from 'moment';

// Hour array 9AM - 5PM
// Hour object
// TODO: After creating the state for hours check if there's a date in localstorage
/**
 * {
 *  time: 9,
 *  text: string,
 *  date: '05/24/09'
 * }
 */

const SchedulerContainer = (props) => {
  const [hours, setHours] = useState([]); // state for hours each hour is going to have a date, time, saveText
  const [todaysDate, setTodaysDate] = useState(
    moment(new Date()).format('MM/DD/YY')
  );

  const onClickWrapper = (hourObj) => (e) => {
    e.preventDefault();
    console.log(hourObj);
  };

  useEffect(() => {
    const newHours = [];
    for (let i = 9; i < 18; i++) {
      newHours.push({
        time: i,
        text: '',
        date: todaysDate,
      });
    }
    setHours(newHours);
  }, []);
  return (
    <SchedulerView
      todaysDate={todaysDate}
      hours={hours}
      onClickWrapper={onClickWrapper}
    />
  );
};

export default SchedulerContainer;
