import moment from 'moment';
import Month from '../Month';
import WeekDay from '../Weekday';
// import CellBackend from './CellBackend';
import Legend from '../Legend';
import { useEffect, useState } from 'react';

function CalendarBackend({ startingDate, daysInMonth, dataValues }) {
  // let startingDate = new Date(startDate);
  // let endingDate = new Date(endDate);
  // // date diff in milliseconds: x1000=secs -> x60=mins -> x60=hours -> x24=day -> +1 to incl start/end date
  // // const daysInMonth = (endingDate - startingDate) / (1000 * 60 * 60 * 24) + 1;
  // // console.log(daysInMonth);
  // const daysInMonth = Math.ceil(
  //   (endingDate - startingDate) / (1000 * 60 * 60 * 24) + 1
  // );

  // Data: array of {daysInMonth} days/cell objects, with a date
  const calendarGrid = Array.from({ length: daysInMonth }, (_, index) => {
    // populate empty array with NUMDAYS elements with a date assigned to each gridcell
    const date = new Date(startingDate);
    date.setDate(startingDate.getDate() + index);
    return date.toISOString().slice(0, 10); //'2024-07-01'
  });

  const handleColor = (count) => {
    // convert activity.count in percentage value according to its range, here hardcoded from 0 to 16
    const rangeMax = 16;
    let value;
    if ((count / rangeMax) * 100 === 0) value = 0;
    if ((count / rangeMax) * 100 > 0 && (count / rangeMax) * 100 <= 25)
      value = 1;
    if ((count / rangeMax) * 100 >= 26 && (count / rangeMax) * 100 <= 50)
      value = 2;
    if ((count / rangeMax) * 100 >= 51 && (count / rangeMax) * 100 <= 75)
      value = 3;
    if ((count / rangeMax) * 100 >= 76 && (count / rangeMax) * 100 <= 100)
      value = 4;

    switch (value) {
      case 0:
        return '#ECEDF0';

      case 1:
        return '#9be9a8';

      case 2:
        return '#40c463';

      case 3:
        return '#30a14e';

      case 4:
        return '#216e39';

      default:
        return '#f77ada';
    }
  };

  return (
    // <div className='timeline'>
    //   <div className='timeline-months'>
    //     {months.map((_, index) => (
    //       <Month key={index} index={index} startDate={startDate} />
    //     ))}
    //   </div>

    //   <div className='timeline-days-cells'>
    //     <div className='weekdays'>
    //       {weekDays.map((_, index) => (
    //         <WeekDay key={index} index={index} />
    //       ))}
    //     </div>

    //     <div className='cells'>
    //       {cells.map((_, index) => {
    //         // assign its date to each corresponding cell, stating from index 0, add 1 day on each iteration
    //         let cellDate = moment(startDate).add(index, 'day').format('LL');
    //         // 'LLL' = June 24, 2024 9:43 PM
    //         // 'LL' = June 24, 2024
    //         // console.log(date); // => start date
    //         // dataPoint/cell/day/obj:
    //         let day = data.find((d) => {
    //           // console.log(d);
    //           return (
    //             moment(cellDate).format('LL') ===
    //             moment(d.cellDate).format('LL')
    //           );
    //         });

    //         return (
    //           <CellBackend key={index} index={index} data={data} day={day} />
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div>
    //     <Legend />
    //   </div>
    // </div>
    <div className='grid-container'>
      <div className='grid '>
        {calendarGrid.map((day, index) => {
          // populate each gridcell with its count value
          const activityCount = dataValues.find(
            (item) => item.date === day
          )?.count;
          // assign color to cell according to its count value
          const color = handleColor(activityCount);

          return (
            <div
              key={index}
              className='cell'
              title={`${activityCount} commits on ${day} `}
              style={{ backgroundColor: `${color}` }}
            ></div>
          );
        })}
      </div>

      {/* <Legend /> */}
    </div>
  );
}
export default CalendarBackend;
