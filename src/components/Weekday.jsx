const DayNames = {
  1: 'Mon',
  3: 'Wed',
  5: 'Fri',
};

function WeekDay({ index }) {
  return <div className='weekday'>{DayNames[index]}</div>;
}
export default WeekDay;
