import moment from 'moment';
import Calendar from './Calendar';
import { useEffect, useState } from 'react';

function Heatmap() {
  const [valuesSum, setValuesSum] = useState(0);

  // Calendar/timeline needs a start date, date range, data for each day, and a color function to color each cell
  const NUMDAYS = 365; // customise

  // 1 year range counting back from today's date
  let startDate = moment().subtract(NUMDAYS, 'days');
  // console.log(startDate);

  let dateRange = [startDate, moment().toDate()];
  // console.log(dateRange);

  // data: an obj for each day, with date and randomly generated value (0-4), each associated with 5 different colors
  let data = Array.from(new Array(NUMDAYS)).map((_, index) => {
    return {
      date: moment(startDate).add(index, 'day'),
      value: Math.floor(Math.random() * 5), // 0-4
    };
  });
  // useEffect(() => {
  //   // use reduce to get valuesSum of all values
  //   setValuesSum(195);
  // }, [valuesSum]);

  return (
    <>
      <h1>My randomly-generated commits</h1>
      <div className='timeline-header'>
        <h2>666 contributions in the last year</h2>
        <p className='cont-setting'>Contribution settings </p>
      </div>
      <Calendar dateRange={dateRange} data={data} />
    </>
  );
}

export default Heatmap;
