import moment from 'moment';
import Month from './Month';
import WeekDay from './Weekday';
import Cell from './Cell';

function Calendar({ dateRange, data, colorFunc }) {
  // if we didn't want to hard code 365:
  // start of the range / dateRange[0] => a year ago
  // end of the range / dateRange[1] => now
  // ==> .diff in terms of "days" unit = 365
  let days = Math.abs(dateRange[0].diff(dateRange[1], 'days')); // 365

  // 1 cell for each day
  let cells = Array.from(new Array(days)); // 365 cells
  // 1 column for each week
  let weekDays = Array.from(new Array(7)); // 7 days 0 -> 6, fill only indexes 1,3,5 (<Weekdays/>)
  // months calc in relation to 52 weeks/columns
  let months = Array.from(new Array(Math.floor(days / 7)));
  // console.log({ months }); // {months : 52} => 52 'weekly' colunms, each col in topped by M, css to hide the repeats

  let startDate = dateRange[0];
  const DayFormat = 'DDMMYYYY';

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
            // assign its date to each corresponding cell
            let date = moment(startDate).add(index, 'day');
            // find datapoint
            let dataPoint = data.find(
              (d) =>
                moment(date).format(DayFormat) ===
                moment(d.date).format(DayFormat)
            );
            let alpha = 0.01 * dataPoint.value;
            // console.log(alpha);
            let color = colorFunc({ alpha });

            return <Cell key={index} index={index} date={date} color={color} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Calendar;
