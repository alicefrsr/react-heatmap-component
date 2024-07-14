import moment from 'moment';
import Month from './Month';
import WeekDay from './Weekday';
import Cell from './Cell';
import Legend from './Legend';

function Calendar({ dateRange, data }) {
  let startDate = dateRange[0];
  // console.log(`startDate ${startDate}`);
  // console.log(`dateRange ${dateRange}`);

  let days = Math.abs(dateRange[0].diff(dateRange[1], 'days')); // 365
  console.log(`numDays ${days}`);
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
            // assign its date to each corresponding cell
            let date = moment(startDate).add(index, 'day').format('LLL');
            // let formattedDate = date.format('LLL');
            // find datapoint
            let dataPoint = data.find(
              (d) => moment(date).format('LLL') === moment(d.date).format('LLL')
            );

            // console.log(dataPoint);
            // let color = colorFunc({ alpha });
            // console.log(date);
            return <Cell key={index} index={index} dataPoint={dataPoint} />;
          })}
        </div>
      </div>
      <div>
        <Legend />
      </div>
    </div>
  );
}
export default Calendar;
