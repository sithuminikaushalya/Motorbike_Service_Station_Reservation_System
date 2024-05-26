import { ResponsiveBar } from '@nivo/bar';

const SimpleBarChart = () => {
  const data = [
    { country: 'A', value: 10 },
    { country: 'B', value: 20 },
    { country: 'C', value: 15 },
    { country: 'D', value: 25 },
    { country: 'E', value: 30 },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={['value']}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', '1.6']] }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
    />
  );
};

export default SimpleBarChart;
