// import moment from 'moment';

export default function Cell({ color }) {
  let style = {
    backgroundColor: color,
  };
  color;

  return <div className='cell' style={style}></div>;
}
