export default function handler(req, res) {
  res.status(200).json({
    activity: [
      { date: '2024-07-01', count: 5 },
      { date: '2024-07-02', count: 10 },
      { date: '2024-07-03', count: 0 },
      { date: '2024-07-04', count: 7 },
      { date: '2024-07-05', count: 12 },
      { date: '2024-07-06', count: 8 },
      { date: '2024-07-07', count: 6 },
      { date: '2024-07-08', count: 4 },
      { date: '2024-07-09', count: 7 },
      { date: '2024-07-10', count: 11 },
      { date: '2024-07-11', count: 15 },
    ],
  });
}
