import moment from 'moment';
import CalendarCustom from './CalendarCustom';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';

function HeatmapCustom() {
  // Calendar/timeline needs a *number of days* (customisable), a *start date* derived from NUMDAYS, a *date range* derived from the the start date, and *data* for each day {date: x, value: x}

  const NUMDAYS = 365; // customise

  // range counting back from today's date
  let startDate = moment().subtract(NUMDAYS, 'days');
  // console.log(`startDate ${startDate}`);

  let dateRange = [startDate, moment().toDate()];
  // console.log(`dateRange ${dateRange}`);

  // Data: array of {NUMDAYS} days/cell objects, with a date and a default color of light-grey
  const data = Array.from(new Array(NUMDAYS)).map((_, index) => {
    return {
      cellDate: moment(startDate).add(index, 'day'),
      cellColor: '#EBEDF0', // default color
    };
  });

  // console.log(`data ${data}`);

  return (
    <>
      <h1>
        Customisable gridboard over the last{' '}
        <span className='highlight'>{NUMDAYS}</span> days
      </h1>
      <p>
        Write or draw anything you like. Just click on the cell repeatedly to
        switch between shades of green. There's a touch of orange in there if
        you dare.
      </p>
      <p>
        Beware! You cannot save your work of art at the moment, each refresh
        will wipe the board! On a Mac, Cmd+Shift+4 will allow you to grab a
        screenshot.png.
      </p>
      <div className='timeline-header'>
        <h2>
          <span>666</span> contributions in the last year
        </h2>
        <p className='settings'>Contribution settings </p>
      </div>
      <CalendarCustom dateRange={dateRange} data={data} />
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
export default HeatmapCustom;
