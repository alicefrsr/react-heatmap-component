import moment from 'moment';
import Calendar from './Calendar';

function Heatmap() {
  // Calendar/timeline needs a start date, date range, data for each day, and a color function to color each cell

  // 1 year range counting back from today's date
  let startDate = moment().add(-365, 'days');
  // console.log(startDate);

  let dateRange = [startDate, moment().toDate()];
  // console.log(dateRange);

  // data: an obj for each day, with date and randomly generated alpha value to chane color opacity
  let data = Array.from(new Array(365)).map((_, index) => {
    return {
      date: moment(startDate).add(index, 'day'),
      value: Math.floor(Math.random() * 100), // 0-99
      // alpha: Math.floor(Math.random() * 100) * 0.01, // 0-99 * 0.01 = 0 - 0.99
    };
  });
  // console.log(data[0].alpha);

  return (
    <>
      <Calendar
        dateRange={dateRange}
        data={data} // [{date: xxxxxx, value: 12}, {date: xxxxxx, value: 45} etc...]
        colorFunc={({ alpha }) => `rgba(3, 160, 3, ${alpha})`}
      />
      {/* <Calendar
        range={dateRange}
        data={data}
        colorFunc={({ alpha }) => `rgba(220, 5,  3, ${alpha})`}
      />
      <Calendar
        range={dateRange}
        data={data}
        colorFunc={({ alpha }) => `rgba(5, 5,  200, ${alpha})`}
      /> */}
    </>
  );
}

export default Heatmap;
