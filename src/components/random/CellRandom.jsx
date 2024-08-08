import { useEffect, useState } from 'react';

export default function CellRandom({ dataPoint }) {
  const [cellColor, setCellColor] = useState('#ECEDF0');

  let style = {
    backgroundColor: cellColor,
  };

  // to populate cells with random colors / number of commits
  const paintRandomCommits = () => {
    switch (dataPoint?.value) {
      case 0:
        setCellColor('#ECEDF0');
        break;
      case 1:
        setCellColor('#9be9a8');
        break;
      case 2:
        setCellColor('#40c463');
        break;
      case 3:
        setCellColor('#30a14e');
        break;
      case 4:
        setCellColor('#216e39');
        break;
      default:
        setCellColor('#ECEDF0');
    }
  };

  useEffect(() => {
    paintRandomCommits();
  });

  const handleClick = () => {
    console.log(dataPoint.date.format('LLL'));
    console.log(dataPoint.value);
  };

  return <div className='cell' style={style} onClick={handleClick}></div>;
}
