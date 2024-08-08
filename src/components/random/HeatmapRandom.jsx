import moment from 'moment';
import CalendarRandom from './CalendarRandom';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';

function HeatmapRandom() {
  // Calendar/timeline needs a *number of days* (customisable), a *start date* derived from NUMDAYS, a *date range* derived from the the start date, and *data* for each day {date: x, value: x}

  const NUMDAYS = 365; // customise

  // range counting back from today's date
  let startDate = moment().subtract(NUMDAYS, 'days');
  // console.log(startDate);

  let dateRange = [startDate, moment().toDate()];

  // Data: array of {NUMDAYS} days objects, with a date and a randomly generated value (0-4), each associated with 5 different colors to render each day conditionally
  const data = Array.from(new Array(NUMDAYS)).map((_, index) => {
    return {
      date: moment(startDate).add(index, 'day'),
      value: Math.floor(Math.random() * 5), // 0-4
    };
  });

  // console.log(`data ${data}`);
  // console.log(dateRange);

  // CAN'T FIGURE THIS ONE OUT... without getting a huge number of re-renders
  // const [totalContributions, setTotalContributions] = useState(0);
  // add up all the values to get totalContributions (assuming value 1 = 1 commit, value 2 = 2 commits etc, for now)
  // useEffect(() => {
  //   const valuesArr = data.map((day) => day.value);
  //   const totalContributions = valuesArr.reduce((a, b) => a + b, 0);
  //   console.log(`valuesArr ${valuesArr}`);

  //   // with reduce method:
  //   // const totalContributions = data.reduce((total, day) => {
  //   //   return total + day.value;
  //   // }, 0);

  //   setTotalContributions(totalContributions);
  // }, [data]);

  return (
    <>
      <h1>
        Randomly-generated commits over the last{' '}
        <span className='highlight'>{NUMDAYS}</span> days
      </h1>
      <p>This version generates random commits on each refresh.</p>

      <div className='timeline-header'>
        <h2>
          <span>6666</span> contributions in the last year
        </h2>
        <p className='settings'>Contribution settings </p>
      </div>

      <CalendarRandom dateRange={dateRange} data={data} />
      {/* <p>
        <span>Breakdown of daily contributions (from 0 to 4): </span>
        {valuesArr.map((v, i) => (
          <span key={i} className='value'>
            {v}
          </span>
        ))}
      </p> */}
    </>
  );
}
export default HeatmapRandom;
