import React, { useState, useEffect } from 'react';
import SchedulerView from './scheduler.view';
import moment from 'moment';
import { saveToLS, getFromLS } from '../utils';

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
  const [currentText, setCurrentText] = useState({});
  const [todaysDate, setTodaysDate] = useState(
    moment(new Date()).format('MM/DD/YY')
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const onChangeWrapper = (time) => (e) => {
    const text = e.target.value;
    setCurrentText((prevState) => ({ ...prevState, [time]: text }));
  };

  const onClickWrapper = (hourObj) => (e) => {
    e.preventDefault();
    const newHour = { ...hourObj };
    const text = currentText[hourObj.time];
    newHour.text = text;
    const index = hours.findIndex((hour) => hour.time === newHour.time);
    console.log(index);
    console.log(hours.slice(0, index).concat(newHour, hours.slice(index + 1)));
    setHours(hours.slice(0, index).concat(newHour, hours.slice(index + 1)));
  };

  useEffect(() => {
    const savedHours = getFromLS(todaysDate);
    if (savedHours && savedHours.length > 0) {
      const savedText = savedHours.reduce((acum, hour) => {
        acum[hour.time] = hour.text;
        return acum;
      }, {});
      console.log(savedHours);
      console.log(savedText);
      setHours(savedHours);
      setCurrentText(savedText);
    } else {
      const newHours = [];
      for (let i = 9; i < 18; i++) {
        newHours.push({
          time: i,
          text: '',
          date: todaysDate,
        });
      }
      setHours(newHours);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveToLS(todaysDate, hours);
    } else {
      setIsLoaded(true);
    }
    console.log(isLoaded);
  }, [hours]);

  return (
    <SchedulerView
      todaysDate={todaysDate}
      hours={hours}
      onClickWrapper={onClickWrapper}
      onChangeWrapper={onChangeWrapper}
      currentText={currentText}
    />
  );
};

export default SchedulerContainer;
