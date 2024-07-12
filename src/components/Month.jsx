import moment from 'moment';

function Month({ startDate, index }) {
  let date = moment(startDate).add(index * 7, 'day');
  let monthName = date.format('MMM'); // ex Jan

  return <div className={`month ${monthName}`}>{monthName}</div>;
}
export default Month;
