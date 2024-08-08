import moment from 'moment';
import CalendarBackend from './CalendarBackend';
import { useEffect, useState } from 'react';
import { activity } from '../../data/data';

function HeatmapBackend() {
  // Calendar needs
  // *data* for each day {date: x, value: x}
  // a *number of days* (customisable)
  // a *start date* derived from NUMDAYS OR from data
  // an *end date* derived  OR from data
  // X a *date range* derived from the the start/end date

  // state to store backend data
  const [activityData, setActivityData] = useState(activity);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const totalCount = activityData.reduce((acc, activity) => {
      return acc + activity.count;
    }, 0);
    setTotalCount(totalCount);
  }, [activityData]);

  // not working:
  // to fetch from dummy backend with handles function in api folder
  // useEffect(() => {
  //   // fetch('/api/activity')
  //   //   .then((res) => res.json())
  //   //   .then((data) => console.log(data.activity));
  //   async function getData() {
  //     try {
  //       const response = await fetch('/api/data');
  //       if (!response.ok) {
  //         // If the response is not OK, log an error and throw an error to be caught below
  //         console.error('Failed to fetch activity data:', response.statusText);
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setActivityData(data.userActivity);
  //     } catch (error) {
  //       console.error('Error fetching activity data:', error);
  //     }
  //   }

  //   getData();
  // }, []);

  let startDate = activityData[0].date; //'2024-07-01';
  let endDate = activityData[activityData.length - 1].date; //  '2024-12-12'
  let startingDate = new Date(startDate);
  let endingDate = new Date(endDate);

  // date diff in milliseconds: x1000=secs -> x60=mins -> x60=hours -> x24=day -> +1 to incl start/end date
  const daysInMonth = Math.ceil(
    (endingDate - startingDate) / (1000 * 60 * 60 * 24) + 1
  );
  // console.log(daysInMonth); // 165

  return (
    <section>
      <h1>Heatmap calendar using backend data</h1>
      <p>
        from{' '}
        <span className='highlight'>
          {startingDate.toISOString().slice(0, 10)}{' '}
        </span>
        to{' '}
        <span className='highlight'>
          {endingDate.toISOString().slice(0, 10)}
        </span>
      </p>
      <p>
        This version has dummy backend data in the shape of an activity object
        with date and count properties. Start and end dates are determined by
        existing data. The 5 colors are assigned by a value from 0-4, themselves
        assigned by the count value converted into a percentage value (0: 0%, 1:
        1-25%, 2: 26-50%, 3: 51-75%, 4: 76-100%).
      </p>
      <p>
        The pink color is when the data is undefined (a missing date in the
        array).
      </p>
      To do/fix:
      <ul>
        <li>The grid UI is off unless the dates array starts on a sunday...</li>
        <li>
          Next I need to make a form that allows the user to add/remove counts,
          and store this value.
        </li>
      </ul>
      <div className='timeline-header'>
        <h2>
          <span className='highlight'>{totalCount}</span> contributions in the
          last <span className='highlight'>{daysInMonth}</span> days
        </h2>
      </div>
      <div className='calendar-container'>
        <div className='days-container'>
          <span className='days'>
            <span className='day'>Mon</span>
            <span className='day'>Wed</span>
            <span className='day'>Fri</span>
          </span>
        </div>
        <CalendarBackend
          startingDate={startingDate}
          daysInMonth={daysInMonth}
          dataValues={activityData}
        />
      </div>
    </section>
  );
}
export default HeatmapBackend;
