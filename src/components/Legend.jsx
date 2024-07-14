export default function Legend() {
  return (
    <div className='timeline-footer'>
      <div className='how'>Learn how we count contributions</div>

      <div className='legend'>
        <div>Less</div>
        <div className='cell' style={{ backgroundColor: '#ebedf0' }}></div>
        <div className='cell' style={{ backgroundColor: '#9be9a8' }}></div>
        <div className='cell' style={{ backgroundColor: '#40c463' }}></div>
        <div className='cell' style={{ backgroundColor: '#30a14e' }}></div>
        <div className='cell' style={{ backgroundColor: '#216e39' }}></div>
        <div>More</div>
      </div>
    </div>
  );
}
