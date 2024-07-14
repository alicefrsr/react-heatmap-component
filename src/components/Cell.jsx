import { useEffect, useState } from 'react';

export default function Cell({ dataPoint }) {
  const [cellColor, setCellColor] = useState('#ECEDF0');
  // const [clickCount, setClickCount] = useState(0);

  let style = {
    backgroundColor: cellColor,
  };

  // to populate cells with random colors / number of commits
  const paintRandomCommits = () => {
    switch (dataPoint.value) {
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
    // console.log(dataPoint.date.format('LLL'));
    // console.log(dataPoint.value);
  };

  useEffect(() => {
    paintRandomCommits();
  });

  const handleClick = () => {
    console.log(dataPoint.date.format('LLL'));
    console.log(dataPoint.value);
    // setClickCount((clickCount) => clickCount + 1);
  };
  // console.count(`count: ${clickCount}`);

  // useEffect(() => {
  //   setClickCount((clickCount) => clickCount + 1);
  // }, [clickCount]);

  // OR //
  // to assign colors on click
  // const handleClick = () => {
  //   switch (cellColor) {
  //     case '#ECEDF0':
  //       setCellColor('#9be9a8');
  //       break;
  //     case '#9be9a8':
  //       setCellColor('#40c463');
  //       break;
  //     case '#40c463':
  //       setCellColor('#30a14e');
  //       break;
  //     case '#30a14e':
  //       setCellColor('#216e39');
  //       break;
  //     default:
  //       setCellColor('#ECEDF0');
  //   }
  //   console.log(dataPoint.date.format('LLL'));
  //   console.log(dataPoint.value);
  // };

  return <div className='cell' style={style} onClick={handleClick}></div>;
}
