import ChartPi from "../components/ChartPi";

const PiChart = () => {
  const legends = [
    {
      anchor: "top-right",
      direction: "column",
      justify: false,
      translateX: -4,
      translateY: 17,
      itemWidth: 97,
      itemHeight: 20,
      itemsSpacing: 10,
      symbolSize: 20,
      itemDirection: "left-to-right"
    }
  ];
  return (
    <div>
      <ChartPi legends={legends} height="70vh" />
    </div>
  );
};

export default PiChart;
