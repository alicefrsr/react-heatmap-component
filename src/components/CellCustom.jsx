import { useEffect, useState } from 'react';

export default function CellCustom() {
  const [cellColor, setCellColor] = useState('#EBEDF0');
  // const [newColor, setNewColor] = useState({...data});
  // const cellDate = day.cellDate;
  // const color = day.cellColor;

  let style = {
    backgroundColor: cellColor,
  };

  // to assign new colors on click
  const handleClick = () => {
    switch (cellColor) {
      case '#EBEDF0':
        setCellColor('#9be9a8');
        // setNewColor((prevData) => {
        //   return { ...prevData, cellColor: '#9be9a8' };
        // });
        break;

      case '#9be9a8':
        setCellColor('#40c463');
        // setNewColor((prevData) => {
        //   return { ...prevData, cellColor: '#40c463' };
        // });
        break;

      case '#40c463':
        setCellColor('#30a14e');
        // setNewColor((prevData) => {
        //   return { ...prevData, cellColor: '#30a14e' };
        // });
        break;

      case '#30a14e':
        setCellColor('#216e39');
        // setNewColor((prevData) => {
        //   return { ...prevData, cellColor: '#216e39' };
        // });
        break;

      case '#216e39':
        setCellColor('#ff9d00');
        // setNewColor((prevData) => {
        //   return { ...prevData, cellColor: '#ff9d00' };
        // });
        break;

      default:
        setCellColor('#EBEDF0');
      // setNewColor((prevData) => {
      //   return { ...prevData, cellColor: '#EBEDF0' };
      // });
    }
  };

  return (
    <div className='cell cell-custom' style={style} onClick={handleClick}></div>
  );
}
