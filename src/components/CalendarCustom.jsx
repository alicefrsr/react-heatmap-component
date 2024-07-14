import moment from 'moment';
import Month from './Month';
import WeekDay from './Weekday';
import CellCustom from './CellCustom';
import Legend from './Legend';
import { useState } from 'react';

function CalendarCustom({ dateRange, data }) {
  // console.log(data);
  let startDate = dateRange[0];

  let days = Math.abs(dateRange[0].diff(dateRange[1], 'days')); // custom

  // 1 cell for each day
  let cells = Array.from(new Array(days));
  // 1 column for each week
  let weekDays = Array.from(new Array(7)); // 7 days 0 -> 6, fill only indexes 1,3,5 (<Weekdays/>)
  // months calc in relation to 52 weeks/columns
  let months = Array.from(new Array(Math.floor(days / 7)));
  // console.log({ months }); // {months : 52} => 52 'weekly' colunms, each col in topped by M, css to hide the repeats

  return (
    <div className='timeline'>
      <div className='timeline-months'>
        {months.map((_, index) => (
          <Month key={index} index={index} startDate={startDate} />
        ))}
      </div>

      <div className='timeline-days-cells'>
        <div className='weekdays'>
          {weekDays.map((_, index) => (
            <WeekDay key={index} index={index} />
          ))}
        </div>

        <div className='cells'>
          {cells.map((_, index) => {
            // assign its date to each corresponding cell, stating from index 0, add 1 day on each iteration
            let cellDate = moment(startDate).add(index, 'day').format('LL');
            // 'LLL' = June 24, 2024 9:43 PM
            // 'LL' = June 24, 2024
            // console.log(date); // => start date
            // dataPoint/cell/day/obj:
            let day = data.find((d) => {
              // console.log(d);
              return (
                moment(cellDate).format('LL') ===
                moment(d.cellDate).format('LL')
              );
            });

            return (
              <CellCustom key={index} index={index} data={data} day={day} />
            );
          })}
        </div>
      </div>
      <div>
        <Legend />
      </div>
    </div>
  );
}
export default CalendarCustom;
